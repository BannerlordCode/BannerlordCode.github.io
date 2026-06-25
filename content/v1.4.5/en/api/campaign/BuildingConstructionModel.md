---
title: "BuildingConstructionModel"
description: "Auto-generated class reference for BuildingConstructionModel."
---
# BuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`
**Base:** `MBGameModel<BuildingConstructionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingConstructionModel.cs`

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

**Purpose:** **Purpose:** Calculates the current value or result of daily construction power.

```csharp
// Obtain an instance of BuildingConstructionModel from the subsystem API first
BuildingConstructionModel buildingConstructionModel = ...;
var result = buildingConstructionModel.CalculateDailyConstructionPower(town, false);
```

### CalculateDailyConstructionPowerWithoutBoost
`public abstract int CalculateDailyConstructionPowerWithoutBoost(Town town)`

**Purpose:** **Purpose:** Calculates the current value or result of daily construction power without boost.

```csharp
// Obtain an instance of BuildingConstructionModel from the subsystem API first
BuildingConstructionModel buildingConstructionModel = ...;
var result = buildingConstructionModel.CalculateDailyConstructionPowerWithoutBoost(town);
```

### GetBoostCost
`public abstract int GetBoostCost(Town town)`

**Purpose:** **Purpose:** Reads and returns the boost cost value held by the this instance.

```csharp
// Obtain an instance of BuildingConstructionModel from the subsystem API first
BuildingConstructionModel buildingConstructionModel = ...;
var result = buildingConstructionModel.GetBoostCost(town);
```

### GetBoostAmount
`public abstract int GetBoostAmount(Town town)`

**Purpose:** **Purpose:** Reads and returns the boost amount value held by the this instance.

```csharp
// Obtain an instance of BuildingConstructionModel from the subsystem API first
BuildingConstructionModel buildingConstructionModel = ...;
var result = buildingConstructionModel.GetBoostAmount(town);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BuildingConstructionModel instance = ...;
```

## See Also

- [Area Index](../)