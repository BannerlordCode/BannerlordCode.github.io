---
title: "AnimationPoint"
description: "AnimationPoint: a public class in SandBox, inheriting StandingPoint; 53 exposed members (31 methods, 7 properties, 13 fields). Source: SandBox/Objects/AnimationPoints/AnimationPoint.cs."
---
# AnimationPoint

**Namespace:** `SandBox.Objects.AnimationPoints`
**Module:** `SandBox`
**Type:** `public class AnimationPoint : StandingPoint`
**File:** `SandBox/Objects/AnimationPoints/AnimationPoint.cs`

## Overview

AnimationPoint lives in the SandBox module, source file SandBox/Objects/AnimationPoints/AnimationPoint.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is AnimationPoint → StandingPoint. It exposes 53 public/protected members: 31 methods, 7 properties, 13 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AnimationPoint is a top-level type in SandBox, namespace differing from (SandBox.Objects.AnimationPoints) the module directory; inheritance chain AnimationPoint → StandingPoint. The surface is method-led (methods 31/53, properties 7/53), so it mostly exposes operations. StandingPoint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AnimationPoints/AnimationPoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerStopsUsingWhenInteractsWithOther` | `public override bool PlayerStopsUsingWhenInteractsWithOther` | property |
| `IsArriveActionFinished` | `public bool IsArriveActionFinished` | property |
| `SelectedRightHandItem` | `protected string SelectedRightHandItem` | property |
| `SelectedLeftHandItem` | `protected string SelectedLeftHandItem` | property |
| `IsActive` | `public bool IsActive` | property |
| `AnimationPoint` | `public AnimationPoint()` | constructor |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse` | property |
| `OnEditModeVisibilityChanged` | `protected override void OnEditModeVisibilityChanged(bool currentVisibility)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `ResetAnimations` | `protected void ResetAnimations()` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `RequestResync` | `public void RequestResync()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `ShouldUpdateOnEditorVariableChanged` | `protected virtual bool ShouldUpdateOnEditorVariableChanged(string variableName)` | method |
| `ClearAssignedItems` | `protected void ClearAssignedItems()` | method |
| `AssignItemToBone` | `protected void AssignItemToBone(AnimationPoint.ItemForBone newItem)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `SetActionCodes` | `protected virtual void SetActionCodes()` | method |
| `DoesActionTypeStopUsingGameObject` | `protected override bool DoesActionTypeStopUsingGameObject(Agent.ActionCodeType actionType)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetUserFrameForAgent` | `public override WorldFrame GetUserFrameForAgent(Agent agent)` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `SimulateTick` | `public override void SimulateTick(float dt)` | method |
| `HasAlternative` | `public override bool HasAlternative()` | method |
| `GetRandomWaitInSeconds` | `public float GetRandomWaitInSeconds()` | method |
| `List` | `public List<AnimationPoint>GetAlternatives()` | method |
| `IsRotationCorrectDuringUsage` | `public bool IsRotationCorrectDuringUsage()` | method |
| `CanAgentUseItem` | `protected bool CanAgentUseItem(Agent agent)` | method |
| `AddItemsToAgent` | `protected void AddItemsToAgent()` | method |
| `OnUserConversationStart` | `public override void OnUserConversationStart()` | method |
| `OnUserConversationEnd` | `public override void OnUserConversationEnd()` | method |
| `SetAgentItemsVisibility` | `public void SetAgentItemsVisibility(bool isVisible)` | method |
| `ArriveAction` | `public string ArriveAction` | field |
| `LoopStartAction` | `public string LoopStartAction` | field |
| `PairLoopStartAction` | `public string PairLoopStartAction` | field |
| `LeaveAction` | `public string LeaveAction` | field |
| `GroupId` | `public int GroupId` | field |
| `RightHandItem` | `public string RightHandItem` | field |
| `RightHandItemBone` | `public HumanBone RightHandItemBone` | field |
| `LeftHandItem` | `public string LeftHandItem` | field |
| `LeftHandItemBone` | `public HumanBone LeftHandItemBone` | field |
| `MinUserToStartInteraction` | `public int MinUserToStartInteraction` | field |
| `MinWaitinSeconds` | `public float MinWaitinSeconds` | field |
| `MaxWaitInSeconds` | `public float MaxWaitInSeconds` | field |
| `ActionSpeed` | `protected float ActionSpeed` | field |
| `ItemForBone` | `public class ItemForBone` | property |
| `ItemForBone` | `public class ItemForBone` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChairUsePoint](../ChairUsePoint)
- [same namespace DynamicObjectAnimationPoint](../DynamicObjectAnimationPoint)
- [same namespace PlayMusicPoint](../PlayMusicPoint)
