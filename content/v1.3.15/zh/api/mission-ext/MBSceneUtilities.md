---
title: "MBSceneUtilities"
description: "MBSceneUtilities 的自动生成类参考。"
---
# MBSceneUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSceneUtilities`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBSceneUtilities.cs`

## 概述

`MBSceneUtilities` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetAllSpawnPaths
`public static MBList<Path> GetAllSpawnPaths(Scene scene)`

**用途 / Purpose:** 读取并返回当前对象中 all spawn paths 的结果。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.GetAllSpawnPaths(scene);
```

### GetSoftBoundaryPoints
`public static MBList<Vec2> GetSoftBoundaryPoints(Scene scene)`

**用途 / Purpose:** 读取并返回当前对象中 soft boundary points 的结果。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.GetSoftBoundaryPoints(scene);
```

### GetHardBoundaryPoints
`public static MBList<Vec2> GetHardBoundaryPoints(Scene scene)`

**用途 / Purpose:** 读取并返回当前对象中 hard boundary points 的结果。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.GetHardBoundaryPoints(scene);
```

### GetSceneLimitPoints
`public static MBList<Vec2> GetSceneLimitPoints(Scene scene, out Vec2 sceneLimitMin, out Vec2 sceneLimitMax)`

**用途 / Purpose:** 读取并返回当前对象中 scene limit points 的结果。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.GetSceneLimitPoints(scene, sceneLimitMin, sceneLimitMax);
```

### GetDeploymentBoundaries
`public static MBList<ValueTuple<string, MBList<Vec2>, bool>> GetDeploymentBoundaries(BattleSideEnum battleSide)`

**用途 / Purpose:** 读取并返回当前对象中 deployment boundaries 的结果。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.GetDeploymentBoundaries(battleSide);
```

### GetAxisAlignedBoundaryRectangle
`public static void GetAxisAlignedBoundaryRectangle(List<Vec2> boundaryPoints, out Vec2 boundsMin, out Vec2 boundsMax)`

**用途 / Purpose:** 读取并返回当前对象中 axis aligned boundary rectangle 的结果。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.GetAxisAlignedBoundaryRectangle(boundaryPoints, boundsMin, boundsMax);
```

### FindConvexHull
`public static void FindConvexHull(ref MBList<Vec2> boundary)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的convex hull。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.FindConvexHull(boundary);
```

### RadialSortBoundary
`public static void RadialSortBoundary(ref MBList<Vec2> boundary)`

**用途 / Purpose:** 调用 RadialSortBoundary 对应的操作。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.RadialSortBoundary(boundary);
```

### RadialSortBoundary
`public static void RadialSortBoundary(ref MBList<Vec3> boundary)`

**用途 / Purpose:** 调用 RadialSortBoundary 对应的操作。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.RadialSortBoundary(boundary);
```

### IsConvexAndRadiallySorted
`public static bool IsConvexAndRadiallySorted(MBList<Vec2> boundary)`

**用途 / Purpose:** 判断当前对象是否处于 convex and radially sorted 状态或条件。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.IsConvexAndRadiallySorted(boundary);
```

### IsPointInsideBoundaries
`public static bool IsPointInsideBoundaries(in Vec2 point, MBList<Vec2> boundaries, float acceptanceThreshold = 0.05f)`

**用途 / Purpose:** 判断当前对象是否处于 point inside boundaries 状态或条件。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.IsPointInsideBoundaries(point, boundaries, 0);
```

### FindClosestPointToBoundaries
`public static float FindClosestPointToBoundaries(in Vec2 position, MBList<Vec2> boundaries, out Vec2 closestPoint)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的closest point to boundaries。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.FindClosestPointToBoundaries(position, boundaries, closestPoint);
```

### FindClosestPointToBoundariesReturnDistanceSquared
`public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position, MBList<Vec2> boundaries, out Vec2 closestPoint, out bool isPositionInsideBoundaries)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的closest point to boundaries return distance squared。

```csharp
// 静态调用，不需要实例
MBSceneUtilities.FindClosestPointToBoundariesReturnDistanceSquared(position, boundaries, closestPoint, isPositionInsideBoundaries);
```

## 使用示例

```csharp
MBSceneUtilities.GetAllSpawnPaths(scene);
```

## 参见

- [本区域目录](../)