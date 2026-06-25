---
title: "WhileEnteringSettlementBattleMissionController"
description: "Auto-generated class reference for WhileEnteringSettlementBattleMissionController."
---
# WhileEnteringSettlementBattleMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class WhileEnteringSettlementBattleMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/WhileEnteringSettlementBattleMissionController.cs`

## Overview

`WhileEnteringSettlementBattleMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `WhileEnteringSettlementBattleMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
whileEnteringSettlementBattleMissionController.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
whileEnteringSettlementBattleMissionController.OnMissionTick(0);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Starts the spawner flow or state machine.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
whileEnteringSettlementBattleMissionController.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Stops the spawner flow or state machine.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
whileEnteringSettlementBattleMissionController.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Determines whether the this instance is in the side spawn enabled state or condition.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.IsSideSpawnEnabled(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = (BattleSideEnum)(-1))`

**Purpose:** Reads and returns the reinforcement interval value held by the this instance.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.GetReinforcementInterval((BattleSideEnum)(-1));
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Determines whether the this instance is in the side depleted state or condition.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.IsSideDepleted(side);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the all troops for side value held by the this instance.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the number of player controllable troops value held by the this instance.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Reads and returns the spawn horses value held by the this instance.

```csharp
// Obtain an instance of WhileEnteringSettlementBattleMissionController from the subsystem API first
WhileEnteringSettlementBattleMissionController whileEnteringSettlementBattleMissionController = ...;
var result = whileEnteringSettlementBattleMissionController.GetSpawnHorses(side);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<WhileEnteringSettlementBattleMissionController>();
```

## See Also

- [Area Index](../)