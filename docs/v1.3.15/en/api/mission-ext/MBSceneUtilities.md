<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSceneUtilities`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSceneUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSceneUtilities`
**Area:** mission-ext

## Overview

`MBSceneUtilities` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAllSpawnPaths
`public static MBList<Path> GetAllSpawnPaths(Scene scene)`

**Purpose:** Gets the current value of `all spawn paths`.

### GetSoftBoundaryPoints
`public static MBList<Vec2> GetSoftBoundaryPoints(Scene scene)`

**Purpose:** Gets the current value of `soft boundary points`.

### GetHardBoundaryPoints
`public static MBList<Vec2> GetHardBoundaryPoints(Scene scene)`

**Purpose:** Gets the current value of `hard boundary points`.

### GetSceneLimitPoints
`public static MBList<Vec2> GetSceneLimitPoints(Scene scene, out Vec2 sceneLimitMin, out Vec2 sceneLimitMax)`

**Purpose:** Gets the current value of `scene limit points`.

### GetDeploymentBoundaries
`public static MBList<ValueTuple<string, MBList<Vec2>, bool>> GetDeploymentBoundaries(BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `deployment boundaries`.

### GetAxisAlignedBoundaryRectangle
`public static void GetAxisAlignedBoundaryRectangle(List<Vec2> boundaryPoints, out Vec2 boundsMin, out Vec2 boundsMax)`

**Purpose:** Gets the current value of `axis aligned boundary rectangle`.

### FindConvexHull
`public static void FindConvexHull(ref MBList<Vec2> boundary)`

**Purpose:** Handles logic related to `find convex hull`.

### RadialSortBoundary
`public static void RadialSortBoundary(ref MBList<Vec2> boundary)`

**Purpose:** Handles logic related to `radial sort boundary`.

### RadialSortBoundary
`public static void RadialSortBoundary(ref MBList<Vec3> boundary)`

**Purpose:** Handles logic related to `radial sort boundary`.

### IsConvexAndRadiallySorted
`public static bool IsConvexAndRadiallySorted(MBList<Vec2> boundary)`

**Purpose:** Handles logic related to `is convex and radially sorted`.

### IsPointInsideBoundaries
`public static bool IsPointInsideBoundaries(in Vec2 point, MBList<Vec2> boundaries, float acceptanceThreshold = 0.05f)`

**Purpose:** Handles logic related to `is point inside boundaries`.

### FindClosestPointToBoundaries
`public static float FindClosestPointToBoundaries(in Vec2 position, MBList<Vec2> boundaries, out Vec2 closestPoint)`

**Purpose:** Handles logic related to `find closest point to boundaries`.

### FindClosestPointToBoundariesReturnDistanceSquared
`public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position, MBList<Vec2> boundaries, out Vec2 closestPoint, out bool isPositionInsideBoundaries)`

**Purpose:** Handles logic related to `find closest point to boundaries return distance squared`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBSceneUtilities.GetAllSpawnPaths(scene);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
