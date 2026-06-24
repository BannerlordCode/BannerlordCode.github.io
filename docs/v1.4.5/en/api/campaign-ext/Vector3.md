<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vector3`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Vector3

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Vector3 : IEquatable<Vector3>, IFormattable`
**Base:** `IEquatable<Vector3>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Vector3.cs`

## Overview

`Vector3` lives in `System.Numerics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
`public static float Distance(Vector3 value1, Vector3 value2)`

**Purpose:** Handles logic related to `distance`.

### DistanceSquared
`public static float DistanceSquared(Vector3 value1, Vector3 value2)`

**Purpose:** Handles logic related to `distance squared`.

### Normalize
`public static Vector3 Normalize(Vector3 value)`

**Purpose:** Handles logic related to `normalize`.

### Cross
`public static Vector3 Cross(Vector3 vector1, Vector3 vector2)`

**Purpose:** Handles logic related to `cross`.

### Reflect
`public static Vector3 Reflect(Vector3 vector, Vector3 normal)`

**Purpose:** Handles logic related to `reflect`.

### Clamp
`public static Vector3 Clamp(Vector3 value1, Vector3 min, Vector3 max)`

**Purpose:** Handles logic related to `clamp`.

### Lerp
`public static Vector3 Lerp(Vector3 value1, Vector3 value2, float amount)`

**Purpose:** Handles logic related to `lerp`.

### Transform
`public static Vector3 Transform(Vector3 position, Matrix4x4 matrix)`

**Purpose:** Handles logic related to `transform`.

### TransformNormal
`public static Vector3 TransformNormal(Vector3 normal, Matrix4x4 matrix)`

**Purpose:** Handles logic related to `transform normal`.

### Transform
`public static Vector3 Transform(Vector3 value, Quaternion rotation)`

**Purpose:** Handles logic related to `transform`.

### Add
`public static Vector3 Add(Vector3 left, Vector3 right)`

**Purpose:** Adds `add` to the current collection or state.

### Subtract
`public static Vector3 Subtract(Vector3 left, Vector3 right)`

**Purpose:** Handles logic related to `subtract`.

### Multiply
`public static Vector3 Multiply(Vector3 left, Vector3 right)`

**Purpose:** Handles logic related to `multiply`.

### Multiply
`public static Vector3 Multiply(Vector3 left, float right)`

**Purpose:** Handles logic related to `multiply`.

### Multiply
`public static Vector3 Multiply(float left, Vector3 right)`

**Purpose:** Handles logic related to `multiply`.

### Divide
`public static Vector3 Divide(Vector3 left, Vector3 right)`

**Purpose:** Handles logic related to `divide`.

### Divide
`public static Vector3 Divide(Vector3 left, float divisor)`

**Purpose:** Handles logic related to `divide`.

### Negate
`public static Vector3 Negate(Vector3 value)`

**Purpose:** Handles logic related to `negate`.

### CopyTo
`public void CopyTo(float array)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(float array, int index)`

**Purpose:** Handles logic related to `copy to`.

### Equals
`public bool Equals(Vector3 other)`

**Purpose:** Handles logic related to `equals`.

### Dot
`public static float Dot(Vector3 vector1, Vector3 vector2)`

**Purpose:** Handles logic related to `dot`.

### Min
`public static Vector3 Min(Vector3 value1, Vector3 value2)`

**Purpose:** Handles logic related to `min`.

### Max
`public static Vector3 Max(Vector3 value1, Vector3 value2)`

**Purpose:** Handles logic related to `max`.

### Abs
`public static Vector3 Abs(Vector3 value)`

**Purpose:** Handles logic related to `abs`.

### SquareRoot
`public static Vector3 SquareRoot(Vector3 value)`

**Purpose:** Handles logic related to `square root`.

## Usage Example

```csharp
var value = new Vector3();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)