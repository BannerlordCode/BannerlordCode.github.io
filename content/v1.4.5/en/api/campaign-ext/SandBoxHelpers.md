---
title: "SandBoxHelpers"
description: "Auto-generated class reference for SandBoxHelpers."
---
# SandBoxHelpers

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxHelpers`
**Base:** none
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## Overview

`SandBoxHelpers` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FollowAgent
`public static void FollowAgent(Agent agent, Agent target)`

**Purpose:** Executes the FollowAgent logic.

```csharp
// Static call; no instance required
SandBoxHelpers.FollowAgent(agent, target);
```

### UnfollowAgent
`public static void UnfollowAgent(Agent agent)`

**Purpose:** Executes the UnfollowAgent logic.

```csharp
// Static call; no instance required
SandBoxHelpers.UnfollowAgent(agent);
```

### FadeOutAgents
`public static void FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)`

**Purpose:** Executes the FadeOutAgents logic.

```csharp
// Static call; no instance required
SandBoxHelpers.FadeOutAgents(agents, false, false);
```

### DisableGenericMissionEventScript
`public static void DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)`

**Purpose:** Executes the DisableGenericMissionEventScript logic.

```csharp
// Static call; no instance required
SandBoxHelpers.DisableGenericMissionEventScript("example", missionEvent);
```

### SpawnPlayer
`public static void SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")`

**Purpose:** Executes the SpawnPlayer logic.

```csharp
// Static call; no instance required
SandBoxHelpers.SpawnPlayer(false, false, false, false, "example");
```

### SpawnPlayer
`public static void SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)`

**Purpose:** Executes the SpawnPlayer logic.

```csharp
// Static call; no instance required
SandBoxHelpers.SpawnPlayer(spawnPosition, false, false, false, false);
```

### SpawnHorses
`public static List<Agent> SpawnHorses()`

**Purpose:** Executes the SpawnHorses logic.

```csharp
// Static call; no instance required
SandBoxHelpers.SpawnHorses();
```

### SpawnSheeps
`public static void SpawnSheeps()`

**Purpose:** Executes the SpawnSheeps logic.

```csharp
// Static call; no instance required
SandBoxHelpers.SpawnSheeps();
```

### SpawnCows
`public static void SpawnCows()`

**Purpose:** Executes the SpawnCows logic.

```csharp
// Static call; no instance required
SandBoxHelpers.SpawnCows();
```

### SpawnGeese
`public static void SpawnGeese()`

**Purpose:** Executes the SpawnGeese logic.

```csharp
// Static call; no instance required
SandBoxHelpers.SpawnGeese();
```

### SpawnChicken
`public static void SpawnChicken()`

**Purpose:** Executes the SpawnChicken logic.

```csharp
// Static call; no instance required
SandBoxHelpers.SpawnChicken();
```

### SpawnHogs
`public static void SpawnHogs()`

**Purpose:** Executes the SpawnHogs logic.

```csharp
// Static call; no instance required
SandBoxHelpers.SpawnHogs();
```

### GetRegionMapping
`public static bool GetRegionMapping(PartyNavigationModel model)`

**Purpose:** Reads and returns the region mapping value held by the this instance.

```csharp
// Static call; no instance required
SandBoxHelpers.GetRegionMapping(model);
```

## Usage Example

```csharp
SandBoxHelpers.FollowAgent(agent, target);
```

## See Also

- [Area Index](../)