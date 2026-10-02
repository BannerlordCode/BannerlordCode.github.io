---
title: "MBSceneUtilities"
description: "MBSceneUtilities：TaleWorlds.MountAndBlade 的 public 类；公开成员 22 个（方法 13、属性 0、字段 9）。源文件 TaleWorlds.MountAndBlade/MBSceneUtilities.cs。"
---
# MBSceneUtilities

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBSceneUtilities`
**File:** `TaleWorlds.MountAndBlade/MBSceneUtilities.cs`

## 概述

MBSceneUtilities 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBSceneUtilities.cs。它是一个 public 类，继承链为 MBSceneUtilities。public/protected 成员共 22 个：13 方法、9 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBSceneUtilities 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MBSceneUtilities。成员构成以方法为主（方法 13/22，属性 0/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBSceneUtilities.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBList` | `public static MBList<Path>GetAllSpawnPaths(Scene scene)` | 方法 |
| `MBList` | `public static MBList<Vec2>GetSoftBoundaryPoints(Scene scene)` | 方法 |
| `MBList` | `public static MBList<Vec2>GetHardBoundaryPoints(Scene scene)` | 方法 |
| `MBList` | `public static MBList<Vec2>GetSceneLimitPoints(Scene scene, out Vec2 sceneLimitMin, out Vec2 sceneLimitMax)` | 方法 |
| `bool>>GetDeploymentBoundaries` | `public static MBList<ValueTuple<string, MBList<Vec2>, bool>>GetDeploymentBoundaries(BattleSideEnum battleSide)` | 方法 |
| `GetAxisAlignedBoundaryRectangle` | `public static void GetAxisAlignedBoundaryRectangle(List<Vec2>boundaryPoints, out Vec2 boundsMin, out Vec2 boundsMax)` | 方法 |
| `FindConvexHull` | `public static void FindConvexHull(ref MBList<Vec2>boundary)` | 方法 |
| `RadialSortBoundary` | `public static void RadialSortBoundary(ref MBList<Vec2>boundary)` | 方法 |
| `RadialSortBoundary` | `public static void RadialSortBoundary(ref MBList<Vec3>boundary)` | 方法 |
| `IsConvexAndRadiallySorted` | `public static bool IsConvexAndRadiallySorted(MBList<Vec2>boundary)` | 方法 |
| `IsPointInsideBoundaries` | `public static bool IsPointInsideBoundaries(in Vec2 point, MBList<Vec2>boundaries, float acceptanceThreshold = 0.05f)` | 方法 |
| `FindClosestPointToBoundaries` | `public static float FindClosestPointToBoundaries(in Vec2 position, MBList<Vec2>boundaries, out Vec2 closestPoint)` | 方法 |
| `FindClosestPointToBoundariesReturnDistanceSquared` | `public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position, MBList<Vec2>boundaries, out Vec2 closestPoint, out bool isPositionInsideBoundaries)` | 方法 |
| `MaxNumberOfSpawnPaths` | `public const int MaxNumberOfSpawnPaths` | 字段 |
| `SpawnPathPrefix` | `public const string SpawnPathPrefix` | 字段 |
| `SoftBorderVertexTag` | `public const string SoftBorderVertexTag` | 字段 |
| `HardBorderVertexTag` | `public const string HardBorderVertexTag` | 字段 |
| `SoftBoundaryName` | `public const string SoftBoundaryName` | 字段 |
| `SceneBoundaryName` | `public const string SceneBoundaryName` | 字段 |
| `SceneToHardBoundaryMargin` | `public const float SceneToHardBoundaryMargin` | 字段 |
| `DefenderDeploymentReferencePositionTag` | `public const string DefenderDeploymentReferencePositionTag` | 字段 |
| `AttackerDeploymentReferencePositionTag` | `public const string AttackerDeploymentReferencePositionTag` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
