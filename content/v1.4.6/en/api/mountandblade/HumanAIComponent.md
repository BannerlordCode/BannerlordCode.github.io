---
title: "HumanAIComponent"
description: "HumanAIComponent: a public class in TaleWorlds.MountAndBlade, inheriting AgentComponent; 41 exposed members (27 methods, 8 properties, 1 fields). Source: TaleWorlds.MountAndBlade/HumanAIComponent.cs."
---
# HumanAIComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class HumanAIComponent : AgentComponent`
**File:** `TaleWorlds.MountAndBlade/HumanAIComponent.cs`

## Overview

HumanAIComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/HumanAIComponent.cs. It is a public class, implementing/inheriting AgentComponent; the inheritance chain is HumanAIComponent → AgentComponent. It exposes 41 public/protected members: 27 methods, 8 properties, 1 fields, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HumanAIComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain HumanAIComponent → AgentComponent. The surface is method-led (methods 27/41, properties 8/41), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/HumanAIComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FollowedAgent` | `public Agent FollowedAgent` | property |
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation` | property |
| `IsDefending` | `public bool IsDefending` | property |
| `HasTimedScriptedFrame` | `public bool HasTimedScriptedFrame` | property |
| `HumanAIComponent` | `public HumanAIComponent(Agent agent) : base(agent)` | constructor |
| `OverrideBehaviorParams` | `public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)` | method |
| `SyncBehaviorParamsIfNecessary` | `public void SyncBehaviorParamsIfNecessary()` | method |
| `DisablePickUpForAgentIfNeeded` | `public void DisablePickUpForAgentIfNeeded()` | method |
| `OnTickParallel` | `public override void OnTickParallel(float dt)` | method |
| `OnTick` | `public override void OnTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved()` | method |
| `OnComponentRemoved` | `public override void OnComponentRemoved()` | method |
| `IsInImportantCombatAction` | `public bool IsInImportantCombatAction()` | method |
| `GetCurrentlyMovingGameObject` | `public UsableMissionObject GetCurrentlyMovingGameObject()` | method |
| `GetCurrentlyDefendingGameObject` | `public UsableMissionObject GetCurrentlyDefendingGameObject()` | method |
| `MoveToUsableGameObject` | `public void MoveToUsableGameObject(UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)` | method |
| `MoveToClear` | `public void MoveToClear()` | method |
| `StartDefendingGameObject` | `public void StartDefendingGameObject(UsableMissionObject usedObject, IDetachment detachment)` | method |
| `StopDefendingGameObject` | `public void StopDefendingGameObject()` | method |
| `IsInterestedInAnyGameObject` | `public bool IsInterestedInAnyGameObject()` | method |
| `IsInterestedInGameObject` | `public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)` | method |
| `FollowAgent` | `public void FollowAgent(Agent agent)` | method |
| `GetDesiredSpeedInFormation` | `public float GetDesiredSpeedInFormation(bool isCharging)` | method |
| `AdjustSpeedLimit` | `public void AdjustSpeedLimit(Agent agent, float desiredSpeed, bool limitIsMultiplier)` | method |
| `ParallelUpdateFormationMovement` | `public void ParallelUpdateFormationMovement()` | method |
| `OnRetreating` | `public override void OnRetreating()` | method |
| `OnDismount` | `public override void OnDismount(Agent mount)` | method |
| `SetBehaviorValueSet` | `public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet)` | method |
| `RefreshBehaviorValues` | `public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)` | method |
| `ForceDisablePickUpForAgent` | `public void ForceDisablePickUpForAgent()` | method |
| `SetScriptedPositionAndDirectionTimed` | `public void SetScriptedPositionAndDirectionTimed(Vec2 position, float directionAsRotationInRadians, float duration)` | method |
| `DisableTimedScriptedMovement` | `public void DisableTimedScriptedMovement()` | method |
| `FormationSpeedAdjustmentEnabled` | `public static bool FormationSpeedAdjustmentEnabled` | field |
| `BehaviorValues` | `public struct BehaviorValues` | property |
| `AISimpleBehaviorKind` | `public enum AISimpleBehaviorKind` | property |
| `BehaviorValueSet` | `public enum BehaviorValueSet` | property |
| `UsableObjectInterestKind` | `public enum UsableObjectInterestKind` | property |
| `BehaviorValues` | `public struct BehaviorValues` | nested type |
| `AISimpleBehaviorKind` | `public enum AISimpleBehaviorKind` | nested type |
| `BehaviorValueSet` | `public enum BehaviorValueSet` | nested type |
| `UsableObjectInterestKind` | `public enum UsableObjectInterestKind` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentComponent](../AgentComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
