---
title: "SandBoxHelpers"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxHelpers`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxHelpers

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxHelpers`
**Base:** none
**File:** `SandBox/SandBoxHelpers.cs`

## Overview

`SandBoxHelpers` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
SandBoxHelpers.FollowAgent(agent, target);
```

## See Also

- [Complete Class Catalog](../catalog)