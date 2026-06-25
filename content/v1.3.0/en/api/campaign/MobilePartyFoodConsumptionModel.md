---
title: "MobilePartyFoodConsumptionModel"
description: "Auto-generated class reference for MobilePartyFoodConsumptionModel."
---
# MobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`
**Base:** `MBGameModel<MobilePartyFoodConsumptionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`

## Overview

`MobilePartyFoodConsumptionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MobilePartyFoodConsumptionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMenOnMapToEatOneFood` | `public abstract int NumberOfMenOnMapToEatOneFood { get; }` |

## Key Methods

### CalculateDailyBaseFoodConsumptionf
`public abstract ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)`

**Purpose:** **Purpose:** Calculates the current value or result of daily base food consumptionf.

```csharp
// Obtain an instance of MobilePartyFoodConsumptionModel from the subsystem API first
MobilePartyFoodConsumptionModel mobilePartyFoodConsumptionModel = ...;
var result = mobilePartyFoodConsumptionModel.CalculateDailyBaseFoodConsumptionf(party, false);
```

### CalculateDailyFoodConsumptionf
`public abstract ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)`

**Purpose:** **Purpose:** Calculates the current value or result of daily food consumptionf.

```csharp
// Obtain an instance of MobilePartyFoodConsumptionModel from the subsystem API first
MobilePartyFoodConsumptionModel mobilePartyFoodConsumptionModel = ...;
var result = mobilePartyFoodConsumptionModel.CalculateDailyFoodConsumptionf(party, baseConsumption);
```

### DoesPartyConsumeFood
`public abstract bool DoesPartyConsumeFood(MobileParty mobileParty)`

**Purpose:** **Purpose:** Returns a boolean answer to whether party consume food is true for the this instance.

```csharp
// Obtain an instance of MobilePartyFoodConsumptionModel from the subsystem API first
MobilePartyFoodConsumptionModel mobilePartyFoodConsumptionModel = ...;
var result = mobilePartyFoodConsumptionModel.DoesPartyConsumeFood(mobileParty);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MobilePartyFoodConsumptionModel instance = ...;
```

## See Also

- [Area Index](../)