<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingScoreCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingScoreCalculationModel : MBGameModel<BuildingScoreCalculationModel>`
**Base:** `MBGameModel<BuildingScoreCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingScoreCalculationModel.cs`

## Overview

`BuildingScoreCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BuildingScoreCalculationModel>(new MyBuildingScoreCalculationModel())` to change how it computes.

## Key Methods

### GetNextBuilding
```csharp
public abstract Building GetNextBuilding(Town town)
```

### GetNextDailyBuilding
```csharp
public abstract Building GetNextDailyBuilding(Town town)
```

## Usage Example

```csharp
// Typical usage of BuildingScoreCalculationModel (Model)
Game.Current.ReplaceModel<BuildingScoreCalculationModel>(new MyBuildingScoreCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)