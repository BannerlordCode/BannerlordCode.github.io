---
title: "MapScreen"
description: "MapScreen 的自动生成类参考。"
---
# MapScreen

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapScreen : ScreenBase,IMapStateHandler,IGameStateListener,IChatLogHandlerScreen `
**Base:** ScreenBase,IMapStateHandler,IGameStateListener,IChatLogHandlerScreen
**Source:** SandBox.View/Map/MapScreen.cs

## 概述

`MapScreen` 的自动生成类参考页面。声明来自 `SandBox.View/Map/MapScreen.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnHoverMapEntity
`public void OnHoverMapEntity(MapEntityVisual mapEntityVisual) `

### RemoveMapTooltip
`public void RemoveMapTooltip() `

### OnResume
`protected override void OnResume() `

### OnPause
`protected override void OnPause() `

### OnActivate
`protected override void OnActivate() `

### ClearGPUMemory
`public void ClearGPUMemory() `

### OnDeactivate
`protected override void OnDeactivate() `

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained) `

### RemoveMapView
`public void RemoveMapView(MapView mapView) `

### AddEncounterOverlay
`public void AddEncounterOverlay(GameMenu.MenuOverlayType type) `

### AddArmyOverlay
`public void AddArmyOverlay(MapScreen.MapOverlayType type) `

### RemoveEncounterOverlay
`public void RemoveEncounterOverlay() `

### RemoveArmyOverlay
`public void RemoveArmyOverlay() `

### OnInitialize
`protected override void OnInitialize() `

### CloseMarriageOfferPopup
`public void CloseMarriageOfferPopup() `

### OnFinalize
`protected override void OnFinalize() `

### OnHourlyTick
`public void OnHourlyTick() `

### BeginParleyWith
`public void BeginParleyWith(PartyBase party) `

### OnFrameTick
`protected override void OnFrameTick(float dt) `

### OnPostFrameTick
`protected override void OnPostFrameTick(float dt) `

### OnExit
`public void OnExit() `

### GetCursorIntersectionPoint
`public void GetCursorIntersectionPoint(ref Vec3 clippedMouseNear,ref Vec3 clippedMouseFar,out float closestDistanceSquared,out Vec3 intersectionPoint,ref PathFaceRecord currentFace,out bool isOnland,BodyFlags excludedBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags) `

### FastMoveCameraToPosition
`public void FastMoveCameraToPosition(CampaignVec2 target) `

### OnSiegeEngineFrameClick
`public void OnSiegeEngineFrameClick(MatrixFrame siegeFrame) `

### CreateMenuViewContext
`protected virtual MenuViewContext CreateMenuViewContext(MenuContext menuContext) `

### TickNavigationInput
`protected virtual bool TickNavigationInput(float dt) `

### CreateSimulationScoreboardDatasource
`protected virtual SPScoreboardVM CreateSimulationScoreboardDatasource(BattleSimulation battleSimulation) `

### SetIsMapCheatsActive
`public void SetIsMapCheatsActive(bool isMapCheatsActive) `

### SetIsInTownManagement
`public void SetIsInTownManagement(bool isInTownManagement) `

### SetIsInHideoutTroopManage
`public void SetIsInHideoutTroopManage(bool isInHideoutTroopManage) `

### SetIsInArmyManagement
`public void SetIsInArmyManagement(bool isInArmyManagement) `

### SetIsOverlayContextMenuActive
`public void SetIsOverlayContextMenuActive(bool isOverlayContextMenuEnabled) `

### SetIsInRecruitment
`public void SetIsInRecruitment(bool isInRecruitment) `

### SetIsBarExtended
`public void SetIsBarExtended(bool isBarExtended) `

### SetIsMarriageOfferPopupActive
`public void SetIsMarriageOfferPopupActive(bool isMarriageOfferPopupActive) `

### SetIsInCampaignOptions
`public void SetIsInCampaignOptions(bool isInCampaignOptions) `

### SetIsMapIncidentActive
`public void SetIsMapIncidentActive(bool isMapIncidentActive) `

### SetMouseVisible
`public void SetMouseVisible(bool value) `

### SetIsHeirSelectionPopupActive
`public void SetIsHeirSelectionPopupActive(bool isHeirSelectionPopupActive) `

### GetMouseVisible
`public bool GetMouseVisible() `

### RestartAmbientSounds
`public void RestartAmbientSounds() `

### PauseAmbientSounds
`public void PauseAmbientSounds() `

### CreatePeriodicUIEvent
`public MBCampaignEvent CreatePeriodicUIEvent(CampaignTime triggerPeriod,CampaignTime initialWait) `

### DeletePeriodicUIEvent
`public void DeletePeriodicUIEvent(MBCampaignEvent campaignEvent) `

### OpenOptions
`public void OpenOptions() `

### OpenEncyclopedia
`public void OpenEncyclopedia() `

### OpenSaveLoad
`public void OpenSaveLoad(bool isSaving) `

### CloseEscapeMenu
`public void CloseEscapeMenu() `

### OpenEscapeMenu
`public void OpenEscapeMenu() `

### CloseGameplayCheats
`public void CloseGameplayCheats() `

### CloseCampaignOptions
`public void CloseCampaignOptions() `

### OpenInventory
`public void OpenInventory() `

### OpenFacegenScreenAux
`public void OpenFacegenScreenAux() `

### IsCameraLockedToPlayerParty
`public bool IsCameraLockedToPlayerParty() `

### FastMoveCameraToMainParty
`public void FastMoveCameraToMainParty() `

### ResetCamera
`public void ResetCamera(bool resetDistance,bool teleportToMainParty) `

### TeleportCameraToMainParty
`public void TeleportCameraToMainParty() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
