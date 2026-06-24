<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorkshopItemNameComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WorkshopItemNameComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WorkshopItemNameComparer : ClanIncomeSortControllerVM.WorkshopItemComparerBase`
**Base:** `ClanIncomeSortControllerVM.WorkshopItemComparerBase`
**Area:** campaign-ext

## Overview

`WorkshopItemNameComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Usage Example

```csharp
// First obtain a WorkshopItemNameComparer instance from game state, then call one of its public methods
var value = new WorkshopItemNameComparer();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
