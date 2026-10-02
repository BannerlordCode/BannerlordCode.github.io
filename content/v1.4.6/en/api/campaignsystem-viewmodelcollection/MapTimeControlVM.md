---
title: "MapTimeControlVM"
description: "MapTimeControlVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 31 exposed members (6 methods, 24 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs."
---
# MapTimeControlVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapTimeControlVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs`

## Overview

MapTimeControlVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapTimeControlVM → ViewModel. It exposes 31 public/protected members: 6 methods, 24 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTimeControlVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar) the module directory; inheritance chain MapTimeControlVM → ViewModel. The surface is property-led (properties 24/31, methods 6/31), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInBattleSimulation` | `public bool IsInBattleSimulation` | property |
| `IsInRecruitment` | `public bool IsInRecruitment` | property |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen` | property |
| `IsInArmyManagement` | `public bool IsInArmyManagement` | property |
| `IsInTownManagement` | `public bool IsInTownManagement` | property |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage` | property |
| `IsInMap` | `public bool IsInMap` | property |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions` | property |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened` | property |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive` | property |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive` | property |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive` | property |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive` | property |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled` | property |
| `MapTimeControlVM` | `public MapTimeControlVM(Func<MapBarShortcuts>getMapBarShortcuts, Action onTimeFlowStateChange, Action onCameraResetted)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Tick` | `public void Tick()` | method |
| `Refresh` | `public void Refresh()` | method |
| `ExecuteTimeControlChange` | `public void ExecuteTimeControlChange(int selectedTimeSpeed)` | method |
| `ExecuteResetCamera` | `public void ExecuteResetCamera()` | method |
| `TimeOfDayHint` | `public BasicTooltipViewModel TimeOfDayHint` | property |
| `IsCurrentlyPausedOnMap` | `public bool IsCurrentlyPausedOnMap` | property |
| `IsCenterPanelEnabled` | `public bool IsCenterPanelEnabled` | property |
| `Time` | `public double Time` | property |
| `PausedText` | `public string PausedText` | property |
| `Date` | `public string Date` | property |
| `TimeFlowState` | `public int TimeFlowState` | property |
| `PauseHint` | `public BasicTooltipViewModel PauseHint` | property |
| `PlayHint` | `public BasicTooltipViewModel PlayHint` | property |
| `FastForwardHint` | `public BasicTooltipViewModel FastForwardHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapBarShortcuts](../MapBarShortcuts)
- [same namespace MapBarVM](../MapBarVM)
- [same namespace MapInfoItemVM](../MapInfoItemVM)
- [same namespace MapInfoVM](../MapInfoVM)
