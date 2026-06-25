---
title: "MainMapCameraMoveEvent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MainMapCameraMoveEvent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MainMapCameraMoveEvent

**命名空间:** SandBox.View.Map
**模块:** SandBox.View
**类型:** `public class MainMapCameraMoveEvent : EventBase`
**Base:** `EventBase`
**领域:** campaign-ext

## 概述

`MainMapCameraMoveEvent` 位于 `SandBox.View.Map`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 MainMapCameraMoveEvent 实例，再调用它的公开方法
var value = new MainMapCameraMoveEvent();
value.OnHoverMapEntity(mapEntityVisual);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
