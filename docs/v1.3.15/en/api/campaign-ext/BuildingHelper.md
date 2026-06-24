<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BuildingHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/BuildingHelper.cs`

## Overview

`BuildingHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `BuildingHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CheckIfBuildingIsComplete
`public static void CheckIfBuildingIsComplete(Building building)`

**Purpose:** Handles logic related to `check if building is complete`.

### ChangeDefaultBuilding
`public static void ChangeDefaultBuilding(Building newDefault, Town town)`

**Purpose:** Handles logic related to `change default building`.

### ChangeCurrentBuildingQueue
`public static void ChangeCurrentBuildingQueue(List<Building> buildings, Town town)`

**Purpose:** Handles logic related to `change current building queue`.

### GetProgressOfBuilding
`public static float GetProgressOfBuilding(Building building, Town town)`

**Purpose:** Gets the current value of `progress of building`.

### GetDaysToComplete
`public static int GetDaysToComplete(Building building, Town town)`

**Purpose:** Gets the current value of `days to complete`.

### GetTierOfBuilding
`public static int GetTierOfBuilding(BuildingType buildingType, Town town)`

**Purpose:** Gets the current value of `tier of building`.

### BoostBuildingProcessWithGold
`public static void BoostBuildingProcessWithGold(int gold, Town town)`

**Purpose:** Handles logic related to `boost building process with gold`.

## Usage Example

```csharp
BuildingHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)