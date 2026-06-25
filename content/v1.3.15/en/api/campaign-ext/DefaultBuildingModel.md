---
title: "DefaultBuildingModel"
description: "Auto-generated class reference for DefaultBuildingModel."
---
# DefaultBuildingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingModel : BuildingModel`
**Base:** `BuildingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingModel.cs`

## Overview

`DefaultBuildingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBuildingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanAddBuildingTypeToTown
`public override bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)`

**Purpose:** Checks whether the this instance meets the preconditions for add building type to town.

```csharp
// Obtain an instance of DefaultBuildingModel from the subsystem API first
DefaultBuildingModel defaultBuildingModel = ...;
var result = defaultBuildingModel.CanAddBuildingTypeToTown(buildingType, town);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBuildingModel>(new MyDefaultBuildingModel());
```

## See Also

- [Area Index](../)