---
title: "Vec3"
description: "Auto-generated class reference for Vec3."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.Abs(vec);
```

### Vector3
`public static explicit operator Vector3(Vec3 vec3)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.Vector3(vec3);
```

### DotProduct
`public static float DotProduct(Vec3 v1, Vec3 v2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.DotProduct(v1, v2);
```

### Lerp
`public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.Lerp(v1, v2, 0);
```

### Slerp
`public static Vec3 Slerp(Vec3 start, Vec3 end, float percent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.Slerp(start, end, 0);
```

### Vec3Max
`public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.Vec3Max(v1, v2);
```

### Vec3Min
`public static Vec3 Vec3Min(Vec3 v1, Vec3 v2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.Vec3Min(v1, v2);
```

### CrossProduct
`public static Vec3 CrossProduct(Vec3 va, Vec3 vb)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.CrossProduct(va, vb);
```

### ElementWiseProduct
`public static Vec3 ElementWiseProduct(Vec3 va, Vec3 vb)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.ElementWiseProduct(va, vb);
```

### ElementWiseDivision
`public static Vec3 ElementWiseDivision(Vec3 va, Vec3 vb)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.ElementWiseDivision(va, vb);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.GetHashCode();
```

### NormalizedCopy
`public Vec3 NormalizedCopy()`

**Purpose:** Normalizes `d copy` into a standard form or range.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.NormalizedCopy();
```

### Normalize
`public float Normalize()`

**Purpose:** Normalizes the current object into a standard form or range.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.Normalize();
```

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.ClampMagnitude(0, 0);
```

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ClampedCopy(0, 0);
```

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max, out bool valueClamped)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ClampedCopy(0, 0, valueClamped);
```

### NormalizeWithoutChangingZ
`public void NormalizeWithoutChangingZ()`

**Purpose:** Normalizes `without changing z` into a standard form or range.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.NormalizeWithoutChangingZ();
```

### CrossProductWithUp
`public Vec3 CrossProductWithUp()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.CrossProductWithUp();
```

### NearlyEquals
`public bool NearlyEquals(in Vec3 v, float epsilon = 1E-05f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.NearlyEquals(v, 0);
```

### RotateAboutX
`public void RotateAboutX(float a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.RotateAboutX(0);
```

### RotateAboutY
`public void RotateAboutY(float a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.RotateAboutY(0);
```

### RotateAboutZ
`public void RotateAboutZ(float a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.RotateAboutZ(0);
```

### RotateAboutAnArbitraryVector
`public Vec3 RotateAboutAnArbitraryVector(Vec3 vec, float a)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.RotateAboutAnArbitraryVector(vec, 0);
```

### Reflect
`public Vec3 Reflect(Vec3 normal)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.Reflect(normal);
```

### ProjectOnUnitVector
`public Vec3 ProjectOnUnitVector(Vec3 ov)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ProjectOnUnitVector(ov);
```

### DistanceSquared
`public float DistanceSquared(Vec3 v)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.DistanceSquared(v);
```

### Distance
`public float Distance(Vec3 v)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.Distance(v);
```

### RotateVectorToXYPlane
`public Vec3 RotateVectorToXYPlane()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.RotateVectorToXYPlane();
```

### AngleBetweenTwoVectors
`public static float AngleBetweenTwoVectors(Vec3 v1, Vec3 v2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Vec3.AngleBetweenTwoVectors(v1, v2);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ToString();
```

### ToString
`public string ToString(string format)`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ToString("example");
```

### Parse
`public static Vec3 Parse(string input)`

**Purpose:** Parses external input into a `parse` the current system understands.

```csharp
// Static call; no instance required
Vec3.Parse("example");
```

## Usage Example

```csharp
Vec3.Abs(vec);
```

## See Also

- [Area Index](../)