---
title: "MBSkeletonExtensions"
description: "Auto-generated class reference for MBSkeletonExtensions."
---
# MBSkeletonExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSkeletonExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs`

## Overview

`MBSkeletonExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithActionSet
`public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)`

**Purpose:** Constructs a new with action set entity and returns it to the caller.

```csharp
// Static call; no instance required
MBSkeletonExtensions.CreateWithActionSet(animationSystemData);
```

### GetSkeletonFaceAnimationTime
`public static float GetSkeletonFaceAnimationTime(Skeleton skeleton)`

**Purpose:** Reads and returns the skeleton face animation time value held by the this instance.

```csharp
// Static call; no instance required
MBSkeletonExtensions.GetSkeletonFaceAnimationTime(skeleton);
```

### SetSkeletonFaceAnimationTime
`public static void SetSkeletonFaceAnimationTime(Skeleton skeleton, float time)`

**Purpose:** Assigns a new value to skeleton face animation time and updates the object's internal state.

```csharp
// Static call; no instance required
MBSkeletonExtensions.SetSkeletonFaceAnimationTime(skeleton, 0);
```

### GetSkeletonFaceAnimationName
`public static string GetSkeletonFaceAnimationName(Skeleton skeleton)`

**Purpose:** Reads and returns the skeleton face animation name value held by the this instance.

```csharp
// Static call; no instance required
MBSkeletonExtensions.GetSkeletonFaceAnimationName(skeleton);
```

### GetBoneEntitialFrameAtAnimationProgress
`public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton, sbyte boneIndex, int animationIndex, float progress)`

**Purpose:** Reads and returns the bone entitial frame at animation progress value held by the this instance.

```csharp
// Static call; no instance required
MBSkeletonExtensions.GetBoneEntitialFrameAtAnimationProgress(skeleton, 0, 0, 0);
```

### GetBoneEntitialFrame
`public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton, sbyte boneNumber, bool forceToUpdate = false)`

**Purpose:** Reads and returns the bone entitial frame value held by the this instance.

```csharp
// Static call; no instance required
MBSkeletonExtensions.GetBoneEntitialFrame(skeleton, 0, false);
```

### SetFacialAnimation
`public static void SetFacialAnimation(this Skeleton skeleton, Agent.FacialAnimChannel channel, string faceAnimation, bool playSound, bool loop)`

**Purpose:** Assigns a new value to facial animation and updates the object's internal state.

```csharp
// Static call; no instance required
MBSkeletonExtensions.SetFacialAnimation(skeleton, channel, "example", false, false);
```

### SetAgentActionChannel
`public static void SetAgentActionChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)`

**Purpose:** Assigns a new value to agent action channel and updates the object's internal state.

```csharp
// Static call; no instance required
MBSkeletonExtensions.SetAgentActionChannel(skeleton, 0, actionIndex, 0, 0, false, 0);
```

### DoesActionContinueWithCurrentActionAtChannel
`public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex)`

**Purpose:** Returns a boolean answer to whether action continue with current action at channel is true for the this instance.

```csharp
// Static call; no instance required
MBSkeletonExtensions.DoesActionContinueWithCurrentActionAtChannel(skeleton, 0, actionIndex);
```

### TickActionChannels
`public static void TickActionChannels(this Skeleton skeleton)`

**Purpose:** Advances the action channels state each frame or update cycle.

```csharp
// Static call; no instance required
MBSkeletonExtensions.TickActionChannels(skeleton);
```

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton, string animationName, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)`

**Purpose:** Assigns a new value to animation at channel and updates the object's internal state.

```csharp
// Static call; no instance required
MBSkeletonExtensions.SetAnimationAtChannel(skeleton, "example", 0, 0, 0, 0);
```

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton, int animationIndex, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)`

**Purpose:** Assigns a new value to animation at channel and updates the object's internal state.

```csharp
// Static call; no instance required
MBSkeletonExtensions.SetAnimationAtChannel(skeleton, 0, 0, 0, 0, 0);
```

### GetActionAtChannel
`public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton, int channelNo)`

**Purpose:** Reads and returns the action at channel value held by the this instance.

```csharp
// Static call; no instance required
MBSkeletonExtensions.GetActionAtChannel(skeleton, 0);
```

## Usage Example

```csharp
MBSkeletonExtensions.CreateWithActionSet(animationSystemData);
```

## See Also

- [Area Index](../)