---
title: "EncyclopediaListSortControllerVM"
description: "Auto-generated class reference for EncyclopediaListSortControllerVM."
---
# EncyclopediaListSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs`

## Overview

`EncyclopediaListSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SortSelection` | `public EncyclopediaListSelectorVM SortSelection { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `SortedValueLabelText` | `public string SortedValueLabelText { get; set; }` |
| `SortByLabel` | `public string SortByLabel { get; set; }` |
| `AlternativeSortState` | `public int AlternativeSortState { get; set; }` |
| `IsAlternativeSortVisible` | `public bool IsAlternativeSortVisible { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaListSortControllerVM from the subsystem API first
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of EncyclopediaListSortControllerVM from the subsystem API first
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.OnFinalize();
```

### SetSortSelection
`public void SetSortSelection(int index)`

**Purpose:** Assigns a new value to sort selection and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaListSortControllerVM from the subsystem API first
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.SetSortSelection(0);
```

### ExecuteSwitchSortOrder
`public void ExecuteSwitchSortOrder()`

**Purpose:** Runs the operation or workflow associated with switch sort order.

```csharp
// Obtain an instance of EncyclopediaListSortControllerVM from the subsystem API first
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.ExecuteSwitchSortOrder();
```

### SetSortOrder
`public void SetSortOrder(bool isAscending)`

**Purpose:** Assigns a new value to sort order and updates the object's internal state.

```csharp
// Obtain an instance of EncyclopediaListSortControllerVM from the subsystem API first
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.SetSortOrder(false);
```

### GetSortOrder
`public bool GetSortOrder()`

**Purpose:** Reads and returns the sort order value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaListSortControllerVM from the subsystem API first
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
var result = encyclopediaListSortControllerVM.GetSortOrder();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaListSortControllerVM encyclopediaListSortControllerVM = ...;
encyclopediaListSortControllerVM.RefreshValues();
```

## See Also

- [Area Index](../)