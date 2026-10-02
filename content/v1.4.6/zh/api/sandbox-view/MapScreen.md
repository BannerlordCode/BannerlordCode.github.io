---
title: "MapScreen"
description: "MapScreen：SandBox.View 的 public 类，继承 ScreenBase、IMapStateHandler；公开成员 105 个（方法 59、属性 37、字段 5）。源文件 SandBox.View/Map/MapScreen.cs。"
---
# MapScreen

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapScreen : ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`
**File:** `SandBox.View/Map/MapScreen.cs`

## 概述

MapScreen 位于 SandBox.View 模块，源文件 SandBox.View/Map/MapScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IMapStateHandler、IGameStateListener、IChatLogHandlerScreen，继承链为 MapScreen → ScreenBase。public/protected 成员共 105 个：59 方法、37 属性、5 字段、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapScreen 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map），继承链 MapScreen → ScreenBase。成员构成以方法为主（方法 59/105，属性 37/105），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/MapScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Input` | `public IInputContext Input` | 属性 |
| `Instance` | `public static MapScreen Instance` | 属性 |
| `IsReady` | `public bool IsReady` | 属性 |
| `NavigationHandler` | `public INavigationHandler NavigationHandler` | 属性 |
| `CurrentVisualOfTooltip` | `public MapEntityVisual CurrentVisualOfTooltip` | 属性 |
| `PrefabEntityCache` | `public CampaignMapSiegePrefabEntityCache PrefabEntityCache` | 属性 |
| `EncyclopediaScreenManager` | `public MapEncyclopediaView EncyclopediaScreenManager` | 属性 |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened` | 属性 |
| `MapNotificationView` | `public MapNotificationView MapNotificationView` | 属性 |
| `Material>BannerTexturedMaterialCache` | `public Dictionary<Tuple<Material, Banner>, Material>BannerTexturedMaterialCache` | 属性 |
| `IsInMenu` | `public bool IsInMenu` | 属性 |
| `SceneLayer` | `public SceneLayer SceneLayer` | 属性 |
| `MapCameraView` | `public MapCameraView MapCameraView` | 属性 |
| `MapSceneCursorActive` | `public bool MapSceneCursorActive` | 属性 |
| `ContourMaskEntity` | `public GameEntity ContourMaskEntity` | 属性 |
| `MapCursor` | `public MapCursor MapCursor` | 属性 |
| `List` | `public List<Mesh>InactiveLightMeshes` | 属性 |
| `List` | `public List<Mesh>ActiveLightMeshes` | 属性 |
| `MapScene` | `public Scene MapScene` | 属性 |
| `MapState` | `public MapState MapState` | 属性 |
| `IsInBattleSimulation` | `public bool IsInBattleSimulation` | 属性 |
| `IsInTownManagement` | `public bool IsInTownManagement` | 属性 |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage` | 属性 |
| `IsInArmyManagement` | `public bool IsInArmyManagement` | 属性 |
| `IsInRecruitment` | `public bool IsInRecruitment` | 属性 |
| `IsBarExtended` | `public bool IsBarExtended` | 属性 |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions` | 属性 |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive` | 属性 |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive` | 属性 |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive` | 属性 |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive` | 属性 |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled` | 属性 |
| `IsSoundOn` | `public bool IsSoundOn` | 属性 |
| `MapScreen` | `public MapScreen(MapState mapState)` | 构造函数 |
| `OnHoverMapEntity` | `public void OnHoverMapEntity(MapEntityVisual mapEntityVisual)` | 方法 |
| `RemoveMapTooltip` | `public void RemoveMapTooltip()` | 方法 |
| `OnResume` | `protected override void OnResume()` | 方法 |
| `OnPause` | `protected override void OnPause()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `ClearGPUMemory` | `public void ClearGPUMemory()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnFocusChangeOnGameWindow` | `public override void OnFocusChangeOnGameWindow(bool focusGained)` | 方法 |
| `AddMapView` | `public MapView AddMapView<T>(params object[]parameters) where T : MapView, new()` | 方法 |
| `GetMapView` | `public T GetMapView<T>() where T : MapView` | 方法 |
| `RemoveMapView` | `public void RemoveMapView(MapView mapView)` | 方法 |
| `AddEncounterOverlay` | `public void AddEncounterOverlay(GameMenu.MenuOverlayType type)` | 方法 |
| `AddArmyOverlay` | `public void AddArmyOverlay(MapScreen.MapOverlayType type)` | 方法 |
| `RemoveEncounterOverlay` | `public void RemoveEncounterOverlay()` | 方法 |
| `RemoveArmyOverlay` | `public void RemoveArmyOverlay()` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `CloseMarriageOfferPopup` | `public void CloseMarriageOfferPopup()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnHourlyTick` | `public void OnHourlyTick()` | 方法 |
| `BeginParleyWith` | `public void BeginParleyWith(PartyBase party)` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnPostFrameTick` | `protected override void OnPostFrameTick(float dt)` | 方法 |
| `OnExit` | `public void OnExit()` | 方法 |
| `GetCursorIntersectionPoint` | `public void GetCursorIntersectionPoint(ref Vec3 clippedMouseNear, ref Vec3 clippedMouseFar, out float closestDistanceSquared, out Vec3 intersectionPoint, ref PathFaceRecord currentFace, out bool isOnland, BodyFlags excludedBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | 方法 |
| `FastMoveCameraToPosition` | `public void FastMoveCameraToPosition(CampaignVec2 target)` | 方法 |
| `OnSiegeEngineFrameClick` | `public void OnSiegeEngineFrameClick(MatrixFrame siegeFrame)` | 方法 |
| `CreateMenuViewContext` | `protected virtual MenuViewContext CreateMenuViewContext(MenuContext menuContext)` | 方法 |
| `TickNavigationInput` | `protected virtual bool TickNavigationInput(float dt)` | 方法 |
| `CreateSimulationScoreboardDatasource` | `protected virtual SPScoreboardVM CreateSimulationScoreboardDatasource(BattleSimulation battleSimulation)` | 方法 |
| `SetIsMapCheatsActive` | `public void SetIsMapCheatsActive(bool isMapCheatsActive)` | 方法 |
| `SetIsInTownManagement` | `public void SetIsInTownManagement(bool isInTownManagement)` | 方法 |
| `SetIsInHideoutTroopManage` | `public void SetIsInHideoutTroopManage(bool isInHideoutTroopManage)` | 方法 |
| `SetIsInArmyManagement` | `public void SetIsInArmyManagement(bool isInArmyManagement)` | 方法 |
| `SetIsOverlayContextMenuActive` | `public void SetIsOverlayContextMenuActive(bool isOverlayContextMenuEnabled)` | 方法 |
| `SetIsInRecruitment` | `public void SetIsInRecruitment(bool isInRecruitment)` | 方法 |
| `SetIsBarExtended` | `public void SetIsBarExtended(bool isBarExtended)` | 方法 |
| `SetIsMarriageOfferPopupActive` | `public void SetIsMarriageOfferPopupActive(bool isMarriageOfferPopupActive)` | 方法 |
| `SetIsInCampaignOptions` | `public void SetIsInCampaignOptions(bool isInCampaignOptions)` | 方法 |
| `SetIsMapIncidentActive` | `public void SetIsMapIncidentActive(bool isMapIncidentActive)` | 方法 |
| `SetMouseVisible` | `public void SetMouseVisible(bool value)` | 方法 |
| `SetIsHeirSelectionPopupActive` | `public void SetIsHeirSelectionPopupActive(bool isHeirSelectionPopupActive)` | 方法 |
| `GetMouseVisible` | `public bool GetMouseVisible()` | 方法 |
| `RestartAmbientSounds` | `public void RestartAmbientSounds()` | 方法 |
| `PauseAmbientSounds` | `public void PauseAmbientSounds()` | 方法 |
| `MapEntityVisual>VisualsOfEntities` | `public static Dictionary<UIntPtr, MapEntityVisual>VisualsOfEntities` | 属性 |
| `CreatePeriodicUIEvent` | `public MBCampaignEvent CreatePeriodicUIEvent(CampaignTime triggerPeriod, CampaignTime initialWait)` | 方法 |
| `DeletePeriodicUIEvent` | `public void DeletePeriodicUIEvent(MBCampaignEvent campaignEvent)` | 方法 |
| `OpenOptions` | `public void OpenOptions()` | 方法 |
| `OpenEncyclopedia` | `public void OpenEncyclopedia()` | 方法 |
| `OpenSaveLoad` | `public void OpenSaveLoad(bool isSaving)` | 方法 |
| `CloseEscapeMenu` | `public void CloseEscapeMenu()` | 方法 |
| `OpenEscapeMenu` | `public void OpenEscapeMenu()` | 方法 |
| `CloseGameplayCheats` | `public void CloseGameplayCheats()` | 方法 |
| `CloseCampaignOptions` | `public void CloseCampaignOptions()` | 方法 |
| `OpenInventory` | `public void OpenInventory()` | 方法 |
| `OpenFacegenScreenAux` | `public void OpenFacegenScreenAux()` | 方法 |
| `IsCameraLockedToPlayerParty` | `public bool IsCameraLockedToPlayerParty()` | 方法 |
| `FastMoveCameraToMainParty` | `public void FastMoveCameraToMainParty()` | 方法 |
| `ResetCamera` | `public void ResetCamera(bool resetDistance, bool teleportToMainParty)` | 方法 |
| `TeleportCameraToMainParty` | `public void TeleportCameraToMainParty()` | 方法 |
| `Material>CharacterBannerMaterialCache` | `public readonly Dictionary<Tuple<Material, Banner>, Material>CharacterBannerMaterialCache` | 字段 |
| `EnemyPartyDecalColor` | `public const uint EnemyPartyDecalColor` | 字段 |
| `SameFactionPartyDecalColor` | `public const uint SameFactionPartyDecalColor` | 字段 |
| `NeutralPartyDecalColor` | `public const uint NeutralPartyDecalColor` | 字段 |
| `AllyPartyDecalColor` | `public const uint AllyPartyDecalColor` | 字段 |
| `MapOverlayType` | `public enum MapOverlayType` | 属性 |
| `DecalEntity` | `public struct DecalEntity` | 属性 |
| `EventBase` | `public class MainMapCameraMoveEvent : EventBase` | 属性 |
| `MapOverlayType` | `public enum MapOverlayType` | 嵌套类型 |
| `DecalEntity` | `public struct DecalEntity` | 嵌套类型 |
| `EventBase` | `public class MainMapCameraMoveEvent : EventBase` | 嵌套类型 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
