---
title: "MatrixFrame"
description: "MatrixFrame: a public struct in TaleWorlds.Library; 43 exposed members (36 methods, 4 properties, 0 fields). Source: TaleWorlds.Library/MatrixFrame.cs."
---
# MatrixFrame

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct MatrixFrame`
**File:** `TaleWorlds.Library/MatrixFrame.cs`

## Overview

MatrixFrame lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MatrixFrame.cs. It is a public struct; the inheritance chain is MatrixFrame. It exposes 43 public/protected members: 36 methods, 4 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MatrixFrame is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MatrixFrame. The surface is method-led (methods 36/43, properties 4/43), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MatrixFrame.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MatrixFrame` | `public MatrixFrame(in Mat3 rot, in Vec3 o)` | constructor |
| `MatrixFrame` | `public MatrixFrame(float _11, float _12, float _13, float _21, float _22, float _23, float _31, float _32, float _33, float _41, float _42, float _43)` | constructor |
| `MatrixFrame` | `public MatrixFrame(float _11, float _12, float _13, float _14, float _21, float _22, float _23, float _24, float _31, float _32, float _33, float _34, float _41, float _42, float _43, float _44)` | constructor |
| `TransformToParent` | `public Vec3 TransformToParent(in Vec3 v)` | method |
| `TransformToParentDouble` | `public Vec3 TransformToParentDouble(in Vec3 v)` | method |
| `TransformToParent` | `public Vec2 TransformToParent(in Vec2 v)` | method |
| `TransformToLocal` | `public Vec3 TransformToLocal(in Vec3 v)` | method |
| `TransformToLocalNonUnit` | `public Vec3 TransformToLocalNonUnit(in Vec3 v)` | method |
| `NearlyEquals` | `public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)` | method |
| `TransformToLocalNonOrthogonal` | `public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)` | method |
| `TransformToLocalNonOrthogonal` | `public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)` | method |
| `Lerp` | `public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)` | method |
| `LerpNonOrthogonal` | `public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)` | method |
| `Slerp` | `public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)` | method |
| `TransformToParent` | `public MatrixFrame TransformToParent(in MatrixFrame m)` | method |
| `TransformToLocal` | `public MatrixFrame TransformToLocal(in MatrixFrame m)` | method |
| `TransformToParentWithW` | `public Vec3 TransformToParentWithW(Vec3 _s)` | method |
| `GetUnitRotFrame` | `public MatrixFrame GetUnitRotFrame(float removedScale)` | method |
| `Identity` | `public static MatrixFrame Identity` | property |
| `Zero` | `public static MatrixFrame Zero` | property |
| `InverseFast` | `public MatrixFrame InverseFast()` | method |
| `Inverse` | `public MatrixFrame Inverse()` | method |
| `Determinant4X4` | `public float Determinant4X4()` | method |
| `Rotate` | `public void Rotate(float radian, in Vec3 axis)` | method |
| `*` | `public static MatrixFrame operator *(in MatrixFrame m1, in MatrixFrame m2)` | operator |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `ToString` | `public override string ToString()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Strafe` | `public MatrixFrame Strafe(float a)` | method |
| `Advance` | `public MatrixFrame Advance(float a)` | method |
| `Elevate` | `public MatrixFrame Elevate(float a)` | method |
| `Scale` | `public void Scale(in Vec3 scalingVector)` | method |
| `GetScale` | `public Vec3 GetScale()` | method |
| `IsIdentity` | `public bool IsIdentity` | property |
| `IsZero` | `public bool IsZero` | property |
| `this[...]` | `public Vec3 this[int i]` | indexer |
| `this[...]` | `public float this[int i, int j]` | indexer |
| `CreateLookAt` | `public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)` | method |
| `CenterFrameOfTwoPoints` | `public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)` | method |
| `Fill` | `public void Fill()` | method |
| `Filled` | `public MatrixFrame Filled()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
