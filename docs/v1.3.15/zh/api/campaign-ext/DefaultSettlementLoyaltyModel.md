<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementLoyaltyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**Base:** `SettlementLoyaltyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`

## 概述

`DefaultSettlementLoyaltyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementLoyaltyModel>(new MyDefaultSettlementLoyaltyModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighLoyaltyProsperityEffect` | `public override float HighLoyaltyProsperityEffect { get; }` |
| `LowLoyaltyProsperityEffect` | `public override int LowLoyaltyProsperityEffect { get; }` |
| `ThresholdForTaxBoost` | `public override int ThresholdForTaxBoost { get; }` |
| `ThresholdForTaxCorruption` | `public override int ThresholdForTaxCorruption { get; }` |
| `ThresholdForHigherTaxCorruption` | `public override int ThresholdForHigherTaxCorruption { get; }` |
| `ThresholdForProsperityBoost` | `public override int ThresholdForProsperityBoost { get; }` |
| `ThresholdForProsperityPenalty` | `public override int ThresholdForProsperityPenalty { get; }` |
| `AdditionalStarvationPenaltyStartDay` | `public override int AdditionalStarvationPenaltyStartDay { get; }` |
| `AdditionalStarvationLoyaltyEffect` | `public override int AdditionalStarvationLoyaltyEffect { get; }` |
| `RebellionStartLoyaltyThreshold` | `public override int RebellionStartLoyaltyThreshold { get; }` |
| `RebelliousStateStartLoyaltyThreshold` | `public override int RebelliousStateStartLoyaltyThreshold { get; }` |
| `LoyaltyBoostAfterRebellionStartValue` | `public override int LoyaltyBoostAfterRebellionStartValue { get; }` |
| `MilitiaBoostPercentage` | `public override int MilitiaBoostPercentage { get; }` |
| `ThresholdForNotableRelationBonus` | `public override float ThresholdForNotableRelationBonus { get; }` |
| `DailyNotableRelationBonus` | `public override int DailyNotableRelationBonus { get; }` |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `public override int SettlementLoyaltyChangeDueToSecurityThreshold { get; }` |
| `MaximumLoyaltyInSettlement` | `public override int MaximumLoyaltyInSettlement { get; }` |
| `LoyaltyDriftMedium` | `public override int LoyaltyDriftMedium { get; }` |
| `HighSecurityLoyaltyEffect` | `public override float HighSecurityLoyaltyEffect { get; }` |
| `LowSecurityLoyaltyEffect` | `public override float LowSecurityLoyaltyEffect { get; }` |
| `GovernorSameCultureLoyaltyEffect` | `public override float GovernorSameCultureLoyaltyEffect { get; }` |
| `GovernorDifferentCultureLoyaltyEffect` | `public override float GovernorDifferentCultureLoyaltyEffect { get; }` |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `public override float SettlementOwnerDifferentCultureLoyaltyEffect { get; }` |

## 主要方法

### CalculateLoyaltyChange
```csharp
public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)
```

### CalculateGoldGainDueToHighLoyalty
```csharp
public override void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)
```

### CalculateGoldCutDueToLowLoyalty
```csharp
public override void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)
```

## 使用示例

```csharp
// DefaultSettlementLoyaltyModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementLoyaltyModel>(new MyDefaultSettlementLoyaltyModel());
```

## 参见

- [完整类目录](../catalog)