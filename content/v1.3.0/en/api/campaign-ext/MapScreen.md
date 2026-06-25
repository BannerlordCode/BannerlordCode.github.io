---
title: "MapScreen"
description: "Auto-generated class reference for MapScreen."
---
# MapScreen

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapScreen : ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `SandBox.View/Map/MapScreen.cs`

## Overview

`MapScreen` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Input` | `public IInputContext Input { get; }` |
| `Instance` | `public static MapScreen Instance { get; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `NavigationHandler` | `public INavigationHandler NavigationHandler { get; set; }` |
| `CurrentVisualOfTooltip` | `public MapEntityVisual CurrentVisualOfTooltip { get; }` |
| `PrefabEntityCache` | `public CampaignMapSiegePrefabEntityCache PrefabEntityCache { get; }` |
| `EncyclopediaScreenManager` | `public MapEncyclopediaView EncyclopediaScreenManager { get; }` |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened { get; }` |
| `MapNotificationView` | `public MapNotificationView MapNotificationView { get; }` |
| `BannerTexturedMaterialCache` | `public Dictionary<Tuple<Material, Banner>, Material> BannerTexturedMaterialCache { get; }` |
| `IsInMenu` | `public bool IsInMenu { get; }` |
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
| `VisualsOfEntities` | `public static Dictionary<UIntPtr, MapEntityVisual> VisualsOfEntities { get; }` |
| `GameEntity` | `public GameEntity GameEntity { get; set; }` |
| `Decal` | `public Decal Decal { get; set; }` |
| `RotationChanged` | `public bool RotationChanged { get; }` |
| `PositionChanged` | `public bool PositionChanged { get; }` |

## Key Methods

### OnHoverMapEntity
`public void OnHoverMapEntity(MapEntityVisual mapEntityVisual)`

**Purpose:** Invoked when the `hover map entity` event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnHoverMapEntity(mapEntityVisual);
```

### RemoveMapTooltip
`public void RemoveMapTooltip()`

**Purpose:** Removes `map tooltip` from the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RemoveMapTooltip();
```

### ClearGPUMemory
`public void ClearGPUMemory()`

**Purpose:** Removes all `g p u memory` from the current object.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.ClearGPUMemory();
```

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Invoked when the `focus change on game window` event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnFocusChangeOnGameWindow(false);
```

### RemoveMapView
`public void RemoveMapView(MapView mapView)`

**Purpose:** Removes `map view` from the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RemoveMapView(mapView);
```

### AddEncounterOverlay
`public void AddEncounterOverlay(GameMenu.MenuOverlayType type)`

**Purpose:** Adds `encounter overlay` to the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.AddEncounterOverlay(type);
```

### AddArmyOverlay
`public void AddArmyOverlay(MapScreen.MapOverlayType type)`

**Purpose:** Adds `army overlay` to the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.AddArmyOverlay(type);
```

### RemoveEncounterOverlay
`public void RemoveEncounterOverlay()`

**Purpose:** Removes `encounter overlay` from the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RemoveEncounterOverlay();
```

### RemoveArmyOverlay
`public void RemoveArmyOverlay()`

**Purpose:** Removes `army overlay` from the current collection or state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RemoveArmyOverlay();
```

### CloseMarriageOfferPopup
`public void CloseMarriageOfferPopup()`

**Purpose:** Closes the resource or UI associated with `marriage offer popup`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.CloseMarriageOfferPopup();
```

### OnHourlyTick
`public void OnHourlyTick()`

**Purpose:** Invoked when the `hourly tick` event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnHourlyTick();
```

### BeginParleyWith
`public void BeginParleyWith(PartyBase party)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.BeginParleyWith(party);
```

### OnExit
`public void OnExit()`

**Purpose:** Invoked when the `exit` event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnExit();
```

### GetCursorIntersectionPoint
`public void GetCursorIntersectionPoint(ref Vec3 clippedMouseNear, ref Vec3 clippedMouseFar, out float closestDistanceSquared, out Vec3 intersectionPoint, ref PathFaceRecord currentFace, out bool isOnland, BodyFlags excludedBodyFlags = 79617)`

**Purpose:** Reads and returns the `cursor intersection point` value held by the current object.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.GetCursorIntersectionPoint(clippedMouseNear, clippedMouseFar, closestDistanceSquared, intersectionPoint, currentFace, isOnland, 79617);
```

### FastMoveCameraToPosition
`public void FastMoveCameraToPosition(CampaignVec2 target)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.FastMoveCameraToPosition(target);
```

### OnSiegeEngineFrameClick
`public void OnSiegeEngineFrameClick(MatrixFrame siegeFrame)`

**Purpose:** Invoked when the `siege engine frame click` event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnSiegeEngineFrameClick(siegeFrame);
```

### OnFadeInAndOut
`public void OnFadeInAndOut(float fadeOutTime, float blackTime, float fadeInTime)`

**Purpose:** Invoked when the `fade in and out` event is raised.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OnFadeInAndOut(0, 0, 0);
```

### SetIsMapCheatsActive
`public void SetIsMapCheatsActive(bool isMapCheatsActive)`

**Purpose:** Assigns a new value to `is map cheats active` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsMapCheatsActive(false);
```

### SetIsInTownManagement
`public void SetIsInTownManagement(bool isInTownManagement)`

**Purpose:** Assigns a new value to `is in town management` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInTownManagement(false);
```

### SetIsInHideoutTroopManage
`public void SetIsInHideoutTroopManage(bool isInHideoutTroopManage)`

**Purpose:** Assigns a new value to `is in hideout troop manage` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInHideoutTroopManage(false);
```

### SetIsInArmyManagement
`public void SetIsInArmyManagement(bool isInArmyManagement)`

**Purpose:** Assigns a new value to `is in army management` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInArmyManagement(false);
```

### SetIsOverlayContextMenuActive
`public void SetIsOverlayContextMenuActive(bool isOverlayContextMenuEnabled)`

**Purpose:** Assigns a new value to `is overlay context menu active` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsOverlayContextMenuActive(false);
```

### SetIsInRecruitment
`public void SetIsInRecruitment(bool isInRecruitment)`

**Purpose:** Assigns a new value to `is in recruitment` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInRecruitment(false);
```

### SetIsBarExtended
`public void SetIsBarExtended(bool isBarExtended)`

**Purpose:** Assigns a new value to `is bar extended` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsBarExtended(false);
```

### SetIsMarriageOfferPopupActive
`public void SetIsMarriageOfferPopupActive(bool isMarriageOfferPopupActive)`

**Purpose:** Assigns a new value to `is marriage offer popup active` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsMarriageOfferPopupActive(false);
```

### SetIsInCampaignOptions
`public void SetIsInCampaignOptions(bool isInCampaignOptions)`

**Purpose:** Assigns a new value to `is in campaign options` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsInCampaignOptions(false);
```

### SetIsMapIncidentActive
`public void SetIsMapIncidentActive(bool isMapIncidentActive)`

**Purpose:** Assigns a new value to `is map incident active` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsMapIncidentActive(false);
```

### SetMouseVisible
`public void SetMouseVisible(bool value)`

**Purpose:** Assigns a new value to `mouse visible` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetMouseVisible(false);
```

### SetIsHeirSelectionPopupActive
`public void SetIsHeirSelectionPopupActive(bool isHeirSelectionPopupActive)`

**Purpose:** Assigns a new value to `is heir selection popup active` and updates the object's internal state.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.SetIsHeirSelectionPopupActive(false);
```

### GetMouseVisible
`public bool GetMouseVisible()`

**Purpose:** Reads and returns the `mouse visible` value held by the current object.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
var result = mapScreen.GetMouseVisible();
```

### RestartAmbientSounds
`public void RestartAmbientSounds()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.RestartAmbientSounds();
```

### PauseAmbientSounds
`public void PauseAmbientSounds()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.PauseAmbientSounds();
```

### CreatePeriodicUIEvent
`public MBCampaignEvent CreatePeriodicUIEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

**Purpose:** Constructs a new `periodic u i event` entity and returns it to the caller.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
var result = mapScreen.CreatePeriodicUIEvent(triggerPeriod, initialWait);
```

### DeletePeriodicUIEvent
`public void DeletePeriodicUIEvent(MBCampaignEvent campaignEvent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.DeletePeriodicUIEvent(campaignEvent);
```

### OpenOptions
`public void OpenOptions()`

**Purpose:** Opens the resource or UI associated with `options`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenOptions();
```

### OpenEncyclopedia
`public void OpenEncyclopedia()`

**Purpose:** Opens the resource or UI associated with `encyclopedia`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenEncyclopedia();
```

### OpenSaveLoad
`public void OpenSaveLoad(bool isSaving)`

**Purpose:** Opens the resource or UI associated with `save load`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenSaveLoad(false);
```

### CloseEscapeMenu
`public void CloseEscapeMenu()`

**Purpose:** Closes the resource or UI associated with `escape menu`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.CloseEscapeMenu();
```

### OpenEscapeMenu
`public void OpenEscapeMenu()`

**Purpose:** Opens the resource or UI associated with `escape menu`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenEscapeMenu();
```

### CloseGameplayCheats
`public void CloseGameplayCheats()`

**Purpose:** Closes the resource or UI associated with `gameplay cheats`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.CloseGameplayCheats();
```

### CloseCampaignOptions
`public void CloseCampaignOptions()`

**Purpose:** Closes the resource or UI associated with `campaign options`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.CloseCampaignOptions();
```

### OpenInventory
`public void OpenInventory()`

**Purpose:** Opens the resource or UI associated with `inventory`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenInventory();
```

### OpenFacegenScreenAux
`public void OpenFacegenScreenAux()`

**Purpose:** Opens the resource or UI associated with `facegen screen aux`.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.OpenFacegenScreenAux();
```

### IsCameraLockedToPlayerParty
`public bool IsCameraLockedToPlayerParty()`

**Purpose:** Determines whether the current object is in the `camera locked to player party` state or condition.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
var result = mapScreen.IsCameraLockedToPlayerParty();
```

### FastMoveCameraToMainParty
`public void FastMoveCameraToMainParty()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.FastMoveCameraToMainParty();
```

### ResetCamera
`public void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**Purpose:** Returns `camera` to its default or initial condition.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.ResetCamera(false, false);
```

### TeleportCameraToMainParty
`public void TeleportCameraToMainParty()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.TeleportCameraToMainParty();
```

### Create
`public static MapScreen.DecalEntity Create(Scene scene, string material, string entityName = null)`

**Purpose:** Creates a new instance or related entity for the current object.

```csharp
// Static call; no instance required
MapScreen.Create(scene, "example", "example");
```

### ApplyHandlerChangesTo
`public void ApplyHandlerChangesTo(IConversationStateHandler newHandler)`

**Purpose:** Applies the effect of `handler changes to` to the current object.

```csharp
// Obtain an instance of MapScreen from the subsystem API first
MapScreen mapScreen = ...;
mapScreen.ApplyHandlerChangesTo(newHandler);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapScreen mapScreen = ...;
mapScreen.OnHoverMapEntity(mapEntityVisual);
```

## See Also

- [Area Index](../)