---
title: "PartyTrainingModel"
description: "战役层部队经验计算的抽象契约：分摊共享经验、结算战斗经验、给出角色奖励与每日训练经验。"
---
# PartyTrainingModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**基类：** `MBGameModel<PartyTrainingModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs`（声明见第 9 行）

## 概述

PartyTrainingModel 是战役层「部队经验」的抽象策略契约，位于 ComponentInterfaces 桶，继承 `MBGameModel<PartyTrainingModel>`，由 Campaign 当前激活的模型提供实现（默认实现是 DefaultPartyTrainingModel）。它集中回答四个问题：一次获得的经验如何分摊给队伍里的士兵、战斗结算后某支部队实际拿到多少经验、单个角色的经验奖励是多少、某支部队中某个兵种每天能积累多少经验。战斗结算、每日训练与升级判定都经由它取数，mod 继承并注册后即可整体替换游戏的经验规则。

## 心智模型

把它想成「经验会计」：游戏里所有「谁该拿多少经验」的决策都收敛到这个接口。它不保存任何状态——状态在 MobileParty 与 TroopRoster 里，它只做纯计算，因此实现天然无状态、可测试。两个返回 ExplainedNumber 的方法会把最终数值的构成逐项记下来，供 UI 的经验明细面板与调试日志使用；两个返回 int 的方法只给结果。它是契约层：引擎只面向它编程，替换它等于替换整个 mod 的经验规则，四个 abstract 方法必须全部实现。

## 怎么用

**替换方式**：继承 PartyTrainingModel（更常见地继承 DefaultPartyTrainingModel 以保留默认数值），实现全部四个 abstract 方法，然后在 CampaignBehaviorBase 等注册时机调用 `CampaignGameStarter.AddModel<T>`（CampaignGameStarter.cs:95）挂上你的实例；之后 `Campaign.Current.Models.PartyTrainingModel` 取到的就是你的实现。

**真实坑**：

- 四个 abstract 方法一个都不能少——漏任何一个都编译不过（PartyTrainingModel.cs:12、PartyTrainingModel.cs:15、PartyTrainingModel.cs:18、PartyTrainingModel.cs:21）。
- `GenerateSharedXp` 返回的是「单个士兵分到的经验」，不是总量；总量由调用方乘以人数，实现里不要再乘一次（PartyTrainingModel.cs:12）。
- `CalculateXpGainFromBattles` 与 `GetEffectiveDailyExperience` 返回 ExplainedNumber：只 `new` 一个数而不 `Add` 明细项，UI 的经验明细面板会一片空白（PartyTrainingModel.cs:15、PartyTrainingModel.cs:21）。
- `GetEffectiveDailyExperience` 是「每天」的经验，调用方按天累计——实现里不要乘天数（PartyTrainingModel.cs:21）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `PartyTrainingModel`（类声明） | 战役经验计算的抽象策略契约，继承 `MBGameModel<PartyTrainingModel>`，是经验规则的唯一替换点（PartyTrainingModel.cs:9） |
| `GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)` | 把一次获得的 xp 按规则分摊给 troop 中的士兵，返回单个士兵所得经验（PartyTrainingModel.cs:12） |
| `CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)` | 结算战斗后某支部队实际获得的经验，返回带逐项解释的 ExplainedNumber（PartyTrainingModel.cs:15） |
| `GetXpReward(CharacterObject character)` | 查询单个角色（英雄或士兵）的经验奖励值（PartyTrainingModel.cs:18） |
| `GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)` | 计算某支部队中某兵种每天实际积累的经验，返回 ExplainedNumber（PartyTrainingModel.cs:21） |

## 真实示例

```csharp
public class MyPartyTrainingModel : PartyTrainingModel
{
    public override int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)
    {
        return xp; // 简化实现：每个士兵分得全部经验
    }

    public override ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)
    {
        var explained = new ExplainedNumber(0f);
        explained.Add(troopRosterElement.Xp, "基础战斗经验");
        return explained;
    }

    public override int GetXpReward(CharacterObject character)
    {
        return 100; // 简化实现：所有角色统一奖励
    }

    public override ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)
    {
        var explained = new ExplainedNumber(0f);
        explained.Add(10f, "每日训练基础经验");
        return explained;
    }
}

// 注册（在 CampaignBehaviorBase.Initialize 内）：
// campaignGameStarter.AddModel(new MyPartyTrainingModel());
```

## 参见

- ↔ [DefaultPartyTrainingModel](../DefaultPartyTrainingModel)：本契约的原版实现，经验分摊、战斗结算与每日训练数值的权威参考。
- ↔ [MobileParty](../../campaign/MobileParty)：契约方法的参数宿主，队伍经验与每日训练结算的实际消费方。
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<T>` 的宿主，模型替换的注册入口。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
