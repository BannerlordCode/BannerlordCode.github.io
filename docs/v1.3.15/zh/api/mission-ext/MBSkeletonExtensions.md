<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSkeletonExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSkeletonExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBSkeletonExtensions` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)