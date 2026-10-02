---
title: "Quaternion"
description: "Quaternion: a public struct in TaleWorlds.Library; 39 exposed members (35 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Quaternion.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Quaternion

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Quaternion`
**File:** `TaleWorlds.Library/Quaternion.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Quaternion lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Quaternion.cs. It is a public struct; the inheritance chain is Quaternion. It exposes 39 public/protected members: 35 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Quaternion lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Quaternion. The surface is method-led (methods 35/39, properties 3/39), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Quaternion.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Quaternion` | `public Quaternion(float x, float y, float z, float w)` | constructor |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `+` | `public static Quaternion operator +(Quaternion a, Quaternion b)` | operator |
| `-` | `public static Quaternion operator -(Quaternion a, Quaternion b)` | operator |
| `*` | `public static Quaternion operator *(Quaternion a, float b)` | operator |
| `*` | `public static Quaternion operator *(float s, Quaternion v)` | operator |
| `*` | `public static Quaternion operator *(Quaternion a, Quaternion b)` | operator |
| `/` | `public static Quaternion operator /(Quaternion v, float s)` | operator |
| `this[...]` | `public float this[int i]` | indexer |
| `Normalize` | `public float Normalize()` | method |
| `SafeNormalize` | `public float SafeNormalize()` | method |
| `NormalizeWeighted` | `public float NormalizeWeighted()` | method |
| `SetToRotationX` | `public void SetToRotationX(float angle)` | method |
| `SetToRotationY` | `public void SetToRotationY(float angle)` | method |
| `SetToRotationZ` | `public void SetToRotationZ(float angle)` | method |
| `Flip` | `public void Flip()` | method |
| `IsIdentity` | `public bool IsIdentity` | property |
| `IsUnit` | `public bool IsUnit` | property |
| `Identity` | `public static Quaternion Identity` | property |
| `TransformToParent` | `public Quaternion TransformToParent(Quaternion q)` | method |
| `TransformToLocal` | `public Quaternion TransformToLocal(Quaternion q)` | method |
| `TransformToLocalWithoutNormalize` | `public Quaternion TransformToLocalWithoutNormalize(Quaternion q)` | method |
| `Slerp` | `public static Quaternion Slerp(Quaternion from, Quaternion to, float t)` | method |
| `Lerp` | `public static Quaternion Lerp(Quaternion from, Quaternion to, float t)` | method |
| `Mat3FromQuaternion` | `public static Mat3 Mat3FromQuaternion(Quaternion quat)` | method |
| `QuaternionFromEulerAngles` | `public static Quaternion QuaternionFromEulerAngles(float yaw, float pitch, float roll)` | method |
| `QuaternionFromMat3` | `public static Quaternion QuaternionFromMat3(Mat3 m)` | method |
| `AxisAngleFromQuaternion` | `public static void AxisAngleFromQuaternion(out Vec3 axis, out float angle, Quaternion quat)` | method |
| `QuaternionFromAxisAngle` | `public static Quaternion QuaternionFromAxisAngle(Vec3 axis, float angle)` | method |
| `EulerAngleFromQuaternion` | `public static Vec3 EulerAngleFromQuaternion(Quaternion quat)` | method |
| `FindShortestArcAsQuaternion` | `public static Quaternion FindShortestArcAsQuaternion(Vec3 v0, Vec3 v1)` | method |
| `Dotp4` | `public float Dotp4(Quaternion q2)` | method |
| `ToMat3` | `public Mat3 ToMat3()` | method |
| `InverseDirection` | `public bool InverseDirection(Quaternion q2)` | method |
| `Conjugate` | `public Quaternion Conjugate()` | method |
| `Inverse` | `public Quaternion Inverse()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
