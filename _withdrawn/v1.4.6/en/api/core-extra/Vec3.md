---
title: "Vec3"
description: "Vec3: a public struct in TaleWorlds.Library; 69 exposed members (44 methods, 14 properties, 6 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Vec3.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Vec3

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec3`
**File:** `TaleWorlds.Library/Vec3.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Vec3 lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Vec3.cs. It is a public struct; the inheritance chain is Vec3. It exposes 69 public/protected members: 44 methods, 14 properties, 6 fields, 4 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Vec3 lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Vec3. The surface is method-led (methods 44/69, properties 14/69), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Vec3.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `X` | `public float X` | property |
| `Y` | `public float Y` | property |
| `Z` | `public float Z` | property |
| `Vec3` | `public Vec3(float x = 0f, float y = 0f, float z = 0f, float w = -1f)` | constructor |
| `Vec3` | `public Vec3(Vec3 c, float w = -1f)` | constructor |
| `Vec3` | `public Vec3(Vec2 xy, float z = 0f, float w = -1f)` | constructor |
| `Vec3` | `public Vec3(Vector3 vector3)` | constructor |
| `Abs` | `public static Vec3 Abs(Vec3 vec)` | method |
| `Vector3` | `public static explicit operator Vector3(Vec3 vec3)` | operator |
| `this[...]` | `public float this[int i]` | indexer |
| `DotProduct` | `public static float DotProduct(Vec3 v1, Vec3 v2)` | method |
| `Lerp` | `public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)` | method |
| `Slerp` | `public static Vec3 Slerp(Vec3 start, Vec3 end, float percent)` | method |
| `Vec3Max` | `public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)` | method |
| `Vec3Min` | `public static Vec3 Vec3Min(Vec3 v1, Vec3 v2)` | method |
| `CrossProduct` | `public static Vec3 CrossProduct(Vec3 va, Vec3 vb)` | method |
| `ElementWiseProduct` | `public static Vec3 ElementWiseProduct(Vec3 va, Vec3 vb)` | method |
| `ElementWiseDivision` | `public static Vec3 ElementWiseDivision(Vec3 va, Vec3 vb)` | method |
| `-` | `public static Vec3 operator -(Vec3 v)` | operator |
| `+` | `public static Vec3 operator +(Vec3 v1, Vec3 v2)` | operator |
| `-` | `public static Vec3 operator -(Vec3 v1, Vec3 v2)` | operator |
| `*` | `public static Vec3 operator *(Vec3 v, float f)` | operator |
| `*` | `public static Vec3 operator *(float f, Vec3 v)` | operator |
| `*` | `public static Vec3 operator *(Vec3 v, MatrixFrame frame)` | operator |
| `/` | `public static Vec3 operator /(Vec3 v, float f)` | operator |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `Length` | `public float Length` | property |
| `LengthSquared` | `public float LengthSquared` | property |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `IsValid` | `public bool IsValid` | property |
| `IsValidXYZW` | `public bool IsValidXYZW` | property |
| `IsUnit` | `public bool IsUnit` | property |
| `IsNonZero` | `public bool IsNonZero` | property |
| `NormalizedCopy` | `public Vec3 NormalizedCopy()` | method |
| `Normalize` | `public float Normalize()` | method |
| `ClampMagnitude` | `public void ClampMagnitude(float min, float max)` | method |
| `ClampedCopy` | `public Vec3 ClampedCopy(float min, float max)` | method |
| `ClampedCopy` | `public Vec3 ClampedCopy(float min, float max, out bool valueClamped)` | method |
| `NormalizeWithoutChangingZ` | `public void NormalizeWithoutChangingZ()` | method |
| `CrossProductWithUp` | `public Vec3 CrossProductWithUp()` | method |
| `CrossProductWithUpAsLeftParameter` | `public Vec3 CrossProductWithUpAsLeftParameter()` | method |
| `NearlyEquals` | `public bool NearlyEquals(in Vec3 v, float epsilon = 1E-05f)` | method |
| `RotateAboutX` | `public void RotateAboutX(float a)` | method |
| `RotateAboutY` | `public void RotateAboutY(float a)` | method |
| `RotateAboutZ` | `public void RotateAboutZ(float a)` | method |
| `RotateAboutAnArbitraryVector` | `public Vec3 RotateAboutAnArbitraryVector(Vec3 vec, float a)` | method |
| `Reflect` | `public Vec3 Reflect(Vec3 normal)` | method |
| `ProjectOnUnitVector` | `public Vec3 ProjectOnUnitVector(Vec3 ov)` | method |
| `DistanceSquared` | `public float DistanceSquared(Vec3 v)` | method |
| `Distance` | `public float Distance(Vec3 v)` | method |
| `RotateVectorToXYPlane` | `public Vec3 RotateVectorToXYPlane()` | method |
| `AngleBetweenTwoVectors` | `public static float AngleBetweenTwoVectors(Vec3 v1, Vec3 v2)` | method |
| `AsVec2` | `public Vec2 AsVec2` | property |
| `ToString` | `public override string ToString()` | method |
| `ToString` | `public string ToString(string format)` | method |
| `ToARGB` | `public uint ToARGB` | property |
| `RotationZ` | `public float RotationZ` | property |
| `RotationX` | `public float RotationX` | property |
| `Parse` | `public static Vec3 Parse(string input)` | method |
| `Side` | `public static readonly Vec3 Side` | field |
| `Forward` | `public static readonly Vec3 Forward` | field |
| `Up` | `public static readonly Vec3 Up` | field |
| `One` | `public static readonly Vec3 One` | field |
| `Zero` | `public static readonly Vec3 Zero` | field |
| `Invalid` | `public static readonly Vec3 Invalid` | field |
| `StackArray8Vec3` | `public struct StackArray8Vec3` | property |
| `StackArray8Vec3` | `public struct StackArray8Vec3` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
