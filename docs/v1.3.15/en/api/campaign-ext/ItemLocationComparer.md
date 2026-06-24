<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemLocationComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemLocationComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemLocationComparer : ClanMembersSortControllerVM.ItemComparerBase`
**Base:** `ClanMembersSortControllerVM.ItemComparerBase`
**Area:** campaign-ext

## Overview

`ItemLocationComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `LocationState` | `public int LocationState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsLocationSelected` | `public bool IsLocationSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |

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

### ResetAllStates
`public void ResetAllStates()`

**Purpose:** Resets `all states` to its initial state.

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a ItemLocationComparer instance from game state, then call one of its public methods
var value = new ItemLocationComparer();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
