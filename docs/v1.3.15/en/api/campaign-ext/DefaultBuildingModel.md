<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBuildingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingModel : BuildingModel`
**Base:** `BuildingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingModel.cs`

## Overview

`DefaultBuildingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBuildingModel>(new MyDefaultBuildingModel())` to change how it computes.

## Key Methods

### CanAddBuildingTypeToTown
```csharp
public override bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)
```

## Usage Example

```csharp
// Typical usage of DefaultBuildingModel (Model)
Game.Current.ReplaceModel<DefaultBuildingModel>(new MyDefaultBuildingModel());
```

## See Also

- [Complete Class Catalog](../catalog)