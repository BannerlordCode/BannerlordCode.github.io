<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputInformation`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InputInformation

**命名空间:** SandBox.View.Map
**模块:** SandBox.View
**类型:** `public struct InputInformation`
**领域:** campaign-ext

## 概述

`InputInformation` 位于 `SandBox.View.Map`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

**用途 / Purpose:** 当 `activate` 事件触发时调用此方法。

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### SetCameraMode
`public virtual void SetCameraMode(MapCameraView.CameraFollowMode cameraMode)`

**用途 / Purpose:** 设置 `camera mode` 的值或状态。

### ResetCamera
`public virtual void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**用途 / Purpose:** 将 `camera` 重置为初始状态。

### TeleportCameraToMainParty
`public virtual void TeleportCameraToMainParty()`

**用途 / Purpose:** 处理 `teleport camera to main party` 相关逻辑。

### FastMoveCameraToMainParty
`public virtual void FastMoveCameraToMainParty()`

**用途 / Purpose:** 处理 `fast move camera to main party` 相关逻辑。

### FastMoveCameraToPosition
`public virtual void FastMoveCameraToPosition(CampaignVec2 target, bool isInMenu)`

**用途 / Purpose:** 处理 `fast move camera to position` 相关逻辑。

### OnFastMoveCameraMovementStart
`public void OnFastMoveCameraMovementStart()`

**用途 / Purpose:** 当 `fast move camera movement start` 事件触发时调用此方法。

### StopCameraMovementSoundEvents
`public void StopCameraMovementSoundEvents()`

**用途 / Purpose:** 处理 `stop camera movement sound events` 相关逻辑。

### IsCameraLockedToPlayerParty
`public virtual bool IsCameraLockedToPlayerParty()`

**用途 / Purpose:** 处理 `is camera locked to player party` 相关逻辑。

### StartCameraAnimation
`public virtual void StartCameraAnimation(CampaignVec2 targetPosition, float animationStopDuration)`

**用途 / Purpose:** 处理 `start camera animation` 相关逻辑。

### SiegeEngineClick
`public virtual void SiegeEngineClick(MatrixFrame siegeEngineFrame)`

**用途 / Purpose:** 处理 `siege engine click` 相关逻辑。

### OnExit
`public virtual void OnExit()`

**用途 / Purpose:** 当 `exit` 事件触发时调用此方法。

### OnEscapeMenuToggled
`public virtual void OnEscapeMenuToggled(bool isOpened)`

**用途 / Purpose:** 当 `escape menu toggled` 事件触发时调用此方法。

### HandleMouse
`public virtual void HandleMouse(bool rightMouseButtonPressed, float verticalCameraInput, float mouseMoveY, float dt)`

**用途 / Purpose:** 处理 `mouse` 事件或回调。

### HandleLeftMouseButtonClick
`public virtual void HandleLeftMouseButtonClick(bool isMouseActive)`

**用途 / Purpose:** 处理 `left mouse button click` 事件或回调。

### OnSetMapSiegeOverlayState
`public virtual void OnSetMapSiegeOverlayState(bool isActive, bool isMapSiegeOverlayViewNull)`

**用途 / Purpose:** 当 `set map siege overlay state` 事件触发时调用此方法。

### OnRefreshMapSiegeOverlayRequired
`public virtual void OnRefreshMapSiegeOverlayRequired(bool isMapSiegeOverlayViewNull)`

**用途 / Purpose:** 当 `refresh map siege overlay required` 事件触发时调用此方法。

### OnBeforeTick
`public virtual void OnBeforeTick(in MapCameraView.InputInformation inputInformation)`

**用途 / Purpose:** 当 `before tick` 事件触发时调用此方法。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 InputInformation 实例，再调用它的公开方法
var value = new InputInformation();
value.OnActivate(false, clickedPosition);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
