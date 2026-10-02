---
title: "MBActionSet"
description: "MBActionSet: a public struct in TaleWorlds.MountAndBlade; 24 exposed members (22 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/MBActionSet.cs."
---
# MBActionSet

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MBActionSet`
**File:** `TaleWorlds.MountAndBlade/MBActionSet.cs`

## Overview

MBActionSet lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBActionSet.cs. It is a public struct; the inheritance chain is MBActionSet. It exposes 24 public/protected members: 22 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBActionSet is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBActionSet. The surface is method-led (methods 22/24, properties 1/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBActionSet.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `Equals` | `public bool Equals(MBActionSet a)` | method |
| `Equals` | `public bool Equals(int index)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `GetName` | `public string GetName()` | method |
| `GetSkeletonName` | `public string GetSkeletonName()` | method |
| `GetAnimationName` | `public string GetAnimationName(in ActionIndexCache actionCode)` | method |
| `AreActionsAlternatives` | `public bool AreActionsAlternatives(in ActionIndexCache actionCode1, in ActionIndexCache actionCode2)` | method |
| `GetNumberOfActionSets` | `public static int GetNumberOfActionSets()` | method |
| `GetNumberOfMonsterUsageSets` | `public static int GetNumberOfMonsterUsageSets()` | method |
| `GetActionSet` | `public static MBActionSet GetActionSet(string objectID)` | method |
| `GetActionSetWithIndex` | `public static MBActionSet GetActionSetWithIndex(int index)` | method |
| `GetBoneIndexWithId` | `public static sbyte GetBoneIndexWithId(string actionSetId, string boneId)` | method |
| `GetBoneHasParentBone` | `public static bool GetBoneHasParentBone(string actionSetId, sbyte boneIndex)` | method |
| `GetActionDisplacementVector` | `public static Vec3 GetActionDisplacementVector(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | method |
| `GetActionAnimationFlags` | `public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | method |
| `CheckActionAnimationClipExists` | `public static bool CheckActionAnimationClipExists(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | method |
| `GetAnimationIndexOfAction` | `public static int GetAnimationIndexOfAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | method |
| `GetActionAnimationName` | `public static string GetActionAnimationName(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | method |
| `GetActionAnimationDuration` | `public static float GetActionAnimationDuration(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | method |
| `GetActionAnimationContinueToAction` | `public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | method |
| `GetTotalAnimationDurationWithContinueToAction` | `public static float GetTotalAnimationDurationWithContinueToAction(MBActionSet actionSet, ActionIndexCache actionIndexCache)` | method |
| `GetActionBlendOutStartProgress` | `public static float GetActionBlendOutStartProgress(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | method |
| `InvalidActionSet` | `public static readonly MBActionSet InvalidActionSet` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
