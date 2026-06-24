<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HumanAIComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HumanAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HumanAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/HumanAIComponent.cs`

## Overview

`HumanAIComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `HumanAIComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FollowedAgent` | `public Agent FollowedAgent { get; }` |
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation { get; }` |

## Key Methods

### GetValueAt
`public float GetValueAt(float x)`

**Purpose:** Gets the current value of `value at`.

### OverrideBehaviorParams
`public void OverrideBehaviorParams(AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**Purpose:** Handles logic related to `override behavior params`.

### SyncBehaviorParamsIfNecessary
`public void SyncBehaviorParamsIfNecessary()`

**Purpose:** Handles logic related to `sync behavior params if necessary`.

### DisablePickUpForAgentIfNeeded
`public void DisablePickUpForAgentIfNeeded()`

**Purpose:** Handles logic related to `disable pick up for agent if needed`.

### OnTickParallel
`public override void OnTickParallel(float dt)`

**Purpose:** Called when the `tick parallel` event is raised.

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved()`

**Purpose:** Called when the `agent removed` event is raised.

### OnComponentRemoved
`public override void OnComponentRemoved()`

**Purpose:** Called when the `component removed` event is raised.

### IsInImportantCombatAction
`public bool IsInImportantCombatAction()`

**Purpose:** Handles logic related to `is in important combat action`.

### GetCurrentlyMovingGameObject
`public UsableMissionObject GetCurrentlyMovingGameObject()`

**Purpose:** Gets the current value of `currently moving game object`.

### GetCurrentlyDefendingGameObject
`public UsableMissionObject GetCurrentlyDefendingGameObject()`

**Purpose:** Gets the current value of `currently defending game object`.

### MoveToUsableGameObject
`public void MoveToUsableGameObject(UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**Purpose:** Handles logic related to `move to usable game object`.

### MoveToClear
`public void MoveToClear()`

**Purpose:** Handles logic related to `move to clear`.

### StartDefendingGameObject
`public void StartDefendingGameObject(UsableMissionObject usedObject, IDetachment detachment)`

**Purpose:** Handles logic related to `start defending game object`.

### StopDefendingGameObject
`public void StopDefendingGameObject()`

**Purpose:** Handles logic related to `stop defending game object`.

### IsInterestedInAnyGameObject
`public bool IsInterestedInAnyGameObject()`

**Purpose:** Handles logic related to `is interested in any game object`.

### IsInterestedInGameObject
`public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)`

**Purpose:** Handles logic related to `is interested in game object`.

### FollowAgent
`public void FollowAgent(Agent agent)`

**Purpose:** Handles logic related to `follow agent`.

### GetDesiredSpeedInFormation
`public float GetDesiredSpeedInFormation(bool isCharging)`

**Purpose:** Gets the current value of `desired speed in formation`.

### AdjustSpeedLimit
`public void AdjustSpeedLimit(Agent agent, float desiredSpeed, bool limitIsMultiplier)`

**Purpose:** Handles logic related to `adjust speed limit`.

### ParallelUpdateFormationMovement
`public void ParallelUpdateFormationMovement()`

**Purpose:** Handles logic related to `parallel update formation movement`.

### OnRetreating
`public override void OnRetreating()`

**Purpose:** Called when the `retreating` event is raised.

### OnDismount
`public override void OnDismount(Agent mount)`

**Purpose:** Called when the `dismount` event is raised.

### SetBehaviorValueSet
`public void SetBehaviorValueSet(BehaviorValueSet behaviorValueSet)`

**Purpose:** Sets the value or state of `behavior value set`.

### RefreshBehaviorValues
`public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**Purpose:** Refreshes the display or cache of `behavior values`.

### ForceDisablePickUpForAgent
`public void ForceDisablePickUpForAgent()`

**Purpose:** Handles logic related to `force disable pick up for agent`.

### SetScriptedPositionAndDirectionTimed
`public void SetScriptedPositionAndDirectionTimed(Vec2 position, float directionAsRotationInRadians, float duration)`

**Purpose:** Sets the value or state of `scripted position and direction timed`.

### DisableTimedScriptedMovement
`public void DisableTimedScriptedMovement()`

**Purpose:** Handles logic related to `disable timed scripted movement`.

## Usage Example

```csharp
var component = agent.GetComponent<HumanAIComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)