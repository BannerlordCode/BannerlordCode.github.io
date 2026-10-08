---
title: "PartyWageModel"
description: "队伍工资契约：定义兵种日薪、队伍总工资、工资支付上限与招募花费的抽象规则，是战役经济系统中工资计算的唯一替换入口。"
---
# PartyWageModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`
**基类：** `MBGameModel<PartyWageModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PartyWageModel.cs`（声明见第 9 行）

## 概述

`PartyWageModel` 是战役工资系统的契约层：它只声明「每个兵种每天值多少钱、整支队伍每天要付多少、最多能付多少、招募一个兵要花多少」这四个问题，不含任何数值。引擎构造 `GameModels` 时把当前生效实现缓存进 `Campaign.Current.Models.PartyWageModel`（`GameModels.cs:683`），招募、升级、逃兵、赎金、驻军维护等系统都从这里取实例。原版默认实现是 `DefaultPartyWageModel`，由 `SandBoxManager.cs:286` 注册；剧情模式还提供了一个真实的替换范例 `StoryModePartyWageModel`。

## 心智模型

把它当作**工资系统的「接口清单」**，不是「计算器」。三个心智要点：

1. **契约与实现分离，替换遵循「最后注册者赢」**。`MBGameModel<T>` 提供 `BaseModel` 槽位与 `Initialize(T baseModel)` 注入方法（`MBGameModel.cs:11`、`MBGameModel.cs:14`）；`CampaignGameStarter.AddModel<T>` 先把当前实现注入新实例的 `BaseModel`，再把新实例**追加**到模型列表末尾（`CampaignGameStarter.cs:95`），而 `GetGameModel<T>` 从列表**末尾向前**扫描（`GameModelsManager.cs:19`）。注册一次即整体接管。
2. **「单价」与「总价」是两层**。`GetCharacterWage` 只回答单个兵种的日薪；所有 perk、文化、建筑、王国政策修正都发生在 `GetTotalWage` 里。想知道某个 perk 对工资的影响，去 `GetTotalWage` 找，别在 `GetCharacterWage` 里找。
3. **支付上限是独立概念**。`MaxWagePaymentLimit` 只是「队伍能设的最大支付额度」这个硬顶，与 `GetTotalWage` 算出来的数值没有直接关系；它只在队伍没有自定义上限时兜底（`MobileParty.cs:643`）。

## 怎么用

**替换方式**：继承本契约需实现 4 个抽象成员；只改部分数值时继承 `DefaultPartyWageModel` 更省事。注册：

```csharp
campaignGameStarter.AddModel<PartyWageModel>(new MyWageModel());
```

**真实坑**：

1. **`GetTotalWage` 的 `troopRoster` 不一定是整队**。`DefaultPartyDesertionModel` 传入「即将逃跑的部队子集」来算差额（`DefaultPartyDesertionModel.cs:58`）；覆写时必须按传入的 roster 计算，不能假设它就是 `mobileParty.MemberRoster`。
2. **`MaxWagePaymentLimit` 被多处当作硬顶使用**。`Campaign.cs:2417` 给主角队伍设上限，`ClanVariablesCampaignBehavior.cs:77` 与 `ClanVariablesCampaignBehavior.cs:372` 给驻军/战争队伍设上限，`ClanVariablesCampaignBehavior.cs:489` 直接把它当 clamp 上界。改小它会连带压住 AI 的招兵意愿。
3. **`GetTroopRecruitmentCost` 的 `withoutItemCost = true` 会忽略马匹价格**。兵种升级差价就是靠这个参数算出来的（`DefaultPartyTroopUpgradeModel.cs:81`）。
4. **`buyerHero == null` 时完全跳过 perk 修正**，连 `LimitMin(1f)` 也不执行。赎金估值就传 `null`（`DefaultRansomValueCalculationModel.cs:14`），所以它拿到的永远是「无 perk 的裸价」。
5. **雇佣兵/强盗/商队护卫的招募成本直接翻倍**，与 `GetCharacterWage` 里雇佣兵日薪 ×1.5 是两套独立规则。

**真实使用点**：

- `GameModels.cs:683` — 引擎构造时缓存生效实例：`this.PartyWageModel = base.GetGameModel<PartyWageModel>()`。
- `SandBoxManager.cs:286` — 原版注册默认实现：`gameStarter.AddModel<PartyWageModel>(new DefaultPartyWageModel())`。
- `CharacterObject.cs:923` — `TroopWage` 属性直接转发 `GetCharacterWage`，是「兵种日薪」最常用的读取口。
- `MobileParty.cs:643` — `PaymentLimit` 在没有自定义上限时回落到 `MaxWagePaymentLimit`。
- `MobileParty.cs:2461` — 主角队伍按 `MaxWagePaymentLimit` 调 `SetWagePaymentLimit`。
- `Campaign.cs:2417` — 开局给主角队伍设置支付上限。
- `ClanVariablesCampaignBehavior.cs:77` / `ClanVariablesCampaignBehavior.cs:372` / `ClanVariablesCampaignBehavior.cs:489` — 驻军与氏族队伍的上限设置与 clamp。
- `RecruitmentCampaignBehavior.cs:219` / `RecruitmentCampaignBehavior.cs:369` — 招募时同时读招募花费与兵种日薪。
- `GarrisonRecruitmentCampaignBehavior.cs:191` — 驻军招募成本按 `GetCharacterWage` 折算。
- `DefaultPartyTroopUpgradeModel.cs:81` — 兵种升级差价用 `GetTroopRecruitmentCost(..., withoutItemCost: true)`。
- `DefaultPartyDesertionModel.cs:58` — 逃兵前用子集 roster 算工资差额。
- `DefaultRansomValueCalculationModel.cs:14` — 赎金按招募成本折算，`buyerHero` 传 `null`。
- `AiVisitSettlementBehavior.cs:437` — AI 评估招募时累计志愿者日薪。
- `StoryModePartyWageModel.cs:10` / `StoryModeSubModule.cs:95` — 原版自带的真实替换范例：剧情模式覆写招募成本、其余委托给 `BaseModel`。

## 关键成员

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `int MaxWagePaymentLimit { get; }` | 支付上限硬顶；默认实现返回 10000（`DefaultPartyWageModel.cs:21`），被 `MobileParty.PaymentLimit` 兜底与 `SetWagePaymentLimit` 使用。`PartyWageModel.cs:13` |
| `int GetCharacterWage(CharacterObject character)` | 单个兵种的日薪；默认实现按 `Tier` 查表，`Occupation.Mercenary` 再 ×1.5（`DefaultPartyWageModel.cs:30`）。`PartyWageModel.cs:16` |
| `ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)` | 队伍总日薪的核心聚合；默认实现先逐人求和，再叠加总督 perk、文化特性、城镇建筑、王国政策与队伍 perk（`DefaultPartyWageModel.cs:68`）。`PartyWageModel.cs:19` |
| `ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)` | 招募一个兵的花费；默认实现按 `Level` 分档并叠加马匹价格与雇佣兵溢价（`DefaultPartyWageModel.cs:256`）。`PartyWageModel.cs:22` |

契约本身（`PartyWageModel.cs:9`）是 `MBGameModel<PartyWageModel>` 的子类，没有字段、没有常量。

## 真实示例

### 示例 1：只改招募成本的替换实现

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class MyWageModel : PartyWageModel
{
    public override int MaxWagePaymentLimit => 15000;

    public override int GetCharacterWage(CharacterObject character) => 2 + character.Tier * 3;

    public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)
    {
        int sum = 0;
        for (int i = 0; i < troopRoster.Count; i++)
        {
            sum += GetCharacterWage(troopRoster.GetElementCopyAtIndex(i).Character) * troopRoster.GetElementNumber(i);
        }
        ExplainedNumber wage = new ExplainedNumber((float)sum, includeDescriptions, null);
        wage.AddFactor(-0.2f, new TextObject("MyMod: frugal paymaster"));
        return wage;
    }

    public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)
        => new ExplainedNumber((float)troop.Level * 10f, false, null);
}
```

### 示例 2：注册并读取实际总工资

```csharp
campaignGameStarter.AddModel<PartyWageModel>(new MyWageModel());

int goldPerDay = Campaign.Current.Models.PartyWageModel
    .GetTotalWage(mobileParty, mobileParty.MemberRoster, false)
    .RoundedResultNumber;
```

注意 `Campaign.Current.Models.PartyWageModel` 拿到的永远是**最后注册**的实现；上面注册后，`CharacterObject.TroopWage` 也会立刻走 `MyWageModel.GetCharacterWage`。

## 参见

- ↔ [DefaultPartyWageModel](../DefaultPartyWageModel)：本契约的原版实现，日薪查表与 perk 叠加顺序的权威参考。
- ↔ [MobileParty](../../campaign/MobileParty)：`PaymentLimit`、`TotalWage` 与 `SetWagePaymentLimit` 的宿主。
- ↔ [Clan](../../campaign/Clan)：氏族队伍与驻军支付上限的实际设置方。
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<T>` 的宿主，模型替换的注册入口。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
