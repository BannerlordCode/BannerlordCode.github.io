---
title: "PatrolPoint"
description: "PatrolPoint: a public class in SandBox, inheriting StandingPoint; 15 exposed members (7 methods, 2 properties, 6 fields). Source: SandBox/Objects/PatrolPoint.cs."
---
# PatrolPoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class PatrolPoint : StandingPoint`
**File:** `SandBox/Objects/PatrolPoint.cs`

## Overview

PatrolPoint lives in the SandBox module, source file SandBox/Objects/PatrolPoint.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is PatrolPoint → StandingPoint. It exposes 15 public/protected members: 7 methods, 2 properties, 6 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PatrolPoint is a top-level type in SandBox, namespace differing from (SandBox.Objects) the module directory; inheritance chain PatrolPoint → StandingPoint. The surface is method-led (methods 7/15, properties 2/15), so it mostly exposes operations. StandingPoint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/PatrolPoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedRightHandItem` | `protected string SelectedRightHandItem` | property |
| `SelectedLeftHandItem` | `protected string SelectedLeftHandItem` | property |
| `AssignItemToBone` | `protected void AssignItemToBone(AnimationPoint.ItemForBone newItem)` | method |
| `SetAgentItemsVisibility` | `public void SetAgentItemsVisibility(bool isVisible)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `PatrollingSpeed` | `public readonly float PatrollingSpeed` | field |
| `LoopAction` | `public string LoopAction` | field |
| `RightHandItem` | `public string RightHandItem` | field |
| `RightHandItemBone` | `public HumanBone RightHandItemBone` | field |
| `LeftHandItem` | `public string LeftHandItem` | field |
| `LeftHandItemBone` | `public HumanBone LeftHandItemBone` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheckpointArea](../CheckpointArea)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox)
