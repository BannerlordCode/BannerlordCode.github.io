---
title: "SPInventorySortControllerVM"
description: "SPInventorySortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 32 exposed members (7 methods, 17 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs."
---
# SPInventorySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SPInventorySortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs`

## Overview

SPInventorySortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPInventorySortControllerVM → ViewModel. It exposes 32 public/protected members: 7 methods, 17 properties, 1 constructors, 7 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPInventorySortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain SPInventorySortControllerVM → ViewModel. The surface is property-led (properties 17/32, methods 7/32), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentSortOption` | `public SPInventorySortControllerVM.InventoryItemSortOption? CurrentSortOption` | property |
| `CurrentSortState` | `public SPInventorySortControllerVM.InventoryItemSortState? CurrentSortState` | property |
| `SPInventorySortControllerVM` | `public SPInventorySortControllerVM(ref MBBindingList<SPItemVM>listToControl)` | constructor |
| `SortByOption` | `public void SortByOption(SPInventorySortControllerVM.InventoryItemSortOption sortOption, SPInventorySortControllerVM.InventoryItemSortState sortState)` | method |
| `SortByDefaultState` | `public void SortByDefaultState()` | method |
| `SortByCurrentState` | `public void SortByCurrentState()` | method |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | method |
| `ExecuteSortByType` | `public void ExecuteSortByType()` | method |
| `ExecuteSortByQuantity` | `public void ExecuteSortByQuantity()` | method |
| `ExecuteSortByCost` | `public void ExecuteSortByCost()` | method |
| `TypeState` | `public int TypeState` | property |
| `NameState` | `public int NameState` | property |
| `QuantityState` | `public int QuantityState` | property |
| `CostState` | `public int CostState` | property |
| `IsTypeSelected` | `public bool IsTypeSelected` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsQuantitySelected` | `public bool IsQuantitySelected` | property |
| `IsCostSelected` | `public bool IsCostSelected` | property |
| `InventoryItemSortState` | `public enum InventoryItemSortState` | property |
| `InventoryItemSortOption` | `public enum InventoryItemSortOption` | property |
| `IComparer` | `public abstract class ItemComparer : IComparer<SPItemVM>` | property |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemTypeComparer : SPInventorySortControllerVM.ItemComparer` | property |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemNameComparer : SPInventorySortControllerVM.ItemComparer` | property |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemQuantityComparer : SPInventorySortControllerVM.ItemComparer` | property |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemCostComparer : SPInventorySortControllerVM.ItemComparer` | property |
| `InventoryItemSortState` | `public enum InventoryItemSortState` | nested type |
| `InventoryItemSortOption` | `public enum InventoryItemSortOption` | nested type |
| `IComparer` | `public abstract class ItemComparer : IComparer<SPItemVM>` | nested type |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemTypeComparer : SPInventorySortControllerVM.ItemComparer` | nested type |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemNameComparer : SPInventorySortControllerVM.ItemComparer` | nested type |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemQuantityComparer : SPInventorySortControllerVM.ItemComparer` | nested type |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemCostComparer : SPInventorySortControllerVM.ItemComparer` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
