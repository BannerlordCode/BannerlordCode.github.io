---
title: "Vec2"
description: "Vec2 的自动生成类参考。"
---
# Vec2

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec2 `
**Base:** System.Object
**Source:** TaleWorlds.Library/Vec2.cs

## 概述

`Vec2` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/Vec2.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ToVec3
`public Vec3 ToVec3(float z = 0f) `

### Vector2
`public static explicit operator Vector2(Vec2 vec2) `

### Normalize
`public float Normalize() `

### Normalized
`public Vec2 Normalized() `

### ClampMagnitude
`public void ClampMagnitude(float min,float max) `

### GetWindingOrder
`public static WindingOrder GetWindingOrder(Vec2 first,Vec2 second,Vec2 third) `

### CCW
`public static float CCW(Vec2 va,Vec2 vb) `

### Equals
`public override bool Equals(object obj) `

### GetHashCode
`public override int GetHashCode() `

### IsUnit
`public bool IsUnit() `

### IsNonZero
`public bool IsNonZero() `

### NearlyEquals
`public bool NearlyEquals(Vec2 v,float epsilon = 1E-05f) `

### RotateCCW
`public void RotateCCW(float angleInRadians) `

### DotProduct
`public float DotProduct(Vec2 v) `
`public static float DotProduct(Vec2 va,Vec2 vb) `

### ElementWiseProduct
`public static Vec2 ElementWiseProduct(Vec2 va,Vec2 vb) `

### FromRotation
`public static Vec2 FromRotation(float rotation) `

### TransformToLocalUnitF
`public Vec2 TransformToLocalUnitF(Vec2 a) `

### TransformToParentUnitF
`public Vec2 TransformToParentUnitF(Vec2 a) `

### TransformToLocalUnitFLeftHanded
`public Vec2 TransformToLocalUnitFLeftHanded(Vec2 a) `

### TransformToParentUnitFLeftHanded
`public Vec2 TransformToParentUnitFLeftHanded(Vec2 a) `

### RightVec
`public Vec2 RightVec() `

### LeftVec
`public Vec2 LeftVec() `

### Max
`public static Vec2 Max(Vec2 v1,Vec2 v2) `
`public static Vec2 Max(Vec2 v1,float f) `

### Min
`public static Vec2 Min(Vec2 v1,Vec2 v2) `
`public static Vec2 Min(Vec2 v1,float f) `

### ToString
`public override string ToString() `

### DistanceSquared
`public float DistanceSquared(Vec2 v) `

### Distance
`public float Distance(Vec2 v) `

### DistanceToLine
`public static float DistanceToLine(Vec2 line1,Vec2 line2,Vec2 point) `

### DistanceToLineSegmentSquared
`public static float DistanceToLineSegmentSquared(Vec2 line1,Vec2 line2,Vec2 point) `

### DistanceToLineSegment
`public float DistanceToLineSegment(Vec2 v,Vec2 w,out Vec2 closestPointOnLineSegment) `

### DistanceSquaredToLineSegment
`public float DistanceSquaredToLineSegment(Vec2 v,Vec2 w,out Vec2 closestPointOnLineSegment) `

### Abs
`public static Vec2 Abs(Vec2 vec) `

### Lerp
`public static Vec2 Lerp(Vec2 v1,Vec2 v2,float alpha) `

### Slerp
`public static Vec2 Slerp(Vec2 start,Vec2 end,float percent) `

### AngleBetween
`public float AngleBetween(Vec2 vector2) `

### Determinant
`public static float Determinant(in Vec2 vec1,in Vec2 vec2) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
