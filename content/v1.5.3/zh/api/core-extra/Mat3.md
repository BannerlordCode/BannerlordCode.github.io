---
title: "Mat3"
description: "Mat3 的自动生成类参考。"
---
# Mat3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Mat3 `
**Base:** System.Object
**Source:** TaleWorlds.Library/Mat3.cs

## 概述

`Mat3` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/Mat3.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RotateAboutSide
`public void RotateAboutSide(float a) `

### RotateAboutForward
`public void RotateAboutForward(float a) `

### RotateAboutUp
`public void RotateAboutUp(float a) `

### RotateAboutAnArbitraryVector
`public void RotateAboutAnArbitraryVector(in Vec3 v,float a) `

### IsOrthonormal
`public bool IsOrthonormal() `

### IsLeftHanded
`public bool IsLeftHanded() `

### NearlyEquals
`public bool NearlyEquals(in Mat3 rhs,float epsilon = 1E-05f) `

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v) `
`public Vec2 TransformToParent(in Vec2 v) `
`public Mat3 TransformToParent(in Mat3 m) `

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v) `
`public Vec2 TransformToLocal(in Vec2 v) `
`public Mat3 TransformToLocal(in Mat3 m) `

### Orthonormalize
`public void Orthonormalize() `

### OrthonormalizeAccordingToForwardAndKeepUpAsZAxis
`public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis() `

### GetUnitRotation
`public Mat3 GetUnitRotation(float removedScale) `

### MakeUnit
`public Vec3 MakeUnit() `

### IsUnit
`public bool IsUnit() `

### ApplyScaleLocal
`public void ApplyScaleLocal(float scaleAmount) `
`public void ApplyScaleLocal(in Vec3 scaleAmountXYZ) `

### HasScale
`public bool HasScale() `

### GetScaleVector
`public Vec3 GetScaleVector() `

### GetScaleVectorSquared
`public Vec3 GetScaleVectorSquared() `

### ToQuaternion
`public void ToQuaternion(out Quaternion quat) `
`public Quaternion ToQuaternion() `

### Lerp
`public static Mat3 Lerp(in Mat3 m1,in Mat3 m2,float alpha) `

### LerpNonOrthogonal
`public static Mat3 LerpNonOrthogonal(in Mat3 m1,in Mat3 m2,float alpha) `

### Slerp
`public static Mat3 Slerp(in Mat3 m1,in Mat3 m2,float alpha) `

### SlerpFPSIndependent
`public static Mat3 SlerpFPSIndependent(in Mat3 m1,in Mat3 m2,float alpha) `

### CreateMat3WithForward
`public static Mat3 CreateMat3WithForward(in Vec3 direction) `

### CreateDiagonalMat3
`public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData) `

### GetEulerAngles
`public Vec3 GetEulerAngles() `

### Transpose
`public Mat3 Transpose() `

### ToString
`public override string ToString() `

### Equals
`public override bool Equals(object obj) `

### GetHashCode
`public override int GetHashCode() `

### IsIdentity
`public bool IsIdentity() `

### IsZero
`public bool IsZero() `

### IsUniformScaled
`public bool IsUniformScaled() `

### ApplyEulerAngles
`public void ApplyEulerAngles(in Vec3 eulerAngles) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
