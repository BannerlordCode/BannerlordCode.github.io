---
title: "SPInventorySortControllerVM"
description: "SPInventorySortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Inventory, inheriting ViewModel; 32 exposed members (7 methods, 17 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPInventorySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SPInventorySortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

SPInventorySortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPInventorySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 32 public/protected members: 7 methods, 17 properties, 1 constructors, 7 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPInventorySortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`, inheritance chain SPInventorySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 17/32, methods 7/32), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM/)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent/)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent/)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent/)
