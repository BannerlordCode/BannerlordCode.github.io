<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Transformation`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Transformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Transformation`
**Area:** core-extra

## Overview

`Transformation` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Identity` | `public static Transformation Identity { get; }` |
| `AsMatrixFrame` | `public MatrixFrame AsMatrixFrame { get; }` |

## Key Methods

### CreateFromMatrixFrame
`public static Transformation CreateFromMatrixFrame(MatrixFrame matrixFrame)`

**Purpose:** Creates a new `from matrix frame` instance or object.

### CreateFromRotation
`public static Transformation CreateFromRotation(Mat3 rotation)`

**Purpose:** Creates a new `from rotation` instance or object.

### TransformToParent
`public Vec3 TransformToParent(Vec3 v)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToParent
`public Transformation TransformToParent(Transformation t)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToLocal
`public Vec3 TransformToLocal(Vec3 v)`

**Purpose:** Handles logic related to `transform to local`.

### TransformToLocal
`public Transformation TransformToLocal(Transformation t)`

**Purpose:** Handles logic related to `transform to local`.

### Rotate
`public void Rotate(float radian, Vec3 axis)`

**Purpose:** Handles logic related to `rotate`.

### ApplyScale
`public void ApplyScale(Vec3 vec3)`

**Purpose:** Applies `scale` to the current object.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Transformation.CreateFromMatrixFrame(matrixFrame);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
