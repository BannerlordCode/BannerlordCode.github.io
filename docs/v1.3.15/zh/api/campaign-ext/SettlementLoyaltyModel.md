<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementLoyaltyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**Base:** `MBGameModel<SettlementLoyaltyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`

## 概述

`SettlementLoyaltyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementLoyaltyModel>(new MySettlementLoyaltyModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `public abstract int SettlementLoyaltyChangeDueToSecurityThreshold { get; }` |
| `MaximumLoyaltyInSettlement` | `public abstract int MaximumLoyaltyInSettlement { get; }` |
| `LoyaltyDriftMedium` | `public abstract int LoyaltyDriftMedium { get; }` |
| `HighLoyaltyProsperityEffect` | `public abstract float HighLoyaltyProsperityEffect { get; }` |
| `LowLoyaltyProsperityEffect` | `public abstract int LowLoyaltyProsperityEffect { get; }` |
| `MilitiaBoostPercentage` | `public abstract int MilitiaBoostPercentage { get; }` |
| `HighSecurityLoyaltyEffect` | `public abstract float HighSecurityLoyaltyEffect { get; }` |
| `LowSecurityLoyaltyEffect` | `public abstract float LowSecurityLoyaltyEffect { get; }` |
| `GovernorSameCultureLoyaltyEffect` | `public abstract float GovernorSameCultureLoyaltyEffect { get; }` |
| `GovernorDifferentCultureLoyaltyEffect` | `public abstract float GovernorDifferentCultureLoyaltyEffect { get; }` |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `public abstract float SettlementOwnerDifferentCultureLoyaltyEffect { get; }` |
| `ThresholdForTaxBoost` | `public abstract int ThresholdForTaxBoost { get; }` |
| `RebellionStartLoyaltyThreshold` | `public abstract int RebellionStartLoyaltyThreshold { get; }` |
| `ThresholdForTaxCorruption` | `public abstract int ThresholdForTaxCorruption { get; }` |
| `ThresholdForHigherTaxCorruption` | `public abstract int ThresholdForHigherTaxCorruption { get; }` |
| `ThresholdForProsperityBoost` | `public abstract int ThresholdForProsperityBoost { get; }` |
| `ThresholdForProsperityPenalty` | `public abstract int ThresholdForProsperityPenalty { get; }` |
| `AdditionalStarvationPenaltyStartDay` | `public abstract int AdditionalStarvationPenaltyStartDay { get; }` |
| `AdditionalStarvationLoyaltyEffect` | `public abstract int AdditionalStarvationLoyaltyEffect { get; }` |
| `RebelliousStateStartLoyaltyThreshold` | `public abstract int RebelliousStateStartLoyaltyThreshold { get; }` |
| `LoyaltyBoostAfterRebellionStartValue` | `public abstract int LoyaltyBoostAfterRebellionStartValue { get; }` |
| `ThresholdForNotableRelationBonus` | `public abstract float ThresholdForNotableRelationBonus { get; }` |
| `DailyNotableRelationBonus` | `public abstract int DailyNotableRelationBonus { get; }` |

## 主要方法

### CalculateLoyaltyChange
```csharp
public abstract ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)
```

### CalculateGoldGainDueToHighLoyalty
```csharp
public abstract void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)
```

### CalculateGoldCutDueToLowLoyalty
```csharp
public abstract void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)
```

## 使用示例

```csharp
// SettlementLoyaltyModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementLoyaltyModel>(new MySettlementLoyaltyModel());
```

## 参见

- [完整类目录](../catalog)