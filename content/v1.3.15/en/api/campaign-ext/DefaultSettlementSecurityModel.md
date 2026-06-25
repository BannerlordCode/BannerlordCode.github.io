---
title: "DefaultSettlementSecurityModel"
description: "Auto-generated class reference for DefaultSettlementSecurityModel."
---
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

**Purpose:** **Purpose:** Calculates the current value or result of security change.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
var result = defaultSettlementSecurityModel.CalculateSecurityChange(town, false);
```

### GetLootedNearbyPartySecurityEffect
`public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** **Purpose:** Reads and returns the looted nearby party security effect value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
var result = defaultSettlementSecurityModel.GetLootedNearbyPartySecurityEffect(town, 0);
```

### GetNearbyBanditPartyDefeatedSecurityEffect
`public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** **Purpose:** Reads and returns the nearby bandit party defeated security effect value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
var result = defaultSettlementSecurityModel.GetNearbyBanditPartyDefeatedSecurityEffect(town, 0);
```

### CalculateGoldGainDueToHighSecurity
`public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** **Purpose:** Calculates the current value or result of gold gain due to high security.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
defaultSettlementSecurityModel.CalculateGoldGainDueToHighSecurity(town, explainedNumber);
```

### CalculateGoldCutDueToLowSecurity
`public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** **Purpose:** Calculates the current value or result of gold cut due to low security.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
defaultSettlementSecurityModel.CalculateGoldCutDueToLowSecurity(town, explainedNumber);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementSecurityModel>(new MyDefaultSettlementSecurityModel());
```

## See Also

- [Area Index](../)