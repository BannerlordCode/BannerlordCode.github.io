---
title: "MBAnimation"
description: "MBAnimation：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 23 个（方法 22、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MBAnimation.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBAnimation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MBAnimation`
**File:** `TaleWorlds.MountAndBlade/MBAnimation.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MBAnimation 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBAnimation.cs。它是一个 public 结构体，继承链为 MBAnimation。public/protected 成员共 23 个：22 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBAnimation 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MBAnimation。成员构成以方法为主（方法 22/23，属性 0/23），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBAnimation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBAnimation` | `public MBAnimation(MBAnimation animation)` | 构造函数 |
| `Equals` | `public bool Equals(MBAnimation a)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `GetAnimationIndexWithName` | `public static int GetAnimationIndexWithName(string animationName)` | 方法 |
| `GetActionType` | `public static Agent.ActionCodeType GetActionType(ActionIndexCache actionIndex)` | 方法 |
| `PrefetchAnimationClip` | `public static void PrefetchAnimationClip(MBActionSet actionSet, ActionIndexCache actionIndexCache)` | 方法 |
| `GetAnimationDuration` | `public static float GetAnimationDuration(string animationName)` | 方法 |
| `GetAnimationDuration` | `public static float GetAnimationDuration(int animationIndex)` | 方法 |
| `GetAnimationParameter1` | `public static float GetAnimationParameter1(string animationName)` | 方法 |
| `GetAnimationParameter1` | `public static float GetAnimationParameter1(int animationIndex)` | 方法 |
| `GetAnimationParameter2` | `public static float GetAnimationParameter2(string animationName)` | 方法 |
| `GetAnimationParameter2` | `public static float GetAnimationParameter2(int animationIndex)` | 方法 |
| `GetAnimationParameter3` | `public static float GetAnimationParameter3(string animationName)` | 方法 |
| `GetAnimationBlendInPeriod` | `public static float GetAnimationBlendInPeriod(string animationName)` | 方法 |
| `GetAnimationBlendInPeriod` | `public static float GetAnimationBlendInPeriod(int animationIndex)` | 方法 |
| `GetAnimationBlendsWithActionIndex` | `public static ActionIndexCache GetAnimationBlendsWithActionIndex(string animationName)` | 方法 |
| `GetAnimationBlendsWithActionIndex` | `public static ActionIndexCache GetAnimationBlendsWithActionIndex(int animationIndex)` | 方法 |
| `GetAnimationDisplacementAtProgress` | `public static Vec3 GetAnimationDisplacementAtProgress(string animationName, float progress)` | 方法 |
| `GetAnimationDisplacementAtProgress` | `public static Vec3 GetAnimationDisplacementAtProgress(int animationIndex, float progress)` | 方法 |
| `GetActionCodeWithName` | `public static int GetActionCodeWithName(string name)` | 方法 |
| `GetNumActionCodes` | `public static int GetNumActionCodes()` | 方法 |
| `GetNumAnimations` | `public static int GetNumAnimations()` | 方法 |
| `IsAnyAnimationLoadingFromDisk` | `public static bool IsAnyAnimationLoadingFromDisk()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
