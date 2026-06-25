---
title: "Vec3"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vec3`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Vec3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec3`
**Base:** none
**File:** `TaleWorlds.Library/Vec3.cs`

## Overview

`Vec3` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `Z` | `public float Z { get; }` |
| `this` | `public float this { get; }` |
| `Length` | `public float Length { get; }` |
| `LengthSquared` | `public float LengthSquared { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `IsValidXYZW` | `public bool IsValidXYZW { get; }` |
| `IsUnit` | `public bool IsUnit { get; }` |
| `IsNonZero` | `public bool IsNonZero { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; set; }` |
| `ToARGB` | `public uint ToARGB { get; }` |
| `RotationZ` | `public float RotationZ { get; }` |
| `RotationX` | `public float RotationX { get; }` |
| `this` | `public Vec3 this { get; }` |

## Key Methods

### Abs
`public static Vec3 Abs(Vec3 vec)`

**Purpose:** Handles logic related to `abs`.

### Vector3
`public static explicit operator Vector3(Vec3 vec3)`

**Purpose:** Handles logic related to `vector3`.

### DotProduct
`public static float DotProduct(Vec3 v1, Vec3 v2)`

**Purpose:** Handles logic related to `dot product`.

### Lerp
`public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)`

**Purpose:** Handles logic related to `lerp`.

### Slerp
`public static Vec3 Slerp(Vec3 start, Vec3 end, float percent)`

**Purpose:** Handles logic related to `slerp`.

### Vec3Max
`public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)`

**Purpose:** Handles logic related to `vec3 max`.

### Vec3Min
`public static Vec3 Vec3Min(Vec3 v1, Vec3 v2)`

**Purpose:** Handles logic related to `vec3 min`.

### CrossProduct
`public static Vec3 CrossProduct(Vec3 va, Vec3 vb)`

**Purpose:** Handles logic related to `cross product`.

### ElementWiseProduct
`public static Vec3 ElementWiseProduct(Vec3 va, Vec3 vb)`

**Purpose:** Handles logic related to `element wise product`.

### ElementWiseDivision
`public static Vec3 ElementWiseDivision(Vec3 va, Vec3 vb)`

**Purpose:** Handles logic related to `element wise division`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### NormalizedCopy
`public Vec3 NormalizedCopy()`

**Purpose:** Handles logic related to `normalized copy`.

### Normalize
`public float Normalize()`

**Purpose:** Handles logic related to `normalize`.

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**Purpose:** Handles logic related to `clamp magnitude`.

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max)`

**Purpose:** Handles logic related to `clamped copy`.

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max, out bool valueClamped)`

**Purpose:** Handles logic related to `clamped copy`.

### NormalizeWithoutChangingZ
`public void NormalizeWithoutChangingZ()`

**Purpose:** Handles logic related to `normalize without changing z`.

### CrossProductWithUp
`public Vec3 CrossProductWithUp()`

**Purpose:** Handles logic related to `cross product with up`.

### CrossProductWithUpAsLeftParameter
`public Vec3 CrossProductWithUpAsLeftParameter()`

**Purpose:** Handles logic related to `cross product with up as left parameter`.

### NearlyEquals
`public bool NearlyEquals(in Vec3 v, float epsilon = 1E-05f)`

**Purpose:** Handles logic related to `nearly equals`.

### RotateAboutX
`public void RotateAboutX(float a)`

**Purpose:** Handles logic related to `rotate about x`.

### RotateAboutY
`public void RotateAboutY(float a)`

**Purpose:** Handles logic related to `rotate about y`.

### RotateAboutZ
`public void RotateAboutZ(float a)`

**Purpose:** Handles logic related to `rotate about z`.

### RotateAboutAnArbitraryVector
`public Vec3 RotateAboutAnArbitraryVector(Vec3 vec, float a)`

**Purpose:** Handles logic related to `rotate about an arbitrary vector`.

### Reflect
`public Vec3 Reflect(Vec3 normal)`

**Purpose:** Handles logic related to `reflect`.

### ProjectOnUnitVector
`public Vec3 ProjectOnUnitVector(Vec3 ov)`

**Purpose:** Handles logic related to `project on unit vector`.

### DistanceSquared
`public float DistanceSquared(Vec3 v)`

**Purpose:** Handles logic related to `distance squared`.

### Distance
`public float Distance(Vec3 v)`

**Purpose:** Handles logic related to `distance`.

### RotateVectorToXYPlane
`public Vec3 RotateVectorToXYPlane()`

**Purpose:** Handles logic related to `rotate vector to x y plane`.

### AngleBetweenTwoVectors
`public static float AngleBetweenTwoVectors(Vec3 v1, Vec3 v2)`

**Purpose:** Handles logic related to `angle between two vectors`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(string format)`

**Purpose:** Handles logic related to `to string`.

### Parse
`public static Vec3 Parse(string input)`

**Purpose:** Handles logic related to `parse`.

## Usage Example

```csharp
Vec3.Abs(vec);
```

## See Also

- [Complete Class Catalog](../catalog)