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

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.FollowAgent(agent, target);
```

### UnfollowAgent
`public static void UnfollowAgent(Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.UnfollowAgent(agent);
```

### FadeOutAgents
`public static void FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.FadeOutAgents(agents, false, false);
```

### DisableGenericMissionEventScript
`public static void DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.DisableGenericMissionEventScript("example", missionEvent);
```

### SpawnPlayer
`public static void SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.SpawnPlayer(false, false, false, false, "example");
```

### SpawnPlayer
`public static void SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.SpawnPlayer(spawnPosition, false, false, false, false);
```

### SpawnHorses
`public static List<Agent> SpawnHorses()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.SpawnHorses();
```

### SpawnSheeps
`public static void SpawnSheeps()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.SpawnSheeps();
```

### SpawnCows
`public static void SpawnCows()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.SpawnCows();
```

### SpawnGeese
`public static void SpawnGeese()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.SpawnGeese();
```

### SpawnChicken
`public static void SpawnChicken()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionHelper.SpawnChicken();
```

### SpawnHogs
`public static void SpawnHogs()`

**Purpose:** Performs the operation described by this method.

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