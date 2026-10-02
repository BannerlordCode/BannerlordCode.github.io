---
title: "Vec3"
description: "Vec3 的自动生成类参考。"
---
# Vec3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec3 `
**Base:** System.Object
**Source:** TaleWorlds.Library/Vec3.cs

## 概述

`Vec3` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/Vec3.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Abs
`public static Vec3 Abs(Vec3 vec) `

### Vector3
`public static explicit operator Vector3(Vec3 vec3) `

### DotProduct
`public static float DotProduct(Vec3 v1,Vec3 v2) `

### Lerp
`public static Vec3 Lerp(Vec3 v1,Vec3 v2,float alpha) `

### Slerp
`public static Vec3 Slerp(Vec3 start,Vec3 end,float percent) `

### Vec3Max
`public static Vec3 Vec3Max(Vec3 v1,Vec3 v2) `

### Vec3Min
`public static Vec3 Vec3Min(Vec3 v1,Vec3 v2) `

### CrossProduct
`public static Vec3 CrossProduct(Vec3 va,Vec3 vb) `

### ElementWiseProduct
`public static Vec3 ElementWiseProduct(Vec3 va,Vec3 vb) `

### ElementWiseDivision
`public static Vec3 ElementWiseDivision(Vec3 va,Vec3 vb) `

### Equals
`public override bool Equals(object obj) `

### GetHashCode
`public override int GetHashCode() `

### NormalizedCopy
`public Vec3 NormalizedCopy() `

### Normalize
`public float Normalize() `

### ClampMagnitude
`public void ClampMagnitude(float min,float max) `

### ClampedCopy
`public Vec3 ClampedCopy(float min,float max) `
`public Vec3 ClampedCopy(float min,float max,out bool valueClamped) `

### NormalizeWithoutChangingZ
`public void NormalizeWithoutChangingZ() `

### CrossProductWithUp
`public Vec3 CrossProductWithUp() `

### CrossProductWithUpAsLeftParameter
`public Vec3 CrossProductWithUpAsLeftParameter() `

### NearlyEquals
`public bool NearlyEquals(in Vec3 v,float epsilon = 1E-05f) `

### RotateAboutX
`public void RotateAboutX(float a) `

### RotateAboutY
`public void RotateAboutY(float a) `

### RotateAboutZ
`public void RotateAboutZ(float a) `

### RotateAboutAnArbitraryVector
`public Vec3 RotateAboutAnArbitraryVector(Vec3 vec,float a) `

### Reflect
`public Vec3 Reflect(Vec3 normal) `

### ProjectOnUnitVector
`public Vec3 ProjectOnUnitVector(Vec3 ov) `

### DistanceSquared
`public float DistanceSquared(Vec3 v) `

### Distance
`public float Distance(Vec3 v) `

### RotateVectorToXYPlane
`public Vec3 RotateVectorToXYPlane() `

### AngleBetweenTwoVectors
`public static float AngleBetweenTwoVectors(Vec3 v1,Vec3 v2) `

### ToString
`public override string ToString() `
`public string ToString(string format) `

### Parse
`public static Vec3 Parse(string input) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
