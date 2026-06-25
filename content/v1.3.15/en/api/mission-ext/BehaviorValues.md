---
title: "BehaviorValues"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorValues`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorValues

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BehaviorValues`
**Area:** mission-ext

## Overview

`BehaviorValues` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public unsafe void ParallelUpdateFormationMovement()`

**Purpose:** Handles logic related to `parallel update formation movement`.

## Usage Example

```csharp
// First obtain a BehaviorValues instance from game state, then call one of its public methods
var value = new BehaviorValues();
value.OverrideBehaviorParams(behavior, 0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
