---
title: "SPInventorySortControllerVM"
description: "SPInventorySortControllerVM 的自动生成类参考。"
---
# SPInventorySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SPInventorySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/SPInventorySortControllerVM.cs`

## 概述

`SPInventorySortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSortOption` | `public InventoryItemSortOption? CurrentSortOption { get; }` |
| `CurrentSortState` | `public InventoryItemSortState? CurrentSortState { get; }` |
| `TypeState` | `public int TypeState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `QuantityState` | `public int QuantityState { get; set; }` |
| `CostState` | `public int CostState { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsQuantitySelected` | `public bool IsQuantitySelected { get; set; }` |
| `IsCostSelected` | `public bool IsCostSelected { get; set; }` |

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 为 sort mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### SortByOption
`public void SortByOption(InventoryItemSortOption sortOption, InventoryItemSortState sortState)`

**用途 / Purpose:** 调用 SortByOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SortByOption(sortOption, sortState);
```

### SortByDefaultState
`public void SortByDefaultState()`

**用途 / Purpose:** 调用 SortByDefaultState 对应的操作。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SortByDefaultState();
```

### SortByCurrentState
`public void SortByCurrentState()`

**用途 / Purpose:** 调用 SortByCurrentState 对应的操作。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SortByCurrentState();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 sort by name 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.ExecuteSortByName();
```

### ExecuteSortByType
`public void ExecuteSortByType()`

**用途 / Purpose:** 执行 sort by type 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.ExecuteSortByType();
```

### ExecuteSortByQuantity
`public void ExecuteSortByQuantity()`

**用途 / Purpose:** 执行 sort by quantity 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.ExecuteSortByQuantity();
```

### ExecuteSortByCost
`public void ExecuteSortByCost()`

**用途 / Purpose:** 执行 sort by cost 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventorySortControllerVM 实例
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.ExecuteSortByCost();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SetSortMode(false);
```

## 参见

- [本区域目录](../)