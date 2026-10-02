---
title: "SpawnPathData"
description: "Auto-generated class reference for SpawnPathData."
---
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnPathData `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/SpawnPathData.cs

## Overview

Auto-generated stub for `SpawnPathData`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Invert
`public SpawnPathData Invert()`

### ClampPathOffset
`public void ClampPathOffset(ref float relativePathOffset)`

### ConvertPointToRelativePathOffset
`public float ConvertPointToRelativePathOffset(int pointIndex)`

### ConvertRelativePathOffsetToPathDistance
`public float ConvertRelativePathOffsetToPathDistance(float relativePathOffset)`

### GetNodeIndexAtPathDistance
`public int GetNodeIndexAtPathDistance(float pathDistance)`

### GetBaseOffset
`public float GetBaseOffset()`

### IsPathOffsetValid
`public bool IsPathOffsetValid(float relativePathOffset)`

### GetOffsetOverflow
`public float GetOffsetOverflow(float relativePathOffset)`

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(float relativePathOffset,bool searchNearestValidFrame = false,SpawnPathData.SearchDirection searchDirection = SpawnPathData.SearchDirection.Backward)`

### GetCenterFrame
`public MatrixFrame GetCenterFrame()`

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float basePathOffset,float targetPathOffset,bool useTangentDirection,out Vec2 spawnPathPosition,out Vec2 spawnPathDirection,bool decideDirectionDynamically = false,float dynamicDistancePercentage = 0.2f)`

### Create
`public static SpawnPathData Create(Scene scene,Path path,float pivotOffset,bool isInverted = false,SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)`

## See Also

- [Section index](../)
