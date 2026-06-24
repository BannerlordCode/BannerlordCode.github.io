<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSceneUtilities`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `all spawn paths` 的当前值。

### GetSoftBoundaryPoints
`public static List<Vec2> GetSoftBoundaryPoints(Scene scene)`

**用途 / Purpose:** 获取 `soft boundary points` 的当前值。

### GetHardBoundaryPoints
`public static List<Vec2> GetHardBoundaryPoints(Scene scene)`

**用途 / Purpose:** 获取 `hard boundary points` 的当前值。

### GetSceneLimitPoints
`public static List<Vec2> GetSceneLimitPoints(Scene scene, out Vec2 sceneLimitMin, out Vec2 sceneLimitMax)`

**用途 / Purpose:** 获取 `scene limit points` 的当前值。

### GetDeploymentBoundaries
`public static List<ValueTuple<string, List<Vec2>, bool>> GetDeploymentBoundaries(BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `deployment boundaries` 的当前值。

### GetAxisAlignedBoundaryRectangle
`public static void GetAxisAlignedBoundaryRectangle(List<Vec2> boundaryPoints, out Vec2 boundsMin, out Vec2 boundsMax)`

**用途 / Purpose:** 获取 `axis aligned boundary rectangle` 的当前值。

### FindConvexHull
`public static void FindConvexHull(ref List<Vec2> boundary)`

**用途 / Purpose:** 处理 `find convex hull` 相关逻辑。

### RadialSortBoundary
`public static void RadialSortBoundary(ref List<Vec2> boundary)`

**用途 / Purpose:** 处理 `radial sort boundary` 相关逻辑。

### IsConvexAndRadiallySorted
`public static bool IsConvexAndRadiallySorted(List<Vec2> boundary)`

**用途 / Purpose:** 处理 `is convex and radially sorted` 相关逻辑。

### IsPointInsideBoundaries
`public static bool IsPointInsideBoundaries(in Vec2 point, List<Vec2> boundaries, float acceptanceThreshold = 0.05f)`

**用途 / Purpose:** 处理 `is point inside boundaries` 相关逻辑。

### FindClosestPointToBoundaries
`public static float FindClosestPointToBoundaries(in Vec2 position, List<Vec2> boundaries, out Vec2 closestPoint)`

**用途 / Purpose:** 处理 `find closest point to boundaries` 相关逻辑。

## 使用示例

```csharp
MBSceneUtilities.GetAllSpawnPaths(scene);
```

## 参见

- [完整类目录](../catalog)