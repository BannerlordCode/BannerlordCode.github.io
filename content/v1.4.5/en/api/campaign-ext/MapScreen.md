---
title: "MapScreen"
description: "Auto-generated class reference for MapScreen."
---
# MapScreen

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapScreen : ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapScreen.cs`

## Overview

`MapScreen` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameEntity` | `public GameEntity GameEntity { get; set; }` |
| `Decal` | `public Decal Decal { get; set; }` |
| `RotationChanged` | `public bool RotationChanged { get; }` |
| `PositionChanged` | `public bool PositionChanged { get; }` |
| `Instance` | `public static MapScreen Instance { get; }` |
| `NavigationHandler` | `public INavigationHandler NavigationHandler { get; set; }` |
| `CurrentVisualOfTooltip` | `public MapEntityVisual CurrentVisualOfTooltip { get; }` |
| `PrefabEntityCache` | `public CampaignMapSiegePrefabEntityCache PrefabEntityCache { get; }` |
| `EncyclopediaScreenManager` | `public MapEncyclopediaView EncyclopediaScreenManager { get; }` |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened { get; }` |
| `MapNotificationView` | `public MapNotificationView MapNotificationView { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `MapCameraView` | `public MapCameraView MapCameraView { get; }` |
| `MapSceneCursorActive` | `public bool MapSceneCursorActive { get; set; }` |
| `ContourMaskEntity` | `public GameEntity ContourMaskEntity { get; }` |
| `MapCursor` | `public MapCursor MapCursor { get; }` |
| `InactiveLightMeshes` | `public List<Mesh> InactiveLightMeshes { get; }` |
| `ActiveLightMeshes` | `public List<Mesh> ActiveLightMeshes { get; }` |
| `MapScene` | `public Scene MapScene { get; }` |
| `MapState` | `public MapState MapState { get; }` |
| `IsInBattleSimulation` | `public bool IsInBattleSimulation { get; }` |
| `IsInTownManagement` | `public bool IsInTownManagement { get; }` |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage { get; }` |
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; }` |
| `IsInRecruitment` | `public bool IsInRecruitment { get; }` |
| `IsBarExtended` | `public bool IsBarExtended { get; }` |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions { get; }` |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive { get; }` |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive { get; }` |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive { get; }` |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive { get; }` |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled { get; }` |
| `IsSoundOn` | `public bool IsSoundOn { get; }` |

## Key Methods

### Create
`public static DecalEntity Create(Scene scene, string material, string entityName = null)`

**Purpose:** **Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
MapScreen.Create(scene, "example", "example");
```

### OnHoverMapEntity
`public void OnHoverMapEntity(MapEntityVisual mapEntityVisual)`

**Purpose:** **Purpose:** Invoked when the hover map entity event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnHoverMapEntity(mapEntityVisual);
```

### RemoveMapTooltip
`public void RemoveMapTooltip()`

**Purpose:** **Purpose:** Removes map tooltip from the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RemoveMapTooltip();
```

### ClearGPUMemory
`public void ClearGPUMemory()`

**Purpose:** **Purpose:** Removes all g p u memory from the this instance.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.ClearGPUMemory();
```

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** **Purpose:** Invoked when the focus change on game window event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnFocusChangeOnGameWindow(false);
```

### RemoveMapView
`public void RemoveMapView(MapView mapView)`

**Purpose:** **Purpose:** Removes map view from the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RemoveMapView(mapView);
```

### AddEncounterOverlay
`public void AddEncounterOverlay(MenuOverlayType type)`

**Purpose:** **Purpose:** Adds encounter overlay to the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.AddEncounterOverlay(type);
```

### AddArmyOverlay
`public void AddArmyOverlay(MapOverlayType type)`

**Purpose:** **Purpose:** Adds army overlay to the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.AddArmyOverlay(type);
```

### RemoveEncounterOverlay
`public void RemoveEncounterOverlay()`

**Purpose:** **Purpose:** Removes encounter overlay from the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RemoveEncounterOverlay();
```

### RemoveArmyOverlay
`public void RemoveArmyOverlay()`

**Purpose:** **Purpose:** Removes army overlay from the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RemoveArmyOverlay();
```

### CloseMarriageOfferPopup
`public void CloseMarriageOfferPopup()`

**Purpose:** **Purpose:** Closes the resource or UI associated with marriage offer popup.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.CloseMarriageOfferPopup();
```

### OnHourlyTick
`public void OnHourlyTick()`

**Purpose:** **Purpose:** Invoked when the hourly tick event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnHourlyTick();
```

### BeginParleyWith
`public void BeginParleyWith(PartyBase party)`

**Purpose:** **Purpose:** Executes the BeginParleyWith logic.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.BeginParleyWith(party);
```

### OnExit
`public void OnExit()`

**Purpose:** **Purpose:** Invoked when the exit event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnExit();
```

### GetCursorIntersectionPoint
`public void GetCursorIntersectionPoint(ref Vec3 clippedMouseNear, ref Vec3 clippedMouseFar, out float closestDistanceSquared, out Vec3 intersectionPoint, ref PathFaceRecord currentFace, out bool isOnland, BodyFlags excludedBodyFlags = (BodyFlags)79617u)`

**Purpose:** **Purpose:** Reads and returns the cursor intersection point value held by the this instance.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.GetCursorIntersectionPoint(clippedMouseNear, clippedMouseFar, closestDistanceSquared, intersectionPoint, currentFace, isOnland, (BodyFlags)79617u);
```

### FastMoveCameraToPosition
`public void FastMoveCameraToPosition(CampaignVec2 target)`

**Purpose:** **Purpose:** Executes the FastMoveCameraToPosition logic.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.FastMoveCameraToPosition(target);
```

### OnSiegeEngineFrameClick
`public void OnSiegeEngineFrameClick(MatrixFrame siegeFrame)`

**Purpose:** **Purpose:** Invoked when the siege engine frame click event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnSiegeEngineFrameClick(siegeFrame);
```

### SetIsMapCheatsActive
`public void SetIsMapCheatsActive(bool isMapCheatsActive)`

**Purpose:** **Purpose:** Assigns a new value to is map cheats active and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsMapCheatsActive(false);
```

### SetIsInTownManagement
`public void SetIsInTownManagement(bool isInTownManagement)`

**Purpose:** **Purpose:** Assigns a new value to is in town management and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInTownManagement(false);
```

### SetIsInHideoutTroopManage
`public void SetIsInHideoutTroopManage(bool isInHideoutTroopManage)`

**Purpose:** **Purpose:** Assigns a new value to is in hideout troop manage and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInHideoutTroopManage(false);
```

### SetIsInArmyManagement
`public void SetIsInArmyManagement(bool isInArmyManagement)`

**Purpose:** **Purpose:** Assigns a new value to is in army management and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInArmyManagement(false);
```

### SetIsOverlayContextMenuActive
`public void SetIsOverlayContextMenuActive(bool isOverlayContextMenuEnabled)`

**Purpose:** **Purpose:** Assigns a new value to is overlay context menu active and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsOverlayContextMenuActive(false);
```

### SetIsInRecruitment
`public void SetIsInRecruitment(bool isInRecruitment)`

**Purpose:** **Purpose:** Assigns a new value to is in recruitment and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInRecruitment(false);
```

### SetIsBarExtended
`public void SetIsBarExtended(bool isBarExtended)`

**Purpose:** **Purpose:** Assigns a new value to is bar extended and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsBarExtended(false);
```

### SetIsMarriageOfferPopupActive
`public void SetIsMarriageOfferPopupActive(bool isMarriageOfferPopupActive)`

**Purpose:** **Purpose:** Assigns a new value to is marriage offer popup active and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsMarriageOfferPopupActive(false);
```

### SetIsInCampaignOptions
`public void SetIsInCampaignOptions(bool isInCampaignOptions)`

**Purpose:** **Purpose:** Assigns a new value to is in campaign options and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInCampaignOptions(false);
```

### SetIsMapIncidentActive
`public void SetIsMapIncidentActive(bool isMapIncidentActive)`

**Purpose:** **Purpose:** Assigns a new value to is map incident active and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsMapIncidentActive(false);
```

### SetMouseVisible
`public void SetMouseVisible(bool value)`

**Purpose:** **Purpose:** Assigns a new value to mouse visible and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetMouseVisible(false);
```

### SetIsHeirSelectionPopupActive
`public void SetIsHeirSelectionPopupActive(bool isHeirSelectionPopupActive)`

**Purpose:** **Purpose:** Assigns a new value to is heir selection popup active and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsHeirSelectionPopupActive(false);
```

### GetMouseVisible
`public bool GetMouseVisible()`

**Purpose:** **Purpose:** Reads and returns the mouse visible value held by the this instance.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
var result = mapScreen.GetMouseVisible();
```

### RestartAmbientSounds
`public void RestartAmbientSounds()`

**Purpose:** **Purpose:** Executes the RestartAmbientSounds logic.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RestartAmbientSounds();
```

### PauseAmbientSounds
`public void PauseAmbientSounds()`

**Purpose:** **Purpose:** Executes the PauseAmbientSounds logic.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.PauseAmbientSounds();
```

### CreatePeriodicUIEvent
`public MBCampaignEvent CreatePeriodicUIEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

**Purpose:** **Purpose:** Constructs a new periodic u i event entity and returns it to the caller.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
var result = mapScreen.CreatePeriodicUIEvent(triggerPeriod, initialWait);
```

### DeletePeriodicUIEvent
`public void DeletePeriodicUIEvent(MBCampaignEvent campaignEvent)`

**Purpose:** **Purpose:** Executes the DeletePeriodicUIEvent logic.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.DeletePeriodicUIEvent(campaignEvent);
```

### OpenOptions
`public void OpenOptions()`

**Purpose:** **Purpose:** Opens the resource or UI associated with options.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenOptions();
```

### OpenEncyclopedia
`public void OpenEncyclopedia()`

**Purpose:** **Purpose:** Opens the resource or UI associated with encyclopedia.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenEncyclopedia();
```

### OpenSaveLoad
`public void OpenSaveLoad(bool isSaving)`

**Purpose:** **Purpose:** Opens the resource or UI associated with save load.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenSaveLoad(false);
```

### CloseEscapeMenu
`public void CloseEscapeMenu()`

**Purpose:** **Purpose:** Closes the resource or UI associated with escape menu.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.CloseEscapeMenu();
```

### OpenEscapeMenu
`public void OpenEscapeMenu()`

**Purpose:** **Purpose:** Opens the resource or UI associated with escape menu.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenEscapeMenu();
```

### CloseGameplayCheats
`public void CloseGameplayCheats()`

**Purpose:** **Purpose:** Closes the resource or UI associated with gameplay cheats.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.CloseGameplayCheats();
```

### CloseCampaignOptions
`public void CloseCampaignOptions()`

**Purpose:** **Purpose:** Closes the resource or UI associated with campaign options.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.CloseCampaignOptions();
```

### OpenInventory
`public void OpenInventory()`

**Purpose:** **Purpose:** Opens the resource or UI associated with inventory.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenInventory();
```

### OpenFacegenScreenAux
`public void OpenFacegenScreenAux()`

**Purpose:** **Purpose:** Opens the resource or UI associated with facegen screen aux.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenFacegenScreenAux();
```

### IsCameraLockedToPlayerParty
`public bool IsCameraLockedToPlayerParty()`

**Purpose:** **Purpose:** Determines whether the this instance is in the camera locked to player party state or condition.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
var result = mapScreen.IsCameraLockedToPlayerParty();
```

### FastMoveCameraToMainParty
`public void FastMoveCameraToMainParty()`

**Purpose:** **Purpose:** Executes the FastMoveCameraToMainParty logic.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.FastMoveCameraToMainParty();
```

### ResetCamera
`public void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**Purpose:** **Purpose:** Returns camera to its default or initial condition.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.ResetCamera(false, false);
```

### TeleportCameraToMainParty
`public void TeleportCameraToMainParty()`

**Purpose:** **Purpose:** Executes the TeleportCameraToMainParty logic.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.TeleportCameraToMainParty();
```

## Usage Example

```csharp
MapScreen.Create(scene, "example", "example");
```

## See Also

- [Area Index](../)