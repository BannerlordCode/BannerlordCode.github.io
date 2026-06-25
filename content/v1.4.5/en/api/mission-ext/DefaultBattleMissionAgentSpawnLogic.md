---
title: "DefaultBattleMissionAgentSpawnLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBattleMissionAgentSpawnLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBattleMissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultBattleMissionAgentSpawnLogic : MissionLogic, IBattleMissionAgentSpawnLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs`

## Overview

`DefaultBattleMissionAgentSpawnLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `DefaultBattleMissionAgentSpawnLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfAgentsForMission` | `public static int MaxNumberOfAgentsForMission { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |
| `IsDeploymentOver` | `public bool IsDeploymentOver { get; }` |

## Key Methods

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

**Purpose:** Called when the `phase changed delegate` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**Purpose:** Initializes the state, resources, or bindings for `with single phase`.

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `all troops for side`.

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**Purpose:** Sets the value or state of `custom reinforcement spawn timer`.

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**Purpose:** Sets the value or state of `spawn troops`.

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

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

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
`public void AddPhaseChangeAction(BattleSideEnum side, OnPhaseChangedDelegate onPhaseChanged)`

**Purpose:** Adds `phase change action` to the current collection or state.

### ComputeDeploymentBaseOffsets
`public static void ComputeDeploymentBaseOffsets(SpawnPathData sideSpawnPathData, float baseDeploymentOffset, out float deployingSideBaseOffset, out float opposingSideBaseOffset)`

**Purpose:** Handles logic related to `compute deployment base offsets`.

### ComputeTeamDeploymentOffsets
`public static void ComputeTeamDeploymentOffsets(SpawnPathData spawnPathData, float deploymentBaseOffset, float interTeamGapOffset, float teamOffsetRanges, out float teamDeployOffsets)`

**Purpose:** Handles logic related to `compute team deployment offsets`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new DefaultBattleMissionAgentSpawnLogic());
```

## See Also

- [Complete Class Catalog](../catalog)