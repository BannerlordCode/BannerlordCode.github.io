---
title: "MBSkeletonExtensions"
description: "MBSkeletonExtensions 的自动生成类参考。"
---
# MBSkeletonExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSkeletonExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs`

## 概述

`MBSkeletonExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateWithActionSet
`public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)`

**用途 / Purpose:** 构建一个新的 with action set 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.CreateWithActionSet(animationSystemData);
```

### GetSkeletonFaceAnimationTime
`public static float GetSkeletonFaceAnimationTime(Skeleton skeleton)`

**用途 / Purpose:** 读取并返回当前对象中 skeleton face animation time 的结果。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.GetSkeletonFaceAnimationTime(skeleton);
```

### SetSkeletonFaceAnimationTime
`public static void SetSkeletonFaceAnimationTime(Skeleton skeleton, float time)`

**用途 / Purpose:** 为 skeleton face animation time 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.SetSkeletonFaceAnimationTime(skeleton, 0);
```

### GetSkeletonFaceAnimationName
`public static string GetSkeletonFaceAnimationName(Skeleton skeleton)`

**用途 / Purpose:** 读取并返回当前对象中 skeleton face animation name 的结果。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.GetSkeletonFaceAnimationName(skeleton);
```

### GetBoneEntitialFrameAtAnimationProgress
`public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton, sbyte boneIndex, int animationIndex, float progress)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial frame at animation progress 的结果。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.GetBoneEntitialFrameAtAnimationProgress(skeleton, 0, 0, 0);
```

### GetBoneEntitialFrame
`public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton, sbyte boneNumber, bool forceToUpdate = false)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial frame 的结果。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.GetBoneEntitialFrame(skeleton, 0, false);
```

### SetFacialAnimation
`public static void SetFacialAnimation(this Skeleton skeleton, Agent.FacialAnimChannel channel, string faceAnimation, bool playSound, bool loop)`

**用途 / Purpose:** 为 facial animation 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.SetFacialAnimation(skeleton, channel, "example", false, false);
```

### SetAgentActionChannel
`public static void SetAgentActionChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)`

**用途 / Purpose:** 为 agent action channel 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.SetAgentActionChannel(skeleton, 0, actionIndex, 0, 0, false, 0);
```

### DoesActionContinueWithCurrentActionAtChannel
`public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex)`

**用途 / Purpose:** 判断action continue with current action at channel这一条件在当前对象上是否成立。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.DoesActionContinueWithCurrentActionAtChannel(skeleton, 0, actionIndex);
```

### TickActionChannels
`public static void TickActionChannels(this Skeleton skeleton)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进action channels的状态。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.TickActionChannels(skeleton);
```

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton, string animationName, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)`

**用途 / Purpose:** 为 animation at channel 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.SetAnimationAtChannel(skeleton, "example", 0, 0, 0, 0);
```

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton, int animationIndex, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)`

**用途 / Purpose:** 为 animation at channel 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.SetAnimationAtChannel(skeleton, 0, 0, 0, 0, 0);
```

### GetActionAtChannel
`public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton, int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 action at channel 的结果。

```csharp
// 静态调用，不需要实例
MBSkeletonExtensions.GetActionAtChannel(skeleton, 0);
```

## 使用示例

```csharp
MBSkeletonExtensions.CreateWithActionSet(animationSystemData);
```

## 参见

- [本区域目录](../)