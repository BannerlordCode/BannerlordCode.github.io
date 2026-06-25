---
title: "LordsHallFightMissionController"
description: "Auto-generated class reference for LordsHallFightMissionController."
---
# LordsHallFightMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers/LordsHallFightMissionController.cs`

## Overview

`LordsHallFightMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `LordsHallFightMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserAgent` | `public Agent UserAgent { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |

## Key Methods

### SpawnTroops
`public void SpawnTroops(Dictionary<int, Dictionary<int, AreaData>> areaMarkerDictionary, int spawnCount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.SpawnTroops(dictionary<int, dictionary<int, areaMarkerDictionary, 0);
```

### SpawnTroops
`public void SpawnTroops(int spawnCount, bool isReinforcement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.SpawnTroops(0, false);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**Purpose:** Assigns a new value to `spawn troops` and updates the object's internal state.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.SetSpawnTroops(false);
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Reads and returns the `all troops` value held by the current object.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetAllTroops();
```

### GetAvailableMachines
`public IEnumerable<AreaEntityData> GetAvailableMachines(bool isArcher)`

**Purpose:** Reads and returns the `available machines` value held by the current object.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetAvailableMachines(false);
```

### AddAreaMarker
`public void AddAreaMarker(FightAreaMarker marker)`

**Purpose:** Adds `area marker` to the current collection or state.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.AddAreaMarker(marker);
```

### FindAgentMachine
`public AreaEntityData FindAgentMachine(Agent agent)`

**Purpose:** Looks up the matching `agent machine` in the current collection or scope.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.FindAgentMachine(agent);
```

### AssignAgent
`public void AssignAgent(Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.AssignAgent(agent);
```

### StopUse
`public void StopUse()`

**Purpose:** Stops the `use` flow or state machine.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.StopUse();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnBehaviorInitialize();
```

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**Purpose:** Invoked when the `mission state finalized` event is raised.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnMissionStateFinalized();
```

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnCreated();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Starts the `spawner` flow or state machine.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Stops the `spawner` flow or state machine.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
lordsHallFightMissionController.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side spawn enabled` state or condition.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.IsSideSpawnEnabled(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

**Purpose:** Reads and returns the `reinforcement interval` value held by the current object.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetReinforcementInterval(battleSideEnum.None);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side depleted` state or condition.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.IsSideDepleted(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the `number of player controllable troops` value held by the current object.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetNumberOfPlayerControllableTroops();
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the `all troops for side` value held by the current object.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetAllTroopsForSide(side);
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Reads and returns the `spawn horses` value held by the current object.

```csharp
// Obtain an instance of LordsHallFightMissionController from the subsystem API first
LordsHallFightMissionController lordsHallFightMissionController = ...;
var result = lordsHallFightMissionController.GetSpawnHorses(side);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<LordsHallFightMissionController>();
```

## See Also

- [Area Index](../)