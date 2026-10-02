---
title: "MapCameraView"
description: "MapCameraView 的自动生成类参考。"
---
# MapCameraView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapCameraView : MapView `
**Base:** MapView
**Source:** SandBox.View/Map/MapCameraView.cs

## 概述

`MapCameraView` 的自动生成类参考页面。声明来自 `SandBox.View/Map/MapCameraView.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnActivate
`public virtual void OnActivate(bool leftButtonDraggingMode,Vec3 clickedPosition) `

### Initialize
`public virtual void Initialize() `

### OnFinalize
`protected internal override void OnFinalize() `

### SetCameraMode
`public virtual void SetCameraMode(MapCameraView.CameraFollowMode cameraMode) `

### ResetCamera
`public virtual void ResetCamera(bool resetDistance,bool teleportToMainParty) `

### TeleportCameraToMainParty
`public virtual void TeleportCameraToMainParty() `

### FastMoveCameraToMainParty
`public virtual void FastMoveCameraToMainParty() `

### FastMoveCameraToPosition
`public virtual void FastMoveCameraToPosition(CampaignVec2 target,bool isInMenu) `

### OnFastMoveCameraMovementStart
`public void OnFastMoveCameraMovementStart() `

### StopCameraMovementSoundEvents
`public void StopCameraMovementSoundEvents() `

### IsCameraLockedToPlayerParty
`public virtual bool IsCameraLockedToPlayerParty() `

### StartCameraAnimation
`public virtual void StartCameraAnimation(CampaignVec2 targetPosition,float animationStopDuration) `

### SiegeEngineClick
`public virtual void SiegeEngineClick(MatrixFrame siegeEngineFrame) `

### OnExit
`public virtual void OnExit() `

### OnEscapeMenuToggled
`public virtual void OnEscapeMenuToggled(bool isOpened) `

### HandleMouse
`public virtual void HandleMouse(bool rightMouseButtonPressed,float verticalCameraInput,float mouseMoveY,float dt) `

### HandleLeftMouseButtonClick
`public virtual void HandleLeftMouseButtonClick(bool isMouseActive) `

### OnSetMapSiegeOverlayState
`public virtual void OnSetMapSiegeOverlayState(bool isActive,bool isMapSiegeOverlayViewNull) `

### OnRefreshMapSiegeOverlayRequired
`public virtual void OnRefreshMapSiegeOverlayRequired(bool isMapSiegeOverlayViewNull) `

### OnBeforeTick
`public virtual void OnBeforeTick(in MapCameraView.InputInformation inputInformation) `

### UpdateMapCamera
`protected virtual void UpdateMapCamera(bool _leftButtonDraggingMode,Vec3 _clickedPosition) `

### GetCameraTargetForPosition
`protected virtual Vec3 GetCameraTargetForPosition(CampaignVec2 targetPosition) `

### GetCameraTargetForParty
`protected virtual Vec3 GetCameraTargetForParty(PartyBase party) `

### GetMapCameraInput
`protected virtual bool GetMapCameraInput(MapCameraView.InputInformation inputInformation) `

### ComputeMapCamera
`protected virtual MatrixFrame ComputeMapCamera(ref Vec3 cameraTarget,float cameraBearing,float cameraElevation,float cameraDistance,ref CampaignVec2 lastUsedIdealCameraTarget) `

### CalculateCameraElevation
`protected virtual float CalculateCameraElevation(float cameraDistance) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
