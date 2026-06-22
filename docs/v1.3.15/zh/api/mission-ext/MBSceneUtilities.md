<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSceneUtilities`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSceneUtilities

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBSceneUtilities` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetAllSpawnPaths

```csharp
public static MBList<Path> GetAllSpawnPaths(Scene scene)
```

### GetSoftBoundaryPoints

```csharp
public static MBList<Vec2> GetSoftBoundaryPoints(Scene scene)
```

### GetHardBoundaryPoints

```csharp
public static MBList<Vec2> GetHardBoundaryPoints(Scene scene)
```

### GetSceneLimitPoints

```csharp
public static MBList<Vec2> GetSceneLimitPoints(Scene scene, out Vec2 sceneLimitMin, out Vec2 sceneLimitMax)
```

### GetDeploymentBoundaries

```csharp
public static MBList<ValueTuple<string, MBList<Vec2>, bool>> GetDeploymentBoundaries(BattleSideEnum battleSide)
```

### GetAxisAlignedBoundaryRectangle

```csharp
public static void GetAxisAlignedBoundaryRectangle(List<Vec2> boundaryPoints, out Vec2 boundsMin, out Vec2 boundsMax)
```

### FindConvexHull

```csharp
public static void FindConvexHull(ref MBList<Vec2> boundary)
```

### RadialSortBoundary

```csharp
public static void RadialSortBoundary(ref MBList<Vec2> boundary)
```

### RadialSortBoundary

```csharp
public static void RadialSortBoundary(ref MBList<Vec3> boundary)
```

### IsConvexAndRadiallySorted

```csharp
public static bool IsConvexAndRadiallySorted(MBList<Vec2> boundary)
```

### IsPointInsideBoundaries

```csharp
public static bool IsPointInsideBoundaries(in Vec2 point, MBList<Vec2> boundaries, float acceptanceThreshold = 0.05f)
```

### FindClosestPointToBoundaries

```csharp
public static float FindClosestPointToBoundaries(in Vec2 position, MBList<Vec2> boundaries, out Vec2 closestPoint)
```

### FindClosestPointToBoundariesReturnDistanceSquared

```csharp
public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position, MBList<Vec2> boundaries, out Vec2 closestPoint, out bool isPositionInsideBoundaries)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)