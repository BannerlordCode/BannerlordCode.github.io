---
title: "SettlementSecurityModel"
description: "Auto-generated class reference for SettlementSecurityModel."
---
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

**Purpose:** Reads and returns the `looted nearby party security effect` value held by the current object.

```csharp
// Obtain an instance of SettlementSecurityModel from the subsystem API first
SettlementSecurityModel settlementSecurityModel = ...;
var result = settlementSecurityModel.GetLootedNearbyPartySecurityEffect(town, 0);
```

### CalculateSecurityChange
`public abstract ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `security change`.

```csharp
// Obtain an instance of SettlementSecurityModel from the subsystem API first
SettlementSecurityModel settlementSecurityModel = ...;
var result = settlementSecurityModel.CalculateSecurityChange(town, false);
```

### GetNearbyBanditPartyDefeatedSecurityEffect
`public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Reads and returns the `nearby bandit party defeated security effect` value held by the current object.

```csharp
// Obtain an instance of SettlementSecurityModel from the subsystem API first
SettlementSecurityModel settlementSecurityModel = ...;
var result = settlementSecurityModel.GetNearbyBanditPartyDefeatedSecurityEffect(town, 0);
```

### CalculateGoldGainDueToHighSecurity
`public abstract void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Calculates the current value or result of `gold gain due to high security`.

```csharp
// Obtain an instance of SettlementSecurityModel from the subsystem API first
SettlementSecurityModel settlementSecurityModel = ...;
settlementSecurityModel.CalculateGoldGainDueToHighSecurity(town, explainedNumber);
```

### CalculateGoldCutDueToLowSecurity
`public abstract void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Calculates the current value or result of `gold cut due to low security`.

```csharp
// Obtain an instance of SettlementSecurityModel from the subsystem API first
SettlementSecurityModel settlementSecurityModel = ...;
settlementSecurityModel.CalculateGoldCutDueToLowSecurity(town, explainedNumber);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementSecurityModel instance = ...;
```

## See Also

- [Area Index](../)