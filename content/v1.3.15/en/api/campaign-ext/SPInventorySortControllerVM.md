---
title: "SPInventorySortControllerVM"
description: "Auto-generated class reference for SPInventorySortControllerVM."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SortByOption(sortOption, sortState);
```

### SortByDefaultState
`public void SortByDefaultState()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SortByDefaultState();
```

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SortByCurrentState();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Runs the operation or workflow associated with `sort by name`.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.ExecuteSortByName();
```

### ExecuteSortByType
`public void ExecuteSortByType()`

**Purpose:** Runs the operation or workflow associated with `sort by type`.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.ExecuteSortByType();
```

### ExecuteSortByQuantity
`public void ExecuteSortByQuantity()`

**Purpose:** Runs the operation or workflow associated with `sort by quantity`.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.ExecuteSortByQuantity();
```

### ExecuteSortByCost
`public void ExecuteSortByCost()`

**Purpose:** Runs the operation or workflow associated with `sort by cost`.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.ExecuteSortByCost();
```

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SPInventorySortControllerVM from the subsystem API first
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
var result = sPInventorySortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPInventorySortControllerVM sPInventorySortControllerVM = ...;
sPInventorySortControllerVM.SortByOption(sortOption, sortState);
```

## See Also

- [Area Index](../)