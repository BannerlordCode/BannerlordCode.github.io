---
title: "HumanAIComponent"
description: "HumanAIComponent 的自动生成类参考。"
---
# HumanAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HumanAIComponent : AgentComponent `
**Base:** AgentComponent
**Source:** TaleWorlds.MountAndBlade/HumanAIComponent.cs

## 概述

`HumanAIComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/HumanAIComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OverrideBehaviorParams
`public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior,float y1,float x2,float y2,float x3,float y3) `

### SyncBehaviorParamsIfNecessary
`public void SyncBehaviorParamsIfNecessary() `

### DisablePickUpForAgentIfNeeded
`public void DisablePickUpForAgentIfNeeded() `

### OnTickParallel
`public override void OnTickParallel(float dt) `

### OnTick
`public override void OnTick(float dt) `

### OnAgentRemoved
`public override void OnAgentRemoved() `

### OnComponentRemoved
`public override void OnComponentRemoved() `

### IsInImportantCombatAction
`public bool IsInImportantCombatAction() `

### GetCurrentlyMovingGameObject
`public UsableMissionObject GetCurrentlyMovingGameObject() `

### GetCurrentlyDefendingGameObject
`public UsableMissionObject GetCurrentlyDefendingGameObject() `

### MoveToUsableGameObject
`public void MoveToUsableGameObject(UsableMissionObject usedObject,IDetachment detachment,Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack) `

### MoveToClear
`public void MoveToClear() `

### StartDefendingGameObject
`public void StartDefendingGameObject(UsableMissionObject usedObject,IDetachment detachment) `

### StopDefendingGameObject
`public void StopDefendingGameObject() `

### IsInterestedInAnyGameObject
`public bool IsInterestedInAnyGameObject() `

### IsInterestedInGameObject
`public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject) `

### FollowAgent
`public void FollowAgent(Agent agent) `

### GetDesiredSpeedInFormation
`public float GetDesiredSpeedInFormation(bool isCharging) `

### AdjustSpeedLimit
`public void AdjustSpeedLimit(Agent agent,float desiredSpeed,bool limitIsMultiplier) `

### ParallelUpdateFormationMovement
`public void ParallelUpdateFormationMovement() `

### OnRetreating
`public override void OnRetreating() `

### OnDismount
`public override void OnDismount(Agent mount) `

### SetBehaviorValueSet
`public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet) `

### RefreshBehaviorValues
`public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder,ArrangementOrder.ArrangementOrderEnum arrangementOrder) `

### ForceDisablePickUpForAgent
`public void ForceDisablePickUpForAgent() `

### SetScriptedPositionAndDirectionTimed
`public void SetScriptedPositionAndDirectionTimed(Vec2 position,float directionAsRotationInRadians,float duration) `

### DisableTimedScriptedMovement
`public void DisableTimedScriptedMovement() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
