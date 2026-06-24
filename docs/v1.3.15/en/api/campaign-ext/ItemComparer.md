<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemComparer : IComparer<SPItemVM>`
**Base:** `IComparer<SPItemVM>`
**Area:** campaign-ext

## Overview

`ItemComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void SortByOption(SPInventorySortControllerVM.InventoryItemSortOption sortOption, SPInventorySortControllerVM.InventoryItemSortState sortState)`

**Purpose:** Handles logic related to `sort by option`.

### SortByDefaultState
`public void SortByDefaultState()`

**Purpose:** Handles logic related to `sort by default state`.

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** Handles logic related to `sort by current state`.

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Executes the `sort by name` operation or workflow.

### ExecuteSortByType
`public void ExecuteSortByType()`

**Purpose:** Executes the `sort by type` operation or workflow.

### ExecuteSortByQuantity
`public void ExecuteSortByQuantity()`

**Purpose:** Executes the `sort by quantity` operation or workflow.

### ExecuteSortByCost
`public void ExecuteSortByCost()`

**Purpose:** Executes the `sort by cost` operation or workflow.

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var implementation = new CustomItemComparer();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
