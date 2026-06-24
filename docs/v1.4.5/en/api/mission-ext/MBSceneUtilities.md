<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSceneUtilities`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBSceneUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSceneUtilities`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSceneUtilities.cs`

## Overview

`MBSceneUtilities` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
MBSceneUtilities.GetAllSpawnPaths(scene);
```

## See Also

- [Complete Class Catalog](../catalog)