---
title: "MapNavigationVM"
description: "MapNavigationVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 19 exposed members (13 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs."
---
# MapNavigationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNavigationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs`

## Overview

MapNavigationVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapNavigationVM → ViewModel. It exposes 19 public/protected members: 13 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNavigationVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar) the module directory; inheritance chain MapNavigationVM → ViewModel. The surface is method-led (methods 13/19, properties 5/19), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapNavigationVM` | `public MapNavigationVM(INavigationHandler navigationHandler, Func<MapBarShortcuts>getMapBarShortcuts)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Refresh` | `public void Refresh()` | method |
| `Tick` | `public void Tick()` | method |
| `RefreshStates` | `protected virtual void RefreshStates()` | method |
| `ExecuteOpenQuests` | `public void ExecuteOpenQuests()` | method |
| `ExecuteOpenInventory` | `public void ExecuteOpenInventory()` | method |
| `ExecuteOpenParty` | `public void ExecuteOpenParty()` | method |
| `ExecuteOpenCharacterDeveloper` | `public void ExecuteOpenCharacterDeveloper()` | method |
| `ExecuteOpenKingdom` | `public void ExecuteOpenKingdom()` | method |
| `ExecuteOpenClan` | `public void ExecuteOpenClan()` | method |
| `ExecuteOpenEscapeMenu` | `public void ExecuteOpenEscapeMenu()` | method |
| `ExecuteOpenMainHeroKingdomEncyclopedia` | `public void ExecuteOpenMainHeroKingdomEncyclopedia()` | method |
| `MBBindingList` | `public MBBindingList<MapNavigationItemVM>NavigationItems` | property |
| `FinanceHint` | `public HintViewModel FinanceHint` | property |
| `EncyclopediaHint` | `public HintViewModel EncyclopediaHint` | property |
| `CenterCameraHint` | `public HintViewModel CenterCameraHint` | property |
| `CampHint` | `public HintViewModel CampHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapBarShortcuts](../MapBarShortcuts)
- [same namespace MapBarVM](../MapBarVM)
- [same namespace MapInfoItemVM](../MapInfoItemVM)
- [same namespace MapInfoVM](../MapInfoVM)
