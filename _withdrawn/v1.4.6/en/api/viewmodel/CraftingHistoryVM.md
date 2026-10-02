---
title: "CraftingHistoryVM"
description: "CraftingHistoryVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign, inheriting ViewModel; 21 exposed members (8 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingHistoryVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingHistoryVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CraftingHistoryVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingHistoryVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 21 public/protected members: 8 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingHistoryVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`, inheritance chain CraftingHistoryVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/21, methods 8/21), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM/)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent/)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent/)
- [same namespace CraftingPieceListVM](../CraftingPieceListVM/)
