---
title: "GameMenuVM"
description: "GameMenuVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu, inheriting ViewModel; 21 exposed members (8 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

GameMenuVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 21 public/protected members: 8 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`, inheritance chain GameMenuVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/21, methods 8/21), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenuItemProgressVM](../GameMenuItemProgressVM/)
- [same namespace GameMenuItemVM](../GameMenuItemVM/)
- [same namespace GameMenuPlunderItemVM](../GameMenuPlunderItemVM/)
