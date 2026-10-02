---
title: "MBSkeletonExtensions"
description: "MBSkeletonExtensions 的自动生成类参考。"
---
# MBSkeletonExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSkeletonExtensions `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs

## 概述

`MBSkeletonExtensions` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateWithActionSet
`public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData) `

### GetSkeletonFaceAnimationTime
`public static float GetSkeletonFaceAnimationTime(Skeleton skeleton) `

### SetSkeletonFaceAnimationTime
`public static void SetSkeletonFaceAnimationTime(Skeleton skeleton,float time) `

### GetSkeletonFaceAnimationName
`public static string GetSkeletonFaceAnimationName(Skeleton skeleton) `

### GetBoneEntitialFrameAtAnimationProgress
`public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton,sbyte boneIndex,int animationIndex,float progress) `

### GetBoneEntitialFrame
`public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton,sbyte boneNumber,bool forceToUpdate = false) `

### SetFacialAnimation
`public static void SetFacialAnimation(this Skeleton skeleton,Agent.FacialAnimChannel channel,string faceAnimation,bool playSound,bool loop) `

### SetAgentActionChannel
`public static void SetAgentActionChannel(this Skeleton skeleton,int actionChannelNo,in ActionIndexCache actionIndex,float channelParameter = 0f,float blendPeriodOverride = -0.2f,bool forceFaceMorphRestart = true,float blendWithNextActionFactor = 0f) `

### DoesActionContinueWithCurrentActionAtChannel
`public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton,int actionChannelNo,in ActionIndexCache actionIndex) `

### TickActionChannels
`public static void TickActionChannels(this Skeleton skeleton) `

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton,string animationName,int channelNo,float animationSpeedMultiplier = 1f,float blendInPeriod = -1f,float startProgress = 0f) `
`public static void SetAnimationAtChannel(this Skeleton skeleton,int animationIndex,int channelNo,float animationSpeedMultiplier = 1f,float blendInPeriod = -1f,float startProgress = 0f) `

### GetActionAtChannel
`public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton,int channelNo) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
