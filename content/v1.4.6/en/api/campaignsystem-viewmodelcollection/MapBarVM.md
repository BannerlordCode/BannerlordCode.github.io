---
title: "MapBarVM"
description: "MapBarVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 18 exposed members (7 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs."
---
# MapBarVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapBarVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs`

## Overview

MapBarVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapBarVM → ViewModel. It exposes 18 public/protected members: 7 methods, 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapBarVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar) the module directory; inheritance chain MapBarVM → ViewModel. The surface is property-led (properties 11/18, methods 7/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateInfoVM` | `protected virtual MapInfoVM CreateInfoVM()` | method |
| `Initialize` | `public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts>getMapBarShortcuts, Action openArmyManagement)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnRefresh` | `public void OnRefresh()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `ExecuteArmyManagement` | `public void ExecuteArmyManagement()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `MapInfo` | `public MapInfoVM MapInfo` | property |
| `MapTimeControl` | `public MapTimeControlVM MapTimeControl` | property |
| `MapNavigation` | `public MapNavigationVM MapNavigation` | property |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible` | property |
| `IsInInfoMode` | `public bool IsInInfoMode` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `CanGatherArmy` | `public bool CanGatherArmy` | property |
| `GatherArmyHint` | `public HintViewModel GatherArmyHint` | property |
| `IsCameraCentered` | `public bool IsCameraCentered` | property |
| `CurrentScreen` | `public string CurrentScreen` | property |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapBarShortcuts](../MapBarShortcuts)
- [same namespace MapInfoItemVM](../MapInfoItemVM)
- [same namespace MapInfoVM](../MapInfoVM)
- [same namespace MapNavigationItemVM](../MapNavigationItemVM)
