---
title: "CraftingOrderPopupVM"
description: "CraftingOrderPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order, inheriting ViewModel; 12 exposed members (4 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingOrderPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingOrderPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CraftingOrderPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingOrderPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingOrderPopupVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`, inheritance chain CraftingOrderPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingOrderItemVM](../CraftingOrderItemVM/)
