---
title: "MBSceneUtilities"
description: "Auto-generated class reference for MBSceneUtilities."
---
# MBSceneUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSceneUtilities`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBSceneUtilities.cs`

## Overview

`MBSceneUtilities` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAllSpawnPaths
`public static MBList<Path> GetAllSpawnPaths(Scene scene)`

**Purpose:** **Purpose:** Reads and returns the all spawn paths value held by the this instance.

```csharp
// Static call; no instance required
MBSceneUtilities.GetAllSpawnPaths(scene);
```

### GetSoftBoundaryPoints
`public static MBList<Vec2> GetSoftBoundaryPoints(Scene scene)`

**Purpose:** **Purpose:** Reads and returns the soft boundary points value held by the this instance.

```csharp
// Static call; no instance required
MBSceneUtilities.GetSoftBoundaryPoints(scene);
```

### GetHardBoundaryPoints
`public static MBList<Vec2> GetHardBoundaryPoints(Scene scene)`

**Purpose:** **Purpose:** Reads and returns the hard boundary points value held by the this instance.

```csharp
// Static call; no instance required
MBSceneUtilities.GetHardBoundaryPoints(scene);
```

### GetSceneLimitPoints
`public static MBList<Vec2> GetSceneLimitPoints(Scene scene, out Vec2 sceneLimitMin, out Vec2 sceneLimitMax)`

**Purpose:** **Purpose:** Reads and returns the scene limit points value held by the this instance.

```csharp
// Static call; no instance required
MBSceneUtilities.GetSceneLimitPoints(scene, sceneLimitMin, sceneLimitMax);
```

### GetAxisAlignedBoundaryRectangle
`public static void GetAxisAlignedBoundaryRectangle(List<Vec2> boundaryPoints, out Vec2 boundsMin, out Vec2 boundsMax)`

**Purpose:** **Purpose:** Reads and returns the axis aligned boundary rectangle value held by the this instance.

```csharp
// Static call; no instance required
MBSceneUtilities.GetAxisAlignedBoundaryRectangle(boundaryPoints, boundsMin, boundsMax);
```

### FindConvexHull
`public static void FindConvexHull(ref MBList<Vec2> boundary)`

**Purpose:** **Purpose:** Looks up the matching convex hull in the current collection or scope.

```csharp
// Static call; no instance required
MBSceneUtilities.FindConvexHull(boundary);
```

### RadialSortBoundary
`public static void RadialSortBoundary(ref MBList<Vec2> boundary)`

**Purpose:** **Purpose:** Executes the RadialSortBoundary logic.

```csharp
// Static call; no instance required
MBSceneUtilities.RadialSortBoundary(boundary);
```

### RadialSortBoundary
`public static void RadialSortBoundary(ref MBList<Vec3> boundary)`

**Purpose:** **Purpose:** Executes the RadialSortBoundary logic.

```csharp
// Static call; no instance required
MBSceneUtilities.RadialSortBoundary(boundary);
```

### IsConvexAndRadiallySorted
`public static bool IsConvexAndRadiallySorted(MBList<Vec2> boundary)`

**Purpose:** **Purpose:** Determines whether the this instance is in the convex and radially sorted state or condition.

```csharp
// Static call; no instance required
MBSceneUtilities.IsConvexAndRadiallySorted(boundary);
```

### IsPointInsideBoundaries
`public static bool IsPointInsideBoundaries(in Vec2 point, MBList<Vec2> boundaries, float acceptanceThreshold = 0.05f)`

**Purpose:** **Purpose:** Determines whether the this instance is in the point inside boundaries state or condition.

```csharp
// Static call; no instance required
MBSceneUtilities.IsPointInsideBoundaries(point, boundaries, 0);
```

### FindClosestPointToBoundaries
`public static float FindClosestPointToBoundaries(in Vec2 position, MBList<Vec2> boundaries, out Vec2 closestPoint)`

**Purpose:** **Purpose:** Looks up the matching closest point to boundaries in the current collection or scope.

```csharp
// Static call; no instance required
MBSceneUtilities.FindClosestPointToBoundaries(position, boundaries, closestPoint);
```

### FindClosestPointToBoundariesReturnDistanceSquared
`public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position, MBList<Vec2> boundaries, out Vec2 closestPoint, out bool isPositionInsideBoundaries)`

**Purpose:** **Purpose:** Looks up the matching closest point to boundaries return distance squared in the current collection or scope.

```csharp
// Static call; no instance required
MBSceneUtilities.FindClosestPointToBoundariesReturnDistanceSquared(position, boundaries, closestPoint, isPositionInsideBoundaries);
```

## Usage Example

```csharp
MBSceneUtilities.GetAllSpawnPaths(scene);
```

## See Also

- [Area Index](../)