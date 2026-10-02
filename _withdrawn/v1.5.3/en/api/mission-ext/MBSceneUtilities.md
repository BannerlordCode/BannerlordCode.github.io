---
title: "MBSceneUtilities"
description: "Auto-generated class reference for MBSceneUtilities."
---
# MBSceneUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBSceneUtilities `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBSceneUtilities.cs

## Overview

Auto-generated stub for `MBSceneUtilities`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetAllSpawnPaths
`public static MBList<Path> GetAllSpawnPaths(Scene scene)`

### GetSoftBoundaryPoints
`public static MBList<Vec2> GetSoftBoundaryPoints(Scene scene)`

### GetHardBoundaryPoints
`public static MBList<Vec2> GetHardBoundaryPoints(Scene scene)`

### GetSceneLimitPoints
`public static MBList<Vec2> GetSceneLimitPoints(Scene scene,out Vec2 sceneLimitMin,out Vec2 sceneLimitMax)`

### GetDeploymentBoundaries
`public static MBList<ValueTuple<string,MBList<Vec2>,bool>> GetDeploymentBoundaries(BattleSideEnum battleSide)`

### GetAxisAlignedBoundaryRectangle
`public static void GetAxisAlignedBoundaryRectangle(List<Vec2> boundaryPoints,out Vec2 boundsMin,out Vec2 boundsMax)`

### FindConvexHull
`public static void FindConvexHull(ref MBList<Vec2> boundary)`

### RadialSortBoundary
`public static void RadialSortBoundary(ref MBList<Vec2> boundary)`

### IsConvexAndRadiallySorted
`public static bool IsConvexAndRadiallySorted(MBList<Vec2> boundary)`

### IsPointInsideBoundaries
`public static bool IsPointInsideBoundaries(in Vec2 point,MBList<Vec2> boundaries,float acceptanceThreshold = 0.05f)`

### FindClosestPointToBoundaries
`public static float FindClosestPointToBoundaries(in Vec2 position,MBList<Vec2> boundaries,out Vec2 closestPoint)`

### FindClosestPointToBoundariesReturnDistanceSquared
`public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position,MBList<Vec2> boundaries,out Vec2 closestPoint,out bool isPositionInsideBoundaries)`

## See Also

- [Section index](../)
