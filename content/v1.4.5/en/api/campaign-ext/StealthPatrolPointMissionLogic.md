---
title: "StealthPatrolPointMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthPatrolPointMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthPatrolPointMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthPatrolPointMissionLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/StealthPatrolPointMissionLogic.cs`

## Overview

`StealthPatrolPointMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `StealthPatrolPointMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnLocationCharacterAgentSpawned
`public void OnLocationCharacterAgentSpawned(LocationCharacterAgentSpawnedMissionEvent locationCharacterAgentSpawnedEvent)`

**Purpose:** Called when the `location character agent spawned` event is raised.

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

### OnCheckpointLoadedEvent
`public void OnCheckpointLoadedEvent(CheckpointLoadedMissionEvent checkpointLoadedMissionEvent)`

**Purpose:** Called when the `checkpoint loaded event` event is raised.

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Handles logic related to `start spawner`.

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Handles logic related to `stop spawner`.

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side spawn enabled`.

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side depleted`.

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = (BattleSideEnum)(-1))`

**Purpose:** Gets the current value of `reinforcement interval`.

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `all troops for side`.

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Gets the current value of `spawn horses`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new StealthPatrolPointMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)