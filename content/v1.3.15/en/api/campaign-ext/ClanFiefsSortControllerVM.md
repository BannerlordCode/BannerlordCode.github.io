---
title: "ClanFiefsSortControllerVM"
description: "Auto-generated class reference for ClanFiefsSortControllerVM."
---
# ClanFiefsSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFiefsSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs`

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

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.RefreshValues();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Runs the operation or workflow associated with `sort by name`.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByGovernor
`public void ExecuteSortByGovernor()`

**Purpose:** Runs the operation or workflow associated with `sort by governor`.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.ExecuteSortByGovernor();
```

### ExecuteSortByProfit
`public void ExecuteSortByProfit()`

**Purpose:** Runs the operation or workflow associated with `sort by profit`.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.ExecuteSortByProfit();
```

### ResetAllStates
`public void ResetAllStates()`

**Purpose:** Returns `all states` to its default or initial condition.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.ResetAllStates();
```

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
var result = clanFiefsSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
var result = clanFiefsSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
var result = clanFiefsSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanSettlementItemVM x, ClanSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanFiefsSortControllerVM from the subsystem API first
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
var result = clanFiefsSortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanFiefsSortControllerVM clanFiefsSortControllerVM = ...;
clanFiefsSortControllerVM.RefreshValues();
```

## See Also

- [Area Index](../)