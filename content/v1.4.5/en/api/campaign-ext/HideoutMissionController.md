---
title: "HideoutMissionController"
description: "Auto-generated class reference for HideoutMissionController."
---
# HideoutMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutMissionController.cs`

## Overview

`HideoutMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopSpawningActive` | `public bool TroopSpawningActive { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |

## Key Methods

### SpawnTroops
`public void SpawnTroops(List<CommonAreaMarker> areaMarkers, List<PatrolArea> patrolAreas, Dictionary<Agent, UsedObject> defenderAgentObjects, int spawnCount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.SpawnTroops(areaMarkers, patrolAreas, dictionary<Agent, defenderAgentObjects, 0);
```

### SpawnRemainingTroopsForBossFight
`public void SpawnRemainingTroopsForBossFight(List<MatrixFrame> spawnFrames, int spawnCount, CharacterObject overriddenHideoutBossCharacterObject)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.SpawnRemainingTroopsForBossFight(spawnFrames, 0, overriddenHideoutBossCharacterObject);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**Purpose:** Assigns a new value to `spawn troops` and updates the object's internal state.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.SetSpawnTroops(false);
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Reads and returns the `all troops` value held by the current object.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetAllTroops();
```

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnBehaviorInitialize();
```

### OnObjectStoppedBeingUsed
`public override void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the `object stopped being used` event is raised.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnObjectStoppedBeingUsed(userAgent, usedObject);
```

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**Purpose:** Invoked when the `agent alarmed state changed` event is raised.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnAgentAlarmedStateChanged(agent, flag);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**Purpose:** Invoked when the `mission state finalized` event is raised.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.OnMissionStateFinalized();
```

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**Purpose:** Assigns a new value to `overridden hideout boss character object` and updates the object's internal state.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.SetOverriddenHideoutBossCharacterObject(characterObject);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Starts the `spawner` flow or state machine.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Stops the `spawner` flow or state machine.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
hideoutMissionController.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side spawn enabled` state or condition.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.IsSideSpawnEnabled(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = (BattleSideEnum)(-1))`

**Purpose:** Reads and returns the `reinforcement interval` value held by the current object.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetReinforcementInterval((BattleSideEnum)(-1));
```

### IsSideDepleted
`public unsafe bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side depleted` state or condition.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.IsSideDepleted(side);
```

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**Purpose:** Starts the `boss fight duel mode` flow or state machine.

```csharp
// Static call; no instance required
HideoutMissionController.StartBossFightDuelMode();
```

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**Purpose:** Starts the `boss fight battle mode` flow or state machine.

```csharp
// Static call; no instance required
HideoutMissionController.StartBossFightBattleMode();
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the `all troops for side` value held by the current object.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the `number of player controllable troops` value held by the current object.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Reads and returns the `spawn horses` value held by the current object.

```csharp
// Obtain an instance of HideoutMissionController from the subsystem API first
HideoutMissionController hideoutMissionController = ...;
var result = hideoutMissionController.GetSpawnHorses(side);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutMissionController>();
```

## See Also

- [Area Index](../)