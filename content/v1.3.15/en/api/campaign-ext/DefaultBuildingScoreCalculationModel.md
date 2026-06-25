---
title: "DefaultBuildingScoreCalculationModel"
description: "Auto-generated class reference for DefaultBuildingScoreCalculationModel."
---
# DefaultBuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingScoreCalculationModel : BuildingScoreCalculationModel`
**Base:** `BuildingScoreCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingScoreCalculationModel.cs`

## Overview

`DefaultBuildingScoreCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBuildingScoreCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNextDailyBuilding
`public override Building GetNextDailyBuilding(Town town)`

**Purpose:** Reads and returns the next daily building value held by the this instance.

```csharp
// Obtain an instance of DefaultBuildingScoreCalculationModel from the subsystem API first
DefaultBuildingScoreCalculationModel defaultBuildingScoreCalculationModel = ...;
var result = defaultBuildingScoreCalculationModel.GetNextDailyBuilding(town);
```

### GetNextBuilding
`public override Building GetNextBuilding(Town town)`

**Purpose:** Reads and returns the next building value held by the this instance.

```csharp
// Obtain an instance of DefaultBuildingScoreCalculationModel from the subsystem API first
DefaultBuildingScoreCalculationModel defaultBuildingScoreCalculationModel = ...;
var result = defaultBuildingScoreCalculationModel.GetNextBuilding(town);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBuildingScoreCalculationModel>(new MyDefaultBuildingScoreCalculationModel());
```

## See Also

- [Area Index](../)