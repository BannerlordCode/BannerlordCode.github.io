---
title: "SpawnPathData"
description: "SpawnPathData 的自动生成类参考。"
---
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnPathData `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/SpawnPathData.cs

## 概述

`SpawnPathData` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/SpawnPathData.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Invert
`public SpawnPathData Invert() `

### ClampPathOffset
`public void ClampPathOffset(ref float relativePathOffset) `

### ConvertPointToRelativePathOffset
`public float ConvertPointToRelativePathOffset(int pointIndex) `

### ConvertRelativePathOffsetToPathDistance
`public float ConvertRelativePathOffsetToPathDistance(float relativePathOffset) `

### GetNodeIndexAtPathDistance
`public int GetNodeIndexAtPathDistance(float pathDistance) `

### GetBaseOffset
`public float GetBaseOffset() `

### IsPathOffsetValid
`public bool IsPathOffsetValid(float relativePathOffset) `

### GetOffsetOverflow
`public float GetOffsetOverflow(float relativePathOffset) `

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(float relativePathOffset,bool searchNearestValidFrame = false,SpawnPathData.SearchDirection searchDirection = SpawnPathData.SearchDirection.Backward) `

### GetCenterFrame
`public MatrixFrame GetCenterFrame() `

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float basePathOffset,float targetPathOffset,bool useTangentDirection,out Vec2 spawnPathPosition,out Vec2 spawnPathDirection,bool decideDirectionDynamically = false,float dynamicDistancePercentage = 0.2f) `

### Create
`public static SpawnPathData Create(Scene scene,Path path,float pivotOffset,bool isInverted = false,SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
