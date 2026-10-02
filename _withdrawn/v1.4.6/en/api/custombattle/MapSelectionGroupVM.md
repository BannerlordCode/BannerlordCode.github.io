---
title: "MapSelectionGroupVM"
description: "MapSelectionGroupVM: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle, inheriting ViewModel; 26 exposed members (4 methods, 21 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSelectionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class MapSelectionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

MapSelectionGroupVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapSelectionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 26 public/protected members: 4 methods, 21 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSelectionGroupVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`, inheritance chain MapSelectionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 21/26, methods 4/26), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SelectedWallBreachedCount` | `public int SelectedWallBreachedCount` | property |
| `SelectedSceneLevel` | `public int SelectedSceneLevel` | property |
| `SelectedTimeOfDay` | `public int SelectedTimeOfDay` | property |
| `SelectedSeasonId` | `public string SelectedSeasonId` | property |
| `SelectedMap` | `public MapItemVM SelectedMap` | property |
| `MapSelectionGroupVM` | `public MapSelectionGroupVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSallyOutChange` | `public void ExecuteSallyOutChange()` | method |
| `OnGameTypeChange` | `public void OnGameTypeChange(string gameTypeStringId)` | method |
| `RandomizeAll` | `public void RandomizeAll()` | method |
| `SelectorVM` | `public SelectorVM<MapItemVM>MapSelection` | property |
| `SelectorVM` | `public SelectorVM<SceneLevelItemVM>SceneLevelSelection` | property |
| `SelectorVM` | `public SelectorVM<WallHitpointItemVM>WallHitpointSelection` | property |
| `SelectorVM` | `public SelectorVM<SeasonItemVM>SeasonSelection` | property |
| `SelectorVM` | `public SelectorVM<TimeOfDayItemVM>TimeOfDaySelection` | property |
| `IsCurrentMapSiege` | `public bool IsCurrentMapSiege` | property |
| `IsSallyOutSelected` | `public bool IsSallyOutSelected` | property |
| `TitleText` | `public string TitleText` | property |
| `MapText` | `public string MapText` | property |
| `SeasonText` | `public string SeasonText` | property |
| `TimeOfDayText` | `public string TimeOfDayText` | property |
| `SceneLevelText` | `public string SceneLevelText` | property |
| `WallHitpointsText` | `public string WallHitpointsText` | property |
| `AttackerSiegeMachinesText` | `public string AttackerSiegeMachinesText` | property |
| `DefenderSiegeMachinesText` | `public string DefenderSiegeMachinesText` | property |
| `SalloutText` | `public string SalloutText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData/)
- [same namespace CustomBattleData](../CustomBattleData/)
- [same namespace CustomBattleHelper](../CustomBattleHelper/)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide/)
