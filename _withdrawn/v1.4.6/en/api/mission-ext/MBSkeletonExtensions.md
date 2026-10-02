---
title: "MBSkeletonExtensions"
description: "MBSkeletonExtensions: a public class in TaleWorlds.MountAndBlade; 13 exposed members (13 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBSkeletonExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBSkeletonExtensions`
**File:** `TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBSkeletonExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs. It is a public class; the inheritance chain is MBSkeletonExtensions. It exposes 13 public/protected members: 13 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBSkeletonExtensions lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBSkeletonExtensions. The surface is method-led (methods 13/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateWithActionSet` | `public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)` | method |
| `GetSkeletonFaceAnimationTime` | `public static float GetSkeletonFaceAnimationTime(Skeleton skeleton)` | method |
| `SetSkeletonFaceAnimationTime` | `public static void SetSkeletonFaceAnimationTime(Skeleton skeleton, float time)` | method |
| `GetSkeletonFaceAnimationName` | `public static string GetSkeletonFaceAnimationName(Skeleton skeleton)` | method |
| `GetBoneEntitialFrameAtAnimationProgress` | `public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton, sbyte boneIndex, int animationIndex, float progress)` | method |
| `GetBoneEntitialFrame` | `public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton, sbyte boneNumber, bool forceToUpdate = false)` | method |
| `SetFacialAnimation` | `public static void SetFacialAnimation(this Skeleton skeleton, Agent.FacialAnimChannel channel, string faceAnimation, bool playSound, bool loop)` | method |
| `SetAgentActionChannel` | `public static void SetAgentActionChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)` | method |
| `DoesActionContinueWithCurrentActionAtChannel` | `public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex)` | method |
| `TickActionChannels` | `public static void TickActionChannels(this Skeleton skeleton)` | method |
| `SetAnimationAtChannel` | `public static void SetAnimationAtChannel(this Skeleton skeleton, string animationName, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)` | method |
| `SetAnimationAtChannel` | `public static void SetAnimationAtChannel(this Skeleton skeleton, int animationIndex, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)` | method |
| `GetActionAtChannel` | `public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton, int channelNo)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
