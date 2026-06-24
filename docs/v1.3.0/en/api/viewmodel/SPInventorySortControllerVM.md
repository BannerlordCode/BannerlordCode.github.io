<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPInventorySortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPInventorySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SPInventorySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs`

## Overview

`SPInventorySortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new SPInventorySortControllerVM();
value.SortByOption(sortOption, sortState);
```

## See Also

- [Complete Class Catalog](../catalog)