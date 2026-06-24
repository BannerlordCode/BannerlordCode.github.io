<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputInformation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InputInformation

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public struct InputInformation`
**Area:** campaign-ext

## Overview

`InputInformation` lives in `SandBox.View.Map`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CameraFastMoveMultiplier` | `public virtual float CameraFastMoveMultiplier { get; set; }` |
| `CameraDistance` | `public virtual float CameraDistance { get; set; }` |
| `CameraAnimationInProgress` | `public virtual bool CameraAnimationInProgress { get; set; }` |
| `ProcessCameraInput` | `public virtual bool ProcessCameraInput { get; set; }` |
| `Camera` | `public virtual Camera Camera { get; set; }` |
| `CameraFrame` | `public virtual MatrixFrame CameraFrame { get; set; }` |

## Key Methods

### OnActivate
`public virtual void OnActivate(bool leftButtonDraggingMode, Vec3 clickedPosition)`

**Purpose:** Called when the `activate` event is raised.

### Initialize
`public virtual void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### SetCameraMode
`public virtual void SetCameraMode(CameraFollowMode cameraMode)`

**Purpose:** Sets the value or state of `camera mode`.

### ResetCamera
`public virtual void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**Purpose:** Resets `camera` to its initial state.

### TeleportCameraToMainParty
`public virtual void TeleportCameraToMainParty()`

**Purpose:** Handles logic related to `teleport camera to main party`.

### FastMoveCameraToMainParty
`public virtual void FastMoveCameraToMainParty()`

**Purpose:** Handles logic related to `fast move camera to main party`.

### FastMoveCameraToPosition
`public virtual void FastMoveCameraToPosition(CampaignVec2 target, bool isInMenu)`

**Purpose:** Handles logic related to `fast move camera to position`.

### OnFastMoveCameraMovementStart
`public void OnFastMoveCameraMovementStart()`

**Purpose:** Called when the `fast move camera movement start` event is raised.

### StopCameraMovementSoundEvents
`public void StopCameraMovementSoundEvents()`

**Purpose:** Handles logic related to `stop camera movement sound events`.

### IsCameraLockedToPlayerParty
`public virtual bool IsCameraLockedToPlayerParty()`

**Purpose:** Handles logic related to `is camera locked to player party`.

### StartCameraAnimation
`public virtual void StartCameraAnimation(CampaignVec2 targetPosition, float animationStopDuration)`

**Purpose:** Handles logic related to `start camera animation`.

### SiegeEngineClick
`public virtual void SiegeEngineClick(MatrixFrame siegeEngineFrame)`

**Purpose:** Handles logic related to `siege engine click`.

### OnExit
`public virtual void OnExit()`

**Purpose:** Called when the `exit` event is raised.

### OnEscapeMenuToggled
`public virtual void OnEscapeMenuToggled(bool isOpened)`

**Purpose:** Called when the `escape menu toggled` event is raised.

### HandleMouse
`public virtual void HandleMouse(bool rightMouseButtonPressed, float verticalCameraInput, float mouseMoveY, float dt)`

**Purpose:** Handles the `mouse` event or callback.

### HandleLeftMouseButtonClick
`public virtual void HandleLeftMouseButtonClick(bool isMouseActive)`

**Purpose:** Handles the `left mouse button click` event or callback.

### OnSetMapSiegeOverlayState
`public virtual void OnSetMapSiegeOverlayState(bool isActive, bool isMapSiegeOverlayViewNull)`

**Purpose:** Called when the `set map siege overlay state` event is raised.

### OnRefreshMapSiegeOverlayRequired
`public virtual void OnRefreshMapSiegeOverlayRequired(bool isMapSiegeOverlayViewNull)`

**Purpose:** Called when the `refresh map siege overlay required` event is raised.

### OnBeforeTick
`public virtual void OnBeforeTick(in InputInformation inputInformation)`

**Purpose:** Called when the `before tick` event is raised.

## Usage Example

```csharp
// First obtain a InputInformation instance from game state, then call one of its public methods
var value = new InputInformation();
value.OnActivate(false, clickedPosition);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
