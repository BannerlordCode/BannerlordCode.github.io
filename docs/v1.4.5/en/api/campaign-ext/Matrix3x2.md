<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Matrix3x2`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Matrix3x2

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Matrix3x2 : IEquatable<Matrix3x2>`
**Base:** `IEquatable<Matrix3x2>`
**Area:** campaign-ext

## Overview

`Matrix3x2` lives in `System.Numerics`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `System.Numerics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `Translation` | `public Vector2 Translation { get; set; }` |

## Key Methods

### CreateTranslation
`public static Matrix3x2 CreateTranslation(Vector2 position)`

**Purpose:** Creates a new `translation` instance or object.

### CreateTranslation
`public static Matrix3x2 CreateTranslation(float xPosition, float yPosition)`

**Purpose:** Creates a new `translation` instance or object.

### CreateScale
`public static Matrix3x2 CreateScale(float xScale, float yScale)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix3x2 CreateScale(float xScale, float yScale, Vector2 centerPoint)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix3x2 CreateScale(Vector2 scales)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix3x2 CreateScale(Vector2 scales, Vector2 centerPoint)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix3x2 CreateScale(float scale)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix3x2 CreateScale(float scale, Vector2 centerPoint)`

**Purpose:** Creates a new `scale` instance or object.

### CreateSkew
`public static Matrix3x2 CreateSkew(float radiansX, float radiansY)`

**Purpose:** Creates a new `skew` instance or object.

### CreateSkew
`public static Matrix3x2 CreateSkew(float radiansX, float radiansY, Vector2 centerPoint)`

**Purpose:** Creates a new `skew` instance or object.

### CreateRotation
`public static Matrix3x2 CreateRotation(float radians)`

**Purpose:** Creates a new `rotation` instance or object.

### CreateRotation
`public static Matrix3x2 CreateRotation(float radians, Vector2 centerPoint)`

**Purpose:** Creates a new `rotation` instance or object.

### GetDeterminant
`public float GetDeterminant()`

**Purpose:** Gets the current value of `determinant`.

### Invert
`public static bool Invert(Matrix3x2 matrix, out Matrix3x2 result)`

**Purpose:** Handles logic related to `invert`.

### Lerp
`public static Matrix3x2 Lerp(Matrix3x2 matrix1, Matrix3x2 matrix2, float amount)`

**Purpose:** Handles logic related to `lerp`.

### Negate
`public static Matrix3x2 Negate(Matrix3x2 value)`

**Purpose:** Handles logic related to `negate`.

### Add
`public static Matrix3x2 Add(Matrix3x2 value1, Matrix3x2 value2)`

**Purpose:** Adds `add` to the current collection or state.

### Subtract
`public static Matrix3x2 Subtract(Matrix3x2 value1, Matrix3x2 value2)`

**Purpose:** Handles logic related to `subtract`.

### Multiply
`public static Matrix3x2 Multiply(Matrix3x2 value1, Matrix3x2 value2)`

**Purpose:** Handles logic related to `multiply`.

### Multiply
`public static Matrix3x2 Multiply(Matrix3x2 value1, float value2)`

**Purpose:** Handles logic related to `multiply`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Matrix3x2.CreateTranslation(position);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
