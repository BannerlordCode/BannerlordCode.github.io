---
title: "CombatMissionWithDialogueController"
description: "Auto-generated class reference for CombatMissionWithDialogueController."
---
# CombatMissionWithDialogueController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CombatMissionWithDialogueController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CombatMissionWithDialogueController.cs`

## Overview

`CombatMissionWithDialogueController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `CombatMissionWithDialogueController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.OnMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the `agent hit` event is raised.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### StartFight
`public void StartFight(bool hasPlayerChangedSide)`

**Purpose:** Starts the `fight` flow or state machine.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.StartFight(false);
```

### StartConversation
`public void StartConversation(Agent agent, bool setActionsInstantly)`

**Purpose:** Starts the `conversation` flow or state machine.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.StartConversation(agent, false);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**Purpose:** Starts the `spawner` flow or state machine.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**Purpose:** Stops the `spawner` flow or state machine.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
combatMissionWithDialogueController.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side spawn enabled` state or condition.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.IsSideSpawnEnabled(side);
```

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = (BattleSideEnum)(-1))`

**Purpose:** Reads and returns the `reinforcement interval` value held by the current object.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.GetReinforcementInterval((BattleSideEnum)(-1));
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side depleted` state or condition.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.IsSideDepleted(side);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the `all troops for side` value held by the current object.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.GetAllTroopsForSide(side);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Reads and returns the `number of player controllable troops` value held by the current object.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.GetNumberOfPlayerControllableTroops();
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**Purpose:** Reads and returns the `spawn horses` value held by the current object.

```csharp
// Obtain an instance of CombatMissionWithDialogueController from the subsystem API first
CombatMissionWithDialogueController combatMissionWithDialogueController = ...;
var result = combatMissionWithDialogueController.GetSpawnHorses(side);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<CombatMissionWithDialogueController>();
```

## See Also

- [Area Index](../)