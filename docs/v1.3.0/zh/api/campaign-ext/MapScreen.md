<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapScreen`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapScreen

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapScreen : ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `SandBox.View/Map/MapScreen.cs`

## 概述

`MapScreen` 位于 `SandBox.View.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### OnHoverMapEntity
`public void OnHoverMapEntity(MapEntityVisual mapEntityVisual)`

**用途 / Purpose:** 当 `hover map entity` 事件触发时调用此方法。

### RemoveMapTooltip
`public void RemoveMapTooltip()`

**用途 / Purpose:** 从当前集合/状态中移除 `map tooltip`。

### ClearGPUMemory
`public void ClearGPUMemory()`

**用途 / Purpose:** 处理 `clear g p u memory` 相关逻辑。

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 当 `focus change on game window` 事件触发时调用此方法。

### RemoveMapView
`public void RemoveMapView(MapView mapView)`

**用途 / Purpose:** 从当前集合/状态中移除 `map view`。

### AddEncounterOverlay
`public void AddEncounterOverlay(GameMenu.MenuOverlayType type)`

**用途 / Purpose:** 向当前集合/状态中添加 `encounter overlay`。

### AddArmyOverlay
`public void AddArmyOverlay(MapScreen.MapOverlayType type)`

**用途 / Purpose:** 向当前集合/状态中添加 `army overlay`。

### RemoveEncounterOverlay
`public void RemoveEncounterOverlay()`

**用途 / Purpose:** 从当前集合/状态中移除 `encounter overlay`。

### RemoveArmyOverlay
`public void RemoveArmyOverlay()`

**用途 / Purpose:** 从当前集合/状态中移除 `army overlay`。

### CloseMarriageOfferPopup
`public void CloseMarriageOfferPopup()`

**用途 / Purpose:** 处理 `close marriage offer popup` 相关逻辑。

### OnHourlyTick
`public void OnHourlyTick()`

**用途 / Purpose:** 当 `hourly tick` 事件触发时调用此方法。

### BeginParleyWith
`public void BeginParleyWith(PartyBase party)`

**用途 / Purpose:** 处理 `begin parley with` 相关逻辑。

### OnExit
`public void OnExit()`

**用途 / Purpose:** 当 `exit` 事件触发时调用此方法。

### GetCursorIntersectionPoint
`public void GetCursorIntersectionPoint(ref Vec3 clippedMouseNear, ref Vec3 clippedMouseFar, out float closestDistanceSquared, out Vec3 intersectionPoint, ref PathFaceRecord currentFace, out bool isOnland, BodyFlags excludedBodyFlags = 79617)`

**用途 / Purpose:** 获取 `cursor intersection point` 的当前值。

### FastMoveCameraToPosition
`public void FastMoveCameraToPosition(CampaignVec2 target)`

**用途 / Purpose:** 处理 `fast move camera to position` 相关逻辑。

### OnSiegeEngineFrameClick
`public void OnSiegeEngineFrameClick(MatrixFrame siegeFrame)`

**用途 / Purpose:** 当 `siege engine frame click` 事件触发时调用此方法。

### OnFadeInAndOut
`public void OnFadeInAndOut(float fadeOutTime, float blackTime, float fadeInTime)`

**用途 / Purpose:** 当 `fade in and out` 事件触发时调用此方法。

### SetIsMapCheatsActive
`public void SetIsMapCheatsActive(bool isMapCheatsActive)`

**用途 / Purpose:** 设置 `is map cheats active` 的值或状态。

### SetIsInTownManagement
`public void SetIsInTownManagement(bool isInTownManagement)`

**用途 / Purpose:** 设置 `is in town management` 的值或状态。

### SetIsInHideoutTroopManage
`public void SetIsInHideoutTroopManage(bool isInHideoutTroopManage)`

**用途 / Purpose:** 设置 `is in hideout troop manage` 的值或状态。

### SetIsInArmyManagement
`public void SetIsInArmyManagement(bool isInArmyManagement)`

**用途 / Purpose:** 设置 `is in army management` 的值或状态。

### SetIsOverlayContextMenuActive
`public void SetIsOverlayContextMenuActive(bool isOverlayContextMenuEnabled)`

**用途 / Purpose:** 设置 `is overlay context menu active` 的值或状态。

### SetIsInRecruitment
`public void SetIsInRecruitment(bool isInRecruitment)`

**用途 / Purpose:** 设置 `is in recruitment` 的值或状态。

### SetIsBarExtended
`public void SetIsBarExtended(bool isBarExtended)`

**用途 / Purpose:** 设置 `is bar extended` 的值或状态。

### SetIsMarriageOfferPopupActive
`public void SetIsMarriageOfferPopupActive(bool isMarriageOfferPopupActive)`

**用途 / Purpose:** 设置 `is marriage offer popup active` 的值或状态。

### SetIsInCampaignOptions
`public void SetIsInCampaignOptions(bool isInCampaignOptions)`

**用途 / Purpose:** 设置 `is in campaign options` 的值或状态。

### SetIsMapIncidentActive
`public void SetIsMapIncidentActive(bool isMapIncidentActive)`

**用途 / Purpose:** 设置 `is map incident active` 的值或状态。

### SetMouseVisible
`public void SetMouseVisible(bool value)`

**用途 / Purpose:** 设置 `mouse visible` 的值或状态。

### SetIsHeirSelectionPopupActive
`public void SetIsHeirSelectionPopupActive(bool isHeirSelectionPopupActive)`

**用途 / Purpose:** 设置 `is heir selection popup active` 的值或状态。

### GetMouseVisible
`public bool GetMouseVisible()`

**用途 / Purpose:** 获取 `mouse visible` 的当前值。

### RestartAmbientSounds
`public void RestartAmbientSounds()`

**用途 / Purpose:** 处理 `restart ambient sounds` 相关逻辑。

### PauseAmbientSounds
`public void PauseAmbientSounds()`

**用途 / Purpose:** 处理 `pause ambient sounds` 相关逻辑。

### CreatePeriodicUIEvent
`public MBCampaignEvent CreatePeriodicUIEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

**用途 / Purpose:** 创建一个 `periodic u i event` 实例或对象。

### DeletePeriodicUIEvent
`public void DeletePeriodicUIEvent(MBCampaignEvent campaignEvent)`

**用途 / Purpose:** 处理 `delete periodic u i event` 相关逻辑。

### OpenOptions
`public void OpenOptions()`

**用途 / Purpose:** 处理 `open options` 相关逻辑。

### OpenEncyclopedia
`public void OpenEncyclopedia()`

**用途 / Purpose:** 处理 `open encyclopedia` 相关逻辑。

### OpenSaveLoad
`public void OpenSaveLoad(bool isSaving)`

**用途 / Purpose:** 处理 `open save load` 相关逻辑。

### CloseEscapeMenu
`public void CloseEscapeMenu()`

**用途 / Purpose:** 处理 `close escape menu` 相关逻辑。

### OpenEscapeMenu
`public void OpenEscapeMenu()`

**用途 / Purpose:** 处理 `open escape menu` 相关逻辑。

### CloseGameplayCheats
`public void CloseGameplayCheats()`

**用途 / Purpose:** 处理 `close gameplay cheats` 相关逻辑。

### CloseCampaignOptions
`public void CloseCampaignOptions()`

**用途 / Purpose:** 处理 `close campaign options` 相关逻辑。

### OpenInventory
`public void OpenInventory()`

**用途 / Purpose:** 处理 `open inventory` 相关逻辑。

### OpenFacegenScreenAux
`public void OpenFacegenScreenAux()`

**用途 / Purpose:** 处理 `open facegen screen aux` 相关逻辑。

### IsCameraLockedToPlayerParty
`public bool IsCameraLockedToPlayerParty()`

**用途 / Purpose:** 处理 `is camera locked to player party` 相关逻辑。

### FastMoveCameraToMainParty
`public void FastMoveCameraToMainParty()`

**用途 / Purpose:** 处理 `fast move camera to main party` 相关逻辑。

### ResetCamera
`public void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**用途 / Purpose:** 将 `camera` 重置为初始状态。

### TeleportCameraToMainParty
`public void TeleportCameraToMainParty()`

**用途 / Purpose:** 处理 `teleport camera to main party` 相关逻辑。

### Create
`public static MapScreen.DecalEntity Create(Scene scene, string material, string entityName = null)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### ApplyHandlerChangesTo
`public void ApplyHandlerChangesTo(IConversationStateHandler newHandler)`

**用途 / Purpose:** 将 `handler changes to` 应用到当前对象。

## 使用示例

```csharp
var value = new MapScreen();
value.OnHoverMapEntity(mapEntityVisual);
```

## 参见

- [完整类目录](../catalog)