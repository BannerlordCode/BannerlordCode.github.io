---
title: "CraftingHistoryVM"
description: "CraftingHistoryVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 21 exposed members (8 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs."
---
# CraftingHistoryVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingHistoryVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs`

## Overview

CraftingHistoryVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingHistoryVM → ViewModel. It exposes 21 public/protected members: 8 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingHistoryVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain CraftingHistoryVM → ViewModel. The surface is property-led (properties 12/21, methods 8/21), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingHistoryVM` | `public CraftingHistoryVM(Crafting crafting, ICraftingCampaignBehavior craftingBehavior, Func<CraftingOrder>getActiveOrder, Action<WeaponDesignSelectorVM>onDone)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshAvailability` | `public void RefreshAvailability()` | method |
| `ExecuteOpen` | `public void ExecuteOpen()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `IsDoneAvailable` | `public bool IsDoneAvailable` | property |
| `IsVisible` | `public bool IsVisible` | property |
| `HasItemsInHistory` | `public bool HasItemsInHistory` | property |
| `HistoryHint` | `public HintViewModel HistoryHint` | property |
| `HistoryDisabledHint` | `public HintViewModel HistoryDisabledHint` | property |
| `MBBindingList` | `public MBBindingList<WeaponDesignSelectorVM>CraftingHistory` | property |
| `SelectedDesign` | `public WeaponDesignSelectorVM SelectedDesign` | property |
| `TitleText` | `public string TitleText` | property |
| `DoneText` | `public string DoneText` | property |
| `CancelText` | `public string CancelText` | property |
| `SetDoneKey` | `public void SetDoneKey(HotKey hotkey)` | method |
| `SetCancelKey` | `public void SetCancelKey(HotKey hotkey)` | method |
| `CancelKey` | `public InputKeyItemVM CancelKey` | property |
| `DoneKey` | `public InputKeyItemVM DoneKey` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
- [same namespace CraftingPieceListVM](../CraftingPieceListVM)
