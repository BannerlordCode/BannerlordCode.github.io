---
title: "GameEntityExtensions"
description: "GameEntityExtensions：TaleWorlds.MountAndBlade 的 public 类；公开成员 10 个（方法 10、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/GameEntityExtensions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameEntityExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class GameEntityExtensions`
**File:** `TaleWorlds.MountAndBlade/GameEntityExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GameEntityExtensions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/GameEntityExtensions.cs。它是一个 public 类，继承链为 GameEntityExtensions。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameEntityExtensions 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 GameEntityExtensions。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/GameEntityExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instantiate` | `public static GameEntity Instantiate(Scene scene, MissionWeapon weapon, bool showHolsterWithWeapon, bool needBatchedVersion)` | 方法 |
| `CreateSimpleSkeleton` | `public static void CreateSimpleSkeleton(this GameEntity gameEntity, string skeletonName)` | 方法 |
| `CreateSimpleSkeleton` | `public static void CreateSimpleSkeleton(this WeakGameEntity gameEntity, string skeletonName)` | 方法 |
| `CreateAgentSkeleton` | `public static void CreateAgentSkeleton(this GameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)` | 方法 |
| `CreateAgentSkeleton` | `public static void CreateAgentSkeleton(this WeakGameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)` | 方法 |
| `CreateSkeletonWithActionSet` | `public static void CreateSkeletonWithActionSet(this GameEntity gameEntity, ref AnimationSystemData animationSystemData)` | 方法 |
| `CreateSkeletonWithActionSet` | `public static void CreateSkeletonWithActionSet(this WeakGameEntity gameEntity, ref AnimationSystemData animationSystemData)` | 方法 |
| `FadeOut` | `public static void FadeOut(this GameEntity gameEntity, float interval, bool isRemovingFromScene)` | 方法 |
| `FadeIn` | `public static void FadeIn(this GameEntity gameEntity, bool resetAlpha = true)` | 方法 |
| `HideIfNotFadingOut` | `public static void HideIfNotFadingOut(this GameEntity gameEntity)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
