<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ItemComparer` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)