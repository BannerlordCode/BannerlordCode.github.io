---
title: "MBActionSet"
description: "MBActionSet 的自动生成类参考。"
---
# MBActionSet

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBActionSet `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBActionSet.cs

## 概述

`MBActionSet` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBActionSet.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Equals
`public bool Equals(MBActionSet a) `
`public bool Equals(int index) `

### GetHashCode
`public override int GetHashCode() `

### GetName
`public string GetName() `

### GetSkeletonName
`public string GetSkeletonName() `

### GetAnimationName
`public string GetAnimationName(in ActionIndexCache actionCode) `

### AreActionsAlternatives
`public bool AreActionsAlternatives(in ActionIndexCache actionCode1,in ActionIndexCache actionCode2) `

### GetNumberOfActionSets
`public static int GetNumberOfActionSets() `

### GetNumberOfMonsterUsageSets
`public static int GetNumberOfMonsterUsageSets() `

### GetActionSet
`public static MBActionSet GetActionSet(string objectID) `

### GetActionSetWithIndex
`public static MBActionSet GetActionSetWithIndex(int index) `

### GetBoneIndexWithId
`public static sbyte GetBoneIndexWithId(string actionSetId,string boneId) `

### GetBoneHasParentBone
`public static bool GetBoneHasParentBone(string actionSetId,sbyte boneIndex) `

### GetActionDisplacementVector
`public static Vec3 GetActionDisplacementVector(MBActionSet actionSet,in ActionIndexCache actionIndexCache) `

### GetActionAnimationFlags
`public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet,in ActionIndexCache actionIndexCache) `

### CheckActionAnimationClipExists
`public static bool CheckActionAnimationClipExists(MBActionSet actionSet,in ActionIndexCache actionIndexCache) `

### GetAnimationIndexOfAction
`public static int GetAnimationIndexOfAction(MBActionSet actionSet,in ActionIndexCache actionIndexCache) `

### GetActionAnimationName
`public static string GetActionAnimationName(MBActionSet actionSet,in ActionIndexCache actionIndexCache) `

### GetActionAnimationDuration
`public static float GetActionAnimationDuration(MBActionSet actionSet,in ActionIndexCache actionIndexCache) `

### GetActionAnimationContinueToAction
`public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet,in ActionIndexCache actionIndexCache) `

### GetTotalAnimationDurationWithContinueToAction
`public static float GetTotalAnimationDurationWithContinueToAction(MBActionSet actionSet,ActionIndexCache actionIndexCache) `

### GetActionBlendOutStartProgress
`public static float GetActionBlendOutStartProgress(MBActionSet actionSet,in ActionIndexCache actionIndexCache) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
