---
title: "BoundingBox"
description: "Auto-generated class reference for BoundingBox."
---
# BoundingBox

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct BoundingBox `
**Base:** System.Object
**Source:** TaleWorlds.Engine/BoundingBox.cs

## Overview

Auto-generated stub for `BoundingBox`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RelaxMinMaxWithPoint
`public void RelaxMinMaxWithPoint(in Vec3 point)`

### RelaxMinMaxWithPointAndRadius
`public void RelaxMinMaxWithPointAndRadius(in Vec3 point,float radius)`

### RecomputeRadius
`public void RecomputeRadius()`

### GetTransformedTipPointsToParent
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame parentFrame)`

### GetTransformedTipPointsToChild
`public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)`

### RelaxWithBoundingBox
`public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)`

### RelaxWithArbitraryBoundingBox
`public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox,MatrixFrame otherGlobalFrame,MatrixFrame globalFrameOfThisBoundingBox)`

### RelaxWithChildBoundingBox
`public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox,MatrixFrame childFrame)`

### BeginRelaxation
`public void BeginRelaxation()`

### ArrangeWithAnotherBoundingBox
`public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox,BoundingBox otherBoundingBox,float changeAmount)`

### PointInsideBox
`public bool PointInsideBox(Vec3 point,float epsilon)`

### GetLongestHalfDimensionOfBoundingBox
`public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)`

### AreBoundingBoxesIntersecting
`public static bool AreBoundingBoxesIntersecting(BoundingBox a,BoundingBox b)`

### RenderBoundingBox
`public void RenderBoundingBox()`

## See Also

- [Section index](../)
