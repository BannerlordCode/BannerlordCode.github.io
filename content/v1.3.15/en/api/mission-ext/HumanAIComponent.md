---
title: "HumanAIComponent"
description: "Auto-generated class reference for HumanAIComponent."
---
# HumanAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HumanAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/HumanAIComponent.cs`

## Overview

`HumanAIComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `HumanAIComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FollowedAgent` | `public Agent FollowedAgent { get; }` |
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation { get; }` |
| `IsDefending` | `public bool IsDefending { get; }` |
| `HasTimedScriptedFrame` | `public bool HasTimedScriptedFrame { get; }` |

## Key Methods

### OverrideBehaviorParams
`public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**Purpose:** **Purpose:** Executes the OverrideBehaviorParams logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OverrideBehaviorParams(behavior, 0, 0, 0, 0, 0);
```

### SyncBehaviorParamsIfNecessary
`public void SyncBehaviorParamsIfNecessary()`

**Purpose:** **Purpose:** Synchronizes behavior params if necessary across the relevant contexts or systems.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SyncBehaviorParamsIfNecessary();
```

### DisablePickUpForAgentIfNeeded
`public void DisablePickUpForAgentIfNeeded()`

**Purpose:** **Purpose:** Executes the DisablePickUpForAgentIfNeeded logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.DisablePickUpForAgentIfNeeded();
```

### OnTickParallel
`public override void OnTickParallel(float dt)`

**Purpose:** **Purpose:** Invoked when the tick parallel event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnTickParallel(0);
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved()`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnAgentRemoved();
```

### OnComponentRemoved
`public override void OnComponentRemoved()`

**Purpose:** **Purpose:** Invoked when the component removed event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnComponentRemoved();
```

### IsInImportantCombatAction
`public bool IsInImportantCombatAction()`

**Purpose:** **Purpose:** Determines whether the this instance is in the in important combat action state or condition.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInImportantCombatAction();
```

### GetCurrentlyMovingGameObject
`public UsableMissionObject GetCurrentlyMovingGameObject()`

**Purpose:** **Purpose:** Reads and returns the currently moving game object value held by the this instance.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetCurrentlyMovingGameObject();
```

### GetCurrentlyDefendingGameObject
`public UsableMissionObject GetCurrentlyDefendingGameObject()`

**Purpose:** **Purpose:** Reads and returns the currently defending game object value held by the this instance.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetCurrentlyDefendingGameObject();
```

### MoveToUsableGameObject
`public void MoveToUsableGameObject(UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**Purpose:** **Purpose:** Moves to usable game object to a new position or state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.MoveToUsableGameObject(usedObject, detachment, agent.AIScriptedFrameFlags.NoAttack);
```

### MoveToClear
`public void MoveToClear()`

**Purpose:** **Purpose:** Moves to clear to a new position or state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.MoveToClear();
```

### StartDefendingGameObject
`public void StartDefendingGameObject(UsableMissionObject usedObject, IDetachment detachment)`

**Purpose:** **Purpose:** Starts the defending game object flow or state machine.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.StartDefendingGameObject(usedObject, detachment);
```

### StopDefendingGameObject
`public void StopDefendingGameObject()`

**Purpose:** **Purpose:** Stops the defending game object flow or state machine.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.StopDefendingGameObject();
```

### IsInterestedInAnyGameObject
`public bool IsInterestedInAnyGameObject()`

**Purpose:** **Purpose:** Determines whether the this instance is in the interested in any game object state or condition.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInterestedInAnyGameObject();
```

### IsInterestedInGameObject
`public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)`

**Purpose:** **Purpose:** Determines whether the this instance is in the interested in game object state or condition.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInterestedInGameObject(usableMissionObject);
```

### FollowAgent
`public void FollowAgent(Agent agent)`

**Purpose:** **Purpose:** Executes the FollowAgent logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.FollowAgent(agent);
```

### GetDesiredSpeedInFormation
`public float GetDesiredSpeedInFormation(bool isCharging)`

**Purpose:** **Purpose:** Reads and returns the desired speed in formation value held by the this instance.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetDesiredSpeedInFormation(false);
```

### AdjustSpeedLimit
`public void AdjustSpeedLimit(Agent agent, float desiredSpeed, bool limitIsMultiplier)`

**Purpose:** **Purpose:** Executes the AdjustSpeedLimit logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.AdjustSpeedLimit(agent, 0, false);
```

### ParallelUpdateFormationMovement
`public unsafe void ParallelUpdateFormationMovement()`

**Purpose:** **Purpose:** Executes the ParallelUpdateFormationMovement logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.ParallelUpdateFormationMovement();
```

### OnRetreating
`public override void OnRetreating()`

**Purpose:** **Purpose:** Invoked when the retreating event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnRetreating();
```

### OnDismount
`public override void OnDismount(Agent mount)`

**Purpose:** **Purpose:** Invoked when the dismount event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnDismount(mount);
```

### SetBehaviorValueSet
`public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet)`

**Purpose:** **Purpose:** Assigns a new value to behavior value set and updates the object's internal state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SetBehaviorValueSet(behaviorValueSet);
```

### RefreshBehaviorValues
`public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**Purpose:** **Purpose:** Keeps the display or cache of behavior values in sync with the underlying state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.RefreshBehaviorValues(movementOrder, arrangementOrder);
```

### ForceDisablePickUpForAgent
`public void ForceDisablePickUpForAgent()`

**Purpose:** **Purpose:** Executes the ForceDisablePickUpForAgent logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.ForceDisablePickUpForAgent();
```

### SetScriptedPositionAndDirectionTimed
`public void SetScriptedPositionAndDirectionTimed(Vec2 position, float directionAsRotationInRadians, float duration)`

**Purpose:** **Purpose:** Assigns a new value to scripted position and direction timed and updates the object's internal state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SetScriptedPositionAndDirectionTimed(position, 0, 0);
```

### DisableTimedScriptedMovement
`public void DisableTimedScriptedMovement()`

**Purpose:** **Purpose:** Executes the DisableTimedScriptedMovement logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.DisableTimedScriptedMovement();
```

### GetValueAt
`public float GetValueAt(float x)`

**Purpose:** **Purpose:** Reads and returns the value at value held by the this instance.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetValueAt(0);
```

## Usage Example

```csharp
var component = agent.GetComponent<HumanAIComponent>();
```

## See Also

- [Area Index](../)