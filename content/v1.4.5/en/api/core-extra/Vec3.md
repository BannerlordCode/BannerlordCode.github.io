---
title: "Vec3"
description: "Auto-generated class reference for Vec3."
---
# Vec3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec3`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Vec3.cs`

## Overview

`Vec3` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; }` |
| `this` | `public float this { get; set; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `IsValidXYZW` | `public bool IsValidXYZW { get; }` |
| `IsUnit` | `public bool IsUnit { get; }` |
| `IsNonZero` | `public bool IsNonZero { get; set; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; set; }` |
| `ToARGB` | `public uint ToARGB { get; }` |

## Key Methods

### Abs
`public static Vec3 Abs(Vec3 vec)`

**Purpose:** Executes the Abs logic.

```csharp
// Static call; no instance required
Vec3.Abs(vec);
```

### Vector3
`public static explicit operator Vector3(Vec3 vec3)`

**Purpose:** Executes the Vector3 logic.

```csharp
// Static call; no instance required
Vec3.Vector3(vec3);
```

### DotProduct
`public static float DotProduct(Vec3 v1, Vec3 v2)`

**Purpose:** Executes the DotProduct logic.

```csharp
// Static call; no instance required
Vec3.DotProduct(v1, v2);
```

### Lerp
`public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)`

**Purpose:** Executes the Lerp logic.

```csharp
// Static call; no instance required
Vec3.Lerp(v1, v2, 0);
```

### Slerp
`public static Vec3 Slerp(Vec3 start, Vec3 end, float percent)`

**Purpose:** Executes the Slerp logic.

```csharp
// Static call; no instance required
Vec3.Slerp(start, end, 0);
```

### Vec3Max
`public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)`

**Purpose:** Executes the Vec3Max logic.

```csharp
// Static call; no instance required
Vec3.Vec3Max(v1, v2);
```

### Vec3Min
`public static Vec3 Vec3Min(Vec3 v1, Vec3 v2)`

**Purpose:** Executes the Vec3Min logic.

```csharp
// Static call; no instance required
Vec3.Vec3Min(v1, v2);
```

### CrossProduct
`public static Vec3 CrossProduct(Vec3 va, Vec3 vb)`

**Purpose:** Executes the CrossProduct logic.

```csharp
// Static call; no instance required
Vec3.CrossProduct(va, vb);
```

### ElementWiseProduct
`public static Vec3 ElementWiseProduct(Vec3 va, Vec3 vb)`

**Purpose:** Executes the ElementWiseProduct logic.

```csharp
// Static call; no instance required
Vec3.ElementWiseProduct(va, vb);
```

### ElementWiseDivision
`public static Vec3 ElementWiseDivision(Vec3 va, Vec3 vb)`

**Purpose:** Executes the ElementWiseDivision logic.

```csharp
// Static call; no instance required
Vec3.ElementWiseDivision(va, vb);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.GetHashCode();
```

### NormalizedCopy
`public Vec3 NormalizedCopy()`

**Purpose:** Normalizes d copy into a standard form or range.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.NormalizedCopy();
```

### Normalize
`public float Normalize()`

**Purpose:** Normalizes the this instance into a standard form or range.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.Normalize();
```

### ClampMagnitude
`public void ClampMagnitude(float min, float max)`

**Purpose:** Executes the ClampMagnitude logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.ClampMagnitude(0, 0);
```

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max)`

**Purpose:** Executes the ClampedCopy logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ClampedCopy(0, 0);
```

### ClampedCopy
`public Vec3 ClampedCopy(float min, float max, out bool valueClamped)`

**Purpose:** Executes the ClampedCopy logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ClampedCopy(0, 0, valueClamped);
```

### NormalizeWithoutChangingZ
`public void NormalizeWithoutChangingZ()`

**Purpose:** Normalizes without changing z into a standard form or range.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.NormalizeWithoutChangingZ();
```

### CrossProductWithUp
`public Vec3 CrossProductWithUp()`

**Purpose:** Executes the CrossProductWithUp logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.CrossProductWithUp();
```

### CrossProductWithUpAsLeftParameter
`public Vec3 CrossProductWithUpAsLeftParameter()`

**Purpose:** Executes the CrossProductWithUpAsLeftParameter logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.CrossProductWithUpAsLeftParameter();
```

### NearlyEquals
`public bool NearlyEquals(in Vec3 v, float epsilon = 1E-05f)`

**Purpose:** Executes the NearlyEquals logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.NearlyEquals(v, 0);
```

### RotateAboutX
`public void RotateAboutX(float a)`

**Purpose:** Executes the RotateAboutX logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.RotateAboutX(0);
```

### RotateAboutY
`public void RotateAboutY(float a)`

**Purpose:** Executes the RotateAboutY logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.RotateAboutY(0);
```

### RotateAboutZ
`public void RotateAboutZ(float a)`

**Purpose:** Executes the RotateAboutZ logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
vec3.RotateAboutZ(0);
```

### RotateAboutAnArbitraryVector
`public Vec3 RotateAboutAnArbitraryVector(Vec3 vec, float a)`

**Purpose:** Executes the RotateAboutAnArbitraryVector logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.RotateAboutAnArbitraryVector(vec, 0);
```

### Reflect
`public Vec3 Reflect(Vec3 normal)`

**Purpose:** Executes the Reflect logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.Reflect(normal);
```

### ProjectOnUnitVector
`public Vec3 ProjectOnUnitVector(Vec3 ov)`

**Purpose:** Executes the ProjectOnUnitVector logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ProjectOnUnitVector(ov);
```

### DistanceSquared
`public float DistanceSquared(Vec3 v)`

**Purpose:** Executes the DistanceSquared logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.DistanceSquared(v);
```

### Distance
`public float Distance(Vec3 v)`

**Purpose:** Executes the Distance logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.Distance(v);
```

### RotateVectorToXYPlane
`public Vec3 RotateVectorToXYPlane()`

**Purpose:** Executes the RotateVectorToXYPlane logic.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.RotateVectorToXYPlane();
```

### AngleBetweenTwoVectors
`public static float AngleBetweenTwoVectors(Vec3 v1, Vec3 v2)`

**Purpose:** Executes the AngleBetweenTwoVectors logic.

```csharp
// Static call; no instance required
Vec3.AngleBetweenTwoVectors(v1, v2);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ToString();
```

### ToString
`public string ToString(string format)`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Vec3 from the subsystem API first
Vec3 vec3 = ...;
var result = vec3.ToString("example");
```

### Parse
`public static Vec3 Parse(string input)`

**Purpose:** Parses external input into a parse the current system understands.

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