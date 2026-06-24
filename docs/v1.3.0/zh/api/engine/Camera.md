<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Camera`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 创建一个 `camera` 实例或对象。

### ReleaseCamera
`public void ReleaseCamera()`

**用途 / Purpose:** 处理 `release camera` 相关逻辑。

### ReleaseCameraEntity
`public void ReleaseCameraEntity()`

**用途 / Purpose:** 处理 `release camera entity` 相关逻辑。

### LookAt
`public void LookAt(Vec3 position, Vec3 target, Vec3 upVector)`

**用途 / Purpose:** 处理 `look at` 相关逻辑。

### ScreenSpaceRayProjection
`public void ScreenSpaceRayProjection(Vec2 screenPosition, ref Vec3 rayBegin, ref Vec3 rayEnd)`

**用途 / Purpose:** 处理 `screen space ray projection` 相关逻辑。

### CheckEntityVisibility
`public bool CheckEntityVisibility(GameEntity entity)`

**用途 / Purpose:** 处理 `check entity visibility` 相关逻辑。

### SetViewVolume
`public void SetViewVolume(bool perspective, float dLeft, float dRight, float dBottom, float dTop, float dNear, float dFar)`

**用途 / Purpose:** 设置 `view volume` 的值或状态。

### GetNearPlanePointsStatic
`public static void GetNearPlanePointsStatic(ref MatrixFrame cameraFrame, float verticalFov, float aspectRatioXY, float newDNear, float newDFar, Vec3 nearPlanePoints)`

**用途 / Purpose:** 获取 `near plane points static` 的当前值。

### GetNearPlanePoints
`public void GetNearPlanePoints(Vec3 nearPlanePoints)`

**用途 / Purpose:** 获取 `near plane points` 的当前值。

### SetFovVertical
`public void SetFovVertical(float verticalFov, float aspectRatioXY, float newDNear, float newDFar)`

**用途 / Purpose:** 设置 `fov vertical` 的值或状态。

### SetFovHorizontal
`public void SetFovHorizontal(float horizontalFov, float aspectRatioXY, float newDNear, float newDFar)`

**用途 / Purpose:** 设置 `fov horizontal` 的值或状态。

### GetViewProjMatrix
`public void GetViewProjMatrix(ref MatrixFrame viewProj)`

**用途 / Purpose:** 获取 `view proj matrix` 的当前值。

### GetFovVertical
`public float GetFovVertical()`

**用途 / Purpose:** 获取 `fov vertical` 的当前值。

### GetFovHorizontal
`public float GetFovHorizontal()`

**用途 / Purpose:** 获取 `fov horizontal` 的当前值。

### GetAspectRatio
`public float GetAspectRatio()`

**用途 / Purpose:** 获取 `aspect ratio` 的当前值。

### FillParametersFrom
`public void FillParametersFrom(Camera otherCamera)`

**用途 / Purpose:** 处理 `fill parameters from` 相关逻辑。

### RenderFrustrum
`public void RenderFrustrum()`

**用途 / Purpose:** 处理 `render frustrum` 相关逻辑。

### ViewportPointToWorldRay
`public void ViewportPointToWorldRay(ref Vec3 rayBegin, ref Vec3 rayEnd, Vec2 viewportPoint)`

**用途 / Purpose:** 处理 `viewport point to world ray` 相关逻辑。

### WorldPointToViewPortPoint
`public Vec3 WorldPointToViewPortPoint(ref Vec3 worldPoint)`

**用途 / Purpose:** 处理 `world point to view port point` 相关逻辑。

### EnclosesPoint
`public bool EnclosesPoint(Vec3 pointInWorldSpace)`

**用途 / Purpose:** 处理 `encloses point` 相关逻辑。

### ConstructCameraFromPositionElevationBearing
`public static MatrixFrame ConstructCameraFromPositionElevationBearing(Vec3 position, float elevation, float bearing)`

**用途 / Purpose:** 处理 `construct camera from position elevation bearing` 相关逻辑。

## 使用示例

```csharp
Camera.CreateCamera();
```

## 参见

- [完整类目录](../catalog)