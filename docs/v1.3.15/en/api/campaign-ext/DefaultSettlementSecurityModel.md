<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementSecurityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**Base:** `SettlementSecurityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs`

## Overview

`DefaultSettlementSecurityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementSecurityModel>(new MyDefaultSettlementSecurityModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaximumSecurityInSettlement` | `public override int MaximumSecurityInSettlement { get; }` |
| `SecurityDriftMedium` | `public override int SecurityDriftMedium { get; }` |
| `MapEventSecurityEffectRadius` | `public override float MapEventSecurityEffectRadius { get; }` |
| `HideoutClearedSecurityEffectRadius` | `public override float HideoutClearedSecurityEffectRadius { get; }` |
| `HideoutClearedSecurityGain` | `public override int HideoutClearedSecurityGain { get; }` |
| `ThresholdForTaxCorruption` | `public override int ThresholdForTaxCorruption { get; }` |
| `ThresholdForHigherTaxCorruption` | `public override int ThresholdForHigherTaxCorruption { get; }` |
| `ThresholdForTaxBoost` | `public override int ThresholdForTaxBoost { get; }` |
| `SettlementTaxBoostPercentage` | `public override int SettlementTaxBoostPercentage { get; }` |
| `SettlementTaxPenaltyPercentage` | `public override int SettlementTaxPenaltyPercentage { get; }` |
| `ThresholdForNotableRelationBonus` | `public override int ThresholdForNotableRelationBonus { get; }` |
| `ThresholdForNotableRelationPenalty` | `public override int ThresholdForNotableRelationPenalty { get; }` |
| `DailyNotableRelationBonus` | `public override int DailyNotableRelationBonus { get; }` |
| `DailyNotableRelationPenalty` | `public override int DailyNotableRelationPenalty { get; }` |
| `DailyNotablePowerBonus` | `public override int DailyNotablePowerBonus { get; }` |
| `DailyNotablePowerPenalty` | `public override int DailyNotablePowerPenalty { get; }` |

## Key Methods

### CalculateSecurityChange
```csharp
public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)
```

### GetLootedNearbyPartySecurityEffect
```csharp
public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)
```

### GetNearbyBanditPartyDefeatedSecurityEffect
```csharp
public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)
```

### CalculateGoldGainDueToHighSecurity
```csharp
public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)
```

### CalculateGoldCutDueToLowSecurity
```csharp
public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementSecurityModel (Model)
Game.Current.ReplaceModel<DefaultSettlementSecurityModel>(new MyDefaultSettlementSecurityModel());
```

## See Also

- [Complete Class Catalog](../catalog)