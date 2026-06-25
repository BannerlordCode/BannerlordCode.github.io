---
title: "BuildingModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Checks whether the current object can `add building type to town`.

## Usage Example

```csharp
var implementation = new CustomBuildingModel();
```

## See Also

- [Complete Class Catalog](../catalog)