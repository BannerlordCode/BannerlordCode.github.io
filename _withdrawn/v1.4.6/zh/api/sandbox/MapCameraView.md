---
title: "MapCameraView"
description: "MapCameraView：SandBox.View.Map 的 public 类，继承 MapView；公开成员 44 个（方法 26、属性 15、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Map/MapCameraView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapCameraView

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapCameraView : MapView`
**File:** `SandBox.View/Map/MapCameraView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapCameraView 位于 SandBox.View 模块，源文件 SandBox.View/Map/MapCameraView.cs。它是一个 public 类，实现/继承 MapView，继承链为 MapCameraView → MapView → SandboxView。public/protected 成员共 44 个：26 方法、15 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapCameraView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map`，继承链 MapCameraView → MapView → SandboxView。成员构成以方法为主（方法 26/44，属性 15/44），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/MapCameraView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentCameraFollowMode` | `protected virtual MapCameraView.CameraFollowMode CurrentCameraFollowMode` | 属性 |
| `CameraFastMoveMultiplier` | `public virtual float CameraFastMoveMultiplier` | 属性 |
| `CameraBearing` | `protected virtual float CameraBearing` | 属性 |
| `MaximumCameraHeight` | `protected virtual float MaximumCameraHeight` | 属性 |
| `CameraBearingVelocity` | `protected virtual float CameraBearingVelocity` | 属性 |
| `CameraDistance` | `public virtual float CameraDistance` | 属性 |
| `TargetCameraDistance` | `protected virtual float TargetCameraDistance` | 属性 |
| `AdditionalElevation` | `protected virtual float AdditionalElevation` | 属性 |
| `CameraAnimationInProgress` | `public virtual bool CameraAnimationInProgress` | 属性 |
| `ProcessCameraInput` | `public virtual bool ProcessCameraInput` | 属性 |
| `Camera` | `public virtual Camera Camera` | 属性 |
| `CameraFrame` | `public virtual MatrixFrame CameraFrame` | 属性 |
| `IdealCameraTarget` | `protected virtual Vec3 IdealCameraTarget` | 属性 |
| `MapCameraView` | `public MapCameraView()` | 构造函数 |
| `OnActivate` | `public virtual void OnActivate(bool leftButtonDraggingMode, Vec3 clickedPosition)` | 方法 |
| `Initialize` | `public virtual void Initialize()` | 方法 |
| `OnFinalize` | `protected internal override void OnFinalize()` | 方法 |
| `SetCameraMode` | `public virtual void SetCameraMode(MapCameraView.CameraFollowMode cameraMode)` | 方法 |
| `ResetCamera` | `public virtual void ResetCamera(bool resetDistance, bool teleportToMainParty)` | 方法 |
| `TeleportCameraToMainParty` | `public virtual void TeleportCameraToMainParty()` | 方法 |
| `FastMoveCameraToMainParty` | `public virtual void FastMoveCameraToMainParty()` | 方法 |
| `FastMoveCameraToPosition` | `public virtual void FastMoveCameraToPosition(CampaignVec2 target, bool isInMenu)` | 方法 |
| `OnFastMoveCameraMovementStart` | `public void OnFastMoveCameraMovementStart()` | 方法 |
| `StopCameraMovementSoundEvents` | `public void StopCameraMovementSoundEvents()` | 方法 |
| `IsCameraLockedToPlayerParty` | `public virtual bool IsCameraLockedToPlayerParty()` | 方法 |
| `StartCameraAnimation` | `public virtual void StartCameraAnimation(CampaignVec2 targetPosition, float animationStopDuration)` | 方法 |
| `SiegeEngineClick` | `public virtual void SiegeEngineClick(MatrixFrame siegeEngineFrame)` | 方法 |
| `OnExit` | `public virtual void OnExit()` | 方法 |
| `OnEscapeMenuToggled` | `public virtual void OnEscapeMenuToggled(bool isOpened)` | 方法 |
| `HandleMouse` | `public virtual void HandleMouse(bool rightMouseButtonPressed, float verticalCameraInput, float mouseMoveY, float dt)` | 方法 |
| `HandleLeftMouseButtonClick` | `public virtual void HandleLeftMouseButtonClick(bool isMouseActive)` | 方法 |
| `OnSetMapSiegeOverlayState` | `public virtual void OnSetMapSiegeOverlayState(bool isActive, bool isMapSiegeOverlayViewNull)` | 方法 |
| `OnRefreshMapSiegeOverlayRequired` | `public virtual void OnRefreshMapSiegeOverlayRequired(bool isMapSiegeOverlayViewNull)` | 方法 |
| `OnBeforeTick` | `public virtual void OnBeforeTick(in MapCameraView.InputInformation inputInformation)` | 方法 |
| `UpdateMapCamera` | `protected virtual void UpdateMapCamera(bool _leftButtonDraggingMode, Vec3 _clickedPosition)` | 方法 |
| `GetCameraTargetForPosition` | `protected virtual Vec3 GetCameraTargetForPosition(CampaignVec2 targetPosition)` | 方法 |
| `GetCameraTargetForParty` | `protected virtual Vec3 GetCameraTargetForParty(PartyBase party)` | 方法 |
| `GetMapCameraInput` | `protected virtual bool GetMapCameraInput(MapCameraView.InputInformation inputInformation)` | 方法 |
| `ComputeMapCamera` | `protected virtual MatrixFrame ComputeMapCamera(ref Vec3 cameraTarget, float cameraBearing, float cameraElevation, float cameraDistance, ref CampaignVec2 lastUsedIdealCameraTarget)` | 方法 |
| `CalculateCameraElevation` | `protected virtual float CalculateCameraElevation(float cameraDistance)` | 方法 |
| `CameraFollowMode` | `public enum CameraFollowMode` | 属性 |
| `InputInformation` | `public struct InputInformation` | 属性 |
| `CameraFollowMode` | `public enum CameraFollowMode` | 嵌套类型 |
| `InputInformation` | `public struct InputInformation` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MapView](../MapView/)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView/)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript/)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent/)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)
