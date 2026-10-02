---
title: "MBAnimation"
description: "MBAnimation: a public struct in TaleWorlds.MountAndBlade; 23 exposed members (22 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBAnimation.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBAnimation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MBAnimation`
**File:** `TaleWorlds.MountAndBlade/MBAnimation.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBAnimation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBAnimation.cs. It is a public struct; the inheritance chain is MBAnimation. It exposes 23 public/protected members: 22 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBAnimation lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBAnimation. The surface is method-led (methods 22/23, properties 0/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBAnimation.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBAnimation` | `public MBAnimation(MBAnimation animation)` | constructor |
| `Equals` | `public bool Equals(MBAnimation a)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `GetAnimationIndexWithName` | `public static int GetAnimationIndexWithName(string animationName)` | method |
| `GetActionType` | `public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex)` | method |
| `PrefetchAnimationClip` | `public static void PrefetchAnimationClip(MBActionSet actionSet, ActionIndexCache actionIndexCache)` | method |
| `GetAnimationDuration` | `public static float GetAnimationDuration(string animationName)` | method |
| `GetAnimationDuration` | `public static float GetAnimationDuration(int animationIndex)` | method |
| `GetAnimationParameter1` | `public static float GetAnimationParameter1(string animationName)` | method |
| `GetAnimationParameter1` | `public static float GetAnimationParameter1(int animationIndex)` | method |
| `GetAnimationParameter2` | `public static float GetAnimationParameter2(string animationName)` | method |
| `GetAnimationParameter2` | `public static float GetAnimationParameter2(int animationIndex)` | method |
| `GetAnimationParameter3` | `public static float GetAnimationParameter3(string animationName)` | method |
| `GetAnimationBlendInPeriod` | `public static float GetAnimationBlendInPeriod(string animationName)` | method |
| `GetAnimationBlendInPeriod` | `public static float GetAnimationBlendInPeriod(int animationIndex)` | method |
| `GetAnimationBlendsWithActionIndex` | `public static ActionIndexCache GetAnimationBlendsWithActionIndex(string animationName)` | method |
| `GetAnimationBlendsWithActionIndex` | `public static ActionIndexCache GetAnimationBlendsWithActionIndex(int animationIndex)` | method |
| `GetAnimationDisplacementAtProgress` | `public static Vec3 GetAnimationDisplacementAtProgress(string animationName, float progress)` | method |
| `GetAnimationDisplacementAtProgress` | `public static Vec3 GetAnimationDisplacementAtProgress(int animationIndex, float progress)` | method |
| `GetActionCodeWithName` | `public static int GetActionCodeWithName(string name)` | method |
| `GetNumActionCodes` | `public static int GetNumActionCodes()` | method |
| `GetNumAnimations` | `public static int GetNumAnimations()` | method |
| `IsAnyAnimationLoadingFromDisk` | `public static bool IsAnyAnimationLoadingFromDisk()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
