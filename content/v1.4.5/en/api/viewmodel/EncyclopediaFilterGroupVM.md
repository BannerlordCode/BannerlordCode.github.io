---
title: "EncyclopediaFilterGroupVM"
description: "Auto-generated class reference for EncyclopediaFilterGroupVM."
---
# EncyclopediaFilterGroupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaFilterGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaFilterGroupVM.cs`

## Overview

`EncyclopediaFilterGroupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FilterName` | `public string FilterName { get; set; }` |
| `Filters` | `public MBBindingList<EncyclopediaListFilterVM> Filters { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaFilterGroupVM from the subsystem API first
EncyclopediaFilterGroupVM encyclopediaFilterGroupVM = ...;
encyclopediaFilterGroupVM.RefreshValues();
```

### CopyFiltersFrom
`public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool> filters)`

**Purpose:** Copies the filters from state of the this instance to a target.

```csharp
// Obtain an instance of EncyclopediaFilterGroupVM from the subsystem API first
EncyclopediaFilterGroupVM encyclopediaFilterGroupVM = ...;
encyclopediaFilterGroupVM.CopyFiltersFrom(dictionary<EncyclopediaFilterItem, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaFilterGroupVM encyclopediaFilterGroupVM = ...;
encyclopediaFilterGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)