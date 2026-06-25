---
title: "TrainingFieldMissionController"
description: "Auto-generated class reference for TrainingFieldMissionController."
---
# TrainingFieldMissionController

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public class TrainingFieldMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `StoryMode/Missions/TrainingFieldMissionController.cs`

## Overview

`TrainingFieldMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TrainingFieldMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialCurrentObjective` | `public TextObject InitialCurrentObjective { get; }` |
| `Id` | `public string Id { get; }` |
| `IsFinished` | `public bool IsFinished { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `SubTasks` | `public List<TrainingFieldMissionController.TutorialObjective> SubTasks { get; }` |
| `Score` | `public float Score { get; }` |

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.AfterStart();
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Invoked when the `rendering started` event is raised.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnRenderingStarted();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnMissionTick(0);
```

### LoadCrossbowForStarting
`public void LoadCrossbowForStarting()`

**Purpose:** Reads `crossbow for starting` from persistent storage or a stream.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.LoadCrossbowForStarting();
```

### OnAgentShootMissile
`public override void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex = -1)`

**Purpose:** Invoked when the `agent shoot missile` event is raised.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnAgentShootMissile(shooterAgent, weaponIndex, position, velocity, orientation, false, 0);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Invoked when the `score hit` event is raised.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### SetTextVariableOfName
`public void SetTextVariableOfName(string tag, int variable)`

**Purpose:** Assigns a new value to `text variable of name` and updates the object's internal state.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.SetTextVariableOfName("example", 0);
```

### GetNameString
`public string GetNameString()`

**Purpose:** Reads and returns the `name string` value held by the current object.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.GetNameString();
```

### SetActive
`public bool SetActive(bool isActive)`

**Purpose:** Assigns a new value to `active` and updates the object's internal state.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.SetActive(false);
```

### FinishTask
`public bool FinishTask()`

**Purpose:** Concludes the `task` flow and performs any cleanup.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.FinishTask();
```

### FinishSubTask
`public void FinishSubTask(string subTaskName, float score)`

**Purpose:** Concludes the `sub task` flow and performs any cleanup.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.FinishSubTask("example", 0);
```

### SetAllSubTasksInactive
`public bool SetAllSubTasksInactive()`

**Purpose:** Assigns a new value to `all sub tasks inactive` and updates the object's internal state.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.SetAllSubTasksInactive();
```

### AddSubTask
`public void AddSubTask(TrainingFieldMissionController.TutorialObjective newSubTask)`

**Purpose:** Adds `sub task` to the current collection or state.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.AddSubTask(newSubTask);
```

### RestoreScoreFromSave
`public void RestoreScoreFromSave(float score)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
trainingFieldMissionController.RestoreScoreFromSave(0);
```

### Update
`public bool Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of TrainingFieldMissionController from the subsystem API first
TrainingFieldMissionController trainingFieldMissionController = ...;
var result = trainingFieldMissionController.Update();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TrainingFieldMissionController>();
```

## See Also

- [Area Index](../)