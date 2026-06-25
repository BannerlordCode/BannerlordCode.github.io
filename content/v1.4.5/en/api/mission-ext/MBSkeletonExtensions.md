---
title: "MBSkeletonExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSkeletonExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBSkeletonExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSkeletonExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs`

## Overview

`MBSkeletonExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithActionSet
`public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)`

**Purpose:** Creates a new `with action set` instance or object.

### GetSkeletonFaceAnimationTime
`public static float GetSkeletonFaceAnimationTime(Skeleton skeleton)`

**Purpose:** Gets the current value of `skeleton face animation time`.

### SetSkeletonFaceAnimationTime
`public static void SetSkeletonFaceAnimationTime(Skeleton skeleton, float time)`

**Purpose:** Sets the value or state of `skeleton face animation time`.

### GetSkeletonFaceAnimationName
`public static string GetSkeletonFaceAnimationName(Skeleton skeleton)`

**Purpose:** Gets the current value of `skeleton face animation name`.

### GetBoneEntitialFrameAtAnimationProgress
`public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton, sbyte boneIndex, int animationIndex, float progress)`

**Purpose:** Gets the current value of `bone entitial frame at animation progress`.

### GetBoneEntitialFrame
`public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton, sbyte boneNumber, bool forceToUpdate = false)`

**Purpose:** Gets the current value of `bone entitial frame`.

### SetFacialAnimation
`public static void SetFacialAnimation(this Skeleton skeleton, Agent.FacialAnimChannel channel, string faceAnimation, bool playSound, bool loop)`

**Purpose:** Sets the value or state of `facial animation`.

### SetAgentActionChannel
`public static void SetAgentActionChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)`

**Purpose:** Sets the value or state of `agent action channel`.

### DoesActionContinueWithCurrentActionAtChannel
`public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex)`

**Purpose:** Handles logic related to `does action continue with current action at channel`.

### TickActionChannels
`public static void TickActionChannels(this Skeleton skeleton)`

**Purpose:** Handles logic related to `tick action channels`.

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton, string animationName, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)`

**Purpose:** Sets the value or state of `animation at channel`.

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton, int animationIndex, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)`

**Purpose:** Sets the value or state of `animation at channel`.

### GetActionAtChannel
`public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton, int channelNo)`

**Purpose:** Gets the current value of `action at channel`.

## Usage Example

```csharp
MBSkeletonExtensions.CreateWithActionSet(animationSystemData);
```

## See Also

- [Complete Class Catalog](../catalog)