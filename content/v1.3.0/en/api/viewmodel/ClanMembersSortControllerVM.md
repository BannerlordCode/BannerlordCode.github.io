---
title: "ClanMembersSortControllerVM"
description: "Auto-generated class reference for ClanMembersSortControllerVM."
---
# ClanMembersSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanMembersSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs`

## Overview

`ClanMembersSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanMembersSortControllerVM from the subsystem API first
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.RefreshValues();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by name.

```csharp
// Obtain an instance of ClanMembersSortControllerVM from the subsystem API first
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByLocation
`public void ExecuteSortByLocation()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by location.

```csharp
// Obtain an instance of ClanMembersSortControllerVM from the subsystem API first
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.ExecuteSortByLocation();
```

### ResetAllStates
`public void ResetAllStates()`

**Purpose:** **Purpose:** Returns all states to its default or initial condition.

```csharp
// Obtain an instance of ClanMembersSortControllerVM from the subsystem API first
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.ResetAllStates();
```

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** **Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of ClanMembersSortControllerVM from the subsystem API first
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ClanMembersSortControllerVM from the subsystem API first
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
var result = clanMembersSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ClanMembersSortControllerVM from the subsystem API first
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
var result = clanMembersSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ClanMembersSortControllerVM from the subsystem API first
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
var result = clanMembersSortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanMembersSortControllerVM clanMembersSortControllerVM = ...;
clanMembersSortControllerVM.RefreshValues();
```

## See Also

- [Area Index](../)