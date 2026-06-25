---
title: "DefaultBuildingScoreCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBuildingScoreCalculationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `next daily building`.

### GetNextBuilding
`public override Building GetNextBuilding(Town town)`

**Purpose:** Gets the current value of `next building`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBuildingScoreCalculationModel>(new MyDefaultBuildingScoreCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)