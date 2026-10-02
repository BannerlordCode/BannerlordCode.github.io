---
title: "CraftingOrderPopupVM"
description: "CraftingOrderPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 12 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs."
---
# CraftingOrderPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingOrderPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs`

## Overview

CraftingOrderPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingOrderPopupVM → ViewModel. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingOrderPopupVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order) the module directory; inheritance chain CraftingOrderPopupVM → ViewModel. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasOrders` | `public bool HasOrders` | property |
| `HasEnabledOrders` | `public bool HasEnabledOrders` | property |
| `CraftingOrderPopupVM` | `public CraftingOrderPopupVM(Action<CraftingOrderItemVM>onDoneAction, Func<CraftingAvailableHeroItemVM>getCurrentCraftingHero, Func<CraftingOrder, IEnumerable<CraftingStatData>>getOrderStatDatas)` | constructor |
| `RefreshOrders` | `public void RefreshOrders()` | method |
| `SelectOrder` | `public void SelectOrder(CraftingOrderItemVM order)` | method |
| `ExecuteOpenPopup` | `public void ExecuteOpenPopup()` | method |
| `ExecuteCloseWithoutSelection` | `public void ExecuteCloseWithoutSelection()` | method |
| `IsVisible` | `public bool IsVisible` | property |
| `QuestType` | `public int QuestType` | property |
| `OrderCountText` | `public string OrderCountText` | property |
| `SelectedCraftingOrder` | `public CraftingOrderItemVM SelectedCraftingOrder` | property |
| `MBBindingList` | `public MBBindingList<CraftingOrderItemVM>CraftingOrders` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingOrderItemVM](../CraftingOrderItemVM)
