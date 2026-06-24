<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSkeletonExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSkeletonExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MBSkeletonExtensions`
**领域:** mission-ext

## 概述

`MBSkeletonExtensions` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateWithActionSet
`public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)`

**用途 / Purpose:** 创建一个 `with action set` 实例或对象。

### GetSkeletonFaceAnimationTime
`public static float GetSkeletonFaceAnimationTime(Skeleton skeleton)`

**用途 / Purpose:** 获取 `skeleton face animation time` 的当前值。

### SetSkeletonFaceAnimationTime
`public static void SetSkeletonFaceAnimationTime(Skeleton skeleton, float time)`

**用途 / Purpose:** 设置 `skeleton face animation time` 的值或状态。

### GetSkeletonFaceAnimationName
`public static string GetSkeletonFaceAnimationName(Skeleton skeleton)`

**用途 / Purpose:** 获取 `skeleton face animation name` 的当前值。

### GetBoneEntitialFrameAtAnimationProgress
`public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton, sbyte boneIndex, int animationIndex, float progress)`

**用途 / Purpose:** 获取 `bone entitial frame at animation progress` 的当前值。

### GetBoneEntitialFrame
`public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton, sbyte boneNumber, bool forceToUpdate = false)`

**用途 / Purpose:** 获取 `bone entitial frame` 的当前值。

### SetFacialAnimation
`public static void SetFacialAnimation(this Skeleton skeleton, Agent.FacialAnimChannel channel, string faceAnimation, bool playSound, bool loop)`

**用途 / Purpose:** 设置 `facial animation` 的值或状态。

### SetAgentActionChannel
`public static void SetAgentActionChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)`

**用途 / Purpose:** 设置 `agent action channel` 的值或状态。

### DoesActionContinueWithCurrentActionAtChannel
`public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex)`

**用途 / Purpose:** 处理 `does action continue with current action at channel` 相关逻辑。

### TickActionChannels
`public static void TickActionChannels(this Skeleton skeleton)`

**用途 / Purpose:** 处理 `tick action channels` 相关逻辑。

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton, string animationName, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)`

**用途 / Purpose:** 设置 `animation at channel` 的值或状态。

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton, int animationIndex, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)`

**用途 / Purpose:** 设置 `animation at channel` 的值或状态。

### GetActionAtChannel
`public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton, int channelNo)`

**用途 / Purpose:** 获取 `action at channel` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MBSkeletonExtensions.CreateWithActionSet(animationSystemData);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
