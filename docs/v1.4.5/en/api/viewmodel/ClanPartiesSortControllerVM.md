<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartiesSortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanPartiesSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartiesSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanPartiesSortControllerVM.cs`

## Overview

`ClanPartiesSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `LocationState` | `public int LocationState { get; set; }` |
| `SizeState` | `public int SizeState { get; set; }` |
| `ShipCountState` | `public int ShipCountState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsLocationSelected` | `public bool IsLocationSelected { get; set; }` |
| `IsSizeSelected` | `public bool IsSizeSelected { get; set; }` |
| `IsShipCountSelected` | `public bool IsShipCountSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `ShipCountText` | `public string ShipCountText { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

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

### ExecuteSortBySize
`public void ExecuteSortBySize()`

**Purpose:** Executes the `sort by size` operation or workflow.

### ExecuteSortByShipCount
`public void ExecuteSortByShipCount()`

**Purpose:** Executes the `sort by ship count` operation or workflow.

### ResetAllStates
`public void ResetAllStates()`

**Purpose:** Resets `all states` to its initial state.

## Usage Example

```csharp
var value = new ClanPartiesSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)