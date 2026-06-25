---
title: "MissionScreen"
description: "Auto-generated class reference for MissionScreen."
---
# MissionScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScreen : ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs`

## Overview

`MissionScreen` lives in `TaleWorlds.MountAndBlade.View.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LockCameraMovement` | `public bool LockCameraMovement { get; }` |
| `OrderFlag` | `public OrderFlag OrderFlag { get; }` |
| `CombatCamera` | `public Camera CombatCamera { get; }` |
| `CustomCamera` | `public Camera CustomCamera { get; set; }` |
| `CameraBearing` | `public float CameraBearing { get; }` |
| `MaxCameraZoom` | `public float MaxCameraZoom { get; }` |
| `CameraElevation` | `public float CameraElevation { get; }` |
| `CameraResultDistanceToTarget` | `public float CameraResultDistanceToTarget { get; }` |
| `CameraViewAngle` | `public float CameraViewAngle { get; }` |
| `IsPhotoModeEnabled` | `public bool IsPhotoModeEnabled { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; }` |
| `IsDeploymentActive` | `public bool IsDeploymentActive { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `SceneView` | `public SceneView SceneView { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `IsCheatGhostMode` | `public bool IsCheatGhostMode { get; set; }` |
| `IsRadialMenuActive` | `public bool IsRadialMenuActive { get; }` |
| `InputManager` | `public IInputContext InputManager { get; }` |
| `LastFollowedAgent` | `public Agent LastFollowedAgent { get; }` |
| `LastFollowedAgentVisuals` | `public IAgentVisual LastFollowedAgentVisuals { get; set; }` |
| `MouseVisible` | `public override bool MouseVisible { get; }` |
| `IsMissionTickable` | `public bool IsMissionTickable { get; }` |
| `PhotoModeRequiresMouse` | `public bool PhotoModeRequiresMouse { get; }` |
| `IsFocusLost` | `public bool IsFocusLost { get; }` |

## Key Methods

### SetOrderFlagVisibility
`public void SetOrderFlagVisibility(bool value)`

**Purpose:** Assigns a new value to order flag visibility and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.SetOrderFlagVisibility(false);
```

### GetFollowText
`public string GetFollowText()`

**Purpose:** Reads and returns the follow text value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetFollowText();
```

### GetFollowPartyText
`public string GetFollowPartyText()`

**Purpose:** Reads and returns the follow party text value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetFollowPartyText();
```

### SetDisplayDialog
`public bool SetDisplayDialog(bool value)`

**Purpose:** Assigns a new value to display dialog and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.SetDisplayDialog(false);
```

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Invoked when the focus change on game window event is raised.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.OnFocusChangeOnGameWindow(false);
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed state or condition.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### SetExtraCameraParameters
`public void SetExtraCameraParameters(bool newForceCanZoom, float newCameraRayCastStartingPointOffset)`

**Purpose:** Assigns a new value to extra camera parameters and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.SetExtraCameraParameters(false, 0);
```

### SetCustomAgentListToSpectateGatherer
`public void SetCustomAgentListToSpectateGatherer(MissionScreen.GatherCustomAgentListToSpectateDelegate gatherer)`

**Purpose:** Assigns a new value to custom agent list to spectate gatherer and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.SetCustomAgentListToSpectateGatherer(gatherer);
```

### UpdateFreeCamera
`public void UpdateFreeCamera(MatrixFrame frame)`

**Purpose:** Recalculates and stores the latest representation of free camera.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.UpdateFreeCamera(frame);
```

### OnMainAgentWeaponChanged
`public void OnMainAgentWeaponChanged()`

**Purpose:** Invoked when the main agent weapon changed event is raised.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.OnMainAgentWeaponChanged();
```

### ToggleFixedMissionCamera
`public static string ToggleFixedMissionCamera(List<string> strings)`

**Purpose:** Executes the ToggleFixedMissionCamera logic.

```csharp
// Static call; no instance required
MissionScreen.ToggleFixedMissionCamera(strings);
```

### SetFixedMissionCameraActive
`public static void SetFixedMissionCameraActive(bool active)`

**Purpose:** Assigns a new value to fixed mission camera active and updates the object's internal state.

```csharp
// Static call; no instance required
MissionScreen.SetFixedMissionCameraActive(false);
```

### SetShiftCameraSpeed
`public static string SetShiftCameraSpeed(List<string> strings)`

**Purpose:** Assigns a new value to shift camera speed and updates the object's internal state.

```csharp
// Static call; no instance required
MissionScreen.SetShiftCameraSpeed(strings);
```

### SetCameraPosition
`public static string SetCameraPosition(List<string> strings)`

**Purpose:** Assigns a new value to camera position and updates the object's internal state.

```csharp
// Static call; no instance required
MissionScreen.SetCameraPosition(strings);
```

### IsViewingCharacter
`public bool IsViewingCharacter()`

**Purpose:** Determines whether the this instance is in the viewing character state or condition.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.IsViewingCharacter();
```

### GetCameraToggleProgress
`public float GetCameraToggleProgress()`

**Purpose:** Reads and returns the camera toggle progress value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetCameraToggleProgress();
```

### AddMissionView
`public void AddMissionView(MissionView missionView)`

**Purpose:** Adds mission view to the current collection or state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.AddMissionView(missionView);
```

### ScreenPointToWorldRay
`public void ScreenPointToWorldRay(Vec2 screenPoint, out Vec3 rayBegin, out Vec3 rayEnd)`

**Purpose:** Executes the ScreenPointToWorldRay logic.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.ScreenPointToWorldRay(screenPoint, rayBegin, rayEnd);
```

### GetProjectedMousePositionOnGround
`public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**Purpose:** Reads and returns the projected mouse position on ground value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetProjectedMousePositionOnGround(groundPosition, groundNormal, excludeBodyOwnerFlags, false);
```

### GetProjectedMousePositionOnWater
`public bool GetProjectedMousePositionOnWater(out Vec3 waterPosition)`

**Purpose:** Reads and returns the projected mouse position on water value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetProjectedMousePositionOnWater(waterPosition);
```

### CancelQuickPositionOrder
`public void CancelQuickPositionOrder()`

**Purpose:** Checks whether the this instance meets the preconditions for cel quick position order.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.CancelQuickPositionOrder();
```

### MissionStartedRendering
`public bool MissionStartedRendering()`

**Purpose:** Executes the MissionStartedRendering logic.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.MissionStartedRendering();
```

### GetOrderFlagPosition
`public Vec3 GetOrderFlagPosition()`

**Purpose:** Reads and returns the order flag position value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetOrderFlagPosition();
```

### GetOrderFlagFrame
`public MatrixFrame GetOrderFlagFrame()`

**Purpose:** Reads and returns the order flag frame value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetOrderFlagFrame();
```

### UnregisterRadialMenuObject
`public void UnregisterRadialMenuObject(object radialMenuOwnerObject)`

**Purpose:** Unregisters radial menu object from the current system.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.UnregisterRadialMenuObject(radialMenuOwnerObject);
```

### SetPhotoModeRequiresMouse
`public void SetPhotoModeRequiresMouse(bool isRequired)`

**Purpose:** Assigns a new value to photo mode requires mouse and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.SetPhotoModeRequiresMouse(false);
```

### SetPhotoModeEnabled
`public void SetPhotoModeEnabled(bool isEnabled)`

**Purpose:** Assigns a new value to photo mode enabled and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.SetPhotoModeEnabled(false);
```

### SetConversationActive
`public void SetConversationActive(bool isActive)`

**Purpose:** Assigns a new value to conversation active and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.SetConversationActive(false);
```

### SetCameraLockState
`public void SetCameraLockState(bool isLocked)`

**Purpose:** Assigns a new value to camera lock state and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.SetCameraLockState(false);
```

### RegisterView
`public void RegisterView(MissionView missionView)`

**Purpose:** Registers view with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.RegisterView(missionView);
```

### UnregisterView
`public void UnregisterView(MissionView missionView)`

**Purpose:** Unregisters view from the current system.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.UnregisterView(missionView);
```

### TeleportMainAgentToCameraFocusForCheat
`public virtual void TeleportMainAgentToCameraFocusForCheat()`

**Purpose:** Executes the TeleportMainAgentToCameraFocusForCheat logic.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.TeleportMainAgentToCameraFocusForCheat();
```

### GetPlayerAgentVisuals
`public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer)`

**Purpose:** Reads and returns the player agent visuals value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetPlayerAgentVisuals(lobbyPeer);
```

### SetAgentToFollow
`public void SetAgentToFollow(Agent agent)`

**Purpose:** Assigns a new value to agent to follow and updates the object's internal state.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.SetAgentToFollow(agent);
```

### GetSpectatingData
`public Mission.SpectatorData GetSpectatingData(Vec3 currentCameraPosition)`

**Purpose:** Reads and returns the spectating data value held by the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GetSpectatingData(currentCameraPosition);
```

### OnEscape
`public void OnEscape()`

**Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.OnEscape();
```

### OnSpectateAgentDelegate
`public delegate void OnSpectateAgentDelegate(Agent followedAgent)`

**Purpose:** Invoked when the spectate agent delegate event is raised.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
missionScreen.OnSpectateAgentDelegate(followedAgent);
```

### GatherCustomAgentListToSpectateDelegate
`public delegate List<Agent> GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)`

**Purpose:** Collects or aggregates custom agent list to spectate delegate into the this instance.

```csharp
// Obtain an instance of MissionScreen from the subsystem API first
MissionScreen missionScreen = ...;
var result = missionScreen.GatherCustomAgentListToSpectateDelegate(forcedAgentToInclude);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionScreen missionScreen = ...;
missionScreen.SetOrderFlagVisibility(false);
```

## See Also

- [Area Index](../)