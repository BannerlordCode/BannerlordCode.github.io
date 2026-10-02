---
title: "SPInventorySortControllerVM"
description: "SPInventorySortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection.Inventory 的 public 类，继承 ViewModel；公开成员 32 个（方法 7、属性 17、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPInventorySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SPInventorySortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

SPInventorySortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPInventorySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 32 个：7 方法、17 属性、1 构造函数、7 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPInventorySortControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，继承链 SPInventorySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 17/32，方法 7/32），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentSortOption` | `public SPInventorySortControllerVM.InventoryItemSortOption? CurrentSortOption` | 属性 |
| `CurrentSortState` | `public SPInventorySortControllerVM.InventoryItemSortState? CurrentSortState` | 属性 |
| `SPInventorySortControllerVM` | `public SPInventorySortControllerVM(ref MBBindingList<SPItemVM>listToControl)` | 构造函数 |
| `SortByOption` | `public void SortByOption(SPInventorySortControllerVM.InventoryItemSortOption sortOption, SPInventorySortControllerVM.InventoryItemSortState sortState)` | 方法 |
| `SortByDefaultState` | `public void SortByDefaultState()` | 方法 |
| `SortByCurrentState` | `public void SortByCurrentState()` | 方法 |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | 方法 |
| `ExecuteSortByType` | `public void ExecuteSortByType()` | 方法 |
| `ExecuteSortByQuantity` | `public void ExecuteSortByQuantity()` | 方法 |
| `ExecuteSortByCost` | `public void ExecuteSortByCost()` | 方法 |
| `TypeState` | `public int TypeState` | 属性 |
| `NameState` | `public int NameState` | 属性 |
| `QuantityState` | `public int QuantityState` | 属性 |
| `CostState` | `public int CostState` | 属性 |
| `IsTypeSelected` | `public bool IsTypeSelected` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsQuantitySelected` | `public bool IsQuantitySelected` | 属性 |
| `IsCostSelected` | `public bool IsCostSelected` | 属性 |
| `InventoryItemSortState` | `public enum InventoryItemSortState` | 属性 |
| `InventoryItemSortOption` | `public enum InventoryItemSortOption` | 属性 |
| `IComparer` | `public abstract class ItemComparer : IComparer<SPItemVM>` | 属性 |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemTypeComparer : SPInventorySortControllerVM.ItemComparer` | 属性 |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemNameComparer : SPInventorySortControllerVM.ItemComparer` | 属性 |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemQuantityComparer : SPInventorySortControllerVM.ItemComparer` | 属性 |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemCostComparer : SPInventorySortControllerVM.ItemComparer` | 属性 |
| `InventoryItemSortState` | `public enum InventoryItemSortState` | 嵌套类型 |
| `InventoryItemSortOption` | `public enum InventoryItemSortOption` | 嵌套类型 |
| `IComparer` | `public abstract class ItemComparer : IComparer<SPItemVM>` | 嵌套类型 |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemTypeComparer : SPInventorySortControllerVM.ItemComparer` | 嵌套类型 |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemNameComparer : SPInventorySortControllerVM.ItemComparer` | 嵌套类型 |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemQuantityComparer : SPInventorySortControllerVM.ItemComparer` | 嵌套类型 |
| `SPInventorySortControllerVM.ItemComparer` | `public class ItemCostComparer : SPInventorySortControllerVM.ItemComparer` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM/)
- [同命名空间 InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent/)
- [同命名空间 InventoryFilterChangedEvent](../InventoryFilterChangedEvent/)
- [同命名空间 InventoryItemInspectedEvent](../InventoryItemInspectedEvent/)
