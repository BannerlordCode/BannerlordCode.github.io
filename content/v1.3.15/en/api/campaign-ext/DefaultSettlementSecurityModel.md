---
title: "DefaultSettlementSecurityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementSecurityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**Base:** `SettlementSecurityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs`

## Overview

`DefaultSettlementSecurityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementSecurityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate security change`.

### GetLootedNearbyPartySecurityEffect
`public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Gets the current value of `looted nearby party security effect`.

### GetNearbyBanditPartyDefeatedSecurityEffect
`public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Gets the current value of `nearby bandit party defeated security effect`.

### CalculateGoldGainDueToHighSecurity
`public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Handles logic related to `calculate gold gain due to high security`.

### CalculateGoldCutDueToLowSecurity
`public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Handles logic related to `calculate gold cut due to low security`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementSecurityModel>(new MyDefaultSettlementSecurityModel());
```

## See Also

- [Complete Class Catalog](../catalog)