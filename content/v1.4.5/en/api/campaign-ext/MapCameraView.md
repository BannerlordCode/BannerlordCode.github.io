---
title: "MapCameraView"
description: "Auto-generated class reference for MapCameraView."
---
# MapCameraView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapCameraView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapCameraView.cs`

## Overview

`MapCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

**Purpose:** **Purpose:** Invoked when the activate event is raised.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.OnActivate(false, clickedPosition);
```

### Initialize
`public virtual void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.Initialize();
```

### SetCameraMode
`public virtual void SetCameraMode(CameraFollowMode cameraMode)`

**Purpose:** **Purpose:** Assigns a new value to camera mode and updates the object's internal state.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.SetCameraMode(cameraMode);
```

### ResetCamera
`public virtual void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**Purpose:** **Purpose:** Returns camera to its default or initial condition.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.ResetCamera(false, false);
```

### TeleportCameraToMainParty
`public virtual void TeleportCameraToMainParty()`

**Purpose:** **Purpose:** Executes the TeleportCameraToMainParty logic.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.TeleportCameraToMainParty();
```

### FastMoveCameraToMainParty
`public virtual void FastMoveCameraToMainParty()`

**Purpose:** **Purpose:** Executes the FastMoveCameraToMainParty logic.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.FastMoveCameraToMainParty();
```

### FastMoveCameraToPosition
`public virtual void FastMoveCameraToPosition(CampaignVec2 target, bool isInMenu)`

**Purpose:** **Purpose:** Executes the FastMoveCameraToPosition logic.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.FastMoveCameraToPosition(target, false);
```

### OnFastMoveCameraMovementStart
`public void OnFastMoveCameraMovementStart()`

**Purpose:** **Purpose:** Invoked when the fast move camera movement start event is raised.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.OnFastMoveCameraMovementStart();
```

### StopCameraMovementSoundEvents
`public void StopCameraMovementSoundEvents()`

**Purpose:** **Purpose:** Stops the camera movement sound events flow or state machine.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.StopCameraMovementSoundEvents();
```

### IsCameraLockedToPlayerParty
`public virtual bool IsCameraLockedToPlayerParty()`

**Purpose:** **Purpose:** Determines whether the this instance is in the camera locked to player party state or condition.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
var result = mapCameraView.IsCameraLockedToPlayerParty();
```

### StartCameraAnimation
`public virtual void StartCameraAnimation(CampaignVec2 targetPosition, float animationStopDuration)`

**Purpose:** **Purpose:** Starts the camera animation flow or state machine.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.StartCameraAnimation(targetPosition, 0);
```

### SiegeEngineClick
`public virtual void SiegeEngineClick(MatrixFrame siegeEngineFrame)`

**Purpose:** **Purpose:** Executes the SiegeEngineClick logic.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.SiegeEngineClick(siegeEngineFrame);
```

### OnExit
`public virtual void OnExit()`

**Purpose:** **Purpose:** Invoked when the exit event is raised.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.OnExit();
```

### OnEscapeMenuToggled
`public virtual void OnEscapeMenuToggled(bool isOpened)`

**Purpose:** **Purpose:** Invoked when the escape menu toggled event is raised.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.OnEscapeMenuToggled(false);
```

### HandleMouse
`public virtual void HandleMouse(bool rightMouseButtonPressed, float verticalCameraInput, float mouseMoveY, float dt)`

**Purpose:** **Purpose:** Executes the response logic associated with mouse.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.HandleMouse(false, 0, 0, 0);
```

### HandleLeftMouseButtonClick
`public virtual void HandleLeftMouseButtonClick(bool isMouseActive)`

**Purpose:** **Purpose:** Executes the response logic associated with left mouse button click.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.HandleLeftMouseButtonClick(false);
```

### OnSetMapSiegeOverlayState
`public virtual void OnSetMapSiegeOverlayState(bool isActive, bool isMapSiegeOverlayViewNull)`

**Purpose:** **Purpose:** Invoked when the set map siege overlay state event is raised.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.OnSetMapSiegeOverlayState(false, false);
```

### OnRefreshMapSiegeOverlayRequired
`public virtual void OnRefreshMapSiegeOverlayRequired(bool isMapSiegeOverlayViewNull)`

**Purpose:** **Purpose:** Invoked when the refresh map siege overlay required event is raised.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.OnRefreshMapSiegeOverlayRequired(false);
```

### OnBeforeTick
`public virtual void OnBeforeTick(in InputInformation inputInformation)`

**Purpose:** **Purpose:** Invoked when the before tick event is raised.

```csharp
// Obtain an instance of MapCameraView from the subsystem API first
MapCameraView mapCameraView = ...;
mapCameraView.OnBeforeTick(inputInformation);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapCameraView view = ...;
```

## See Also

- [Area Index](../)