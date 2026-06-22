<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingModel : MBGameModel<BuildingModel>`
**Base:** `MBGameModel<BuildingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingModel.cs`

## Overview

`BuildingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BuildingModel>(new MyBuildingModel())` to change how it computes.

## Key Methods

### CanAddBuildingTypeToTown
```csharp
public abstract bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)
```

## Usage Example

```csharp
// Typical usage of BuildingModel (Model)
Game.Current.ReplaceModel<BuildingModel>(new MyBuildingModel());
```

## See Also

- [Complete Class Catalog](../catalog)