---
title: "Vector2"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vector2`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Vector2

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Vector2 : IEquatable<Vector2>, IFormattable`
**Base:** `IEquatable<Vector2>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Vector2.cs`

## Overview

`Vector2` lives in `System.Numerics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Numerics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(string format)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(string format, IFormatProvider formatProvider)`

**Purpose:** Handles logic related to `to string`.

### Length
`public float Length()`

**Purpose:** Handles logic related to `length`.

### LengthSquared
`public float LengthSquared()`

**Purpose:** Handles logic related to `length squared`.

### Distance
`public static float Distance(Vector2 value1, Vector2 value2)`

**Purpose:** Handles logic related to `distance`.

### DistanceSquared
`public static float DistanceSquared(Vector2 value1, Vector2 value2)`

**Purpose:** Handles logic related to `distance squared`.

### Normalize
`public static Vector2 Normalize(Vector2 value)`

**Purpose:** Handles logic related to `normalize`.

### Reflect
`public static Vector2 Reflect(Vector2 vector, Vector2 normal)`

**Purpose:** Handles logic related to `reflect`.

### Clamp
`public static Vector2 Clamp(Vector2 value1, Vector2 min, Vector2 max)`

**Purpose:** Handles logic related to `clamp`.

### Lerp
`public static Vector2 Lerp(Vector2 value1, Vector2 value2, float amount)`

**Purpose:** Handles logic related to `lerp`.

### Transform
`public static Vector2 Transform(Vector2 position, Matrix3x2 matrix)`

**Purpose:** Handles logic related to `transform`.

### Transform
`public static Vector2 Transform(Vector2 position, Matrix4x4 matrix)`

**Purpose:** Handles logic related to `transform`.

### TransformNormal
`public static Vector2 TransformNormal(Vector2 normal, Matrix3x2 matrix)`

**Purpose:** Handles logic related to `transform normal`.

### TransformNormal
`public static Vector2 TransformNormal(Vector2 normal, Matrix4x4 matrix)`

**Purpose:** Handles logic related to `transform normal`.

### Transform
`public static Vector2 Transform(Vector2 value, Quaternion rotation)`

**Purpose:** Handles logic related to `transform`.

### Add
`public static Vector2 Add(Vector2 left, Vector2 right)`

**Purpose:** Adds `add` to the current collection or state.

### Subtract
`public static Vector2 Subtract(Vector2 left, Vector2 right)`

**Purpose:** Handles logic related to `subtract`.

### Multiply
`public static Vector2 Multiply(Vector2 left, Vector2 right)`

**Purpose:** Handles logic related to `multiply`.

### Multiply
`public static Vector2 Multiply(Vector2 left, float right)`

**Purpose:** Handles logic related to `multiply`.

### Multiply
`public static Vector2 Multiply(float left, Vector2 right)`

**Purpose:** Handles logic related to `multiply`.

### Divide
`public static Vector2 Divide(Vector2 left, Vector2 right)`

**Purpose:** Handles logic related to `divide`.

### Divide
`public static Vector2 Divide(Vector2 left, float divisor)`

**Purpose:** Handles logic related to `divide`.

### Negate
`public static Vector2 Negate(Vector2 value)`

**Purpose:** Handles logic related to `negate`.

### CopyTo
`public void CopyTo(float array)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(float array, int index)`

**Purpose:** Handles logic related to `copy to`.

### Equals
`public bool Equals(Vector2 other)`

**Purpose:** Handles logic related to `equals`.

### Dot
`public static float Dot(Vector2 value1, Vector2 value2)`

**Purpose:** Handles logic related to `dot`.

### Min
`public static Vector2 Min(Vector2 value1, Vector2 value2)`

**Purpose:** Handles logic related to `min`.

### Max
`public static Vector2 Max(Vector2 value1, Vector2 value2)`

**Purpose:** Handles logic related to `max`.

### Abs
`public static Vector2 Abs(Vector2 value)`

**Purpose:** Handles logic related to `abs`.

### SquareRoot
`public static Vector2 SquareRoot(Vector2 value)`

**Purpose:** Handles logic related to `square root`.

## Usage Example

```csharp
var value = new Vector2();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)