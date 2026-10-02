---
title: "Mat3"
description: "Auto-generated class reference for Mat3."
---
# Mat3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Mat3 `
**Base:** System.Object
**Source:** TaleWorlds.Library/Mat3.cs

## Overview

Auto-generated stub for `Mat3`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RotateAboutSide
`public void RotateAboutSide(float a)`

### RotateAboutForward
`public void RotateAboutForward(float a)`

### RotateAboutUp
`public void RotateAboutUp(float a)`

### RotateAboutAnArbitraryVector
`public void RotateAboutAnArbitraryVector(in Vec3 v,float a)`

### IsOrthonormal
`public bool IsOrthonormal()`

### IsLeftHanded
`public bool IsLeftHanded()`

### NearlyEquals
`public bool NearlyEquals(in Mat3 rhs,float epsilon = 1E-05f)`

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

### Orthonormalize
`public void Orthonormalize()`

### OrthonormalizeAccordingToForwardAndKeepUpAsZAxis
`public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis()`

### GetUnitRotation
`public Mat3 GetUnitRotation(float removedScale)`

### MakeUnit
`public Vec3 MakeUnit()`

### IsUnit
`public bool IsUnit()`

### ApplyScaleLocal
`public void ApplyScaleLocal(float scaleAmount)`

### HasScale
`public bool HasScale()`

### GetScaleVector
`public Vec3 GetScaleVector()`

### GetScaleVectorSquared
`public Vec3 GetScaleVectorSquared()`

### ToQuaternion
`public void ToQuaternion(out Quaternion quat)`

### Lerp
`public static Mat3 Lerp(in Mat3 m1,in Mat3 m2,float alpha)`

### LerpNonOrthogonal
`public static Mat3 LerpNonOrthogonal(in Mat3 m1,in Mat3 m2,float alpha)`

### Slerp
`public static Mat3 Slerp(in Mat3 m1,in Mat3 m2,float alpha)`

### SlerpFPSIndependent
`public static Mat3 SlerpFPSIndependent(in Mat3 m1,in Mat3 m2,float alpha)`

### CreateMat3WithForward
`public static Mat3 CreateMat3WithForward(in Vec3 direction)`

### CreateDiagonalMat3
`public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData)`

### GetEulerAngles
`public Vec3 GetEulerAngles()`

### Transpose
`public Mat3 Transpose()`

### ToString
`public override string ToString()`

### Equals
`public override bool Equals(object obj)`

### GetHashCode
`public override int GetHashCode()`

### IsIdentity
`public bool IsIdentity()`

### IsZero
`public bool IsZero()`

### IsUniformScaled
`public bool IsUniformScaled()`

### ApplyEulerAngles
`public void ApplyEulerAngles(in Vec3 eulerAngles)`

## See Also

- [Section index](../)
