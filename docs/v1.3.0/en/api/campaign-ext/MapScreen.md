<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

### SetIsInArmyManagement
`public void SetIsInArmyManagement(bool isInArmyManagement)`

**Purpose:** Sets the value or state of `is in army management`.

### SetIsOverlayContextMenuActive
`public void SetIsOverlayContextMenuActive(bool isOverlayContextMenuEnabled)`

**Purpose:** Sets the value or state of `is overlay context menu active`.

### SetIsInRecruitment
`public void SetIsInRecruitment(bool isInRecruitment)`

**Purpose:** Sets the value or state of `is in recruitment`.

### SetIsBarExtended
`public void SetIsBarExtended(bool isBarExtended)`

**Purpose:** Sets the value or state of `is bar extended`.

### SetIsMarriageOfferPopupActive
`public void SetIsMarriageOfferPopupActive(bool isMarriageOfferPopupActive)`

**Purpose:** Sets the value or state of `is marriage offer popup active`.

### SetIsInCampaignOptions
`public void SetIsInCampaignOptions(bool isInCampaignOptions)`

**Purpose:** Sets the value or state of `is in campaign options`.

### SetIsMapIncidentActive
`public void SetIsMapIncidentActive(bool isMapIncidentActive)`

**Purpose:** Sets the value or state of `is map incident active`.

### SetMouseVisible
`public void SetMouseVisible(bool value)`

**Purpose:** Sets the value or state of `mouse visible`.

### SetIsHeirSelectionPopupActive
`public void SetIsHeirSelectionPopupActive(bool isHeirSelectionPopupActive)`

**Purpose:** Sets the value or state of `is heir selection popup active`.

### GetMouseVisible
`public bool GetMouseVisible()`

**Purpose:** Gets the current value of `mouse visible`.

### RestartAmbientSounds
`public void RestartAmbientSounds()`

**Purpose:** Handles logic related to `restart ambient sounds`.

### PauseAmbientSounds
`public void PauseAmbientSounds()`

**Purpose:** Handles logic related to `pause ambient sounds`.

### CreatePeriodicUIEvent
`public MBCampaignEvent CreatePeriodicUIEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

**Purpose:** Creates a new `periodic u i event` instance or object.

### DeletePeriodicUIEvent
`public void DeletePeriodicUIEvent(MBCampaignEvent campaignEvent)`

**Purpose:** Handles logic related to `delete periodic u i event`.

### OpenOptions
`public void OpenOptions()`

**Purpose:** Handles logic related to `open options`.

### OpenEncyclopedia
`public void OpenEncyclopedia()`

**Purpose:** Handles logic related to `open encyclopedia`.

### OpenSaveLoad
`public void OpenSaveLoad(bool isSaving)`

**Purpose:** Handles logic related to `open save load`.

### CloseEscapeMenu
`public void CloseEscapeMenu()`

**Purpose:** Handles logic related to `close escape menu`.

### OpenEscapeMenu
`public void OpenEscapeMenu()`

**Purpose:** Handles logic related to `open escape menu`.

### CloseGameplayCheats
`public void CloseGameplayCheats()`

**Purpose:** Handles logic related to `close gameplay cheats`.

### CloseCampaignOptions
`public void CloseCampaignOptions()`

**Purpose:** Handles logic related to `close campaign options`.

### OpenInventory
`public void OpenInventory()`

**Purpose:** Handles logic related to `open inventory`.

### OpenFacegenScreenAux
`public void OpenFacegenScreenAux()`

**Purpose:** Handles logic related to `open facegen screen aux`.

### IsCameraLockedToPlayerParty
`public bool IsCameraLockedToPlayerParty()`

**Purpose:** Handles logic related to `is camera locked to player party`.

### FastMoveCameraToMainParty
`public void FastMoveCameraToMainParty()`

**Purpose:** Handles logic related to `fast move camera to main party`.

### ResetCamera
`public void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**Purpose:** Resets `camera` to its initial state.

### TeleportCameraToMainParty
`public void TeleportCameraToMainParty()`

**Purpose:** Handles logic related to `teleport camera to main party`.

### Create
`public static MapScreen.DecalEntity Create(Scene scene, string material, string entityName = null)`

**Purpose:** Creates a new `create` instance or object.

### ApplyHandlerChangesTo
`public void ApplyHandlerChangesTo(IConversationStateHandler newHandler)`

**Purpose:** Applies `handler changes to` to the current object.

## Usage Example

```csharp
var value = new MapScreen();
value.OnHoverMapEntity(mapEntityVisual);
```

## See Also

- [Complete Class Catalog](../catalog)