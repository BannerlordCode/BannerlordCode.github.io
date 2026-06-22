<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Camera`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Camera

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Camera` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; set; }` |
| `Position` | `public Vec3 Position { get; set; }` |
| `Direction` | `public Vec3 Direction { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `Near` | `public float Near { get; }` |
| `Far` | `public float Far { get; }` |
| `HorizontalFov` | `public float HorizontalFov { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)