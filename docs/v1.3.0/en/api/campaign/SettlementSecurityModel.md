<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementSecurityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**Base:** `MBGameModel<SettlementSecurityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`

## Overview

`SettlementSecurityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementSecurityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public abstract float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Gets the current value of `looted nearby party security effect`.

### CalculateSecurityChange
`public abstract ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate security change`.

### GetNearbyBanditPartyDefeatedSecurityEffect
`public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Gets the current value of `nearby bandit party defeated security effect`.

### CalculateGoldGainDueToHighSecurity
`public abstract void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Handles logic related to `calculate gold gain due to high security`.

### CalculateGoldCutDueToLowSecurity
`public abstract void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Handles logic related to `calculate gold cut due to low security`.

## Usage Example

```csharp
var implementation = new CustomSettlementSecurityModel();
```

## See Also

- [Complete Class Catalog](../catalog)