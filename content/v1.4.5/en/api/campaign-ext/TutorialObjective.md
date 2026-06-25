---
title: "TutorialObjective"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialObjective`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialObjective

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public class TutorialObjective`
**Area:** campaign-ext

## Overview

`TutorialObjective` lives in `StoryMode.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `IsFinished` | `public bool IsFinished { get; }` |
| `HasBackground` | `public bool HasBackground { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `SubTasks` | `public List<TutorialObjective> SubTasks { get; }` |
| `Score` | `public float Score { get; }` |
| `InitialCurrentObjective` | `public TextObject InitialCurrentObjective { get; }` |

## Key Methods

### SetTextVariableOfName
`public void SetTextVariableOfName(string tag, int variable)`

**Purpose:** Sets the value or state of `text variable of name`.

### GetNameString
`public string GetNameString()`

**Purpose:** Gets the current value of `name string`.

### SetActive
`public bool SetActive(bool isActive)`

**Purpose:** Sets the value or state of `active`.

### FinishTask
`public bool FinishTask()`

**Purpose:** Handles logic related to `finish task`.

### FinishSubTask
`public void FinishSubTask(string subTaskName, float score)`

**Purpose:** Handles logic related to `finish sub task`.

### SetAllSubTasksInactive
`public bool SetAllSubTasksInactive()`

**Purpose:** Sets the value or state of `all sub tasks inactive`.

### AddSubTask
`public void AddSubTask(TutorialObjective newSubTask)`

**Purpose:** Adds `sub task` to the current collection or state.

### RestoreScoreFromSave
`public void RestoreScoreFromSave(float score)`

**Purpose:** Handles logic related to `restore score from save`.

### DelayedAction
`public readonly struct DelayedAction(Action order, float delayTime)`

**Purpose:** Handles logic related to `delayed action`.

### Update
`public bool Update()`

**Purpose:** Updates the state or data of `update`.

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Called when the `rendering started` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### LoadCrossbowForStarting
`public void LoadCrossbowForStarting()`

**Purpose:** Loads `crossbow for starting` data.

### OnAgentShootMissile
`public override void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)`

**Purpose:** Called when the `agent shoot missile` event is raised.

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Called when the `score hit` event is raised.

## Usage Example

```csharp
// First obtain a TutorialObjective instance from game state, then call one of its public methods
var value = new TutorialObjective();
value.SetTextVariableOfName("example", 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
