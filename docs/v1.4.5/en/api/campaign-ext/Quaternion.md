<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Quaternion`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Quaternion

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Quaternion : IEquatable<Quaternion>`
**Base:** `IEquatable<Quaternion>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Quaternion.cs`

## Overview

`Quaternion` lives in `System.Numerics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Numerics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsIdentity` | `public bool IsIdentity { get; }` |

## Key Methods

### Length
`public float Length()`

**Purpose:** Handles logic related to `length`.

### LengthSquared
`public float LengthSquared()`

**Purpose:** Handles logic related to `length squared`.

### Normalize
`public static Quaternion Normalize(Quaternion value)`

**Purpose:** Handles logic related to `normalize`.

### Conjugate
`public static Quaternion Conjugate(Quaternion value)`

**Purpose:** Handles logic related to `conjugate`.

### Inverse
`public static Quaternion Inverse(Quaternion value)`

**Purpose:** Handles logic related to `inverse`.

### CreateFromAxisAngle
`public static Quaternion CreateFromAxisAngle(Vector3 axis, float angle)`

**Purpose:** Creates a new `from axis angle` instance or object.

### CreateFromYawPitchRoll
`public static Quaternion CreateFromYawPitchRoll(float yaw, float pitch, float roll)`

**Purpose:** Creates a new `from yaw pitch roll` instance or object.

### CreateFromRotationMatrix
`public static Quaternion CreateFromRotationMatrix(Matrix4x4 matrix)`

**Purpose:** Creates a new `from rotation matrix` instance or object.

### Dot
`public static float Dot(Quaternion quaternion1, Quaternion quaternion2)`

**Purpose:** Handles logic related to `dot`.

### Slerp
`public static Quaternion Slerp(Quaternion quaternion1, Quaternion quaternion2, float amount)`

**Purpose:** Handles logic related to `slerp`.

### Lerp
`public static Quaternion Lerp(Quaternion quaternion1, Quaternion quaternion2, float amount)`

**Purpose:** Handles logic related to `lerp`.

### Concatenate
`public static Quaternion Concatenate(Quaternion value1, Quaternion value2)`

**Purpose:** Handles logic related to `concatenate`.

### Negate
`public static Quaternion Negate(Quaternion value)`

**Purpose:** Handles logic related to `negate`.

### Add
`public static Quaternion Add(Quaternion value1, Quaternion value2)`

**Purpose:** Adds `add` to the current collection or state.

### Subtract
`public static Quaternion Subtract(Quaternion value1, Quaternion value2)`

**Purpose:** Handles logic related to `subtract`.

### Multiply
`public static Quaternion Multiply(Quaternion value1, Quaternion value2)`

**Purpose:** Handles logic related to `multiply`.

### Multiply
`public static Quaternion Multiply(Quaternion value1, float value2)`

**Purpose:** Handles logic related to `multiply`.

### Divide
`public static Quaternion Divide(Quaternion value1, Quaternion value2)`

**Purpose:** Handles logic related to `divide`.

### Equals
`public bool Equals(Quaternion other)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new Quaternion();
value.Length();
```

## See Also

- [Complete Class Catalog](../catalog)