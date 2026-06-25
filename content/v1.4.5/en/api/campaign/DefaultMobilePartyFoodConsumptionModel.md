---
title: "DefaultMobilePartyFoodConsumptionModel"
description: "Auto-generated class reference for DefaultMobilePartyFoodConsumptionModel."
---
# DefaultMobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel`
**Base:** `MobilePartyFoodConsumptionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## Overview

`DefaultMobilePartyFoodConsumptionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMobilePartyFoodConsumptionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyBaseFoodConsumptionf
`public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)`

**Purpose:** Calculates the current value or result of daily base food consumptionf.

```csharp
// Obtain an instance of DefaultMobilePartyFoodConsumptionModel from the subsystem API first
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.CalculateDailyBaseFoodConsumptionf(party, false);
```

### CalculateDailyFoodConsumptionf
`public override ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)`

**Purpose:** Calculates the current value or result of daily food consumptionf.

```csharp
// Obtain an instance of DefaultMobilePartyFoodConsumptionModel from the subsystem API first
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.CalculateDailyFoodConsumptionf(party, baseConsumption);
```

### DoesPartyConsumeFood
`public override bool DoesPartyConsumeFood(MobileParty mobileParty)`

**Purpose:** Returns a boolean answer to whether party consume food is true for the this instance.

```csharp
// Obtain an instance of DefaultMobilePartyFoodConsumptionModel from the subsystem API first
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.DoesPartyConsumeFood(mobileParty);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMobilePartyFoodConsumptionModel>(new MyDefaultMobilePartyFoodConsumptionModel());
```

## See Also

- [Area Index](../)