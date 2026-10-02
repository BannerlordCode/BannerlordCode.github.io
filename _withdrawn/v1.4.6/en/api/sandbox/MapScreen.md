---
title: "MapScreen"
description: "MapScreen: a public class in SandBox.View.Map, inheriting ScreenBase, IMapStateHandler; 105 exposed members (59 methods, 37 properties, 5 fields). Canonical bucket sandbox. Source: SandBox.View/Map/MapScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapScreen

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapScreen : ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`
**File:** `SandBox.View/Map/MapScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapScreen lives in the SandBox.View module, source file SandBox.View/Map/MapScreen.cs. It is a public class, implementing/inheriting ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen; the inheritance chain is MapScreen → ScreenBase. It exposes 105 public/protected members: 59 methods, 37 properties, 5 fields, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map`, inheritance chain MapScreen → ScreenBase. The surface is method-led (methods 59/105, properties 37/105), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/MapScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Input` | `public IInputContext Input` | property |
| `Instance` | `public static MapScreen Instance` | property |
| `IsReady` | `public bool IsReady` | property |
| `NavigationHandler` | `public INavigationHandler NavigationHandler` | property |
| `CurrentVisualOfTooltip` | `public MapEntityVisual CurrentVisualOfTooltip` | property |
| `PrefabEntityCache` | `public CampaignMapSiegePrefabEntityCache PrefabEntityCache` | property |
| `EncyclopediaScreenManager` | `public MapEncyclopediaView EncyclopediaScreenManager` | property |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened` | property |
| `MapNotificationView` | `public MapNotificationView MapNotificationView` | property |
| `Material>BannerTexturedMaterialCache` | `public Dictionary<Tuple<Material, Banner>, Material>BannerTexturedMaterialCache` | property |
| `IsInMenu` | `public bool IsInMenu` | property |
| `SceneLayer` | `public SceneLayer SceneLayer` | property |
| `MapCameraView` | `public MapCameraView MapCameraView` | property |
| `MapSceneCursorActive` | `public bool MapSceneCursorActive` | property |
| `ContourMaskEntity` | `public GameEntity ContourMaskEntity` | property |
| `MapCursor` | `public MapCursor MapCursor` | property |
| `List` | `public List<Mesh>InactiveLightMeshes` | property |
| `List` | `public List<Mesh>ActiveLightMeshes` | property |
| `MapScene` | `public Scene MapScene` | property |
| `MapState` | `public MapState MapState` | property |
| `IsInBattleSimulation` | `public bool IsInBattleSimulation` | property |
| `IsInTownManagement` | `public bool IsInTownManagement` | property |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage` | property |
| `IsInArmyManagement` | `public bool IsInArmyManagement` | property |
| `IsInRecruitment` | `public bool IsInRecruitment` | property |
| `IsBarExtended` | `public bool IsBarExtended` | property |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions` | property |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive` | property |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive` | property |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive` | property |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive` | property |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled` | property |
| `IsSoundOn` | `public bool IsSoundOn` | property |
| `MapScreen` | `public MapScreen(MapState mapState)` | constructor |
| `OnHoverMapEntity` | `public void OnHoverMapEntity(MapEntityVisual mapEntityVisual)` | method |
| `RemoveMapTooltip` | `public void RemoveMapTooltip()` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `OnPause` | `protected override void OnPause()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `ClearGPUMemory` | `public void ClearGPUMemory()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnFocusChangeOnGameWindow` | `public override void OnFocusChangeOnGameWindow(bool focusGained)` | method |
| `AddMapView` | `public MapView AddMapView<T>(params object[]parameters) where T : MapView, new()` | method |
| `GetMapView` | `public T GetMapView<T>() where T : MapView` | method |
| `RemoveMapView` | `public void RemoveMapView(MapView mapView)` | method |
| `AddEncounterOverlay` | `public void AddEncounterOverlay(GameMenu.MenuOverlayType type)` | method |
| `AddArmyOverlay` | `public void AddArmyOverlay(MapScreen.MapOverlayType type)` | method |
| `RemoveEncounterOverlay` | `public void RemoveEncounterOverlay()` | method |
| `RemoveArmyOverlay` | `public void RemoveArmyOverlay()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `CloseMarriageOfferPopup` | `public void CloseMarriageOfferPopup()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnHourlyTick` | `public void OnHourlyTick()` | method |
| `BeginParleyWith` | `public void BeginParleyWith(PartyBase party)` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnPostFrameTick` | `protected override void OnPostFrameTick(float dt)` | method |
| `OnExit` | `public void OnExit()` | method |
| `GetCursorIntersectionPoint` | `public void GetCursorIntersectionPoint(ref Vec3 clippedMouseNear, ref Vec3 clippedMouseFar, out float closestDistanceSquared, out Vec3 intersectionPoint, ref PathFaceRecord currentFace, out bool isOnland, BodyFlags excludedBodyFlags = BodyFlags.CommonFocusRayCastExcludeFlags)` | method |
| `FastMoveCameraToPosition` | `public void FastMoveCameraToPosition(CampaignVec2 target)` | method |
| `OnSiegeEngineFrameClick` | `public void OnSiegeEngineFrameClick(MatrixFrame siegeFrame)` | method |
| `CreateMenuViewContext` | `protected virtual MenuViewContext CreateMenuViewContext(MenuContext menuContext)` | method |
| `TickNavigationInput` | `protected virtual bool TickNavigationInput(float dt)` | method |
| `CreateSimulationScoreboardDatasource` | `protected virtual SPScoreboardVM CreateSimulationScoreboardDatasource(BattleSimulation battleSimulation)` | method |
| `SetIsMapCheatsActive` | `public void SetIsMapCheatsActive(bool isMapCheatsActive)` | method |
| `SetIsInTownManagement` | `public void SetIsInTownManagement(bool isInTownManagement)` | method |
| `SetIsInHideoutTroopManage` | `public void SetIsInHideoutTroopManage(bool isInHideoutTroopManage)` | method |
| `SetIsInArmyManagement` | `public void SetIsInArmyManagement(bool isInArmyManagement)` | method |
| `SetIsOverlayContextMenuActive` | `public void SetIsOverlayContextMenuActive(bool isOverlayContextMenuEnabled)` | method |
| `SetIsInRecruitment` | `public void SetIsInRecruitment(bool isInRecruitment)` | method |
| `SetIsBarExtended` | `public void SetIsBarExtended(bool isBarExtended)` | method |
| `SetIsMarriageOfferPopupActive` | `public void SetIsMarriageOfferPopupActive(bool isMarriageOfferPopupActive)` | method |
| `SetIsInCampaignOptions` | `public void SetIsInCampaignOptions(bool isInCampaignOptions)` | method |
| `SetIsMapIncidentActive` | `public void SetIsMapIncidentActive(bool isMapIncidentActive)` | method |
| `SetMouseVisible` | `public void SetMouseVisible(bool value)` | method |
| `SetIsHeirSelectionPopupActive` | `public void SetIsHeirSelectionPopupActive(bool isHeirSelectionPopupActive)` | method |
| `GetMouseVisible` | `public bool GetMouseVisible()` | method |
| `RestartAmbientSounds` | `public void RestartAmbientSounds()` | method |
| `PauseAmbientSounds` | `public void PauseAmbientSounds()` | method |
| `MapEntityVisual>VisualsOfEntities` | `public static Dictionary<UIntPtr, MapEntityVisual>VisualsOfEntities` | property |
| `CreatePeriodicUIEvent` | `public MBCampaignEvent CreatePeriodicUIEvent(CampaignTime triggerPeriod, CampaignTime initialWait)` | method |
| `DeletePeriodicUIEvent` | `public void DeletePeriodicUIEvent(MBCampaignEvent campaignEvent)` | method |
| `OpenOptions` | `public void OpenOptions()` | method |
| `OpenEncyclopedia` | `public void OpenEncyclopedia()` | method |
| `OpenSaveLoad` | `public void OpenSaveLoad(bool isSaving)` | method |
| `CloseEscapeMenu` | `public void CloseEscapeMenu()` | method |
| `OpenEscapeMenu` | `public void OpenEscapeMenu()` | method |
| `CloseGameplayCheats` | `public void CloseGameplayCheats()` | method |
| `CloseCampaignOptions` | `public void CloseCampaignOptions()` | method |
| `OpenInventory` | `public void OpenInventory()` | method |
| `OpenFacegenScreenAux` | `public void OpenFacegenScreenAux()` | method |
| `IsCameraLockedToPlayerParty` | `public bool IsCameraLockedToPlayerParty()` | method |
| `FastMoveCameraToMainParty` | `public void FastMoveCameraToMainParty()` | method |
| `ResetCamera` | `public void ResetCamera(bool resetDistance, bool teleportToMainParty)` | method |
| `TeleportCameraToMainParty` | `public void TeleportCameraToMainParty()` | method |
| `Material>CharacterBannerMaterialCache` | `public readonly Dictionary<Tuple<Material, Banner>, Material>CharacterBannerMaterialCache` | field |
| `EnemyPartyDecalColor` | `public const uint EnemyPartyDecalColor` | field |
| `SameFactionPartyDecalColor` | `public const uint SameFactionPartyDecalColor` | field |
| `NeutralPartyDecalColor` | `public const uint NeutralPartyDecalColor` | field |
| `AllyPartyDecalColor` | `public const uint AllyPartyDecalColor` | field |
| `MapOverlayType` | `public enum MapOverlayType` | property |
| `DecalEntity` | `public struct DecalEntity` | property |
| `EventBase` | `public class MainMapCameraMoveEvent : EventBase` | property |
| `MapOverlayType` | `public enum MapOverlayType` | nested type |
| `DecalEntity` | `public struct DecalEntity` | nested type |
| `EventBase` | `public class MainMapCameraMoveEvent : EventBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMapStateHandler](../../campaign/IMapStateHandler/)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView/)
- [same namespace BlockadePositionScript](../BlockadePositionScript/)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent/)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)
