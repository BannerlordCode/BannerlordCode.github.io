---
title: "MapCameraView"
description: "MapCameraView: a public class in SandBox.View, inheriting MapView; 44 exposed members (26 methods, 15 properties, 0 fields). Source: SandBox.View/Map/MapCameraView.cs."
---
# MapCameraView

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapCameraView : MapView`
**File:** `SandBox.View/Map/MapCameraView.cs`

## Overview

MapCameraView lives in the SandBox.View module, source file SandBox.View/Map/MapCameraView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is MapCameraView → MapView → SandboxView. It exposes 44 public/protected members: 26 methods, 15 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapCameraView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain MapCameraView → MapView → SandboxView. The surface is method-led (methods 26/44, properties 15/44), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/MapCameraView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentCameraFollowMode` | `protected virtual MapCameraView.CameraFollowMode CurrentCameraFollowMode` | property |
| `CameraFastMoveMultiplier` | `public virtual float CameraFastMoveMultiplier` | property |
| `CameraBearing` | `protected virtual float CameraBearing` | property |
| `MaximumCameraHeight` | `protected virtual float MaximumCameraHeight` | property |
| `CameraBearingVelocity` | `protected virtual float CameraBearingVelocity` | property |
| `CameraDistance` | `public virtual float CameraDistance` | property |
| `TargetCameraDistance` | `protected virtual float TargetCameraDistance` | property |
| `AdditionalElevation` | `protected virtual float AdditionalElevation` | property |
| `CameraAnimationInProgress` | `public virtual bool CameraAnimationInProgress` | property |
| `ProcessCameraInput` | `public virtual bool ProcessCameraInput` | property |
| `Camera` | `public virtual Camera Camera` | property |
| `CameraFrame` | `public virtual MatrixFrame CameraFrame` | property |
| `IdealCameraTarget` | `protected virtual Vec3 IdealCameraTarget` | property |
| `MapCameraView` | `public MapCameraView()` | constructor |
| `OnActivate` | `public virtual void OnActivate(bool leftButtonDraggingMode, Vec3 clickedPosition)` | method |
| `Initialize` | `public virtual void Initialize()` | method |
| `OnFinalize` | `protected internal override void OnFinalize()` | method |
| `SetCameraMode` | `public virtual void SetCameraMode(MapCameraView.CameraFollowMode cameraMode)` | method |
| `ResetCamera` | `public virtual void ResetCamera(bool resetDistance, bool teleportToMainParty)` | method |
| `TeleportCameraToMainParty` | `public virtual void TeleportCameraToMainParty()` | method |
| `FastMoveCameraToMainParty` | `public virtual void FastMoveCameraToMainParty()` | method |
| `FastMoveCameraToPosition` | `public virtual void FastMoveCameraToPosition(CampaignVec2 target, bool isInMenu)` | method |
| `OnFastMoveCameraMovementStart` | `public void OnFastMoveCameraMovementStart()` | method |
| `StopCameraMovementSoundEvents` | `public void StopCameraMovementSoundEvents()` | method |
| `IsCameraLockedToPlayerParty` | `public virtual bool IsCameraLockedToPlayerParty()` | method |
| `StartCameraAnimation` | `public virtual void StartCameraAnimation(CampaignVec2 targetPosition, float animationStopDuration)` | method |
| `SiegeEngineClick` | `public virtual void SiegeEngineClick(MatrixFrame siegeEngineFrame)` | method |
| `OnExit` | `public virtual void OnExit()` | method |
| `OnEscapeMenuToggled` | `public virtual void OnEscapeMenuToggled(bool isOpened)` | method |
| `HandleMouse` | `public virtual void HandleMouse(bool rightMouseButtonPressed, float verticalCameraInput, float mouseMoveY, float dt)` | method |
| `HandleLeftMouseButtonClick` | `public virtual void HandleLeftMouseButtonClick(bool isMouseActive)` | method |
| `OnSetMapSiegeOverlayState` | `public virtual void OnSetMapSiegeOverlayState(bool isActive, bool isMapSiegeOverlayViewNull)` | method |
| `OnRefreshMapSiegeOverlayRequired` | `public virtual void OnRefreshMapSiegeOverlayRequired(bool isMapSiegeOverlayViewNull)` | method |
| `OnBeforeTick` | `public virtual void OnBeforeTick(in MapCameraView.InputInformation inputInformation)` | method |
| `UpdateMapCamera` | `protected virtual void UpdateMapCamera(bool _leftButtonDraggingMode, Vec3 _clickedPosition)` | method |
| `GetCameraTargetForPosition` | `protected virtual Vec3 GetCameraTargetForPosition(CampaignVec2 targetPosition)` | method |
| `GetCameraTargetForParty` | `protected virtual Vec3 GetCameraTargetForParty(PartyBase party)` | method |
| `GetMapCameraInput` | `protected virtual bool GetMapCameraInput(MapCameraView.InputInformation inputInformation)` | method |
| `ComputeMapCamera` | `protected virtual MatrixFrame ComputeMapCamera(ref Vec3 cameraTarget, float cameraBearing, float cameraElevation, float cameraDistance, ref CampaignVec2 lastUsedIdealCameraTarget)` | method |
| `CalculateCameraElevation` | `protected virtual float CalculateCameraElevation(float cameraDistance)` | method |
| `CameraFollowMode` | `public enum CameraFollowMode` | property |
| `InputInformation` | `public struct InputInformation` | property |
| `CameraFollowMode` | `public enum CameraFollowMode` | nested type |
| `InputInformation` | `public struct InputInformation` | nested type |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapView](../MapView)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace BlockadePositionScript](../BlockadePositionScript)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
