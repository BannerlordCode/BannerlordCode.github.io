---
title: "BuildingScoreCalculationModel"
description: "Auto-generated class reference for BuildingScoreCalculationModel."
---
# BuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingScoreCalculationModel : MBGameModel<BuildingScoreCalculationModel>`
**Base:** `MBGameModel<BuildingScoreCalculationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingScoreCalculationModel.cs`

## Overview

`BuildingScoreCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BuildingScoreCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNextBuilding
`public abstract Building GetNextBuilding(Town town)`

**Purpose:** Reads and returns the next building value held by the this instance.

```csharp
// Obtain an instance of BuildingScoreCalculationModel from the subsystem API first
BuildingScoreCalculationModel buildingScoreCalculationModel = ...;
var result = buildingScoreCalculationModel.GetNextBuilding(town);
```

### GetNextDailyBuilding
`public abstract Building GetNextDailyBuilding(Town town)`

**Purpose:** Reads and returns the next daily building value held by the this instance.

```csharp
// Obtain an instance of BuildingScoreCalculationModel from the subsystem API first
BuildingScoreCalculationModel buildingScoreCalculationModel = ...;
var result = buildingScoreCalculationModel.GetNextDailyBuilding(town);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BuildingScoreCalculationModel instance = ...;
```

## See Also

- [Area Index](../)