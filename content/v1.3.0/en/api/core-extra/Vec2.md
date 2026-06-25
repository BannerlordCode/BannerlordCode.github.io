---
title: "Vec2"
description: "Auto-generated class reference for Vec2."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.ToVec3(0);
```

### Vector2
`public static explicit operator Vector2(Vec2 vec2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Vector2(vec2);
```

### Vec2
`public static implicit operator Vec2(Vector2 vec2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Vec2(vec2);
```

### Normalize
`public float Normalize()`

**Purpose:** Normalizes the current object into a standard form or range.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.Normalize();
```

### Normalized
`public Vec2 Normalized()`

**Purpose:** Normalizes `d` into a standard form or range.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.Normalized();
```

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
vec2.ClampMagnitude(0, 0);
```

### GetWindingOrder
`public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)`

**Purpose:** Reads and returns the `winding order` value held by the current object.

```csharp
// Static call; no instance required
Vec2.GetWindingOrder(first, second, third);
```

### CCW
`public static float CCW(Vec2 va, Vec2 vb)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.CCW(va, vb);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.GetHashCode();
```

### IsUnit
`public bool IsUnit()`

**Purpose:** Determines whether the current object is in the `unit` state or condition.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.IsUnit();
```

### IsNonZero
`public bool IsNonZero()`

**Purpose:** Determines whether the current object is in the `non zero` state or condition.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.IsNonZero();
```

### NearlyEquals
`public bool NearlyEquals(Vec2 v, float epsilon = 1E-05f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.NearlyEquals(v, 0);
```

### RotateCCW
`public void RotateCCW(float angleInRadians)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
vec2.RotateCCW(0);
```

### DotProduct
`public float DotProduct(Vec2 v)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.DotProduct(v);
```

### DotProduct
`public static float DotProduct(Vec2 va, Vec2 vb)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.DotProduct(va, vb);
```

### ElementWiseProduct
`public static Vec2 ElementWiseProduct(Vec2 va, Vec2 vb)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.ElementWiseProduct(va, vb);
```

### FromRotation
`public static Vec2 FromRotation(float rotation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.FromRotation(0);
```

### TransformToLocalUnitF
`public Vec2 TransformToLocalUnitF(Vec2 a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.TransformToLocalUnitF(a);
```

### TransformToParentUnitF
`public Vec2 TransformToParentUnitF(Vec2 a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.TransformToParentUnitF(a);
```

### TransformToLocalUnitFLeftHanded
`public Vec2 TransformToLocalUnitFLeftHanded(Vec2 a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.TransformToLocalUnitFLeftHanded(a);
```

### TransformToParentUnitFLeftHanded
`public Vec2 TransformToParentUnitFLeftHanded(Vec2 a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.TransformToParentUnitFLeftHanded(a);
```

### RightVec
`public Vec2 RightVec()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.RightVec();
```

### LeftVec
`public Vec2 LeftVec()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.LeftVec();
```

### Max
`public static Vec2 Max(Vec2 v1, Vec2 v2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Max(v1, v2);
```

### Max
`public static Vec2 Max(Vec2 v1, float f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Max(v1, 0);
```

### Min
`public static Vec2 Min(Vec2 v1, Vec2 v2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Min(v1, v2);
```

### Min
`public static Vec2 Min(Vec2 v1, float f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Min(v1, 0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.ToString();
```

### DistanceSquared
`public float DistanceSquared(Vec2 v)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.DistanceSquared(v);
```

### Distance
`public float Distance(Vec2 v)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.Distance(v);
```

### DistanceToLine
`public static float DistanceToLine(Vec2 line1, Vec2 line2, Vec2 point)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.DistanceToLine(line1, line2, point);
```

### DistanceToLineSegmentSquared
`public static float DistanceToLineSegmentSquared(Vec2 line1, Vec2 line2, Vec2 point)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.DistanceToLineSegmentSquared(line1, line2, point);
```

### DistanceToLineSegment
`public float DistanceToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.DistanceToLineSegment(v, w, closestPointOnLineSegment);
```

### DistanceSquaredToLineSegment
`public float DistanceSquaredToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.DistanceSquaredToLineSegment(v, w, closestPointOnLineSegment);
```

### Abs
`public static Vec2 Abs(Vec2 vec)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Abs(vec);
```

### Lerp
`public static Vec2 Lerp(Vec2 v1, Vec2 v2, float alpha)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Lerp(v1, v2, 0);
```

### Slerp
`public static Vec2 Slerp(Vec2 start, Vec2 end, float percent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Slerp(start, end, 0);
```

### AngleBetween
`public float AngleBetween(Vec2 vector2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec2 from the subsystem API first
Vec2 vec2 = ...;
var result = vec2.AngleBetween(vector2);
```

### Determinant
`public static float Determinant(in Vec2 vec1, in Vec2 vec2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec2.Determinant(vec1, vec2);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Vec2 vec2 = ...;
vec2.ToVec3(0);
```

## See Also

- [Area Index](../)