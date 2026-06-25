---
title: "DefaultBattleMissionAgentSpawnLogic"
description: "Auto-generated class reference for DefaultBattleMissionAgentSpawnLogic."
---
# DefaultBattleMissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultBattleMissionAgentSpawnLogic : MissionLogic, IBattleMissionAgentSpawnLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs`

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

**Purpose:** **Purpose:** Invoked when the phase changed delegate event is raised.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.OnPhaseChangedDelegate();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.OnMissionTick(0);
```

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by with single phase.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.InitWithSinglePhase(0, 0, 0, 0, false, false, spawnSettings);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the all troops for side value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetAllTroopsForSide(side);
```

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**Purpose:** **Purpose:** Assigns a new value to custom reinforcement spawn timer and updates the object's internal state.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.SetCustomReinforcementSpawnTimer(timer);
```

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**Purpose:** **Purpose:** Assigns a new value to spawn troops and updates the object's internal state.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.SetSpawnTroops(side, false, false);
```

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)`

**Purpose:** **Purpose:** Assigns a new value to spawn horses and updates the object's internal state.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.SetSpawnHorses(side, false);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** **Purpose:** Starts the spawner flow or state machine.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** **Purpose:** Stops the spawner flow or state machine.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the side spawn enabled state or condition.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.IsSideSpawnEnabled(side);
```

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide)`

**Purpose:** **Purpose:** Invoked when the side deployment over event is raised.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.OnSideDeploymentOver(battleSide);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** **Purpose:** Reads and returns the number of player controllable troops value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetNumberOfPlayerControllableTroops();
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

**Purpose:** **Purpose:** Reads and returns the reinforcement interval value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetReinforcementInterval(battleSideEnum.None);
```

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)`

**Purpose:** **Purpose:** Assigns a new value to reinforcements spawn enabled and updates the object's internal state.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.SetReinforcementsSpawnEnabled(false, false);
```

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the total number of troops for side value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetTotalNumberOfTroopsForSide(side);
```

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the general character of side value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetGeneralCharacterOfSide(side);
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the spawn horses value held by the this instance.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.GetSpawnHorses(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the side depleted state or condition.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
var result = defaultBattleMissionAgentSpawnLogic.IsSideDepleted(side);
```

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side, OnPhaseChangedDelegate onPhaseChanged)`

**Purpose:** **Purpose:** Adds phase change action to the current collection or state.

```csharp
// Obtain an instance of DefaultBattleMissionAgentSpawnLogic from the subsystem API first
DefaultBattleMissionAgentSpawnLogic defaultBattleMissionAgentSpawnLogic = ...;
defaultBattleMissionAgentSpawnLogic.AddPhaseChangeAction(side, onPhaseChanged);
```

### ComputeDeploymentBaseOffsets
`public static void ComputeDeploymentBaseOffsets(SpawnPathData sideSpawnPathData, float baseDeploymentOffset, out float deployingSideBaseOffset, out float opposingSideBaseOffset)`

**Purpose:** **Purpose:** Executes the ComputeDeploymentBaseOffsets logic.

```csharp
// Static call; no instance required
DefaultBattleMissionAgentSpawnLogic.ComputeDeploymentBaseOffsets(sideSpawnPathData, 0, deployingSideBaseOffset, opposingSideBaseOffset);
```

### ComputeTeamDeploymentOffsets
`public static void ComputeTeamDeploymentOffsets(SpawnPathData spawnPathData, float deploymentBaseOffset, float interTeamGapOffset, float teamOffsetRanges, out float teamDeployOffsets)`

**Purpose:** **Purpose:** Executes the ComputeTeamDeploymentOffsets logic.

```csharp
// Static call; no instance required
DefaultBattleMissionAgentSpawnLogic.ComputeTeamDeploymentOffsets(spawnPathData, 0, 0, 0, teamDeployOffsets);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>();
```

## See Also

- [Area Index](../)