---
title: "MatrixFrame"
description: "MatrixFrame 的自动生成类参考。"
---
# MatrixFrame

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MatrixFrame `
**Base:** System.Object
**Source:** TaleWorlds.Library/MatrixFrame.cs

## 概述

`MatrixFrame` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/MatrixFrame.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v) `
`public Vec2 TransformToParent(in Vec2 v) `
`public MatrixFrame TransformToParent(in MatrixFrame m) `

### TransformToParentDouble
`public Vec3 TransformToParentDouble(in Vec3 v) `

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v) `
`public MatrixFrame TransformToLocal(in MatrixFrame m) `

### TransformToLocalNonUnit
`public Vec3 TransformToLocalNonUnit(in Vec3 v) `

### NearlyEquals
`public bool NearlyEquals(MatrixFrame rhs,float epsilon = 1E-05f) `

### TransformToLocalNonOrthogonal
`public Vec3 TransformToLocalNonOrthogonal(in Vec3 v) `
`public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame) `

### Lerp
`public static MatrixFrame Lerp(in MatrixFrame m1,in MatrixFrame m2,float alpha) `

### LerpNonOrthogonal
`public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1,in MatrixFrame m2,float alpha) `

### Slerp
`public static MatrixFrame Slerp(in MatrixFrame m1,in MatrixFrame m2,float alpha) `

### TransformToParentWithW
`public Vec3 TransformToParentWithW(Vec3 _s) `

### GetUnitRotFrame
`public MatrixFrame GetUnitRotFrame(float removedScale) `

### InverseFast
`public MatrixFrame InverseFast() `

### Inverse
`public MatrixFrame Inverse() `

### Determinant4X4
`public float Determinant4X4() `

### Rotate
`public void Rotate(float radian,in Vec3 axis) `

### ToString
`public override string ToString() `

### Equals
`public override bool Equals(object obj) `

### GetHashCode
`public override int GetHashCode() `

### Strafe
`public MatrixFrame Strafe(float a) `

### Advance
`public MatrixFrame Advance(float a) `

### Elevate
`public MatrixFrame Elevate(float a) `

### Scale
`public void Scale(in Vec3 scalingVector) `

### GetScale
`public Vec3 GetScale() `

### CreateLookAt
`public static MatrixFrame CreateLookAt(in Vec3 position,in Vec3 target,in Vec3 upVector) `

### CenterFrameOfTwoPoints
`public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1,in Vec3 p2,Vec3 upVector) `

### Fill
`public void Fill() `

### Filled
`public MatrixFrame Filled() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
