---
title: "GameMenuTroopSelectionVM"
description: "GameMenuTroopSelectionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 24 exposed members (10 methods, 13 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs."
---
# GameMenuTroopSelectionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuTroopSelectionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs`

## Overview

GameMenuTroopSelectionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuTroopSelectionVM → ViewModel. It exposes 24 public/protected members: 10 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuTroopSelectionVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection) the module directory; inheritance chain GameMenuTroopSelectionVM → ViewModel. The surface is property-led (properties 13/24, methods 10/24), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuTroopSelectionVM` | `public GameMenuTroopSelectionVM(TroopRoster fullRoster, TroopRoster initialSelections, Func<CharacterObject, bool>canChangeChangeStatusOfTroop, Action<TroopRoster>onDone, int maxSelectableTroopCount, int minSelectableTroopCount)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `InitList` | `protected virtual void InitList()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `ExecuteClearSelection` | `public void ExecuteClearSelection()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsDoneEnabled` | `public bool IsDoneEnabled` | property |
| `DoneHint` | `public HintViewModel DoneHint` | property |
| `MBBindingList` | `public MBBindingList<TroopSelectionItemVM>Troops` | property |
| `DoneText` | `public string DoneText` | property |
| `CancelText` | `public string CancelText` | property |
| `TitleText` | `public string TitleText` | property |
| `ClearSelectionText` | `public string ClearSelectionText` | property |
| `CurrentSelectedAmountText` | `public string CurrentSelectedAmountText` | property |
| `CurrentSelectedAmountTitle` | `public string CurrentSelectedAmountTitle` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TroopItemComparer](../TroopItemComparer)
- [same namespace TroopSelectionItemVM](../TroopSelectionItemVM)
