---
title: "SettlementTaxModel"
description: "Auto-generated class reference for SettlementTaxModel."
---
# SettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**Base:** `MBGameModel<SettlementTaxModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## Overview

`SettlementTaxModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementTaxModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public abstract float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public abstract float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public abstract int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public abstract int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## Key Methods

### GetTownTaxRatio
`public abstract float GetTownTaxRatio(Town town)`

**Purpose:** Reads and returns the `town tax ratio` value held by the current object.

```csharp
// Obtain an instance of SettlementTaxModel from the subsystem API first
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.GetTownTaxRatio(town);
```

### GetVillageTaxRatio
`public abstract float GetVillageTaxRatio(Village village)`

**Purpose:** Reads and returns the `village tax ratio` value held by the current object.

```csharp
// Obtain an instance of SettlementTaxModel from the subsystem API first
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.GetVillageTaxRatio(village);
```

### GetTownCommissionChangeBasedOnSecurity
`public abstract float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`

**Purpose:** Reads and returns the `town commission change based on security` value held by the current object.

```csharp
// Obtain an instance of SettlementTaxModel from the subsystem API first
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.GetTownCommissionChangeBasedOnSecurity(town, 0);
```

### CalculateTownTax
`public abstract ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `town tax`.

```csharp
// Obtain an instance of SettlementTaxModel from the subsystem API first
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.CalculateTownTax(town, false);
```

### CalculateVillageTaxFromIncome
`public abstract int CalculateVillageTaxFromIncome(Village village, int marketIncome)`

**Purpose:** Calculates the current value or result of `village tax from income`.

```csharp
// Obtain an instance of SettlementTaxModel from the subsystem API first
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.CalculateVillageTaxFromIncome(village, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementTaxModel instance = ...;
```

## See Also

- [Area Index](../)