---
title: "Vec2"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vec2`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Vec2

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec2`
**Base:** none
**File:** `TaleWorlds.Library/Vec2.cs`

## Overview

`Vec2` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `Length` | `public float Length { get; }` |
| `LengthSquared` | `public float LengthSquared { get; }` |
| `RotationInRadians` | `public float RotationInRadians { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### ToVec3
`public Vec3 ToVec3(float z = 0f)`

**Purpose:** Handles logic related to `to vec3`.

### Vector2
`public static explicit operator Vector2(Vec2 vec2)`

**Purpose:** Handles logic related to `vector2`.

### Vec2
`public static implicit operator Vec2(Vector2 vec2)`

**Purpose:** Handles logic related to `vec2`.

### Normalize
`public float Normalize()`

**Purpose:** Handles logic related to `normalize`.

### Normalized
`public Vec2 Normalized()`

**Purpose:** Handles logic related to `normalized`.

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**Purpose:** Handles logic related to `clamp magnitude`.

### GetWindingOrder
`public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)`

**Purpose:** Gets the current value of `winding order`.

### CCW
`public static float CCW(Vec2 va, Vec2 vb)`

**Purpose:** Handles logic related to `c c w`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### IsUnit
`public bool IsUnit()`

**Purpose:** Handles logic related to `is unit`.

### IsNonZero
`public bool IsNonZero()`

**Purpose:** Handles logic related to `is non zero`.

### NearlyEquals
`public bool NearlyEquals(Vec2 v, float epsilon = 1E-05f)`

**Purpose:** Handles logic related to `nearly equals`.

### RotateCCW
`public void RotateCCW(float angleInRadians)`

**Purpose:** Handles logic related to `rotate c c w`.

### DotProduct
`public float DotProduct(Vec2 v)`

**Purpose:** Handles logic related to `dot product`.

### DotProduct
`public static float DotProduct(Vec2 va, Vec2 vb)`

**Purpose:** Handles logic related to `dot product`.

### ElementWiseProduct
`public static Vec2 ElementWiseProduct(Vec2 va, Vec2 vb)`

**Purpose:** Handles logic related to `element wise product`.

### FromRotation
`public static Vec2 FromRotation(float rotation)`

**Purpose:** Handles logic related to `from rotation`.

### TransformToLocalUnitF
`public Vec2 TransformToLocalUnitF(Vec2 a)`

**Purpose:** Handles logic related to `transform to local unit f`.

### TransformToParentUnitF
`public Vec2 TransformToParentUnitF(Vec2 a)`

**Purpose:** Handles logic related to `transform to parent unit f`.

### TransformToLocalUnitFLeftHanded
`public Vec2 TransformToLocalUnitFLeftHanded(Vec2 a)`

**Purpose:** Handles logic related to `transform to local unit f left handed`.

### TransformToParentUnitFLeftHanded
`public Vec2 TransformToParentUnitFLeftHanded(Vec2 a)`

**Purpose:** Handles logic related to `transform to parent unit f left handed`.

### RightVec
`public Vec2 RightVec()`

**Purpose:** Handles logic related to `right vec`.

### LeftVec
`public Vec2 LeftVec()`

**Purpose:** Handles logic related to `left vec`.

### Max
`public static Vec2 Max(Vec2 v1, Vec2 v2)`

**Purpose:** Handles logic related to `max`.

### Max
`public static Vec2 Max(Vec2 v1, float f)`

**Purpose:** Handles logic related to `max`.

### Min
`public static Vec2 Min(Vec2 v1, Vec2 v2)`

**Purpose:** Handles logic related to `min`.

### Min
`public static Vec2 Min(Vec2 v1, float f)`

**Purpose:** Handles logic related to `min`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### DistanceSquared
`public float DistanceSquared(Vec2 v)`

**Purpose:** Handles logic related to `distance squared`.

### Distance
`public float Distance(Vec2 v)`

**Purpose:** Handles logic related to `distance`.

### DistanceToLine
`public static float DistanceToLine(Vec2 line1, Vec2 line2, Vec2 point)`

**Purpose:** Handles logic related to `distance to line`.

### DistanceToLineSegmentSquared
`public static float DistanceToLineSegmentSquared(Vec2 line1, Vec2 line2, Vec2 point)`

**Purpose:** Handles logic related to `distance to line segment squared`.

### DistanceToLineSegment
`public float DistanceToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)`

**Purpose:** Handles logic related to `distance to line segment`.

### DistanceSquaredToLineSegment
`public float DistanceSquaredToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)`

**Purpose:** Handles logic related to `distance squared to line segment`.

### Abs
`public static Vec2 Abs(Vec2 vec)`

**Purpose:** Handles logic related to `abs`.

### Lerp
`public static Vec2 Lerp(Vec2 v1, Vec2 v2, float alpha)`

**Purpose:** Handles logic related to `lerp`.

### Slerp
`public static Vec2 Slerp(Vec2 start, Vec2 end, float percent)`

**Purpose:** Handles logic related to `slerp`.

### AngleBetween
`public float AngleBetween(Vec2 vector2)`

**Purpose:** Handles logic related to `angle between`.

### Determinant
`public static float Determinant(in Vec2 vec1, in Vec2 vec2)`

**Purpose:** Handles logic related to `determinant`.

## Usage Example

```csharp
var value = new Vec2();
value.ToVec3(0);
```

## See Also

- [Complete Class Catalog](../catalog)