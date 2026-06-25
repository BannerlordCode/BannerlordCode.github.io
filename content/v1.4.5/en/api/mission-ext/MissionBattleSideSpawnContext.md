---
title: "MissionBattleSideSpawnContext"
description: "Auto-generated class reference for MissionBattleSideSpawnContext."
---
# MissionBattleSideSpawnContext

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSideSpawnContext`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs`

## Overview

`MissionBattleSideSpawnContext` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopSpawnActive` | `public bool TroopSpawnActive { get; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; }` |
| `ReinforcementSpawnActive` | `public bool ReinforcementSpawnActive { get; }` |
| `ReinforcementsNotifiedOnLastBatch` | `public bool ReinforcementsNotifiedOnLastBatch { get; }` |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements { get; }` |
| `ForceSpawnPlayerMounted` | `public bool ForceSpawnPlayerMounted { get; }` |

## Key Methods

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the `number of player controllable troops` value held by the current object.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.GetNumberOfPlayerControllableTroops();
```

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**Purpose:** Attempts to retrieve `reinforcement spawn`, usually returning success through an out parameter.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.TryReinforcementSpawn();
```

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData(out MBList<(Team team, MissionFormationSpawnData formationSpawnData)> teamFormationsSpawnData)`

**Purpose:** Reads and returns the `team formations spawn data` value held by the current object.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.GetTeamFormationsSpawnData(team, teamFormationsSpawnData);
```

### ReserveTroops
`public void ReserveTroops(int number)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.ReserveTroops(0);
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**Purpose:** Reads and returns the `general character` value held by the current object.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.GetGeneralCharacter();
```

### CheckReinforcementBatch
`public bool CheckReinforcementBatch()`

**Purpose:** Verifies whether `reinforcement batch` holds true for the current object.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.CheckReinforcementBatch();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Reads and returns the `all troops` value held by the current object.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.GetAllTroops();
```

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.SpawnTroops(0, false);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**Purpose:** Assigns a new value to `spawn with horses` and updates the object's internal state.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.SetSpawnWithHorses(false);
```

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**Purpose:** Assigns a new value to `banner bearer logic` and updates the object's internal state.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.SetBannerBearerLogic(bannerBearerLogic);
```

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**Purpose:** Assigns a new value to `reinforcements notified on last batch` and updates the object's internal state.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.SetReinforcementsNotifiedOnLastBatch(false);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**Purpose:** Assigns a new value to `spawn troops` and updates the object's internal state.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.SetSpawnTroops(false);
```

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**Purpose:** Invoked when the `initial spawn over` event is raised.

```csharp
// Obtain an instance of MissionBattleSideSpawnContext from the subsystem API first
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.OnInitialSpawnOver();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.GetNumberOfPlayerControllableTroops();
```

## See Also

- [Area Index](../)