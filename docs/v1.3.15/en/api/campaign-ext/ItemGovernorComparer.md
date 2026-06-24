<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemGovernorComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemGovernorComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemGovernorComparer : ClanFiefsSortControllerVM.ItemComparerBase`
**Base:** `ClanFiefsSortControllerVM.ItemComparerBase`
**Area:** campaign-ext

## Overview

`ItemGovernorComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `GovernorState` | `public int GovernorState { get; set; }` |
| `ProfitState` | `public int ProfitState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsGovernorSelected` | `public bool IsGovernorSelected { get; set; }` |
| `IsProfitSelected` | `public bool IsProfitSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ProfitText` | `public string ProfitText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Executes the `sort by name` operation or workflow.

### ExecuteSortByGovernor
`public void ExecuteSortByGovernor()`

**Purpose:** Executes the `sort by governor` operation or workflow.

### ExecuteSortByProfit
`public void ExecuteSortByProfit()`

**Purpose:** Executes the `sort by profit` operation or workflow.

### ResetAllStates
`public void ResetAllStates()`

**Purpose:** Resets `all states` to its initial state.

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a ItemGovernorComparer instance from game state, then call one of its public methods
var value = new ItemGovernorComparer();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
