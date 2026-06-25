---
title: "SettlementLoyaltyModel"
description: "Auto-generated class reference for SettlementLoyaltyModel."
---
# SettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**Base:** `MBGameModel<SettlementLoyaltyModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementLoyaltyModel.cs`

## Overview

`SettlementLoyaltyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementLoyaltyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public abstract ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of loyalty change.

```csharp
// Obtain an instance of SettlementLoyaltyModel from the subsystem API first
SettlementLoyaltyModel settlementLoyaltyModel = ...;
var result = settlementLoyaltyModel.CalculateLoyaltyChange(town, false);
```

### CalculateGoldGainDueToHighLoyalty
`public abstract void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Calculates the current value or result of gold gain due to high loyalty.

```csharp
// Obtain an instance of SettlementLoyaltyModel from the subsystem API first
SettlementLoyaltyModel settlementLoyaltyModel = ...;
settlementLoyaltyModel.CalculateGoldGainDueToHighLoyalty(town, explainedNumber);
```

### CalculateGoldCutDueToLowLoyalty
`public abstract void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Calculates the current value or result of gold cut due to low loyalty.

```csharp
// Obtain an instance of SettlementLoyaltyModel from the subsystem API first
SettlementLoyaltyModel settlementLoyaltyModel = ...;
settlementLoyaltyModel.CalculateGoldCutDueToLowLoyalty(town, explainedNumber);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementLoyaltyModel instance = ...;
```

## See Also

- [Area Index](../)