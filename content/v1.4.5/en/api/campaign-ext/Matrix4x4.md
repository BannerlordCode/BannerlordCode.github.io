---
title: "Matrix4x4"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Matrix4x4`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Matrix4x4

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Matrix4x4 : IEquatable<Matrix4x4>`
**Base:** `IEquatable<Matrix4x4>`
**Area:** campaign-ext

## Overview

`Matrix4x4` lives in `System.Numerics`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `System.Numerics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `Translation` | `public Vector3 Translation { get; set; }` |

## Key Methods

### CreateBillboard
`public static Matrix4x4 CreateBillboard(Vector3 objectPosition, Vector3 cameraPosition, Vector3 cameraUpVector, Vector3 cameraForwardVector)`

**Purpose:** Creates a new `billboard` instance or object.

### CreateConstrainedBillboard
`public static Matrix4x4 CreateConstrainedBillboard(Vector3 objectPosition, Vector3 cameraPosition, Vector3 rotateAxis, Vector3 cameraForwardVector, Vector3 objectForwardVector)`

**Purpose:** Creates a new `constrained billboard` instance or object.

### CreateTranslation
`public static Matrix4x4 CreateTranslation(Vector3 position)`

**Purpose:** Creates a new `translation` instance or object.

### CreateTranslation
`public static Matrix4x4 CreateTranslation(float xPosition, float yPosition, float zPosition)`

**Purpose:** Creates a new `translation` instance or object.

### CreateScale
`public static Matrix4x4 CreateScale(float xScale, float yScale, float zScale)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix4x4 CreateScale(float xScale, float yScale, float zScale, Vector3 centerPoint)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix4x4 CreateScale(Vector3 scales)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix4x4 CreateScale(Vector3 scales, Vector3 centerPoint)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix4x4 CreateScale(float scale)`

**Purpose:** Creates a new `scale` instance or object.

### CreateScale
`public static Matrix4x4 CreateScale(float scale, Vector3 centerPoint)`

**Purpose:** Creates a new `scale` instance or object.

### CreateRotationX
`public static Matrix4x4 CreateRotationX(float radians)`

**Purpose:** Creates a new `rotation x` instance or object.

### CreateRotationX
`public static Matrix4x4 CreateRotationX(float radians, Vector3 centerPoint)`

**Purpose:** Creates a new `rotation x` instance or object.

### CreateRotationY
`public static Matrix4x4 CreateRotationY(float radians)`

**Purpose:** Creates a new `rotation y` instance or object.

### CreateRotationY
`public static Matrix4x4 CreateRotationY(float radians, Vector3 centerPoint)`

**Purpose:** Creates a new `rotation y` instance or object.

### CreateRotationZ
`public static Matrix4x4 CreateRotationZ(float radians)`

**Purpose:** Creates a new `rotation z` instance or object.

### CreateRotationZ
`public static Matrix4x4 CreateRotationZ(float radians, Vector3 centerPoint)`

**Purpose:** Creates a new `rotation z` instance or object.

### CreateFromAxisAngle
`public static Matrix4x4 CreateFromAxisAngle(Vector3 axis, float angle)`

**Purpose:** Creates a new `from axis angle` instance or object.

### CreatePerspectiveFieldOfView
`public static Matrix4x4 CreatePerspectiveFieldOfView(float fieldOfView, float aspectRatio, float nearPlaneDistance, float farPlaneDistance)`

**Purpose:** Creates a new `perspective field of view` instance or object.

### CreatePerspective
`public static Matrix4x4 CreatePerspective(float width, float height, float nearPlaneDistance, float farPlaneDistance)`

**Purpose:** Creates a new `perspective` instance or object.

### CreatePerspectiveOffCenter
`public static Matrix4x4 CreatePerspectiveOffCenter(float left, float right, float bottom, float top, float nearPlaneDistance, float farPlaneDistance)`

**Purpose:** Creates a new `perspective off center` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Matrix4x4.CreateBillboard(objectPosition, cameraPosition, cameraUpVector, cameraForwardVector);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
