---
title: "MapTimeControlVM"
description: "MapTimeControlVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar, inheriting ViewModel; 31 exposed members (6 methods, 24 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapTimeControlVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapTimeControlVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

MapTimeControlVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapTimeControlVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 31 public/protected members: 6 methods, 24 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTimeControlVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`, inheritance chain MapTimeControlVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 24/31, methods 6/31), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapBarShortcuts](../MapBarShortcuts/)
- [same namespace MapBarVM](../MapBarVM/)
- [same namespace MapInfoItemVM](../MapInfoItemVM/)
- [same namespace MapInfoVM](../MapInfoVM/)
