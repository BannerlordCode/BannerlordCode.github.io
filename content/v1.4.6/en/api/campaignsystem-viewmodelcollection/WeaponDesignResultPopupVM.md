---
title: "WeaponDesignResultPopupVM"
description: "WeaponDesignResultPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 24 exposed members (5 methods, 18 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs."
---
# WeaponDesignResultPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignResultPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs`

## Overview

WeaponDesignResultPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WeaponDesignResultPopupVM → ViewModel. It exposes 24 public/protected members: 5 methods, 18 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponDesignResultPopupVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain WeaponDesignResultPopupVM → ViewModel. The surface is property-led (properties 18/24, methods 5/24), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponDesignResultPopupVM` | `public WeaponDesignResultPopupVM(ItemObject craftedItem, TextObject itemName, Action onFinalize, Crafting crafting, CraftingOrder completedOrder, ItemCollectionElementViewModel itemVisualModel, MBBindingList<ItemFlagVM>weaponFlagIconsList, Func<CraftingSecondaryUsageItemVM, MBBindingList<WeaponDesignResultPropertyItemVM>>onGetPropertyList, Action<CraftingSecondaryUsageItemVM>onUsageSelected)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteFinalizeCrafting` | `public void ExecuteFinalizeCrafting()` | method |
| `ExecuteRandomCraftName` | `public void ExecuteRandomCraftName()` | method |
| `MBBindingList` | `public MBBindingList<ItemFlagVM>WeaponFlagIconsList` | property |
| `IsInOrderMode` | `public bool IsInOrderMode` | property |
| `CraftedWeaponFinalWorth` | `public int CraftedWeaponFinalWorth` | property |
| `CraftedWeaponPriceDifference` | `public int CraftedWeaponPriceDifference` | property |
| `CraftedWeaponInitialWorth` | `public int CraftedWeaponInitialWorth` | property |
| `CraftedWeaponWorthText` | `public string CraftedWeaponWorthText` | property |
| `IsOrderSuccessful` | `public bool IsOrderSuccessful` | property |
| `CanConfirm` | `public bool CanConfirm` | property |
| `OrderResultText` | `public string OrderResultText` | property |
| `OrderOwnerRemarkText` | `public string OrderOwnerRemarkText` | property |
| `WeaponCraftedText` | `public string WeaponCraftedText` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `MBBindingList` | `public MBBindingList<WeaponDesignResultPropertyItemVM>DesignResultPropertyList` | property |
| `ItemName` | `public string ItemName` | property |
| `ItemVisualModel` | `public ItemCollectionElementViewModel ItemVisualModel` | property |
| `ConfirmDisabledReasonHint` | `public HintViewModel ConfirmDisabledReasonHint` | property |
| `SelectorVM` | `public SelectorVM<CraftingSecondaryUsageItemVM>SecondaryUsageSelector` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
