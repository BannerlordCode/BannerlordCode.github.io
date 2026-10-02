---
title: "Path"
description: "Path 的自动生成类参考。"
---
# Path

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Path : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/Path.cs

## 概述

`Path` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Path.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetHermiteFrameForDt
`public MatrixFrame GetHermiteFrameForDt(float phase,int first_point) `

### GetFrameForDistance
`public MatrixFrame GetFrameForDistance(float distance) `

### GetNearestFrameWithValidAlphaForDistance
`public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance,bool searchForward = true,float alphaThreshold = 0.5f) `

### GetFrameAndColorForDistance
`public void GetFrameAndColorForDistance(float distance,out MatrixFrame frame,out Vec3 color) `

### GetArcLength
`public float GetArcLength(int first_point) `

### GetPoints
`public void GetPoints(MatrixFrame[] points) `

### GetTotalLength
`public float GetTotalLength() `

### GetVersion
`public int GetVersion() `

### SetFrameOfPoint
`public void SetFrameOfPoint(int pointIndex,ref MatrixFrame frame) `

### SetTangentPositionOfPoint
`public void SetTangentPositionOfPoint(int pointIndex,int tangentIndex,ref Vec3 position) `

### AddPathPoint
`public int AddPathPoint(int newNodeIndex) `

### DeletePathPoint
`public void DeletePathPoint(int nodeIndex) `

### HasValidAlphaAtPathPoint
`public bool HasValidAlphaAtPathPoint(int nodeIndex,float alphaThreshold = 0.5f) `

### GetName
`public string GetName() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
