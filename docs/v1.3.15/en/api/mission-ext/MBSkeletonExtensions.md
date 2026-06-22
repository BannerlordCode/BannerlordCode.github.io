<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSkeletonExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSkeletonExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBSkeletonExtensions` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### CreateWithActionSet

```csharp
public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)
```

### GetSkeletonFaceAnimationTime

```csharp
public static float GetSkeletonFaceAnimationTime(Skeleton skeleton)
```

### SetSkeletonFaceAnimationTime

```csharp
public static void SetSkeletonFaceAnimationTime(Skeleton skeleton, float time)
```

### GetSkeletonFaceAnimationName

```csharp
public static string GetSkeletonFaceAnimationName(Skeleton skeleton)
```

### GetBoneEntitialFrameAtAnimationProgress

```csharp
public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton, sbyte boneIndex, int animationIndex, float progress)
```

### GetBoneEntitialFrame

```csharp
public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton, sbyte boneNumber, bool forceToUpdate = false)
```

### SetFacialAnimation

```csharp
public static void SetFacialAnimation(this Skeleton skeleton, Agent.FacialAnimChannel channel, string faceAnimation, bool playSound, bool loop)
```

### SetAgentActionChannel

```csharp
public static void SetAgentActionChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)
```

### DoesActionContinueWithCurrentActionAtChannel

```csharp
public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex)
```

### TickActionChannels

```csharp
public static void TickActionChannels(this Skeleton skeleton)
```

### SetAnimationAtChannel

```csharp
public static void SetAnimationAtChannel(this Skeleton skeleton, string animationName, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)
```

### SetAnimationAtChannel

```csharp
public static void SetAnimationAtChannel(this Skeleton skeleton, int animationIndex, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)
```

### GetActionAtChannel

```csharp
public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton, int channelNo)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)