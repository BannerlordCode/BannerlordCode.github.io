---
title: "MissionAgentSpawnLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentSpawnLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `after start`.

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**Purpose:** Initializes the state, resources, or bindings for `with single phase`.

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `all troops for side`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**Purpose:** Sets the value or state of `custom reinforcement spawn timer`.

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**Purpose:** Sets the value or state of `spawn troops`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)`

**Purpose:** Sets the value or state of `spawn horses`.

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Handles logic related to `start spawner`.

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Handles logic related to `stop spawner`.

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side spawn enabled`.

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide)`

**Purpose:** Called when the `side deployment over` event is raised.

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**Purpose:** Gets the current value of `reinforcement interval`.

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)`

**Purpose:** Sets the value or state of `reinforcements spawn enabled`.

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `total number of troops for side`.

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `general character of side`.

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Gets the current value of `spawn horses`.

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side depleted`.

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side, MissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)`

**Purpose:** Adds `phase change action` to the current collection or state.

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**Purpose:** Attempts to get `reinforcement spawn`, usually returning the result in an out parameter.

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData( { "team", "formationSpawnData" })`

**Purpose:** Gets the current value of `team formations spawn data`.

### ReserveTroops
`public void ReserveTroops(int number)`

**Purpose:** Handles logic related to `reserve troops`.

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**Purpose:** Gets the current value of `general character`.

### CheckReinforcementBatch
`public unsafe bool CheckReinforcementBatch()`

**Purpose:** Handles logic related to `check reinforcement batch`.

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Gets the current value of `all troops`.

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**Purpose:** Handles logic related to `spawn troops`.

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**Purpose:** Sets the value or state of `spawn with horses`.

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**Purpose:** Sets the value or state of `banner bearer logic`.

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**Purpose:** Sets the value or state of `reinforcements notified on last batch`.

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**Purpose:** Sets the value or state of `spawn troops`.

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**Purpose:** Called when the `initial spawn over` event is raised.

### OnInitialTroopsSpawned
`public void OnInitialTroopsSpawned()`

**Purpose:** Called when the `initial troops spawned` event is raised.

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

**Purpose:** Called when the `phase changed delegate` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentSpawnLogic());
```

## See Also

- [Complete Class Catalog](../catalog)