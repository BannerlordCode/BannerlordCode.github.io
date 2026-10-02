---
title: "DynamicObjectAnimationPoint"
description: "DynamicObjectAnimationPoint: a public class in SandBox, inheriting StandingPoint; 34 exposed members (19 methods, 6 properties, 9 fields). Source: SandBox/Objects/AnimationPoints/DynamicObjectAnimationPoint.cs."
---
# DynamicObjectAnimationPoint

**Namespace:** `SandBox.Objects.AnimationPoints`
**Module:** `SandBox`
**Type:** `public class DynamicObjectAnimationPoint : StandingPoint`
**File:** `SandBox/Objects/AnimationPoints/DynamicObjectAnimationPoint.cs`

## Overview

DynamicObjectAnimationPoint lives in the SandBox module, source file SandBox/Objects/AnimationPoints/DynamicObjectAnimationPoint.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is DynamicObjectAnimationPoint → StandingPoint. It exposes 34 public/protected members: 19 methods, 6 properties, 9 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DynamicObjectAnimationPoint is a top-level type in SandBox, namespace differing from (SandBox.Objects.AnimationPoints) the module directory; inheritance chain DynamicObjectAnimationPoint → StandingPoint. The surface is method-led (methods 19/34, properties 6/34), so it mostly exposes operations. StandingPoint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AnimationPoints/DynamicObjectAnimationPoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsArriveActionFinished` | `public bool IsArriveActionFinished` | property |
| `SelectedRightHandItem` | `protected string SelectedRightHandItem` | property |
| `SelectedLeftHandItem` | `protected string SelectedLeftHandItem` | property |
| `PlayerStopsUsingWhenInteractsWithOther` | `public override bool PlayerStopsUsingWhenInteractsWithOther` | property |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse` | property |
| `IsActive` | `public bool IsActive` | property |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `DoesActionTypeStopUsingGameObject` | `protected override bool DoesActionTypeStopUsingGameObject(Agent.ActionCodeType actionType)` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `GetUserFrameForAgent` | `public override WorldFrame GetUserFrameForAgent(Agent agent)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `SimulateTick` | `public override void SimulateTick(float dt)` | method |
| `HasAlternative` | `public override bool HasAlternative()` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnUserConversationStart` | `public override void OnUserConversationStart()` | method |
| `OnUserConversationEnd` | `public override void OnUserConversationEnd()` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `SetAgentItemsVisibility` | `public void SetAgentItemsVisibility(bool isVisible)` | method |
| `AssignItemToBone` | `protected void AssignItemToBone(AnimationPoint.ItemForBone newItem)` | method |
| `IsRotationCorrectDuringUsage` | `public bool IsRotationCorrectDuringUsage()` | method |
| `CanAgentUseItem` | `protected bool CanAgentUseItem(Agent agent)` | method |
| `AddItemsToAgent` | `protected void AddItemsToAgent()` | method |
| `ArriveAction` | `public string ArriveAction` | field |
| `LoopStartAction` | `public string LoopStartAction` | field |
| `LeaveAction` | `public string LeaveAction` | field |
| `ActionSpeed` | `public float ActionSpeed` | field |
| `RightHandItem` | `public string RightHandItem` | field |
| `RightHandItemBone` | `public HumanBone RightHandItemBone` | field |
| `LeftHandItem` | `public string LeftHandItem` | field |
| `LeftHandItemBone` | `public HumanBone LeftHandItemBone` | field |
| `GroupId` | `public int GroupId` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimationPoint](../AnimationPoint)
- [same namespace ChairUsePoint](../ChairUsePoint)
- [same namespace PlayMusicPoint](../PlayMusicPoint)
