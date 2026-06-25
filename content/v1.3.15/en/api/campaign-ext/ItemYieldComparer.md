---
title: "ItemYieldComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemYieldComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemYieldComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemYieldComparer : SmeltingSortControllerVM.ItemComparerBase`
**Base:** `SmeltingSortControllerVM.ItemComparerBase`
**Area:** campaign-ext

## Overview

`ItemYieldComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetListToControl
`public void SetListToControl(MBBindingList<SmeltingItemVM> listToControl)`

**Purpose:** Sets the value or state of `list to control`.

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** Handles logic related to `sort by current state`.

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Executes the `sort by name` operation or workflow.

### ExecuteSortByYield
`public void ExecuteSortByYield()`

**Purpose:** Executes the `sort by yield` operation or workflow.

### ExecuteSortByType
`public void ExecuteSortByType()`

**Purpose:** Executes the `sort by type` operation or workflow.

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a ItemYieldComparer instance from game state, then call one of its public methods
var value = new ItemYieldComparer();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
