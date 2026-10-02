---
title: "MBSceneUtilities"
description: "MBSceneUtilities 的自动生成类参考。"
---
# MBSceneUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSceneUtilities `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBSceneUtilities.cs

## 概述

`MBSceneUtilities` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBSceneUtilities.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetAllSpawnPaths
`public static MBList<Path> GetAllSpawnPaths(Scene scene) `

### GetSoftBoundaryPoints
`public static MBList<Vec2> GetSoftBoundaryPoints(Scene scene) `

### GetHardBoundaryPoints
`public static MBList<Vec2> GetHardBoundaryPoints(Scene scene) `

### GetSceneLimitPoints
`public static MBList<Vec2> GetSceneLimitPoints(Scene scene,out Vec2 sceneLimitMin,out Vec2 sceneLimitMax) `

### GetDeploymentBoundaries
`public static MBList<ValueTuple<string,MBList<Vec2>,bool>> GetDeploymentBoundaries(BattleSideEnum battleSide) `

### GetAxisAlignedBoundaryRectangle
`public static void GetAxisAlignedBoundaryRectangle(List<Vec2> boundaryPoints,out Vec2 boundsMin,out Vec2 boundsMax) `

### FindConvexHull
`public static void FindConvexHull(ref MBList<Vec2> boundary) `

### RadialSortBoundary
`public static void RadialSortBoundary(ref MBList<Vec2> boundary) `
`public static void RadialSortBoundary(ref MBList<Vec3> boundary) `

### IsConvexAndRadiallySorted
`public static bool IsConvexAndRadiallySorted(MBList<Vec2> boundary) `

### IsPointInsideBoundaries
`public static bool IsPointInsideBoundaries(in Vec2 point,MBList<Vec2> boundaries,float acceptanceThreshold = 0.05f) `

### FindClosestPointToBoundaries
`public static float FindClosestPointToBoundaries(in Vec2 position,MBList<Vec2> boundaries,out Vec2 closestPoint) `

### FindClosestPointToBoundariesReturnDistanceSquared
`public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position,MBList<Vec2> boundaries,out Vec2 closestPoint,out bool isPositionInsideBoundaries) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
