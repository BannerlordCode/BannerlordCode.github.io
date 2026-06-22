<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSceneUtilities`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSceneUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBSceneUtilities` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)