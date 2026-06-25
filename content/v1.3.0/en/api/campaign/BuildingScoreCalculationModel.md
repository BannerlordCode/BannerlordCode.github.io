---
title: "BuildingScoreCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingScoreCalculationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingScoreCalculationModel : MBGameModel<BuildingScoreCalculationModel>`
**Base:** `MBGameModel<BuildingScoreCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingScoreCalculationModel.cs`

## Overview

`BuildingScoreCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BuildingScoreCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNextBuilding
`public abstract Building GetNextBuilding(Town town)`

**Purpose:** Gets the current value of `next building`.

### GetNextDailyBuilding
`public abstract Building GetNextDailyBuilding(Town town)`

**Purpose:** Gets the current value of `next daily building`.

## Usage Example

```csharp
var implementation = new CustomBuildingScoreCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)