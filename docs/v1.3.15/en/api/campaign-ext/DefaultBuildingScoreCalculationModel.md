<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBuildingScoreCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingScoreCalculationModel : BuildingScoreCalculationModel`
**Base:** `BuildingScoreCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingScoreCalculationModel.cs`

## Overview

`DefaultBuildingScoreCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBuildingScoreCalculationModel>(new MyDefaultBuildingScoreCalculationModel())` to change how it computes.

## Key Methods

### GetNextDailyBuilding
```csharp
public override Building GetNextDailyBuilding(Town town)
```

### GetNextBuilding
```csharp
public override Building GetNextBuilding(Town town)
```

## Usage Example

```csharp
// Typical usage of DefaultBuildingScoreCalculationModel (Model)
Game.Current.ReplaceModel<DefaultBuildingScoreCalculationModel>(new MyDefaultBuildingScoreCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)