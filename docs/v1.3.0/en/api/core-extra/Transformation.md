<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Transformation`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Transformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Transformation`
**Base:** none
**File:** `TaleWorlds.Library/Transformation.cs`

## Overview

`Transformation` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### HasNegativeScale
`public bool HasNegativeScale()`

**Purpose:** Checks whether the current object has/contains `negative scale`.

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
Transformation.CreateFromMatrixFrame(matrixFrame);
```

## See Also

- [Complete Class Catalog](../catalog)