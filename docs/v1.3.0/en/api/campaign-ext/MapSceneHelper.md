<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSceneHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapSceneHelper

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class MapSceneHelper`
**Area:** campaign-ext

## Overview

`MapSceneHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MapSceneHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FollowAgent
`public static void FollowAgent(Agent agent, Agent target)`

**Purpose:** Handles logic related to `follow agent`.

### UnfollowAgent
`public static void UnfollowAgent(Agent agent)`

**Purpose:** Handles logic related to `unfollow agent`.

### FadeOutAgents
`public static void FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)`

**Purpose:** Handles logic related to `fade out agents`.

### DisableGenericMissionEventScript
`public static void DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)`

**Purpose:** Handles logic related to `disable generic mission event script`.

### SpawnPlayer
`public static void SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")`

**Purpose:** Handles logic related to `spawn player`.

### SpawnPlayer
`public static void SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)`

**Purpose:** Handles logic related to `spawn player`.

### SpawnHorses
`public static List<Agent> SpawnHorses()`

**Purpose:** Handles logic related to `spawn horses`.

### SpawnSheeps
`public static void SpawnSheeps()`

**Purpose:** Handles logic related to `spawn sheeps`.

### SpawnCows
`public static void SpawnCows()`

**Purpose:** Handles logic related to `spawn cows`.

### SpawnGeese
`public static void SpawnGeese()`

**Purpose:** Handles logic related to `spawn geese`.

### SpawnChicken
`public static void SpawnChicken()`

**Purpose:** Handles logic related to `spawn chicken`.

### SpawnHogs
`public static void SpawnHogs()`

**Purpose:** Handles logic related to `spawn hogs`.

### GetRegionMapping
`public static bool GetRegionMapping(PartyNavigationModel model)`

**Purpose:** Gets the current value of `region mapping`.

## Usage Example

```csharp
MapSceneHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
