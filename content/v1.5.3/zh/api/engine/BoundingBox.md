---
title: "BoundingBox"
description: "BoundingBox 的自动生成类参考。"
---
# BoundingBox

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct BoundingBox `
**Base:** System.Object
**Source:** TaleWorlds.Engine/BoundingBox.cs

## 概述

`BoundingBox` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/BoundingBox.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RelaxMinMaxWithPoint
`public void RelaxMinMaxWithPoint(in Vec3 point) `

### RelaxMinMaxWithPointAndRadius
`public void RelaxMinMaxWithPointAndRadius(in Vec3 point,float radius) `

### RecomputeRadius
`public void RecomputeRadius() `

### GetTransformedTipPointsToParent
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame parentFrame) `

### GetTransformedTipPointsToChild
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame) `

### RelaxWithBoundingBox
`public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox) `

### RelaxWithArbitraryBoundingBox
`public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox,MatrixFrame otherGlobalFrame,MatrixFrame globalFrameOfThisBoundingBox) `

### RelaxWithChildBoundingBox
`public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox,MatrixFrame childFrame) `

### BeginRelaxation
`public void BeginRelaxation() `

### ArrangeWithAnotherBoundingBox
`public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox,BoundingBox otherBoundingBox,float changeAmount) `

### PointInsideBox
`public bool PointInsideBox(Vec3 point,float epsilon) `

### GetLongestHalfDimensionOfBoundingBox
`public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox) `

### AreBoundingBoxesIntersecting
`public static bool AreBoundingBoxesIntersecting(BoundingBox a,BoundingBox b) `

### RenderBoundingBox
`public void RenderBoundingBox() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
