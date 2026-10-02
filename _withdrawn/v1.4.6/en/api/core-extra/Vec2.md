---
title: "Vec2"
description: "Vec2: a public struct in TaleWorlds.Library; 63 exposed members (49 methods, 6 properties, 5 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Vec2.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Vec2

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec2`
**File:** `TaleWorlds.Library/Vec2.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Vec2 lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Vec2.cs. It is a public struct; the inheritance chain is Vec2. It exposes 63 public/protected members: 49 methods, 6 properties, 5 fields, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Vec2 lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Vec2. The surface is method-led (methods 49/63, properties 6/63), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Vec2.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `X` | `public float X` | property |
| `Y` | `public float Y` | property |
| `Vec2` | `public Vec2(float a, float b)` | constructor |
| `Vec2` | `public Vec2(Vec2 v)` | constructor |
| `Vec2` | `public Vec2(Vector2 v)` | constructor |
| `ToVec3` | `public Vec3 ToVec3(float z = 0f)` | method |
| `Vector2` | `public static explicit operator Vector2(Vec2 vec2)` | operator |
| `Vec2` | `public static implicit operator Vec2(Vector2 vec2)` | operator |
| `Normalize` | `public float Normalize()` | method |
| `Normalized` | `public Vec2 Normalized()` | method |
| `ClampMagnitude` | `public void ClampMagnitude(float min, float max)` | method |
| `GetWindingOrder` | `public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)` | method |
| `CCW` | `public static float CCW(Vec2 va, Vec2 vb)` | method |
| `Length` | `public float Length` | property |
| `LengthSquared` | `public float LengthSquared` | property |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `-` | `public static Vec2 operator -(Vec2 v)` | operator |
| `+` | `public static Vec2 operator +(Vec2 v1, Vec2 v2)` | operator |
| `-` | `public static Vec2 operator -(Vec2 v1, Vec2 v2)` | operator |
| `*` | `public static Vec2 operator *(Vec2 v, float f)` | operator |
| `*` | `public static Vec2 operator *(float f, Vec2 v)` | operator |
| `/` | `public static Vec2 operator /(float f, Vec2 v)` | operator |
| `/` | `public static Vec2 operator /(Vec2 v, float f)` | operator |
| `IsUnit` | `public bool IsUnit()` | method |
| `IsNonZero` | `public bool IsNonZero()` | method |
| `NearlyEquals` | `public bool NearlyEquals(Vec2 v, float epsilon = 1E-05f)` | method |
| `RotateCCW` | `public void RotateCCW(float angleInRadians)` | method |
| `DotProduct` | `public float DotProduct(Vec2 v)` | method |
| `DotProduct` | `public static float DotProduct(Vec2 va, Vec2 vb)` | method |
| `ElementWiseProduct` | `public static Vec2 ElementWiseProduct(Vec2 va, Vec2 vb)` | method |
| `RotationInRadians` | `public float RotationInRadians` | property |
| `FromRotation` | `public static Vec2 FromRotation(float rotation)` | method |
| `TransformToLocalUnitF` | `public Vec2 TransformToLocalUnitF(Vec2 a)` | method |
| `TransformToParentUnitF` | `public Vec2 TransformToParentUnitF(Vec2 a)` | method |
| `TransformToLocalUnitFLeftHanded` | `public Vec2 TransformToLocalUnitFLeftHanded(Vec2 a)` | method |
| `TransformToParentUnitFLeftHanded` | `public Vec2 TransformToParentUnitFLeftHanded(Vec2 a)` | method |
| `RightVec` | `public Vec2 RightVec()` | method |
| `LeftVec` | `public Vec2 LeftVec()` | method |
| `Max` | `public static Vec2 Max(Vec2 v1, Vec2 v2)` | method |
| `Max` | `public static Vec2 Max(Vec2 v1, float f)` | method |
| `Min` | `public static Vec2 Min(Vec2 v1, Vec2 v2)` | method |
| `Min` | `public static Vec2 Min(Vec2 v1, float f)` | method |
| `ToString` | `public override string ToString()` | method |
| `DistanceSquared` | `public float DistanceSquared(Vec2 v)` | method |
| `Distance` | `public float Distance(Vec2 v)` | method |
| `DistanceToLine` | `public static float DistanceToLine(Vec2 line1, Vec2 line2, Vec2 point)` | method |
| `DistanceToLineSegmentSquared` | `public static float DistanceToLineSegmentSquared(Vec2 line1, Vec2 line2, Vec2 point)` | method |
| `DistanceToLineSegment` | `public float DistanceToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)` | method |
| `DistanceSquaredToLineSegment` | `public float DistanceSquaredToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)` | method |
| `Abs` | `public static Vec2 Abs(Vec2 vec)` | method |
| `Lerp` | `public static Vec2 Lerp(Vec2 v1, Vec2 v2, float alpha)` | method |
| `Slerp` | `public static Vec2 Slerp(Vec2 start, Vec2 end, float percent)` | method |
| `AngleBetween` | `public float AngleBetween(Vec2 vector2)` | method |
| `IsValid` | `public bool IsValid` | property |
| `Determinant` | `public static float Determinant(in Vec2 vec1, in Vec2 vec2)` | method |
| `Side` | `public static readonly Vec2 Side` | field |
| `Forward` | `public static readonly Vec2 Forward` | field |
| `One` | `public static readonly Vec2 One` | field |
| `Zero` | `public static readonly Vec2 Zero` | field |
| `Invalid` | `public static readonly Vec2 Invalid` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
