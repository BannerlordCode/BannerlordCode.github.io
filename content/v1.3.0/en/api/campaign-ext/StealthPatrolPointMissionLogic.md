---
title: "StealthPatrolPointMissionLogic"
description: "Auto-generated class reference for StealthPatrolPointMissionLogic."
---
# StealthPatrolPointMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthPatrolPointMissionLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs`

## Overview

`StealthPatrolPointMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `StealthPatrolPointMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.AfterStart();
```

### OnLocationCharacterAgentSpawned
`public void OnLocationCharacterAgentSpawned(LocationCharacterAgentSpawnedMissionEvent locationCharacterAgentSpawnedEvent)`

**Purpose:** Invoked when the location character agent spawned event is raised.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.OnLocationCharacterAgentSpawned(locationCharacterAgentSpawnedEvent);
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the agent interaction event is raised.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.OnAgentInteraction(userAgent, agent, 0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.IsThereAgentAction(userAgent, otherAgent);
```

### OnCheckpointLoadedEvent
`public void OnCheckpointLoadedEvent(CheckpointLoadedMissionEvent checkpointLoadedMissionEvent)`

**Purpose:** Invoked when the checkpoint loaded event event is raised.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.OnCheckpointLoadedEvent(checkpointLoadedMissionEvent);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Starts the spawner flow or state machine.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Stops the spawner flow or state machine.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
stealthPatrolPointMissionLogic.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Determines whether the this instance is in the side spawn enabled state or condition.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.IsSideSpawnEnabled(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Determines whether the this instance is in the side depleted state or condition.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.IsSideDepleted(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**Purpose:** Reads and returns the reinforcement interval value held by the this instance.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.GetReinforcementInterval();
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the all troops for side value held by the this instance.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the number of player controllable troops value held by the this instance.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Reads and returns the spawn horses value held by the this instance.

```csharp
// Obtain an instance of StealthPatrolPointMissionLogic from the subsystem API first
StealthPatrolPointMissionLogic stealthPatrolPointMissionLogic = ...;
var result = stealthPatrolPointMissionLogic.GetSpawnHorses(side);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<StealthPatrolPointMissionLogic>();
```

## See Also

- [Area Index](../)