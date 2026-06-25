---
title: "Vector4"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vector4`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Vector4

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Vector4 : IEquatable<Vector4>, IFormattable`
**Base:** `IEquatable<Vector4>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Vector4.cs`

## Overview

`Vector4` lives in `System.Numerics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
`public static float Distance(Vector4 value1, Vector4 value2)`

**Purpose:** Handles logic related to `distance`.

### DistanceSquared
`public static float DistanceSquared(Vector4 value1, Vector4 value2)`

**Purpose:** Handles logic related to `distance squared`.

### Normalize
`public static Vector4 Normalize(Vector4 vector)`

**Purpose:** Handles logic related to `normalize`.

### Clamp
`public static Vector4 Clamp(Vector4 value1, Vector4 min, Vector4 max)`

**Purpose:** Handles logic related to `clamp`.

### Lerp
`public static Vector4 Lerp(Vector4 value1, Vector4 value2, float amount)`

**Purpose:** Handles logic related to `lerp`.

### Transform
`public static Vector4 Transform(Vector2 position, Matrix4x4 matrix)`

**Purpose:** Handles logic related to `transform`.

### Transform
`public static Vector4 Transform(Vector3 position, Matrix4x4 matrix)`

**Purpose:** Handles logic related to `transform`.

### Transform
`public static Vector4 Transform(Vector4 vector, Matrix4x4 matrix)`

**Purpose:** Handles logic related to `transform`.

### Transform
`public static Vector4 Transform(Vector2 value, Quaternion rotation)`

**Purpose:** Handles logic related to `transform`.

### Transform
`public static Vector4 Transform(Vector3 value, Quaternion rotation)`

**Purpose:** Handles logic related to `transform`.

### Transform
`public static Vector4 Transform(Vector4 value, Quaternion rotation)`

**Purpose:** Handles logic related to `transform`.

### Add
`public static Vector4 Add(Vector4 left, Vector4 right)`

**Purpose:** Adds `add` to the current collection or state.

### Subtract
`public static Vector4 Subtract(Vector4 left, Vector4 right)`

**Purpose:** Handles logic related to `subtract`.

### Multiply
`public static Vector4 Multiply(Vector4 left, Vector4 right)`

**Purpose:** Handles logic related to `multiply`.

### Multiply
`public static Vector4 Multiply(Vector4 left, float right)`

**Purpose:** Handles logic related to `multiply`.

### Multiply
`public static Vector4 Multiply(float left, Vector4 right)`

**Purpose:** Handles logic related to `multiply`.

### Divide
`public static Vector4 Divide(Vector4 left, Vector4 right)`

**Purpose:** Handles logic related to `divide`.

### Divide
`public static Vector4 Divide(Vector4 left, float divisor)`

**Purpose:** Handles logic related to `divide`.

### Negate
`public static Vector4 Negate(Vector4 value)`

**Purpose:** Handles logic related to `negate`.

### CopyTo
`public void CopyTo(float array)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(float array, int index)`

**Purpose:** Handles logic related to `copy to`.

### Equals
`public bool Equals(Vector4 other)`

**Purpose:** Handles logic related to `equals`.

### Dot
`public static float Dot(Vector4 vector1, Vector4 vector2)`

**Purpose:** Handles logic related to `dot`.

### Min
`public static Vector4 Min(Vector4 value1, Vector4 value2)`

**Purpose:** Handles logic related to `min`.

### Max
`public static Vector4 Max(Vector4 value1, Vector4 value2)`

**Purpose:** Handles logic related to `max`.

### Abs
`public static Vector4 Abs(Vector4 value)`

**Purpose:** Handles logic related to `abs`.

### SquareRoot
`public static Vector4 SquareRoot(Vector4 value)`

**Purpose:** Handles logic related to `square root`.

## Usage Example

```csharp
var value = new Vector4();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)