---
title: "StackArray8Vec3"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray8Vec3`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8Vec3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct StackArray8Vec3`
**Area:** core-extra

## Overview

`StackArray8Vec3` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
StackArray8Vec3.Abs(vec);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
