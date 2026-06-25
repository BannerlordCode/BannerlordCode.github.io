---
title: "ClanIncomeSortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanIncomeSortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanIncomeSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanIncomeSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanIncomeSortControllerVM.cs`

## Overview

`ClanIncomeSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `LocationState` | `public int LocationState { get; set; }` |
| `IncomeState` | `public int IncomeState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsLocationSelected` | `public bool IsLocationSelected { get; set; }` |
| `IsIncomeSelected` | `public bool IsIncomeSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Handles logic related to `compare`.

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)`

**Purpose:** Handles logic related to `compare`.

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Executes the `sort by name` operation or workflow.

### ExecuteSortByLocation
`public void ExecuteSortByLocation()`

**Purpose:** Executes the `sort by location` operation or workflow.

### ExecuteSortByIncome
`public void ExecuteSortByIncome()`

**Purpose:** Executes the `sort by income` operation or workflow.

### ResetAllStates
`public void ResetAllStates()`

**Purpose:** Resets `all states` to its initial state.

## Usage Example

```csharp
var value = new ClanIncomeSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)