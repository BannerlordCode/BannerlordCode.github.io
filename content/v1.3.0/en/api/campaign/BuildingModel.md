---
title: "BuildingModel"
description: "Auto-generated class reference for BuildingModel."
---
# BuildingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingModel : MBGameModel<BuildingModel>`
**Base:** `MBGameModel<BuildingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingModel.cs`

## Overview

`BuildingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BuildingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanAddBuildingTypeToTown
`public abstract bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for add building type to town.

```csharp
// Obtain an instance of BuildingModel from the subsystem API first
BuildingModel buildingModel = ...;
var result = buildingModel.CanAddBuildingTypeToTown(buildingType, town);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BuildingModel instance = ...;
```

## See Also

- [Area Index](../)