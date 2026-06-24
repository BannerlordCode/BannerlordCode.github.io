<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBuildingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Checks whether the current object can `add building type to town`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBuildingModel>(new MyDefaultBuildingModel());
```

## See Also

- [Complete Class Catalog](../catalog)