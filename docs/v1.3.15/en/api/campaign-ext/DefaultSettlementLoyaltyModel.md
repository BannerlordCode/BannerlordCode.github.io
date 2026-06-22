<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementLoyaltyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**Base:** `SettlementLoyaltyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`

## Overview

`DefaultSettlementLoyaltyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementLoyaltyModel>(new MyDefaultSettlementLoyaltyModel())` to change how it computes.

## Key Properties

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

## Key Methods

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

## Usage Example

```csharp
// Typical usage of DefaultSettlementLoyaltyModel (Model)
Game.Current.ReplaceModel<DefaultSettlementLoyaltyModel>(new MyDefaultSettlementLoyaltyModel());
```

## See Also

- [Complete Class Catalog](../catalog)