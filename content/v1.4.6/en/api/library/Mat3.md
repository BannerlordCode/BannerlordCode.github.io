---
title: "Mat3"
description: "Mat3: a public struct in TaleWorlds.Library; 47 exposed members (44 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/Mat3.cs."
---
# Mat3

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Mat3`
**File:** `TaleWorlds.Library/Mat3.cs`

## Overview

Mat3 lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Mat3.cs. It is a public struct; the inheritance chain is Mat3. It exposes 47 public/protected members: 44 methods, 1 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Mat3 is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain Mat3. The surface is method-led (methods 44/47, properties 1/47), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Mat3.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Mat3` | `public Mat3(in Vec3 s, in Vec3 f, in Vec3 u)` | constructor |
| `Mat3` | `public Mat3(float sx, float sy, float sz, float fx, float fy, float fz, float ux, float uy, float uz)` | constructor |
| `this[...]` | `public Vec3 this[int i]` | indexer |
| `RotateAboutSide` | `public void RotateAboutSide(float a)` | method |
| `RotateAboutForward` | `public void RotateAboutForward(float a)` | method |
| `RotateAboutUp` | `public void RotateAboutUp(float a)` | method |
| `RotateAboutAnArbitraryVector` | `public void RotateAboutAnArbitraryVector(in Vec3 v, float a)` | method |
| `IsOrthonormal` | `public bool IsOrthonormal()` | method |
| `IsLeftHanded` | `public bool IsLeftHanded()` | method |
| `NearlyEquals` | `public bool NearlyEquals(in Mat3 rhs, float epsilon = 1E-05f)` | method |
| `TransformToParent` | `public Vec3 TransformToParent(in Vec3 v)` | method |
| `TransformToParent` | `public Vec2 TransformToParent(in Vec2 v)` | method |
| `TransformToLocal` | `public Vec3 TransformToLocal(in Vec3 v)` | method |
| `TransformToLocal` | `public Vec2 TransformToLocal(in Vec2 v)` | method |
| `TransformToParent` | `public Mat3 TransformToParent(in Mat3 m)` | method |
| `TransformToLocal` | `public Mat3 TransformToLocal(in Mat3 m)` | method |
| `Orthonormalize` | `public void Orthonormalize()` | method |
| `OrthonormalizeAccordingToForwardAndKeepUpAsZAxis` | `public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis()` | method |
| `GetUnitRotation` | `public Mat3 GetUnitRotation(float removedScale)` | method |
| `MakeUnit` | `public Vec3 MakeUnit()` | method |
| `IsUnit` | `public bool IsUnit()` | method |
| `ApplyScaleLocal` | `public void ApplyScaleLocal(float scaleAmount)` | method |
| `ApplyScaleLocal` | `public void ApplyScaleLocal(in Vec3 scaleAmountXYZ)` | method |
| `HasScale` | `public bool HasScale()` | method |
| `GetScaleVector` | `public Vec3 GetScaleVector()` | method |
| `GetScaleVectorSquared` | `public Vec3 GetScaleVectorSquared()` | method |
| `ToQuaternion` | `public void ToQuaternion(out Quaternion quat)` | method |
| `ToQuaternion` | `public Quaternion ToQuaternion()` | method |
| `Lerp` | `public static Mat3 Lerp(in Mat3 m1, in Mat3 m2, float alpha)` | method |
| `LerpNonOrthogonal` | `public static Mat3 LerpNonOrthogonal(in Mat3 m1, in Mat3 m2, float alpha)` | method |
| `Slerp` | `public static Mat3 Slerp(in Mat3 m1, in Mat3 m2, float alpha)` | method |
| `SlerpFPSIndependent` | `public static Mat3 SlerpFPSIndependent(in Mat3 m1, in Mat3 m2, float alpha)` | method |
| `CreateMat3WithForward` | `public static Mat3 CreateMat3WithForward(in Vec3 direction)` | method |
| `CreateDiagonalMat3` | `public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData)` | method |
| `GetEulerAngles` | `public Vec3 GetEulerAngles()` | method |
| `Transpose` | `public Mat3 Transpose()` | method |
| `Identity` | `public static Mat3 Identity` | property |
| `*` | `public static Mat3 operator *(in Mat3 v, float a)` | operator |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `ToString` | `public override string ToString()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `IsIdentity` | `public bool IsIdentity()` | method |
| `IsZero` | `public bool IsZero()` | method |
| `IsUniformScaled` | `public bool IsUniformScaled()` | method |
| `ApplyEulerAngles` | `public void ApplyEulerAngles(in Vec3 eulerAngles)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
