<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Camera`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Camera

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `Camera` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static Camera CreateCamera()
```

### ReleaseCamera

```csharp
public void ReleaseCamera()
```

### ReleaseCameraEntity

```csharp
public void ReleaseCameraEntity()
```

### LookAt

```csharp
public void LookAt(Vec3 position, Vec3 target, Vec3 upVector)
```

### ScreenSpaceRayProjection

```csharp
public void ScreenSpaceRayProjection(Vec2 screenPosition, ref Vec3 rayBegin, ref Vec3 rayEnd)
```

### CheckEntityVisibility

```csharp
public bool CheckEntityVisibility(GameEntity entity)
```

### SetViewVolume

```csharp
public void SetViewVolume(bool perspective, float dLeft, float dRight, float dBottom, float dTop, float dNear, float dFar)
```

### GetNearPlanePointsStatic

```csharp
public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame, float verticalFov, float aspectRatioXY, float newDNear, float newDFar, Vec3 nearPlanePoints)
```

### GetNearPlanePoints

```csharp
public void GetNearPlanePoints(Vec3 nearPlanePoints)
```

### SetFovVertical

```csharp
public void SetFovVertical(float verticalFov, float aspectRatioXY, float newDNear, float newDFar)
```

### SetFovHorizontal

```csharp
public void SetFovHorizontal(float horizontalFov, float aspectRatioXY, float newDNear, float newDFar)
```

### GetViewProjMatrix

```csharp
public void GetViewProjMatrix(ref MatrixFrame viewProj)
```

### GetFovVertical

```csharp
public float GetFovVertical()
```

### GetFovHorizontal

```csharp
public float GetFovHorizontal()
```

### GetAspectRatio

```csharp
public float GetAspectRatio()
```

### FillParametersFrom

```csharp
public void FillParametersFrom(Camera otherCamera)
```

### RenderFrustrum

```csharp
public void RenderFrustrum()
```

### ViewportPointToWorldRay

```csharp
public void ViewportPointToWorldRay(ref Vec3 rayBegin, ref Vec3 rayEnd, Vec2 viewportPoint)
```

### WorldPointToViewPortPoint

```csharp
public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint)
```

### EnclosesPoint

```csharp
public bool EnclosesPoint(Vec3 pointInWorldSpace)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)