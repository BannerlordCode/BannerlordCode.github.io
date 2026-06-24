<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Camera`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Camera

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Camera : NativeObject`
**Base:** `NativeObject`
**Area:** engine

## Overview

`Camera` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; set; }` |
| `Position` | `public Vec3 Position { get; set; }` |
| `Direction` | `public Vec3 Direction { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `Near` | `public float Near { get; }` |
| `Far` | `public float Far { get; }` |
| `HorizontalFov` | `public float HorizontalFov { get; }` |

## Key Methods

### CreateCamera
`public static Camera CreateCamera()`

**Purpose:** Creates a new `camera` instance or object.

### ReleaseCamera
`public void ReleaseCamera()`

**Purpose:** Handles logic related to `release camera`.

### ReleaseCameraEntity
`public void ReleaseCameraEntity()`

**Purpose:** Handles logic related to `release camera entity`.

### LookAt
`public void LookAt(Vec3 position, Vec3 target, Vec3 upVector)`

**Purpose:** Handles logic related to `look at`.

### ScreenSpaceRayProjection
`public void ScreenSpaceRayProjection(Vec2 screenPosition, ref Vec3 rayBegin, ref Vec3 rayEnd)`

**Purpose:** Handles logic related to `screen space ray projection`.

### CheckEntityVisibility
`public bool CheckEntityVisibility(GameEntity entity)`

**Purpose:** Handles logic related to `check entity visibility`.

### SetViewVolume
`public void SetViewVolume(bool perspective, float dLeft, float dRight, float dBottom, float dTop, float dNear, float dFar)`

**Purpose:** Sets the value or state of `view volume`.

### GetNearPlanePointsStatic
`public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame, float verticalFov, float aspectRatioXY, float newDNear, float newDFar, Vec3 nearPlanePoints)`

**Purpose:** Gets the current value of `near plane points static`.

### GetNearPlanePoints
`public void GetNearPlanePoints(Vec3 nearPlanePoints)`

**Purpose:** Gets the current value of `near plane points`.

### SetFovVertical
`public void SetFovVertical(float verticalFov, float aspectRatioXY, float newDNear, float newDFar)`

**Purpose:** Sets the value or state of `fov vertical`.

### SetFovHorizontal
`public void SetFovHorizontal(float horizontalFov, float aspectRatioXY, float newDNear, float newDFar)`

**Purpose:** Sets the value or state of `fov horizontal`.

### GetViewProjMatrix
`public void GetViewProjMatrix(ref MatrixFrame viewProj)`

**Purpose:** Gets the current value of `view proj matrix`.

### GetFovVertical
`public float GetFovVertical()`

**Purpose:** Gets the current value of `fov vertical`.

### GetFovHorizontal
`public float GetFovHorizontal()`

**Purpose:** Gets the current value of `fov horizontal`.

### GetAspectRatio
`public float GetAspectRatio()`

**Purpose:** Gets the current value of `aspect ratio`.

### FillParametersFrom
`public void FillParametersFrom(Camera otherCamera)`

**Purpose:** Handles logic related to `fill parameters from`.

### RenderFrustrum
`public void RenderFrustrum()`

**Purpose:** Handles logic related to `render frustrum`.

### ViewportPointToWorldRay
`public void ViewportPointToWorldRay(ref Vec3 rayBegin, ref Vec3 rayEnd, Vec2 viewportPoint)`

**Purpose:** Handles logic related to `viewport point to world ray`.

### WorldPointToViewPortPoint
`public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint)`

**Purpose:** Handles logic related to `world point to view port point`.

### EnclosesPoint
`public bool EnclosesPoint(Vec3 pointInWorldSpace)`

**Purpose:** Handles logic related to `encloses point`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Camera.CreateCamera();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
