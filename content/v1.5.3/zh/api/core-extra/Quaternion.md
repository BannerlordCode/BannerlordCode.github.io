---
title: "Quaternion"
description: "Quaternion 的自动生成类参考。"
---
# Quaternion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Quaternion `
**Base:** System.Object
**Source:** TaleWorlds.Library/Quaternion.cs

## 概述

`Quaternion` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/Quaternion.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetHashCode
`public override int GetHashCode() `

### Equals
`public override bool Equals(object obj) `

### Normalize
`public float Normalize() `

### SafeNormalize
`public float SafeNormalize() `

### NormalizeWeighted
`public float NormalizeWeighted() `

### SetToRotationX
`public void SetToRotationX(float angle) `

### SetToRotationY
`public void SetToRotationY(float angle) `

### SetToRotationZ
`public void SetToRotationZ(float angle) `

### Flip
`public void Flip() `

### TransformToParent
`public Quaternion TransformToParent(Quaternion q) `

### TransformToLocal
`public Quaternion TransformToLocal(Quaternion q) `

### TransformToLocalWithoutNormalize
`public Quaternion TransformToLocalWithoutNormalize(Quaternion q) `

### Slerp
`public static Quaternion Slerp(Quaternion from,Quaternion to,float t) `

### Lerp
`public static Quaternion Lerp(Quaternion from,Quaternion to,float t) `

### Mat3FromQuaternion
`public static Mat3 Mat3FromQuaternion(Quaternion quat) `

### QuaternionFromEulerAngles
`public static Quaternion QuaternionFromEulerAngles(float yaw,float pitch,float roll) `

### QuaternionFromMat3
`public static Quaternion QuaternionFromMat3(Mat3 m) `

### AxisAngleFromQuaternion
`public static void AxisAngleFromQuaternion(out Vec3 axis,out float angle,Quaternion quat) `

### QuaternionFromAxisAngle
`public static Quaternion QuaternionFromAxisAngle(Vec3 axis,float angle) `

### EulerAngleFromQuaternion
`public static Vec3 EulerAngleFromQuaternion(Quaternion quat) `

### FindShortestArcAsQuaternion
`public static Quaternion FindShortestArcAsQuaternion(Vec3 v0,Vec3 v1) `

### Dotp4
`public float Dotp4(Quaternion q2) `

### ToMat3
`public Mat3 ToMat3() `

### InverseDirection
`public bool InverseDirection(Quaternion q2) `

### Conjugate
`public Quaternion Conjugate() `

### Inverse
`public Quaternion Inverse() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
