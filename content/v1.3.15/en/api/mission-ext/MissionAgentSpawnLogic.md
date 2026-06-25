---
title: "MissionAgentSpawnLogic"
description: "Auto-generated class reference for MissionAgentSpawnLogic."
---
# MissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentSpawnLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs`

## Overview

`MissionAgentSpawnLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionAgentSpawnLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfAgentsForMission` | `public static int MaxNumberOfAgentsForMission { get; }` |
| `NumberOfAgents` | `public int NumberOfAgents { get; }` |
| `NumberOfRemainingTroops` | `public int NumberOfRemainingTroops { get; }` |
| `NumberOfActiveDefenderTroops` | `public int NumberOfActiveDefenderTroops { get; }` |
| `NumberOfActiveAttackerTroops` | `public int NumberOfActiveAttackerTroops { get; }` |
| `NumberOfRemainingDefenderTroops` | `public int NumberOfRemainingDefenderTroops { get; }` |
| `NumberOfRemainingAttackerTroops` | `public int NumberOfRemainingAttackerTroops { get; }` |
| `BattleSize` | `public int BattleSize { get; }` |
| `IsInitialSpawnOver` | `public bool IsInitialSpawnOver { get; }` |
| `IsDeploymentOver` | `public bool IsDeploymentOver { get; }` |
| `ReinforcementSpawnSettings` | `public readonly ref MissionSpawnSettings ReinforcementSpawnSettings { get; }` |
| `NumTroops` | `public int NumTroops { get; }` |
| `TroopSpawnActive` | `public bool TroopSpawnActive { get; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; }` |
| `ReinforcementSpawnActive` | `public bool ReinforcementSpawnActive { get; }` |
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `ReinforcementsNotifiedOnLastBatch` | `public bool ReinforcementsNotifiedOnLastBatch { get; }` |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops { get; }` |
| `ReinforcementQuotaRequirement` | `public int ReinforcementQuotaRequirement { get; }` |
| `ReinforcementsSpawnedInLastBatch` | `public int ReinforcementsSpawnedInLastBatch { get; }` |
| `ReinforcementBatchSize` | `public float ReinforcementBatchSize { get; }` |
| `HasReservedTroops` | `public bool HasReservedTroops { get; }` |
| `ReinforcementBatchPriority` | `public float ReinforcementBatchPriority { get; }` |
| `ReservedTroopsCount` | `public int ReservedTroopsCount { get; }` |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.AfterStart();
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the number of player controllable troops value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetNumberOfPlayerControllableTroops();
```

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**Purpose:** Prepares the resources, state, or bindings required by with single phase.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.InitWithSinglePhase(0, 0, 0, 0, false, false, spawnSettings);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the all troops for side value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetAllTroopsForSide(side);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnMissionTick(0);
```

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**Purpose:** Assigns a new value to custom reinforcement spawn timer and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetCustomReinforcementSpawnTimer(timer);
```

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**Purpose:** Assigns a new value to spawn troops and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnTroops(side, false, false);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnBehaviorInitialize();
```

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)`

**Purpose:** Assigns a new value to spawn horses and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnHorses(side, false);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Starts the spawner flow or state machine.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Stops the spawner flow or state machine.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Determines whether the this instance is in the side spawn enabled state or condition.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.IsSideSpawnEnabled(side);
```

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide)`

**Purpose:** Invoked when the side deployment over event is raised.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnSideDeploymentOver(battleSide);
```

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**Purpose:** Reads and returns the reinforcement interval value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetReinforcementInterval();
```

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)`

**Purpose:** Assigns a new value to reinforcements spawn enabled and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetReinforcementsSpawnEnabled(false, false);
```

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the total number of troops for side value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetTotalNumberOfTroopsForSide(side);
```

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)`

**Purpose:** Reads and returns the general character of side value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetGeneralCharacterOfSide(side);
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Reads and returns the spawn horses value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetSpawnHorses(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Determines whether the this instance is in the side depleted state or condition.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.IsSideDepleted(side);
```

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side, MissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)`

**Purpose:** Adds phase change action to the current collection or state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.AddPhaseChangeAction(side, onPhaseChanged);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the number of player controllable troops value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetNumberOfPlayerControllableTroops();
```

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**Purpose:** Attempts to retrieve reinforcement spawn, usually returning success through an out parameter.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.TryReinforcementSpawn();
```

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData( { "team", "formationSpawnData" })`

**Purpose:** Reads and returns the team formations spawn data value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.GetTeamFormationsSpawnData("team", });
```

### ReserveTroops
`public void ReserveTroops(int number)`

**Purpose:** Executes the ReserveTroops logic.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.ReserveTroops(0);
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**Purpose:** Reads and returns the general character value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetGeneralCharacter();
```

### CheckReinforcementBatch
`public unsafe bool CheckReinforcementBatch()`

**Purpose:** Verifies whether reinforcement batch holds true for the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.CheckReinforcementBatch();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Reads and returns the all troops value held by the this instance.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetAllTroops();
```

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**Purpose:** Executes the SpawnTroops logic.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.SpawnTroops(0, false);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**Purpose:** Assigns a new value to spawn with horses and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnWithHorses(false);
```

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**Purpose:** Assigns a new value to banner bearer logic and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetBannerBearerLogic(bannerBearerLogic);
```

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**Purpose:** Assigns a new value to reinforcements notified on last batch and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetReinforcementsNotifiedOnLastBatch(false);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**Purpose:** Assigns a new value to spawn troops and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnTroops(false);
```

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**Purpose:** Invoked when the initial spawn over event is raised.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnInitialSpawnOver();
```

### OnInitialTroopsSpawned
`public void OnInitialTroopsSpawned()`

**Purpose:** Invoked when the initial troops spawned event is raised.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnInitialTroopsSpawned();
```

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

**Purpose:** Invoked when the phase changed delegate event is raised.

```csharp
// Obtain an instance of MissionAgentSpawnLogic from the subsystem API first
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnPhaseChangedDelegate();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentSpawnLogic>();
```

## See Also

- [Area Index](../)