---
title: "SmeltingSortControllerVM"
description: "Auto-generated class reference for SmeltingSortControllerVM."
---
# SmeltingSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmeltingSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting/SmeltingSortControllerVM.cs`

## Overview

`SmeltingSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `TypeState` | `public int TypeState { get; set; }` |
| `YieldState` | `public int YieldState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsYieldSelected` | `public bool IsYieldSelected { get; set; }` |
| `SortTypeText` | `public string SortTypeText { get; set; }` |
| `SortNameText` | `public string SortNameText { get; set; }` |
| `SortYieldText` | `public string SortYieldText { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
var result = smeltingSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
var result = smeltingSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
var result = smeltingSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
var result = smeltingSortControllerVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.RefreshValues();
```

### SetListToControl
`public void SetListToControl(MBBindingList<SmeltingItemVM> listToControl)`

**Purpose:** Assigns a new value to list to control and updates the object's internal state.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.SetListToControl(listToControl);
```

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** Executes the SortByCurrentState logic.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.SortByCurrentState();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Runs the operation or workflow associated with sort by name.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByYield
`public void ExecuteSortByYield()`

**Purpose:** Runs the operation or workflow associated with sort by yield.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.ExecuteSortByYield();
```

### ExecuteSortByType
`public void ExecuteSortByType()`

**Purpose:** Runs the operation or workflow associated with sort by type.

```csharp
// Obtain an instance of SmeltingSortControllerVM from the subsystem API first
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.ExecuteSortByType();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SmeltingSortControllerVM smeltingSortControllerVM = ...;
smeltingSortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)