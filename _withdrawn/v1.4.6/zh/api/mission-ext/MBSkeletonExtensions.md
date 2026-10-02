---
title: "MBSkeletonExtensions"
description: "MBSkeletonExtensions：TaleWorlds.MountAndBlade 的 public 类；公开成员 13 个（方法 13、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBSkeletonExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBSkeletonExtensions`
**File:** `TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MBSkeletonExtensions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs。它是一个 public 类，继承链为 MBSkeletonExtensions。public/protected 成员共 13 个：13 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBSkeletonExtensions 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MBSkeletonExtensions。成员构成以方法为主（方法 13/13，属性 0/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateWithActionSet` | `public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)` | 方法 |
| `GetSkeletonFaceAnimationTime` | `public static float GetSkeletonFaceAnimationTime(Skeleton skeleton)` | 方法 |
| `SetSkeletonFaceAnimationTime` | `public static void SetSkeletonFaceAnimationTime(Skeleton skeleton, float time)` | 方法 |
| `GetSkeletonFaceAnimationName` | `public static string GetSkeletonFaceAnimationName(Skeleton skeleton)` | 方法 |
| `GetBoneEntitialFrameAtAnimationProgress` | `public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton, sbyte boneIndex, int animationIndex, float progress)` | 方法 |
| `GetBoneEntitialFrame` | `public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton, sbyte boneNumber, bool forceToUpdate = false)` | 方法 |
| `SetFacialAnimation` | `public static void SetFacialAnimation(this Skeleton skeleton, Agent.FacialAnimChannel channel, string faceAnimation, bool playSound, bool loop)` | 方法 |
| `SetAgentActionChannel` | `public static void SetAgentActionChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)` | 方法 |
| `DoesActionContinueWithCurrentActionAtChannel` | `public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton, int actionChannelNo, in ActionIndexCache actionIndex)` | 方法 |
| `TickActionChannels` | `public static void TickActionChannels(this Skeleton skeleton)` | 方法 |
| `SetAnimationAtChannel` | `public static void SetAnimationAtChannel(this Skeleton skeleton, string animationName, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)` | 方法 |
| `SetAnimationAtChannel` | `public static void SetAnimationAtChannel(this Skeleton skeleton, int animationIndex, int channelNo, float animationSpeedMultiplier = 1f, float blendInPeriod = -1f, float startProgress = 0f)` | 方法 |
| `GetActionAtChannel` | `public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton, int channelNo)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
