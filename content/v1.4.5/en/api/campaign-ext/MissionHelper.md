---
title: "MissionHelper"
description: "Auto-generated class reference for MissionHelper."
---
# MissionHelper

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class MissionHelper`
**Base:** none
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## Overview

`MissionHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MissionHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FollowAgent
`public static void FollowAgent(Agent agent, Agent target)`

**Purpose:** Executes the FollowAgent logic.

```csharp
// Static call; no instance required
MissionHelper.FollowAgent(agent, target);
```

### UnfollowAgent
`public static void UnfollowAgent(Agent agent)`

**Purpose:** Executes the UnfollowAgent logic.

```csharp
// Static call; no instance required
MissionHelper.UnfollowAgent(agent);
```

### FadeOutAgents
`public static void FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)`

**Purpose:** Executes the FadeOutAgents logic.

```csharp
// Static call; no instance required
MissionHelper.FadeOutAgents(agents, false, false);
```

### DisableGenericMissionEventScript
`public static void DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)`

**Purpose:** Executes the DisableGenericMissionEventScript logic.

```csharp
// Static call; no instance required
MissionHelper.DisableGenericMissionEventScript("example", missionEvent);
```

### SpawnPlayer
`public static void SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")`

**Purpose:** Executes the SpawnPlayer logic.

```csharp
// Static call; no instance required
MissionHelper.SpawnPlayer(false, false, false, false, "example");
```

### SpawnPlayer
`public static void SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)`

**Purpose:** Executes the SpawnPlayer logic.

```csharp
// Static call; no instance required
MissionHelper.SpawnPlayer(spawnPosition, false, false, false, false);
```

### SpawnHorses
`public static List<Agent> SpawnHorses()`

**Purpose:** Executes the SpawnHorses logic.

```csharp
// Static call; no instance required
MissionHelper.SpawnHorses();
```

### SpawnSheeps
`public static void SpawnSheeps()`

**Purpose:** Executes the SpawnSheeps logic.

```csharp
// Static call; no instance required
MissionHelper.SpawnSheeps();
```

### SpawnCows
`public static void SpawnCows()`

**Purpose:** Executes the SpawnCows logic.

```csharp
// Static call; no instance required
MissionHelper.SpawnCows();
```

### SpawnGeese
`public static void SpawnGeese()`

**Purpose:** Executes the SpawnGeese logic.

```csharp
// Static call; no instance required
MissionHelper.SpawnGeese();
```

### SpawnChicken
`public static void SpawnChicken()`

**Purpose:** Executes the SpawnChicken logic.

```csharp
// Static call; no instance required
MissionHelper.SpawnChicken();
```

### SpawnHogs
`public static void SpawnHogs()`

**Purpose:** Executes the SpawnHogs logic.

```csharp
// Static call; no instance required
MissionHelper.SpawnHogs();
```

## Usage Example

```csharp
MissionHelper.Initialize();
```

## See Also

- [Area Index](../)