<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementLoyaltyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**Base:** `MBGameModel<SettlementLoyaltyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`

## Overview

`SettlementLoyaltyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementLoyaltyModel>(new MySettlementLoyaltyModel())` to change how it computes.

## Key Properties

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

## Key Methods

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

## Usage Example

```csharp
// Typical usage of SettlementLoyaltyModel (Model)
Game.Current.ReplaceModel<SettlementLoyaltyModel>(new MySettlementLoyaltyModel());
```

## See Also

- [Complete Class Catalog](../catalog)