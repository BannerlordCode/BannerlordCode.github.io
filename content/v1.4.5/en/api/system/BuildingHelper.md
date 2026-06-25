---
title: "BuildingHelper"
description: "Auto-generated class reference for BuildingHelper."
---
# BuildingHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BuildingHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/BuildingHelper.cs`

## Overview

`BuildingHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `BuildingHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CheckIfBuildingIsComplete
`public static void CheckIfBuildingIsComplete(Building building)`

**Purpose:** **Purpose:** Verifies whether if building is complete holds true for the this instance.

```csharp
// Static call; no instance required
BuildingHelper.CheckIfBuildingIsComplete(building);
```

### ChangeDefaultBuilding
`public static void ChangeDefaultBuilding(Building newDefault, Town town)`

**Purpose:** **Purpose:** Executes the ChangeDefaultBuilding logic.

```csharp
// Static call; no instance required
BuildingHelper.ChangeDefaultBuilding(newDefault, town);
```

### ChangeCurrentBuildingQueue
`public static void ChangeCurrentBuildingQueue(List<Building> buildings, Town town)`

**Purpose:** **Purpose:** Executes the ChangeCurrentBuildingQueue logic.

```csharp
// Static call; no instance required
BuildingHelper.ChangeCurrentBuildingQueue(buildings, town);
```

### GetProgressOfBuilding
`public static float GetProgressOfBuilding(Building building, Town town)`

**Purpose:** **Purpose:** Reads and returns the progress of building value held by the this instance.

```csharp
// Static call; no instance required
BuildingHelper.GetProgressOfBuilding(building, town);
```

### GetDaysToComplete
`public static int GetDaysToComplete(Building building, Town town)`

**Purpose:** **Purpose:** Reads and returns the days to complete value held by the this instance.

```csharp
// Static call; no instance required
BuildingHelper.GetDaysToComplete(building, town);
```

### GetTierOfBuilding
`public static int GetTierOfBuilding(BuildingType buildingType, Town town)`

**Purpose:** **Purpose:** Reads and returns the tier of building value held by the this instance.

```csharp
// Static call; no instance required
BuildingHelper.GetTierOfBuilding(buildingType, town);
```

### BoostBuildingProcessWithGold
`public static void BoostBuildingProcessWithGold(int gold, Town town)`

**Purpose:** **Purpose:** Increases the value or strength of building process with gold.

```csharp
// Static call; no instance required
BuildingHelper.BoostBuildingProcessWithGold(0, town);
```

## Usage Example

```csharp
BuildingHelper.Initialize();
```

## See Also

- [Area Index](../)