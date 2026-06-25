---
title: "Camera"
description: "Auto-generated class reference for Camera."
---
# Camera

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Camera : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Camera.cs`

## Overview

`Camera` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; set; }` |
| `Position` | `public Vec3 Position { get; set; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |

## Key Methods

### CreateCamera
`public static Camera CreateCamera()`

**Purpose:** Constructs a new `camera` entity and returns it to the caller.

```csharp
// Static call; no instance required
Camera.CreateCamera();
```

### ReleaseCamera
`public void ReleaseCamera()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.ReleaseCamera();
```

### ReleaseCameraEntity
`public void ReleaseCameraEntity()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.ReleaseCameraEntity();
```

### LookAt
`public void LookAt(Vec3 position, Vec3 target, Vec3 upVector)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.LookAt(position, target, upVector);
```

### ScreenSpaceRayProjection
`public void ScreenSpaceRayProjection(Vec2 screenPosition, ref Vec3 rayBegin, ref Vec3 rayEnd)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.ScreenSpaceRayProjection(screenPosition, rayBegin, rayEnd);
```

### CheckEntityVisibility
`public bool CheckEntityVisibility(GameEntity entity)`

**Purpose:** Verifies whether `entity visibility` holds true for the current object.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
var result = camera.CheckEntityVisibility(entity);
```

### SetViewVolume
`public void SetViewVolume(bool perspective, float dLeft, float dRight, float dBottom, float dTop, float dNear, float dFar)`

**Purpose:** Assigns a new value to `view volume` and updates the object's internal state.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.SetViewVolume(false, 0, 0, 0, 0, 0, 0);
```

### GetNearPlanePointsStatic
`public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame, float verticalFov, float aspectRatioXY, float newDNear, float newDFar, Vec3 nearPlanePoints)`

**Purpose:** Reads and returns the `near plane points static` value held by the current object.

```csharp
// Static call; no instance required
Camera.GetNearPlanePointsStatic(cameraFrame, 0, 0, 0, 0, nearPlanePoints);
```

### GetNearPlanePoints
`public void GetNearPlanePoints(Vec3 nearPlanePoints)`

**Purpose:** Reads and returns the `near plane points` value held by the current object.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.GetNearPlanePoints(nearPlanePoints);
```

### SetFovVertical
`public void SetFovVertical(float verticalFov, float aspectRatioXY, float newDNear, float newDFar)`

**Purpose:** Assigns a new value to `fov vertical` and updates the object's internal state.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.SetFovVertical(0, 0, 0, 0);
```

### SetFovHorizontal
`public void SetFovHorizontal(float horizontalFov, float aspectRatioXY, float newDNear, float newDFar)`

**Purpose:** Assigns a new value to `fov horizontal` and updates the object's internal state.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.SetFovHorizontal(0, 0, 0, 0);
```

### GetViewProjMatrix
`public void GetViewProjMatrix(ref MatrixFrame viewProj)`

**Purpose:** Reads and returns the `view proj matrix` value held by the current object.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.GetViewProjMatrix(viewProj);
```

### GetFovVertical
`public float GetFovVertical()`

**Purpose:** Reads and returns the `fov vertical` value held by the current object.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
var result = camera.GetFovVertical();
```

### GetFovHorizontal
`public float GetFovHorizontal()`

**Purpose:** Reads and returns the `fov horizontal` value held by the current object.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
var result = camera.GetFovHorizontal();
```

### GetAspectRatio
`public float GetAspectRatio()`

**Purpose:** Reads and returns the `aspect ratio` value held by the current object.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
var result = camera.GetAspectRatio();
```

### FillParametersFrom
`public void FillParametersFrom(Camera otherCamera)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.FillParametersFrom(otherCamera);
```

### RenderFrustrum
`public void RenderFrustrum()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.RenderFrustrum();
```

### ViewportPointToWorldRay
`public void ViewportPointToWorldRay(ref Vec3 rayBegin, ref Vec3 rayEnd, Vec2 viewportPoint)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
camera.ViewportPointToWorldRay(rayBegin, rayEnd, viewportPoint);
```

### WorldPointToViewPortPoint
`public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
var result = camera.WorldPointToViewPortPoint(worldPoint);
```

### EnclosesPoint
`public bool EnclosesPoint(Vec3 pointInWorldSpace)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Camera from the subsystem API first
Camera camera = ...;
var result = camera.EnclosesPoint(pointInWorldSpace);
```

### ConstructCameraFromPositionElevationBearing
`public static MatrixFrame ConstructCameraFromPositionElevationBearing(Vec3 position, float elevation, float bearing)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Camera.ConstructCameraFromPositionElevationBearing(position, 0, 0);
```

## Usage Example

```csharp
Camera.CreateCamera();
```

## See Also

- [Area Index](../)