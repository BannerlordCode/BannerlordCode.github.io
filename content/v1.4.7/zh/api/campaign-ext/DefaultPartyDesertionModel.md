---
title: "DefaultPartyDesertionModel"
description: "战役层默认逃兵模型：按士气阈值与薪资/兵力上限计算部队每 tick 的逃兵名册。"
---
# DefaultPartyDesertionModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**基类：** `PartyDesertionModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs`（声明见第 10 行）

## 概述

`DefaultPartyDesertionModel` 是战役层 `PartyDesertionModel` 的内置实现，挂在 `Campaign.Current.Models.PartyDesertionModel` 上，决定一支部队在每个战役 tick 会有多少士兵逃跑。它把逃兵拆成两条独立路径：士气过低触发的概率性逃跑，以及薪资超限 / 兵力超编触发的确定性逃跑，最后合并成一份 `TroopRoster` 交给战役系统结算。

## 心智模型

把这个类想成「逃兵结算器」：输入一支 `MobileParty`，输出一份逃兵名册。核心公式是 `CalculateDesertionChanceFromTroopLevel`（DefaultPartyDesertionModel.cs:25）——士气越低、兵种等级越高，逃跑概率越大，但高等级兵种有 `level * 0.01` 的底数压制，所以精锐部队在同等士气下比普通兵更稳。士气路径用概率逐兵掷骰（种子与战役小时绑定，同一名册同一小时结果确定），薪资/超编路径则直接按缺口比例算固定人数。两条路径共享同一个士气阈值（默认 10），改阈值会同时放大两条路径的逃兵规模。

## 怎么用

替换方式：继承 `PartyDesertionModel` 并重写三个 public 方法，然后在模块初始化或 `CampaignBehaviorBase` 里把实例挂上去：

```csharp
Campaign.Current.Models.PartyDesertionModel = new CustomDesertionModel();
```

读取当前逃兵名册：`Campaign.Current.Models.PartyDesertionModel.GetTroopsToDesert(mobileParty)`。

真实坑：

1. **改阈值会同时影响两条路径**：`CalculateDesertionChanceFromTroopLevel` 内部通过 `Campaign.Current.Models.PartyDesertionModel.GetMoraleThresholdForTroopDesertion()`（DefaultPartyDesertionModel.cs:27）读阈值，所以只重写 `GetMoraleThresholdForTroopDesertion` 会让薪资/超编路径的逃兵公式也跟着变。
2. **士气路径的逃跑人数用固定等级 20 估算**：`GetTroopsToDesertDueToMorale` 用 `CalculateDesertionChanceFromTroopLevel(mobileParty.Morale, 20)`（DefaultPartyDesertionModel.cs:44）算总人数，逐兵概率要到 `SelectTroopsForDesertion` 里才按各自等级生效——高等级为主的部队实际逃兵会明显少于估算。
3. **掷骰种子与战役小时绑定**：`mobileParty.RandomFloatWithSeed((uint)(CampaignTime.Now.ToHours + ...))`（DefaultPartyDesertionModel.cs:108）意味着同一小时、同一名册布局下结果完全确定；改种子公式或改遍历顺序都会改变逃兵分布。
4. **英雄永不逃跑**：`SelectTroopsForDesertion` 只处理 `Character.HeroObject == null` 的士兵（DefaultPartyDesertionModel.cs:90），英雄单位不会进逃兵名册。
5. **三个常量是死文档**：`MaxAcceptableDesertionCountForNormal`、`MoraleThresholdForParty`、`AverageTroopLevel`（DefaultPartyDesertionModel.cs:126、129、132）在方法体里没有被引用，方法内全是字面量 10/20——想调参必须重写方法，改常量无效。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetMoraleThresholdForTroopDesertion()` | 返回士气阈值 10，低于该值部队开始出现逃兵；同时被薪资/超编路径的公式复用（DefaultPartyDesertionModel.cs:13） |
| `GetDesertionChanceForTroop(MobileParty, in TroopRosterElement)` | 按部队士气与单个兵种等级计算该兵种的逃跑概率，委托给私有公式（DefaultPartyDesertionModel.cs:19） |
| `CalculateDesertionChanceFromTroopLevel(float, int)` | 核心公式 `1 - (level*0.01)^(0.1*(阈值-min(士气,阈值))/阈值)`：士气越低、等级越低，概率越高（DefaultPartyDesertionModel.cs:25） |
| `GetTroopsToDesert(MobileParty)` | 公开入口：创建空名册，依次跑士气路径与薪资/超编路径，合并返回（DefaultPartyDesertionModel.cs:33） |
| `GetTroopsToDesertDueToMorale(MobileParty, TroopRoster)` | 士气路径：按 `RegularMembers * 概率(等级20)` 估算人数，概率式选兵（DefaultPartyDesertionModel.cs:42） |
| `GetTroopsToDesertDueToWageAndPartySize(MobileParty, TroopRoster)` | 薪资/超编路径：薪资超限按 `缺口/平均工资*0.25` 算人数（上限 20），超编按 `超出*0.25` 算，驻军欠饷额外 +5，确定性选兵（DefaultPartyDesertionModel.cs:53） |
| `SelectTroopsForDesertion(MobileParty, TroopRoster, int, bool)` | 从名册尾部向前遍历，跳过英雄，负伤兵优先于健康兵，用战役小时种子逐兵掷骰，写入逃兵名册（DefaultPartyDesertionModel.cs:83） |
| `MaxAcceptableDesertionCountForNormal = 20` | 薪资路径人数上限常量；当前方法体用字面量，常量本身未被引用（DefaultPartyDesertionModel.cs:126） |
| `MoraleThresholdForParty = 10` | 士气阈值常量；方法体返回字面量 10，常量未被引用（DefaultPartyDesertionModel.cs:129） |
| `AverageTroopLevel = 20` | 士气路径估算用的固定等级常量；方法体用字面量 20，常量未被引用（DefaultPartyDesertionModel.cs:132） |

## 真实示例

```csharp
public class CustomDesertionModel : PartyDesertionModel
{
    public override int GetMoraleThresholdForTroopDesertion() => 25;

    public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)
    {
        float baseChance = base.GetDesertionChanceForTroop(mobileParty, troopRosterElement);
        // 30 级以上的精锐兵种逃跑概率砍到 1/4
        return troopRosterElement.Character.Level >= 30 ? baseChance * 0.25f : baseChance;
    }
}

// 在 Module 初始化或 CampaignBehaviorBase 中替换默认模型：
Campaign.Current.Models.PartyDesertionModel = new CustomDesertionModel();

// 查询某支部队本 tick 的逃兵名册：
TroopRoster deserters = Campaign.Current.Models.PartyDesertionModel.GetTroopsToDesert(mobileParty);
```

## 参见

- [`PartyDesertionModel`](../PartyDesertionModel) — 基类，定义逃兵模型的抽象契约
- [`MobileParty`](../../campaign/MobileParty) — 逃兵结算的输入部队，提供士气、名册与薪资数据

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
