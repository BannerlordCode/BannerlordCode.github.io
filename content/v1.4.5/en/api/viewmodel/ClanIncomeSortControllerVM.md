---
title: "ClanIncomeSortControllerVM"
description: "Auto-generated class reference for ClanIncomeSortControllerVM."
---
# ClanIncomeSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanIncomeSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanIncomeSortControllerVM.cs`

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

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
var result = clanIncomeSortControllerVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.RefreshValues();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Runs the operation or workflow associated with `sort by name`.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByLocation
`public void ExecuteSortByLocation()`

**Purpose:** Runs the operation or workflow associated with `sort by location`.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.ExecuteSortByLocation();
```

### ExecuteSortByIncome
`public void ExecuteSortByIncome()`

**Purpose:** Runs the operation or workflow associated with `sort by income`.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.ExecuteSortByIncome();
```

### ResetAllStates
`public void ResetAllStates()`

**Purpose:** Returns `all states` to its default or initial condition.

```csharp
// Obtain an instance of ClanIncomeSortControllerVM from the subsystem API first
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.ResetAllStates();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanIncomeSortControllerVM clanIncomeSortControllerVM = ...;
clanIncomeSortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)