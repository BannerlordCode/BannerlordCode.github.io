---
title: "MBSkeletonExtensions"
description: "Auto-generated class reference for MBSkeletonExtensions."
---
# MBSkeletonExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSkeletonExtensions `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBSkeletonExtensions.cs

## Overview

Auto-generated stub for `MBSkeletonExtensions`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateWithActionSet
`public static Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)`

### GetSkeletonFaceAnimationTime
`public static float GetSkeletonFaceAnimationTime(Skeleton skeleton)`

### SetSkeletonFaceAnimationTime
`public static void SetSkeletonFaceAnimationTime(Skeleton skeleton,float time)`

### GetSkeletonFaceAnimationName
`public static string GetSkeletonFaceAnimationName(Skeleton skeleton)`

### GetBoneEntitialFrameAtAnimationProgress
`public static MatrixFrame GetBoneEntitialFrameAtAnimationProgress(this Skeleton skeleton,sbyte boneIndex,int animationIndex,float progress)`

### GetBoneEntitialFrame
`public static MatrixFrame GetBoneEntitialFrame(this Skeleton skeleton,sbyte boneNumber,bool forceToUpdate = false)`

### SetFacialAnimation
`public static void SetFacialAnimation(this Skeleton skeleton,Agent.FacialAnimChannel channel,string faceAnimation,bool playSound,bool loop)`

### SetAgentActionChannel
`public static void SetAgentActionChannel(this Skeleton skeleton,int actionChannelNo,in ActionIndexCache actionIndex,float channelParameter = 0f,float blendPeriodOverride = -0.2f,bool forceFaceMorphRestart = true,float blendWithNextActionFactor = 0f)`

### DoesActionContinueWithCurrentActionAtChannel
`public static bool DoesActionContinueWithCurrentActionAtChannel(this Skeleton skeleton,int actionChannelNo,in ActionIndexCache actionIndex)`

### TickActionChannels
`public static void TickActionChannels(this Skeleton skeleton)`

### SetAnimationAtChannel
`public static void SetAnimationAtChannel(this Skeleton skeleton,string animationName,int channelNo,float animationSpeedMultiplier = 1f,float blendInPeriod = -1f,float startProgress = 0f)`

### GetActionAtChannel
`public static ActionIndexCache GetActionAtChannel(this Skeleton skeleton,int channelNo)`

## See Also

- [Section index](../)
