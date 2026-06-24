<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** `public abstract class ItemComparer : IComparer<SPItemVM>`
**Base:** `IComparer<SPItemVM>`
**领域:** campaign-ext

## 概述

`ItemComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSortOption` | `public SPInventorySortControllerVM.InventoryItemSortOption? CurrentSortOption { get; }` |
| `CurrentSortState` | `public SPInventorySortControllerVM.InventoryItemSortState? CurrentSortState { get; }` |
| `TypeState` | `public int TypeState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `QuantityState` | `public int QuantityState { get; set; }` |
| `CostState` | `public int CostState { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsQuantitySelected` | `public bool IsQuantitySelected { get; set; }` |
| `IsCostSelected` | `public bool IsCostSelected { get; set; }` |

## 主要方法

### SortByOption
`public void SortByOption(SPInventorySortControllerVM.InventoryItemSortOption sortOption, SPInventorySortControllerVM.InventoryItemSortState sortState)`

**用途 / Purpose:** 处理 `sort by option` 相关逻辑。

### SortByDefaultState
`public void SortByDefaultState()`

**用途 / Purpose:** 处理 `sort by default state` 相关逻辑。

### SortByCurrentState
`public void SortByCurrentState()`

**用途 / Purpose:** 处理 `sort by current state` 相关逻辑。

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 `sort by name` 操作或流程。

### ExecuteSortByType
`public void ExecuteSortByType()`

**用途 / Purpose:** 执行 `sort by type` 操作或流程。

### ExecuteSortByQuantity
`public void ExecuteSortByQuantity()`

**用途 / Purpose:** 执行 `sort by quantity` 操作或流程。

### ExecuteSortByCost
`public void ExecuteSortByCost()`

**用途 / Purpose:** 执行 `sort by cost` 操作或流程。

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomItemComparer();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
