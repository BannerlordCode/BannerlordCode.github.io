---
title: "DefaultBuildingConstructionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBuildingConstructionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**Base:** `BuildingConstructionModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingConstructionModel.cs`

## Overview

`DefaultBuildingConstructionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBuildingConstructionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyConstructionPower
`public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate daily construction power`.

### CalculateDailyConstructionPowerWithoutBoost
`public override int CalculateDailyConstructionPowerWithoutBoost(Town town)`

**Purpose:** Handles logic related to `calculate daily construction power without boost`.

### GetBoostAmount
`public override int GetBoostAmount(Town town)`

**Purpose:** Gets the current value of `boost amount`.

### GetBoostCost
`public override int GetBoostCost(Town town)`

**Purpose:** Gets the current value of `boost cost`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBuildingConstructionModel>(new MyDefaultBuildingConstructionModel());
```

## See Also

- [Complete Class Catalog](../catalog)