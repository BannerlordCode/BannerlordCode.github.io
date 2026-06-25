---
title: "MainMapCameraMoveEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainMapCameraMoveEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MainMapCameraMoveEvent

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MainMapCameraMoveEvent : EventBase`
**Base:** `EventBase`
**Area:** campaign-ext

## Overview

`MainMapCameraMoveEvent` lives in `SandBox.View.Map`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Key Methods

### OnHoverMapEntity
`public void OnHoverMapEntity(MapEntityVisual mapEntityVisual)`

**Purpose:** Called when the `hover map entity` event is raised.

### RemoveMapTooltip
`public void RemoveMapTooltip()`

**Purpose:** Removes `map tooltip` from the current collection or state.

### ClearGPUMemory
`public void ClearGPUMemory()`

**Purpose:** Handles logic related to `clear g p u memory`.

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Called when the `focus change on game window` event is raised.

### RemoveMapView
`public void RemoveMapView(MapView mapView)`

**Purpose:** Removes `map view` from the current collection or state.

### AddEncounterOverlay
`public void AddEncounterOverlay(GameMenu.MenuOverlayType type)`

**Purpose:** Adds `encounter overlay` to the current collection or state.

### AddArmyOverlay
`public void AddArmyOverlay(MapScreen.MapOverlayType type)`

**Purpose:** Adds `army overlay` to the current collection or state.

### RemoveEncounterOverlay
`public void RemoveEncounterOverlay()`

**Purpose:** Removes `encounter overlay` from the current collection or state.

### RemoveArmyOverlay
`public void RemoveArmyOverlay()`

**Purpose:** Removes `army overlay` from the current collection or state.

### CloseMarriageOfferPopup
`public void CloseMarriageOfferPopup()`

**Purpose:** Handles logic related to `close marriage offer popup`.

### OnHourlyTick
`public void OnHourlyTick()`

**Purpose:** Called when the `hourly tick` event is raised.

### BeginParleyWith
`public void BeginParleyWith(PartyBase party)`

**Purpose:** Handles logic related to `begin parley with`.

### OnExit
`public void OnExit()`

**Purpose:** Called when the `exit` event is raised.

### GetCursorIntersectionPoint
`public void GetCursorIntersectionPoint(ref Vec3 clippedMouseNear, ref Vec3 clippedMouseFar, out float closestDistanceSquared, out Vec3 intersectionPoint, ref PathFaceRecord currentFace, out bool isOnland, BodyFlags excludedBodyFlags = 79617)`

**Purpose:** Gets the current value of `cursor intersection point`.

### FastMoveCameraToPosition
`public void FastMoveCameraToPosition(CampaignVec2 target)`

**Purpose:** Handles logic related to `fast move camera to position`.

### OnSiegeEngineFrameClick
`public void OnSiegeEngineFrameClick(MatrixFrame siegeFrame)`

**Purpose:** Called when the `siege engine frame click` event is raised.

### OnFadeInAndOut
`public void OnFadeInAndOut(float fadeOutTime, float blackTime, float fadeInTime)`

**Purpose:** Called when the `fade in and out` event is raised.

### SetIsMapCheatsActive
`public void SetIsMapCheatsActive(bool isMapCheatsActive)`

**Purpose:** Sets the value or state of `is map cheats active`.

### SetIsInTownManagement
`public void SetIsInTownManagement(bool isInTownManagement)`

**Purpose:** Sets the value or state of `is in town management`.

### SetIsInHideoutTroopManage
`public void SetIsInHideoutTroopManage(bool isInHideoutTroopManage)`

**Purpose:** Sets the value or state of `is in hideout troop manage`.

## Usage Example

```csharp
// First obtain a MainMapCameraMoveEvent instance from game state, then call one of its public methods
var value = new MainMapCameraMoveEvent();
value.OnHoverMapEntity(mapEntityVisual);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
