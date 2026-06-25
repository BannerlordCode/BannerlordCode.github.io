---
title: "DefaultSettlementTaxModel"
description: "Auto-generated class reference for DefaultSettlementTaxModel."
---
# DefaultSettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**Base:** `SettlementTaxModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`

## Overview

`DefaultSettlementTaxModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementTaxModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public override float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public override float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public override int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public override int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## Key Methods

### GetTownTaxRatio
`public override float GetTownTaxRatio(Town town)`

**Purpose:** Reads and returns the `town tax ratio` value held by the current object.

```csharp
// Obtain an instance of DefaultSettlementTaxModel from the subsystem API first
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.GetTownTaxRatio(town);
```

### GetVillageTaxRatio
`public override float GetVillageTaxRatio(Village village)`

**Purpose:** Reads and returns the `village tax ratio` value held by the current object.

```csharp
// Obtain an instance of DefaultSettlementTaxModel from the subsystem API first
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.GetVillageTaxRatio(village);
```

### GetTownCommissionChangeBasedOnSecurity
`public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`

**Purpose:** Reads and returns the `town commission change based on security` value held by the current object.

```csharp
// Obtain an instance of DefaultSettlementTaxModel from the subsystem API first
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.GetTownCommissionChangeBasedOnSecurity(town, 0);
```

### CalculateTownTax
`public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `town tax`.

```csharp
// Obtain an instance of DefaultSettlementTaxModel from the subsystem API first
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.CalculateTownTax(town, false);
```

### CalculateVillageTaxFromIncome
`public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)`

**Purpose:** Calculates the current value or result of `village tax from income`.

```csharp
// Obtain an instance of DefaultSettlementTaxModel from the subsystem API first
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.CalculateVillageTaxFromIncome(village, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementTaxModel>(new MyDefaultSettlementTaxModel());
```

## See Also

- [Area Index](../)