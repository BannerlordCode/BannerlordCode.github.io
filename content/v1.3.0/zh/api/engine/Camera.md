---
title: "Camera"
description: "Camera 的自动生成类参考。"
---
# Camera

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Camera : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/Camera.cs`

## 概述

`Camera` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public static Camera CreateCamera()`

**用途 / Purpose:** 构建一个新的 「camera」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Camera.CreateCamera();
```

### ReleaseCamera
`public void ReleaseCamera()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.ReleaseCamera();
```

### ReleaseCameraEntity
`public void ReleaseCameraEntity()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.ReleaseCameraEntity();
```

### LookAt
`public void LookAt(Vec3 position, Vec3 target, Vec3 upVector)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.LookAt(position, target, upVector);
```

### ScreenSpaceRayProjection
`public void ScreenSpaceRayProjection(Vec2 screenPosition, ref Vec3 rayBegin, ref Vec3 rayEnd)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.ScreenSpaceRayProjection(screenPosition, rayBegin, rayEnd);
```

### CheckEntityVisibility
`public bool CheckEntityVisibility(GameEntity entity)`

**用途 / Purpose:** 检查「entity visibility」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
var result = camera.CheckEntityVisibility(entity);
```

### SetViewVolume
`public void SetViewVolume(bool perspective, float dLeft, float dRight, float dBottom, float dTop, float dNear, float dFar)`

**用途 / Purpose:** 为 「view volume」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.SetViewVolume(false, 0, 0, 0, 0, 0, 0);
```

### GetNearPlanePointsStatic
`public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame, float verticalFov, float aspectRatioXY, float newDNear, float newDFar, Vec3 nearPlanePoints)`

**用途 / Purpose:** 读取并返回当前对象中 「near plane points static」 的结果。

```csharp
// 静态调用，不需要实例
Camera.GetNearPlanePointsStatic(cameraFrame, 0, 0, 0, 0, nearPlanePoints);
```

### GetNearPlanePoints
`public void GetNearPlanePoints(Vec3 nearPlanePoints)`

**用途 / Purpose:** 读取并返回当前对象中 「near plane points」 的结果。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.GetNearPlanePoints(nearPlanePoints);
```

### SetFovVertical
`public void SetFovVertical(float verticalFov, float aspectRatioXY, float newDNear, float newDFar)`

**用途 / Purpose:** 为 「fov vertical」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.SetFovVertical(0, 0, 0, 0);
```

### SetFovHorizontal
`public void SetFovHorizontal(float horizontalFov, float aspectRatioXY, float newDNear, float newDFar)`

**用途 / Purpose:** 为 「fov horizontal」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.SetFovHorizontal(0, 0, 0, 0);
```

### GetViewProjMatrix
`public void GetViewProjMatrix(ref MatrixFrame viewProj)`

**用途 / Purpose:** 读取并返回当前对象中 「view proj matrix」 的结果。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.GetViewProjMatrix(viewProj);
```

### GetFovVertical
`public float GetFovVertical()`

**用途 / Purpose:** 读取并返回当前对象中 「fov vertical」 的结果。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
var result = camera.GetFovVertical();
```

### GetFovHorizontal
`public float GetFovHorizontal()`

**用途 / Purpose:** 读取并返回当前对象中 「fov horizontal」 的结果。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
var result = camera.GetFovHorizontal();
```

### GetAspectRatio
`public float GetAspectRatio()`

**用途 / Purpose:** 读取并返回当前对象中 「aspect ratio」 的结果。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
var result = camera.GetAspectRatio();
```

### FillParametersFrom
`public void FillParametersFrom(Camera otherCamera)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.FillParametersFrom(otherCamera);
```

### RenderFrustrum
`public void RenderFrustrum()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.RenderFrustrum();
```

### ViewportPointToWorldRay
`public void ViewportPointToWorldRay(ref Vec3 rayBegin, ref Vec3 rayEnd, Vec2 viewportPoint)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
camera.ViewportPointToWorldRay(rayBegin, rayEnd, viewportPoint);
```

### WorldPointToViewPortPoint
`public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
var result = camera.WorldPointToViewPortPoint(worldPoint);
```

### EnclosesPoint
`public bool EnclosesPoint(Vec3 pointInWorldSpace)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Camera 实例
Camera camera = ...;
var result = camera.EnclosesPoint(pointInWorldSpace);
```

### ConstructCameraFromPositionElevationBearing
`public static MatrixFrame ConstructCameraFromPositionElevationBearing(Vec3 position, float elevation, float bearing)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
Camera.ConstructCameraFromPositionElevationBearing(position, 0, 0);
```

## 使用示例

```csharp
Camera.CreateCamera();
```

## 参见

- [本区域目录](../)