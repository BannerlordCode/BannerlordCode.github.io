---
title: "ClanFiefsSortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFiefsSortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFiefsSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFiefsSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanFiefsSortControllerVM.cs`

## Overview

`ClanFiefsSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

## Usage Example

```csharp
var value = new ClanFiefsSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)