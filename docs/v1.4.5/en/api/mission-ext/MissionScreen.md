<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScreen : ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/MissionScreen.cs`

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
| `CustomCamera` | `public Camera CustomCamera { get; }` |
| `CameraBearing` | `public float CameraBearing { get; }` |
| `MaxCameraZoom` | `public float MaxCameraZoom { get; }` |
| `CameraElevation` | `public float CameraElevation { get; }` |
| `CameraResultDistanceToTarget` | `public float CameraResultDistanceToTarget { get; }` |
| `CameraViewAngle` | `public float CameraViewAngle { get; }` |
| `IsPhotoModeEnabled` | `public bool IsPhotoModeEnabled { get; }` |
| `IsConversationMission` | `public bool IsConversationMission { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `SceneView` | `public SceneView SceneView { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `IsCheatGhostMode` | `public bool IsCheatGhostMode { get; set; }` |
| `LastFollowedAgent` | `public Agent LastFollowedAgent { get; }` |
| `LastFollowedAgentVisuals` | `public IAgentVisual LastFollowedAgentVisuals { get; }` |
| `PhotoModeRequiresMouse` | `public bool PhotoModeRequiresMouse { get; }` |
| `IsFocusLost` | `public bool IsFocusLost { get; }` |
| `IsMissionTickable` | `public bool IsMissionTickable { get; }` |

## Key Methods

### OnSpectateAgentDelegate
`public delegate void OnSpectateAgentDelegate(Agent followedAgent)`

**Purpose:** Called when the `spectate agent delegate` event is raised.

### GatherCustomAgentListToSpectateDelegate
`public delegate List<Agent> GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)`

**Purpose:** Handles logic related to `gather custom agent list to spectate delegate`.

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Called when the `focus change on game window` event is raised.

### SetOrderFlagVisibility
`public void SetOrderFlagVisibility(bool value)`

**Purpose:** Sets the value or state of `order flag visibility`.

### GetFollowText
`public string GetFollowText()`

**Purpose:** Gets the current value of `follow text`.

### GetFollowPartyText
`public string GetFollowPartyText()`

**Purpose:** Gets the current value of `follow party text`.

### SetDisplayDialog
`public bool SetDisplayDialog(bool value)`

**Purpose:** Sets the value or state of `display dialog`.

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** Handles logic related to `is opening escape menu on focus change allowed`.

### IsPhotoModeAllowed
`public bool IsPhotoModeAllowed()`

**Purpose:** Handles logic related to `is photo mode allowed`.

### SetExtraCameraParameters
`public void SetExtraCameraParameters(bool newForceCanZoom, float newCameraRayCastStartingPointOffset)`

**Purpose:** Sets the value or state of `extra camera parameters`.

### SetCustomAgentListToSpectateGatherer
`public void SetCustomAgentListToSpectateGatherer(GatherCustomAgentListToSpectateDelegate gatherer)`

**Purpose:** Sets the value or state of `custom agent list to spectate gatherer`.

### UpdateFreeCamera
`public void UpdateFreeCamera(MatrixFrame frame)`

**Purpose:** Updates the state or data of `free camera`.

### OnMainAgentWeaponChanged
`public void OnMainAgentWeaponChanged()`

**Purpose:** Called when the `main agent weapon changed` event is raised.

### ToggleFixedMissionCamera
`public static string ToggleFixedMissionCamera(List<string> strings)`

**Purpose:** Handles logic related to `toggle fixed mission camera`.

### SetFixedMissionCameraActive
`public static void SetFixedMissionCameraActive(bool active)`

**Purpose:** Sets the value or state of `fixed mission camera active`.

### SetShiftCameraSpeed
`public static string SetShiftCameraSpeed(List<string> strings)`

**Purpose:** Sets the value or state of `shift camera speed`.

### SetCameraPosition
`public static string SetCameraPosition(List<string> strings)`

**Purpose:** Sets the value or state of `camera position`.

### IsViewingCharacter
`public bool IsViewingCharacter()`

**Purpose:** Handles logic related to `is viewing character`.

### GetCameraToggleProgress
`public float GetCameraToggleProgress()`

**Purpose:** Gets the current value of `camera toggle progress`.

### AddMissionView
`public void AddMissionView(MissionView missionView)`

**Purpose:** Adds `mission view` to the current collection or state.

### ScreenPointToWorldRay
`public void ScreenPointToWorldRay(Vec2 screenPoint, out Vec3 rayBegin, out Vec3 rayEnd)`

**Purpose:** Handles logic related to `screen point to world ray`.

### GetProjectedMousePositionOnGround
`public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, BodyFlags excludeBodyOwnerFlags, bool checkOccludedSurface)`

**Purpose:** Gets the current value of `projected mouse position on ground`.

### GetProjectedMousePositionOnWater
`public bool GetProjectedMousePositionOnWater(out Vec3 waterPosition)`

**Purpose:** Gets the current value of `projected mouse position on water`.

### CancelQuickPositionOrder
`public void CancelQuickPositionOrder()`

**Purpose:** Checks whether the current object can `cel quick position order`.

### MissionStartedRendering
`public bool MissionStartedRendering()`

**Purpose:** Handles logic related to `mission started rendering`.

### GetOrderFlagPosition
`public Vec3 GetOrderFlagPosition()`

**Purpose:** Gets the current value of `order flag position`.

### GetOrderFlagFrame
`public MatrixFrame GetOrderFlagFrame()`

**Purpose:** Gets the current value of `order flag frame`.

### UnregisterRadialMenuObject
`public void UnregisterRadialMenuObject(object radialMenuOwnerObject)`

**Purpose:** Handles logic related to `unregister radial menu object`.

### SetPhotoModeRequiresMouse
`public void SetPhotoModeRequiresMouse(bool isRequired)`

**Purpose:** Sets the value or state of `photo mode requires mouse`.

### SetPhotoModeEnabled
`public void SetPhotoModeEnabled(bool isEnabled)`

**Purpose:** Sets the value or state of `photo mode enabled`.

### SetConversationActive
`public void SetConversationActive(bool isActive)`

**Purpose:** Sets the value or state of `conversation active`.

### SetAsConversationMission
`public void SetAsConversationMission()`

**Purpose:** Sets the value or state of `as conversation mission`.

### SetCameraLockState
`public void SetCameraLockState(bool isLocked)`

**Purpose:** Sets the value or state of `camera lock state`.

### RegisterView
`public void RegisterView(MissionView missionView)`

**Purpose:** Handles logic related to `register view`.

### UnregisterView
`public void UnregisterView(MissionView missionView)`

**Purpose:** Handles logic related to `unregister view`.

### TeleportMainAgentToCameraFocusForCheat
`public virtual void TeleportMainAgentToCameraFocusForCheat()`

**Purpose:** Handles logic related to `teleport main agent to camera focus for cheat`.

### GetPlayerAgentVisuals
`public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer)`

**Purpose:** Gets the current value of `player agent visuals`.

### SetAgentToFollow
`public void SetAgentToFollow(Agent agent)`

**Purpose:** Sets the value or state of `agent to follow`.

### GetSpectatingData
`public SpectatorData GetSpectatingData(Vec3 currentCameraPosition)`

**Purpose:** Gets the current value of `spectating data`.

### OnEscape
`public void OnEscape()`

**Purpose:** Called when the `escape` event is raised.

## Usage Example

```csharp
var value = new MissionScreen();
value.OnSpectateAgentDelegate(followedAgent);
```

## See Also

- [Complete Class Catalog](../catalog)