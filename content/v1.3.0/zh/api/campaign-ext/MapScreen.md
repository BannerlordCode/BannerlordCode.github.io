---
title: "MapScreen"
description: "MapScreen 的自动生成类参考。"
---
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

**用途 / Purpose:** 在 「hover map entity」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OnHoverMapEntity(mapEntityVisual);
```

### RemoveMapTooltip
`public void RemoveMapTooltip()`

**用途 / Purpose:** 从当前容器或状态中移除 「map tooltip」。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.RemoveMapTooltip();
```

### ClearGPUMemory
`public void ClearGPUMemory()`

**用途 / Purpose:** 清空当前对象中的「g p u memory」。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.ClearGPUMemory();
```

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 在 「focus change on game window」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OnFocusChangeOnGameWindow(false);
```

### RemoveMapView
`public void RemoveMapView(MapView mapView)`

**用途 / Purpose:** 从当前容器或状态中移除 「map view」。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.RemoveMapView(mapView);
```

### AddEncounterOverlay
`public void AddEncounterOverlay(GameMenu.MenuOverlayType type)`

**用途 / Purpose:** 将 「encounter overlay」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.AddEncounterOverlay(type);
```

### AddArmyOverlay
`public void AddArmyOverlay(MapScreen.MapOverlayType type)`

**用途 / Purpose:** 将 「army overlay」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.AddArmyOverlay(type);
```

### RemoveEncounterOverlay
`public void RemoveEncounterOverlay()`

**用途 / Purpose:** 从当前容器或状态中移除 「encounter overlay」。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.RemoveEncounterOverlay();
```

### RemoveArmyOverlay
`public void RemoveArmyOverlay()`

**用途 / Purpose:** 从当前容器或状态中移除 「army overlay」。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.RemoveArmyOverlay();
```

### CloseMarriageOfferPopup
`public void CloseMarriageOfferPopup()`

**用途 / Purpose:** 关闭「marriage offer popup」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.CloseMarriageOfferPopup();
```

### OnHourlyTick
`public void OnHourlyTick()`

**用途 / Purpose:** 在 「hourly tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OnHourlyTick();
```

### BeginParleyWith
`public void BeginParleyWith(PartyBase party)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.BeginParleyWith(party);
```

### OnExit
`public void OnExit()`

**用途 / Purpose:** 在 「exit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OnExit();
```

### GetCursorIntersectionPoint
`public void GetCursorIntersectionPoint(ref Vec3 clippedMouseNear, ref Vec3 clippedMouseFar, out float closestDistanceSquared, out Vec3 intersectionPoint, ref PathFaceRecord currentFace, out bool isOnland, BodyFlags excludedBodyFlags = 79617)`

**用途 / Purpose:** 读取并返回当前对象中 「cursor intersection point」 的结果。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.GetCursorIntersectionPoint(clippedMouseNear, clippedMouseFar, closestDistanceSquared, intersectionPoint, currentFace, isOnland, 79617);
```

### FastMoveCameraToPosition
`public void FastMoveCameraToPosition(CampaignVec2 target)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.FastMoveCameraToPosition(target);
```

### OnSiegeEngineFrameClick
`public void OnSiegeEngineFrameClick(MatrixFrame siegeFrame)`

**用途 / Purpose:** 在 「siege engine frame click」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OnSiegeEngineFrameClick(siegeFrame);
```

### OnFadeInAndOut
`public void OnFadeInAndOut(float fadeOutTime, float blackTime, float fadeInTime)`

**用途 / Purpose:** 在 「fade in and out」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OnFadeInAndOut(0, 0, 0);
```

### SetIsMapCheatsActive
`public void SetIsMapCheatsActive(bool isMapCheatsActive)`

**用途 / Purpose:** 为 「is map cheats active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsMapCheatsActive(false);
```

### SetIsInTownManagement
`public void SetIsInTownManagement(bool isInTownManagement)`

**用途 / Purpose:** 为 「is in town management」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsInTownManagement(false);
```

### SetIsInHideoutTroopManage
`public void SetIsInHideoutTroopManage(bool isInHideoutTroopManage)`

**用途 / Purpose:** 为 「is in hideout troop manage」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsInHideoutTroopManage(false);
```

### SetIsInArmyManagement
`public void SetIsInArmyManagement(bool isInArmyManagement)`

**用途 / Purpose:** 为 「is in army management」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsInArmyManagement(false);
```

### SetIsOverlayContextMenuActive
`public void SetIsOverlayContextMenuActive(bool isOverlayContextMenuEnabled)`

**用途 / Purpose:** 为 「is overlay context menu active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsOverlayContextMenuActive(false);
```

### SetIsInRecruitment
`public void SetIsInRecruitment(bool isInRecruitment)`

**用途 / Purpose:** 为 「is in recruitment」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsInRecruitment(false);
```

### SetIsBarExtended
`public void SetIsBarExtended(bool isBarExtended)`

**用途 / Purpose:** 为 「is bar extended」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsBarExtended(false);
```

### SetIsMarriageOfferPopupActive
`public void SetIsMarriageOfferPopupActive(bool isMarriageOfferPopupActive)`

**用途 / Purpose:** 为 「is marriage offer popup active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsMarriageOfferPopupActive(false);
```

### SetIsInCampaignOptions
`public void SetIsInCampaignOptions(bool isInCampaignOptions)`

**用途 / Purpose:** 为 「is in campaign options」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsInCampaignOptions(false);
```

### SetIsMapIncidentActive
`public void SetIsMapIncidentActive(bool isMapIncidentActive)`

**用途 / Purpose:** 为 「is map incident active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsMapIncidentActive(false);
```

### SetMouseVisible
`public void SetMouseVisible(bool value)`

**用途 / Purpose:** 为 「mouse visible」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetMouseVisible(false);
```

### SetIsHeirSelectionPopupActive
`public void SetIsHeirSelectionPopupActive(bool isHeirSelectionPopupActive)`

**用途 / Purpose:** 为 「is heir selection popup active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.SetIsHeirSelectionPopupActive(false);
```

### GetMouseVisible
`public bool GetMouseVisible()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse visible」 的结果。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
var result = mapScreen.GetMouseVisible();
```

### RestartAmbientSounds
`public void RestartAmbientSounds()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.RestartAmbientSounds();
```

### PauseAmbientSounds
`public void PauseAmbientSounds()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.PauseAmbientSounds();
```

### CreatePeriodicUIEvent
`public MBCampaignEvent CreatePeriodicUIEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

**用途 / Purpose:** 构建一个新的 「periodic u i event」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
var result = mapScreen.CreatePeriodicUIEvent(triggerPeriod, initialWait);
```

### DeletePeriodicUIEvent
`public void DeletePeriodicUIEvent(MBCampaignEvent campaignEvent)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.DeletePeriodicUIEvent(campaignEvent);
```

### OpenOptions
`public void OpenOptions()`

**用途 / Purpose:** 打开「options」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OpenOptions();
```

### OpenEncyclopedia
`public void OpenEncyclopedia()`

**用途 / Purpose:** 打开「encyclopedia」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OpenEncyclopedia();
```

### OpenSaveLoad
`public void OpenSaveLoad(bool isSaving)`

**用途 / Purpose:** 打开「save load」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OpenSaveLoad(false);
```

### CloseEscapeMenu
`public void CloseEscapeMenu()`

**用途 / Purpose:** 关闭「escape menu」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.CloseEscapeMenu();
```

### OpenEscapeMenu
`public void OpenEscapeMenu()`

**用途 / Purpose:** 打开「escape menu」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OpenEscapeMenu();
```

### CloseGameplayCheats
`public void CloseGameplayCheats()`

**用途 / Purpose:** 关闭「gameplay cheats」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.CloseGameplayCheats();
```

### CloseCampaignOptions
`public void CloseCampaignOptions()`

**用途 / Purpose:** 关闭「campaign options」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.CloseCampaignOptions();
```

### OpenInventory
`public void OpenInventory()`

**用途 / Purpose:** 打开「inventory」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OpenInventory();
```

### OpenFacegenScreenAux
`public void OpenFacegenScreenAux()`

**用途 / Purpose:** 打开「facegen screen aux」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.OpenFacegenScreenAux();
```

### IsCameraLockedToPlayerParty
`public bool IsCameraLockedToPlayerParty()`

**用途 / Purpose:** 判断当前对象是否处于 「camera locked to player party」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
var result = mapScreen.IsCameraLockedToPlayerParty();
```

### FastMoveCameraToMainParty
`public void FastMoveCameraToMainParty()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.FastMoveCameraToMainParty();
```

### ResetCamera
`public void ResetCamera(bool resetDistance, bool teleportToMainParty)`

**用途 / Purpose:** 将 「camera」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.ResetCamera(false, false);
```

### TeleportCameraToMainParty
`public void TeleportCameraToMainParty()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.TeleportCameraToMainParty();
```

### Create
`public static MapScreen.DecalEntity Create(Scene scene, string material, string entityName = null)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
MapScreen.Create(scene, "example", "example");
```

### ApplyHandlerChangesTo
`public void ApplyHandlerChangesTo(IConversationStateHandler newHandler)`

**用途 / Purpose:** 将 「handler changes to」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MapScreen 实例
MapScreen mapScreen = ...;
mapScreen.ApplyHandlerChangesTo(newHandler);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapScreen mapScreen = ...;
mapScreen.OnHoverMapEntity(mapEntityVisual);
```

## 参见

- [本区域目录](../)