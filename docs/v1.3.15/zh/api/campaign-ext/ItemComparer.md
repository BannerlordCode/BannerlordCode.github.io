<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ItemComparer` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void SortByOption(SPInventorySortControllerVM.InventoryItemSortOption sortOption, SPInventorySortControllerVM.InventoryItemSortState sortState)
```

### SortByDefaultState

```csharp
public void SortByDefaultState()
```

### SortByCurrentState

```csharp
public void SortByCurrentState()
```

### ExecuteSortByName

```csharp
public void ExecuteSortByName()
```

### ExecuteSortByType

```csharp
public void ExecuteSortByType()
```

### ExecuteSortByQuantity

```csharp
public void ExecuteSortByQuantity()
```

### ExecuteSortByCost

```csharp
public void ExecuteSortByCost()
```

### SetSortMode

```csharp
public void SetSortMode(bool isAscending)
```

### Compare

```csharp
public abstract int Compare(SPItemVM x, SPItemVM y)
```

### Compare

```csharp
public override int Compare(SPItemVM x, SPItemVM y)
```

### Compare

```csharp
public override int Compare(SPItemVM x, SPItemVM y)
```

### Compare

```csharp
public override int Compare(SPItemVM x, SPItemVM y)
```

### Compare

```csharp
public override int Compare(SPItemVM x, SPItemVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)