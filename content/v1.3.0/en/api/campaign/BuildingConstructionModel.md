---
title: "BuildingConstructionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingConstructionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`
**Base:** `MBGameModel<BuildingConstructionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs`

## Overview

`BuildingConstructionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BuildingConstructionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TownBoostCost` | `public abstract int TownBoostCost { get; }` |
| `TownBoostBonus` | `public abstract int TownBoostBonus { get; }` |
| `CastleBoostCost` | `public abstract int CastleBoostCost { get; }` |
| `CastleBoostBonus` | `public abstract int CastleBoostBonus { get; }` |

## Key Methods

### CalculateDailyConstructionPower
`public abstract ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate daily construction power`.

### CalculateDailyConstructionPowerWithoutBoost
`public abstract int CalculateDailyConstructionPowerWithoutBoost(Town town)`

**Purpose:** Handles logic related to `calculate daily construction power without boost`.

### GetBoostCost
`public abstract int GetBoostCost(Town town)`

**Purpose:** Gets the current value of `boost cost`.

### GetBoostAmount
`public abstract int GetBoostAmount(Town town)`

**Purpose:** Gets the current value of `boost amount`.

## Usage Example

```csharp
var implementation = new CustomBuildingConstructionModel();
```

## See Also

- [Complete Class Catalog](../catalog)