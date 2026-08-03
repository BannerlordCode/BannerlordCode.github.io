---
title: "PartyWageModel"
description: "用于队伍财务、逃兵判断和招募估值的工资与招募成本策略。"
---
# PartyWageModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`  
**Base:** `MBGameModel<PartyWageModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyWageModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyWageModel.cs`

## One-line job

`PartyWageModel` 计算单位基础工资、队伍每日总工资和一次性招募成本。它只报告财务结果，不扣钱、不移除单位，也不直接执行赎金。

## Mental Model

基础工资、每日总工资和招募成本是三个相近但不同的问题。`MobileParty.TotalWage` 使用总工资；逃兵模型以总工资判断欠薪；赎金模型复用招募成本作为估值输入。替换其中一个方法时不要隐式改变另外两个契约。默认实现还会读取队伍 Perk 和 `CharacterDevelopmentModel` 阈值。

```text
CharacterObject / TroopRoster / MobileParty
              -> Campaign.Current.Models.PartyWageModel
              -> GetCharacterWage / GetTotalWage / GetTroopRecruitmentCost
              -> 财务 tick、逃兵、招募 UI、赎金估值
```

真实的金币转移由财务行为和 Action 负责，模型回调没有 Clan Treasury 的所有权。`ExplainedNumber` 的说明行只服务于预览和调试。

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有注册的工资策略。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供领袖、军需官、组件和 roster。 |
| [`TroopRoster`](../TroopRoster) | 提供单位数量及伤兵/俘虏区分。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 提供工资 Perk 阈值。 |

### Downstream

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | 暴露 `TotalWage` 和解释结果。 |
| `DefaultPartyDesertionModel` | 用总工资判断欠薪逃兵。 |
| `DefaultRansomValueCalculationModel` | 用招募成本计算赎金估值。 |
| [`PartyComponent`](../PartyComponent) | 读取 `MaxWagePaymentLimit`。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `MaxWagePaymentLimit` | 队伍支付上限。 | 队伍初始化和付款检查 |
| `GetCharacterWage` | 返回单位基础工资。 | roster 聚合 |
| `GetTotalWage` | 聚合每日工资和因素说明。 | 财务 tick、UI 预览 |
| `GetTroopRecruitmentCost` | 计算一次性招募成本。 | 招募、赎金估值 |

## Real access path

```csharp
public ExplainedNumber ExplainDailyWage(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }
    return Campaign.Current.Models.PartyWageModel
        .GetTotalWage(party, party.MemberRoster, includeDescriptions: true);
}
```

这就是 `MobileParty.TotalWageExplained` 的调用方式。返回值是预览；后续财务行为才执行付款和欠薪规则。

## 风险与调试顺序

1. 自定义模型要保存明确的 vanilla delegate，避免替换后递归查找自身。
2. 不要在 `GetTotalWage` 中扣金币，否则每日财务会重复收费。
3. 逃兵模型读取工资；不要根据逃兵副作用再次修改工资导致 tick 振荡。
4. 赎金路径可以传入空 `Hero`，实现必须支持该契约。
5. 新版本增加 Perk/海上因素，优先委托当前默认模型。

## Navigation

- [Campaign-ext models family](../models/)
- [MobileParty](../../campaign/MobileParty)
- [PartySizeLimitModel](../PartySizeLimitModel)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [TroopRoster](../TroopRoster)
