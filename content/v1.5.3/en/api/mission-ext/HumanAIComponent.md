---
title: "HumanAIComponent"
description: "Auto-generated class reference for HumanAIComponent."
---
# HumanAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HumanAIComponent : AgentComponent `
**Base:** AgentComponent
**Source:** TaleWorlds.MountAndBlade/HumanAIComponent.cs

## Overview

Auto-generated stub for `HumanAIComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OverrideBehaviorParams
`public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior,float y1,float x2,float y2,float x3,float y3)`

### SyncBehaviorParamsIfNecessary
`public void SyncBehaviorParamsIfNecessary()`

### DisablePickUpForAgentIfNeeded
`public void DisablePickUpForAgentIfNeeded()`

### OnTickParallel
`public override void OnTickParallel(float dt)`

### OnTick
`public override void OnTick(float dt)`

### OnAgentRemoved
`public override void OnAgentRemoved()`

### OnComponentRemoved
`public override void OnComponentRemoved()`

### IsInImportantCombatAction
`public bool IsInImportantCombatAction()`

### GetCurrentlyMovingGameObject
`public UsableMissionObject GetCurrentlyMovingGameObject()`

### GetCurrentlyDefendingGameObject
`public UsableMissionObject GetCurrentlyDefendingGameObject()`

### MoveToUsableGameObject
`public void MoveToUsableGameObject(UsableMissionObject usedObject,IDetachment detachment,Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

### MoveToClear
`public void MoveToClear()`

### StartDefendingGameObject
`public void StartDefendingGameObject(UsableMissionObject usedObject,IDetachment detachment)`

### StopDefendingGameObject
`public void StopDefendingGameObject()`

### IsInterestedInAnyGameObject
`public bool IsInterestedInAnyGameObject()`

### IsInterestedInGameObject
`public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)`

### FollowAgent
`public void FollowAgent(Agent agent)`

### GetDesiredSpeedInFormation
`public float GetDesiredSpeedInFormation(bool isCharging)`

### AdjustSpeedLimit
`public void AdjustSpeedLimit(Agent agent,float desiredSpeed,bool limitIsMultiplier)`

### ParallelUpdateFormationMovement
`public void ParallelUpdateFormationMovement()`

### OnRetreating
`public override void OnRetreating()`

### OnDismount
`public override void OnDismount(Agent mount)`

### SetBehaviorValueSet
`public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet)`

### RefreshBehaviorValues
`public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder,ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

### ForceDisablePickUpForAgent
`public void ForceDisablePickUpForAgent()`

### SetScriptedPositionAndDirectionTimed
`public void SetScriptedPositionAndDirectionTimed(Vec2 position,float directionAsRotationInRadians,float duration)`

### DisableTimedScriptedMovement
`public void DisableTimedScriptedMovement()`

## See Also

- [Section index](../)
