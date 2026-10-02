---
title: "GameMenuVM"
description: "GameMenuVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 21 exposed members (8 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs."
---
# GameMenuVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs`

## Overview

GameMenuVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuVM → ViewModel. It exposes 21 public/protected members: 8 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu) the module directory; inheritance chain GameMenuVM → ViewModel. The surface is property-led (properties 12/21, methods 8/21), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuContext` | `public MenuContext MenuContext` | property |
| `GameMenuVM` | `public GameMenuVM(MenuContext menuContext)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetIdleMode` | `public void SetIdleMode(bool isIdle)` | method |
| `Refresh` | `public void Refresh(bool forceUpdateItems)` | method |
| `OnFrameTick` | `public void OnFrameTick()` | method |
| `UpdateMenuContext` | `public void UpdateMenuContext(MenuContext newMenuContext)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetLeaveHotKey` | `public void SetLeaveHotKey(GameKey gameKey)` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `IsNight` | `public bool IsNight` | property |
| `IsInSiegeMode` | `public bool IsInSiegeMode` | property |
| `IsEncounterMenu` | `public bool IsEncounterMenu` | property |
| `TitleText` | `public string TitleText` | property |
| `ContextText` | `public string ContextText` | property |
| `MBBindingList` | `public MBBindingList<GameMenuItemVM>ItemList` | property |
| `MBBindingList` | `public MBBindingList<GameMenuItemProgressVM>ProgressItemList` | property |
| `Background` | `public string Background` | property |
| `BackgroundCopy` | `public string BackgroundCopy` | property |
| `MenuId` | `public string MenuId` | property |
| `MBBindingList` | `public MBBindingList<GameMenuPlunderItemVM>PlunderItems` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenuItemProgressVM](../GameMenuItemProgressVM)
- [same namespace GameMenuItemVM](../GameMenuItemVM)
- [same namespace GameMenuPlunderItemVM](../GameMenuPlunderItemVM)
