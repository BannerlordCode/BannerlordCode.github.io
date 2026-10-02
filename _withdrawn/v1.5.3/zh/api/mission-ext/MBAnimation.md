---
title: "MBAnimation"
description: "MBAnimation 的自动生成类参考。"
---
# MBAnimation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBAnimation `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBAnimation.cs

## 概述

`MBAnimation` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBAnimation.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Equals
`public bool Equals(MBAnimation a) `

### GetHashCode
`public override int GetHashCode() `

### GetAnimationIndexWithName
`public static int GetAnimationIndexWithName(string animationName) `

### GetActionType
`public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex) `

### PrefetchAnimationClip
`public static void PrefetchAnimationClip(MBActionSet actionSet,ActionIndexCache actionIndexCache) `

### GetAnimationDuration
`public static float GetAnimationDuration(string animationName) `
`public static float GetAnimationDuration(int animationIndex) `

### GetAnimationParameter1
`public static float GetAnimationParameter1(string animationName) `
`public static float GetAnimationParameter1(int animationIndex) `

### GetAnimationParameter2
`public static float GetAnimationParameter2(string animationName) `
`public static float GetAnimationParameter2(int animationIndex) `

### GetAnimationParameter3
`public static float GetAnimationParameter3(string animationName) `

### GetAnimationBlendInPeriod
`public static float GetAnimationBlendInPeriod(string animationName) `
`public static float GetAnimationBlendInPeriod(int animationIndex) `

### GetAnimationBlendsWithActionIndex
`public static ActionIndexCache GetAnimationBlendsWithActionIndex(string animationName) `
`public static ActionIndexCache GetAnimationBlendsWithActionIndex(int animationIndex) `

### GetAnimationDisplacementAtProgress
`public static Vec3 GetAnimationDisplacementAtProgress(string animationName,float progress) `
`public static Vec3 GetAnimationDisplacementAtProgress(int animationIndex,float progress) `

### GetActionCodeWithName
`public static int GetActionCodeWithName(string name) `

### GetNumActionCodes
`public static int GetNumActionCodes() `

### GetNumAnimations
`public static int GetNumAnimations() `

### IsAnyAnimationLoadingFromDisk
`public static bool IsAnyAnimationLoadingFromDisk() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
