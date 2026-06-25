---
title: "DefaultBuildingConstructionModel"
description: "Auto-generated class reference for DefaultBuildingConstructionModel."
---
# DefaultBuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**Base:** `BuildingConstructionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingConstructionModel.cs`

## Overview

`DefaultBuildingConstructionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBuildingConstructionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyConstructionPower
`public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `daily construction power`.

```csharp
// Obtain an instance of DefaultBuildingConstructionModel from the subsystem API first
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.CalculateDailyConstructionPower(town, false);
```

### CalculateDailyConstructionPowerWithoutBoost
`public override int CalculateDailyConstructionPowerWithoutBoost(Town town)`

**Purpose:** Calculates the current value or result of `daily construction power without boost`.

```csharp
// Obtain an instance of DefaultBuildingConstructionModel from the subsystem API first
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.CalculateDailyConstructionPowerWithoutBoost(town);
```

### GetBoostAmount
`public override int GetBoostAmount(Town town)`

**Purpose:** Reads and returns the `boost amount` value held by the current object.

```csharp
// Obtain an instance of DefaultBuildingConstructionModel from the subsystem API first
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.GetBoostAmount(town);
```

### GetBoostCost
`public override int GetBoostCost(Town town)`

**Purpose:** Reads and returns the `boost cost` value held by the current object.

```csharp
// Obtain an instance of DefaultBuildingConstructionModel from the subsystem API first
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.GetBoostCost(town);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBuildingConstructionModel>(new MyDefaultBuildingConstructionModel());
```

## See Also

- [Area Index](../)