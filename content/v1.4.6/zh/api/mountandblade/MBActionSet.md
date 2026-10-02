---
title: "MBActionSet"
description: "MBActionSet：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 24 个（方法 22、属性 1、字段 1）。源文件 TaleWorlds.MountAndBlade/MBActionSet.cs。"
---
# MBActionSet

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MBActionSet`
**File:** `TaleWorlds.MountAndBlade/MBActionSet.cs`

## 概述

MBActionSet 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBActionSet.cs。它是一个 public 结构体，继承链为 MBActionSet。public/protected 成员共 24 个：22 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBActionSet 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MBActionSet。成员构成以方法为主（方法 22/24，属性 1/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBActionSet.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | 属性 |
| `Equals` | `public bool Equals(MBActionSet a)` | 方法 |
| `Equals` | `public bool Equals(int index)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `GetName` | `public string GetName()` | 方法 |
| `GetSkeletonName` | `public string GetSkeletonName()` | 方法 |
| `GetAnimationName` | `public string GetAnimationName(in ActionIndexCache actionCode)` | 方法 |
| `AreActionsAlternatives` | `public bool AreActionsAlternatives(in ActionIndexCache actionCode1, in ActionIndexCache actionCode2)` | 方法 |
| `GetNumberOfActionSets` | `public static int GetNumberOfActionSets()` | 方法 |
| `GetNumberOfMonsterUsageSets` | `public static int GetNumberOfMonsterUsageSets()` | 方法 |
| `GetActionSet` | `public static MBActionSet GetActionSet(string objectID)` | 方法 |
| `GetActionSetWithIndex` | `public static MBActionSet GetActionSetWithIndex(int index)` | 方法 |
| `GetBoneIndexWithId` | `public static sbyte GetBoneIndexWithId(string actionSetId, string boneId)` | 方法 |
| `GetBoneHasParentBone` | `public static bool GetBoneHasParentBone(string actionSetId, sbyte boneIndex)` | 方法 |
| `GetActionDisplacementVector` | `public static Vec3 GetActionDisplacementVector(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | 方法 |
| `GetActionAnimationFlags` | `public static AnimFlags GetActionAnimationFlags(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | 方法 |
| `CheckActionAnimationClipExists` | `public static bool CheckActionAnimationClipExists(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | 方法 |
| `GetAnimationIndexOfAction` | `public static int GetAnimationIndexOfAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | 方法 |
| `GetActionAnimationName` | `public static string GetActionAnimationName(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | 方法 |
| `GetActionAnimationDuration` | `public static float GetActionAnimationDuration(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | 方法 |
| `GetActionAnimationContinueToAction` | `public static ActionIndexCache GetActionAnimationContinueToAction(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | 方法 |
| `GetTotalAnimationDurationWithContinueToAction` | `public static float GetTotalAnimationDurationWithContinueToAction(MBActionSet actionSet, ActionIndexCache actionIndexCache)` | 方法 |
| `GetActionBlendOutStartProgress` | `public static float GetActionBlendOutStartProgress(MBActionSet actionSet, in ActionIndexCache actionIndexCache)` | 方法 |
| `InvalidActionSet` | `public static readonly MBActionSet InvalidActionSet` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
