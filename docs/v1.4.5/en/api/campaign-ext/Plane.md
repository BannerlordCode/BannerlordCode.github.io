<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Plane`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Plane

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Plane : IEquatable<Plane>`
**Base:** `IEquatable<Plane>`
**Area:** campaign-ext

## Overview

`Plane` lives in `System.Numerics`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `System.Numerics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateFromVertices
`public static Plane CreateFromVertices(Vector3 point1, Vector3 point2, Vector3 point3)`

**Purpose:** Creates a new `from vertices` instance or object.

### Normalize
`public static Plane Normalize(Plane value)`

**Purpose:** Handles logic related to `normalize`.

### Transform
`public static Plane Transform(Plane plane, Matrix4x4 matrix)`

**Purpose:** Handles logic related to `transform`.

### Transform
`public static Plane Transform(Plane plane, Quaternion rotation)`

**Purpose:** Handles logic related to `transform`.

### Dot
`public static float Dot(Plane plane, Vector4 value)`

**Purpose:** Handles logic related to `dot`.

### DotCoordinate
`public static float DotCoordinate(Plane plane, Vector3 value)`

**Purpose:** Handles logic related to `dot coordinate`.

### DotNormal
`public static float DotNormal(Plane plane, Vector3 value)`

**Purpose:** Handles logic related to `dot normal`.

### Equals
`public bool Equals(Plane other)`

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
// Prepare the required context, then call the static entry point directly
Plane.CreateFromVertices(point1, point2, point3);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
