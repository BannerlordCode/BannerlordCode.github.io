---
title: "Quaternion"
description: "Auto-generated class reference for Quaternion."
---
# Quaternion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Quaternion `
**Base:** System.Object
**Source:** TaleWorlds.Library/Quaternion.cs

## Overview

Auto-generated stub for `Quaternion`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetHashCode
`public override int GetHashCode()`

### Equals
`public override bool Equals(object obj)`

### Normalize
`public float Normalize()`

### SafeNormalize
`public float SafeNormalize()`

### NormalizeWeighted
`public float NormalizeWeighted()`

### SetToRotationX
`public void SetToRotationX(float angle)`

### SetToRotationY
`public void SetToRotationY(float angle)`

### SetToRotationZ
`public void SetToRotationZ(float angle)`

### Flip
`public void Flip()`

### TransformToParent
`public Quaternion TransformToParent(Quaternion q)`

### TransformToLocal
`public Quaternion TransformToLocal(Quaternion q)`

### TransformToLocalWithoutNormalize
`public Quaternion TransformToLocalWithoutNormalize(Quaternion q)`

### Slerp
`public static Quaternion Slerp(Quaternion from,Quaternion to,float t)`

### Lerp
`public static Quaternion Lerp(Quaternion from,Quaternion to,float t)`

### Mat3FromQuaternion
`public static Mat3 Mat3FromQuaternion(Quaternion quat)`

### QuaternionFromEulerAngles
`public static Quaternion QuaternionFromEulerAngles(float yaw,float pitch,float roll)`

### QuaternionFromMat3
`public static Quaternion QuaternionFromMat3(Mat3 m)`

### AxisAngleFromQuaternion
`public static void AxisAngleFromQuaternion(out Vec3 axis,out float angle,Quaternion quat)`

### QuaternionFromAxisAngle
`public static Quaternion QuaternionFromAxisAngle(Vec3 axis,float angle)`

### EulerAngleFromQuaternion
`public static Vec3 EulerAngleFromQuaternion(Quaternion quat)`

### FindShortestArcAsQuaternion
`public static Quaternion FindShortestArcAsQuaternion(Vec3 v0,Vec3 v1)`

### Dotp4
`public float Dotp4(Quaternion q2)`

### ToMat3
`public Mat3 ToMat3()`

### InverseDirection
`public bool InverseDirection(Quaternion q2)`

### Conjugate
`public Quaternion Conjugate()`

### Inverse
`public Quaternion Inverse()`

## See Also

- [Section index](../)
