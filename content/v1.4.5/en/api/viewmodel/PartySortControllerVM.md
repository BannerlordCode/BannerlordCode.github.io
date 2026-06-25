---
title: "PartySortControllerVM"
description: "Auto-generated class reference for PartySortControllerVM."
---
# PartySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PartySortControllerVM.cs`

## Overview

`PartySortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; set; }` |
| `IsCustomSort` | `public bool IsCustomSort { get; set; }` |
| `SortOptions` | `public SelectorVM<TroopSortSelectorItemVM> SortOptions { get; set; }` |

## Key Methods

### SelectSortType
`public void SelectSortType(PartyScreenLogic.TroopSortType sortType)`

**Purpose:** Executes the SelectSortType logic.

```csharp
// Obtain an instance of PartySortControllerVM from the subsystem API first
PartySortControllerVM partySortControllerVM = ...;
partySortControllerVM.SelectSortType(sortType);
```

### SortWith
`public void SortWith(PartyScreenLogic.TroopSortType sortType, bool isAscending)`

**Purpose:** Executes the SortWith logic.

```csharp
// Obtain an instance of PartySortControllerVM from the subsystem API first
PartySortControllerVM partySortControllerVM = ...;
partySortControllerVM.SortWith(sortType, false);
```

### ExecuteToggleOrder
`public void ExecuteToggleOrder()`

**Purpose:** Runs the operation or workflow associated with toggle order.

```csharp
// Obtain an instance of PartySortControllerVM from the subsystem API first
PartySortControllerVM partySortControllerVM = ...;
partySortControllerVM.ExecuteToggleOrder();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartySortControllerVM partySortControllerVM = ...;
partySortControllerVM.SelectSortType(sortType);
```

## See Also

- [Area Index](../)