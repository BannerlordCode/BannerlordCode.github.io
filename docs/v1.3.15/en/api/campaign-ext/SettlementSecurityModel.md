<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementSecurityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**Base:** `MBGameModel<SettlementSecurityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`

## Overview

`SettlementSecurityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementSecurityModel>(new MySettlementSecurityModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaximumSecurityInSettlement` | `public abstract int MaximumSecurityInSettlement { get; }` |
| `SecurityDriftMedium` | `public abstract int SecurityDriftMedium { get; }` |
| `MapEventSecurityEffectRadius` | `public abstract float MapEventSecurityEffectRadius { get; }` |
| `HideoutClearedSecurityEffectRadius` | `public abstract float HideoutClearedSecurityEffectRadius { get; }` |
| `HideoutClearedSecurityGain` | `public abstract int HideoutClearedSecurityGain { get; }` |
| `ThresholdForTaxCorruption` | `public abstract int ThresholdForTaxCorruption { get; }` |
| `ThresholdForHigherTaxCorruption` | `public abstract int ThresholdForHigherTaxCorruption { get; }` |
| `ThresholdForTaxBoost` | `public abstract int ThresholdForTaxBoost { get; }` |
| `SettlementTaxBoostPercentage` | `public abstract int SettlementTaxBoostPercentage { get; }` |
| `SettlementTaxPenaltyPercentage` | `public abstract int SettlementTaxPenaltyPercentage { get; }` |
| `ThresholdForNotableRelationBonus` | `public abstract int ThresholdForNotableRelationBonus { get; }` |
| `ThresholdForNotableRelationPenalty` | `public abstract int ThresholdForNotableRelationPenalty { get; }` |
| `DailyNotableRelationBonus` | `public abstract int DailyNotableRelationBonus { get; }` |
| `DailyNotableRelationPenalty` | `public abstract int DailyNotableRelationPenalty { get; }` |
| `DailyNotablePowerBonus` | `public abstract int DailyNotablePowerBonus { get; }` |
| `DailyNotablePowerPenalty` | `public abstract int DailyNotablePowerPenalty { get; }` |

## Key Methods

### GetLootedNearbyPartySecurityEffect
```csharp
public abstract float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)
```

### CalculateSecurityChange
```csharp
public abstract ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)
```

### GetNearbyBanditPartyDefeatedSecurityEffect
```csharp
public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)
```

### CalculateGoldGainDueToHighSecurity
```csharp
public abstract void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)
```

### CalculateGoldCutDueToLowSecurity
```csharp
public abstract void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)
```

## Usage Example

```csharp
// Typical usage of SettlementSecurityModel (Model)
Game.Current.ReplaceModel<SettlementSecurityModel>(new MySettlementSecurityModel());
```

## See Also

- [Complete Class Catalog](../catalog)