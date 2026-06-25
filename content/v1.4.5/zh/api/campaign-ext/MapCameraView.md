---
title: "MapCameraView"
description: "MapCameraView 的自动生成类参考。"
---
# MapCameraView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapCameraView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapCameraView.cs`

## 概述

`MapCameraView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MapCameraView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CameraFastMoveMultiplier` | `public virtual float CameraFastMoveMultiplier { get; set; }` |
| `CameraDistance` | `public virtual float CameraDistance { get; set; }` |
| `CameraAnimationInProgress` | `public virtual bool CameraAnimationInProgress { get; set; }` |
| `ProcessCameraInput` | `public virtual bool ProcessCameraInput { get; set; }` |
| `Camera` | `public virtual Camera Camera { get; set; }` |
| `CameraFrame` | `public virtual MatrixFrame CameraFrame { get; set; }` |

## 主要方法

### OnActivate
`public virtual void OnActivate(bool leftButtonDraggingMode, Vec3 clickedPosition)`

**用途 / Purpose:** **用途 / Purpose:** 在 activate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.OnActivate(false, clickedPosition);
```

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.Initialize();
```

### SetCameraMode
`public virtual void SetCameraMode(CameraFollowMode cameraMode)`

**用途 / Purpose:** **用途 / Purpose:** 为 camera mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.SetCameraMode(cameraMode);
```

### ResetCamera
`public virtual void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.ResetCamera(false, false);
```

### TeleportCameraToMainParty
`public virtual void TeleportCameraToMainParty()`

**用途 / Purpose:** **用途 / Purpose:** 调用 TeleportCameraToMainParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.TeleportCameraToMainParty();
```

### FastMoveCameraToMainParty
`public virtual void FastMoveCameraToMainParty()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FastMoveCameraToMainParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.FastMoveCameraToMainParty();
```

### FastMoveCameraToPosition
`public virtual void FastMoveCameraToPosition(CampaignVec2 target, bool isInMenu)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FastMoveCameraToPosition 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.FastMoveCameraToPosition(target, false);
```

### OnFastMoveCameraMovementStart
`public void OnFastMoveCameraMovementStart()`

**用途 / Purpose:** **用途 / Purpose:** 在 fast move camera movement start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.OnFastMoveCameraMovementStart();
```

### StopCameraMovementSoundEvents
`public void StopCameraMovementSoundEvents()`

**用途 / Purpose:** **用途 / Purpose:** 停止camera movement sound events流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.StopCameraMovementSoundEvents();
```

### IsCameraLockedToPlayerParty
`public virtual bool IsCameraLockedToPlayerParty()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 camera locked to player party 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
var result = mapCameraView.IsCameraLockedToPlayerParty();
```

### StartCameraAnimation
`public virtual void StartCameraAnimation(CampaignVec2 targetPosition, float animationStopDuration)`

**用途 / Purpose:** **用途 / Purpose:** 启动camera animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.StartCameraAnimation(targetPosition, 0);
```

### SiegeEngineClick
`public virtual void SiegeEngineClick(MatrixFrame siegeEngineFrame)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SiegeEngineClick 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.SiegeEngineClick(siegeEngineFrame);
```

### OnExit
`public virtual void OnExit()`

**用途 / Purpose:** **用途 / Purpose:** 在 exit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.OnExit();
```

### OnEscapeMenuToggled
`public virtual void OnEscapeMenuToggled(bool isOpened)`

**用途 / Purpose:** **用途 / Purpose:** 在 escape menu toggled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.OnEscapeMenuToggled(false);
```

### HandleMouse
`public virtual void HandleMouse(bool rightMouseButtonPressed, float verticalCameraInput, float mouseMoveY, float dt)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 mouse 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.HandleMouse(false, 0, 0, 0);
```

### HandleLeftMouseButtonClick
`public virtual void HandleLeftMouseButtonClick(bool isMouseActive)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 left mouse button click 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.HandleLeftMouseButtonClick(false);
```

### OnSetMapSiegeOverlayState
`public virtual void OnSetMapSiegeOverlayState(bool isActive, bool isMapSiegeOverlayViewNull)`

**用途 / Purpose:** **用途 / Purpose:** 在 set map siege overlay state 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.OnSetMapSiegeOverlayState(false, false);
```

### OnRefreshMapSiegeOverlayRequired
`public virtual void OnRefreshMapSiegeOverlayRequired(bool isMapSiegeOverlayViewNull)`

**用途 / Purpose:** **用途 / Purpose:** 在 refresh map siege overlay required 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.OnRefreshMapSiegeOverlayRequired(false);
```

### OnBeforeTick
`public virtual void OnBeforeTick(in InputInformation inputInformation)`

**用途 / Purpose:** **用途 / Purpose:** 在 before tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapCameraView 实例
MapCameraView mapCameraView = ...;
mapCameraView.OnBeforeTick(inputInformation);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MapCameraView view = ...;
```

## 参见

- [本区域目录](../)