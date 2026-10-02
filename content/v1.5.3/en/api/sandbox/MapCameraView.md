---
title: "MapCameraView"
description: "Auto-generated class reference for MapCameraView."
---
# MapCameraView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapCameraView : MapView `
**Base:** MapView
**Source:** SandBox.View/Map/MapCameraView.cs

## Overview

Auto-generated stub for `MapCameraView`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnActivate
`public virtual void OnActivate(bool leftButtonDraggingMode,Vec3 clickedPosition)`

### Initialize
`public virtual void Initialize()`

### OnFinalize
`protected internal override void OnFinalize()`

### SetCameraMode
`public virtual void SetCameraMode(MapCameraView.CameraFollowMode cameraMode)`

### ResetCamera
`public virtual void ResetCamera(bool resetDistance,bool teleportToMainParty)`

### TeleportCameraToMainParty
`public virtual void TeleportCameraToMainParty()`

### FastMoveCameraToMainParty
`public virtual void FastMoveCameraToMainParty()`

### FastMoveCameraToPosition
`public virtual void FastMoveCameraToPosition(CampaignVec2 target,bool isInMenu)`

### OnFastMoveCameraMovementStart
`public void OnFastMoveCameraMovementStart()`

### StopCameraMovementSoundEvents
`public void StopCameraMovementSoundEvents()`

### IsCameraLockedToPlayerParty
`public virtual bool IsCameraLockedToPlayerParty()`

### StartCameraAnimation
`public virtual void StartCameraAnimation(CampaignVec2 targetPosition,float animationStopDuration)`

### SiegeEngineClick
`public virtual void SiegeEngineClick(MatrixFrame siegeEngineFrame)`

### OnExit
`public virtual void OnExit()`

### OnEscapeMenuToggled
`public virtual void OnEscapeMenuToggled(bool isOpened)`

### HandleMouse
`public virtual void HandleMouse(bool rightMouseButtonPressed,float verticalCameraInput,float mouseMoveY,float dt)`

### HandleLeftMouseButtonClick
`public virtual void HandleLeftMouseButtonClick(bool isMouseActive)`

### OnSetMapSiegeOverlayState
`public virtual void OnSetMapSiegeOverlayState(bool isActive,bool isMapSiegeOverlayViewNull)`

### OnRefreshMapSiegeOverlayRequired
`public virtual void OnRefreshMapSiegeOverlayRequired(bool isMapSiegeOverlayViewNull)`

### OnBeforeTick
`public virtual void OnBeforeTick(in MapCameraView.InputInformation inputInformation)`

### UpdateMapCamera
`protected virtual void UpdateMapCamera(bool _leftButtonDraggingMode,Vec3 _clickedPosition)`

### GetCameraTargetForPosition
`protected virtual Vec3 GetCameraTargetForPosition(CampaignVec2 targetPosition)`

### GetCameraTargetForParty
`protected virtual Vec3 GetCameraTargetForParty(PartyBase party)`

### GetMapCameraInput
`protected virtual bool GetMapCameraInput(MapCameraView.InputInformation inputInformation)`

### ComputeMapCamera
`protected virtual MatrixFrame ComputeMapCamera(ref Vec3 cameraTarget,float cameraBearing,float cameraElevation,float cameraDistance,ref CampaignVec2 lastUsedIdealCameraTarget)`

### CalculateCameraElevation
`protected virtual float CalculateCameraElevation(float cameraDistance)`

## See Also

- [Section index](../)
