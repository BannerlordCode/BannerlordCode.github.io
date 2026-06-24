<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatrixExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MatrixExtensions

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class MatrixExtensions`
**Area:** campaign-ext

## Overview

`MatrixExtensions` lives in `TaleWorlds.TwoDimension.Standalone`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToMatrix4x4
`public static Matrix4x4 ToMatrix4x4(this MatrixFrame matrixFrame)`

**Purpose:** Handles logic related to `to matrix4x4`.

### ToMatrixFrame
`public static MatrixFrame ToMatrixFrame(this Matrix4x4 matrix)`

**Purpose:** Handles logic related to `to matrix frame`.

### AreAllComponentsValid
`public static bool AreAllComponentsValid(this Matrix4x4 matrix)`

**Purpose:** Handles logic related to `are all components valid`.

### AreAllComponentsValid
`public static bool AreAllComponentsValid(this MatrixFrame matrix)`

**Purpose:** Handles logic related to `are all components valid`.

### CreateOrthographicOffCenter
`public static MatrixFrame CreateOrthographicOffCenter(float left, float right, float bottom, float top, float zNearPlane, float zFarPlane)`

**Purpose:** Creates a new `orthographic off center` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MatrixExtensions.ToMatrix4x4(matrixFrame);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
