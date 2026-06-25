---
title: "EncyclopediaListVM"
description: "Auto-generated class reference for EncyclopediaListVM."
---
# EncyclopediaListVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListVM.cs`

## Overview

`EncyclopediaListVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EmptyListText` | `public string EmptyListText { get; set; }` |
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `Items` | `public override MBBindingList<EncyclopediaListItemVM> Items { get; set; }` |
| `SortController` | `public override EncyclopediaListSortControllerVM SortController { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsFilterHighlightEnabled` | `public bool IsFilterHighlightEnabled { get; set; }` |
| `FilterGroups` | `public override MBBindingList<EncyclopediaFilterGroupVM> FilterGroups { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaListVM from the subsystem API first
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of EncyclopediaListVM from the subsystem API first
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.OnFinalize();
```

### GetName
`public override string GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaListVM from the subsystem API first
EncyclopediaListVM encyclopediaListVM = ...;
var result = encyclopediaListVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Reads and returns the navigation bar u r l value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaListVM from the subsystem API first
EncyclopediaListVM encyclopediaListVM = ...;
var result = encyclopediaListVM.GetNavigationBarURL();
```

### CopyFiltersFrom
`public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool> filters)`

**Purpose:** Copies the filters from state of the this instance to a target.

```csharp
// Obtain an instance of EncyclopediaListVM from the subsystem API first
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.CopyFiltersFrom(dictionary<EncyclopediaFilterItem, false);
```

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of EncyclopediaListVM from the subsystem API first
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.Refresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaListVM encyclopediaListVM = ...;
encyclopediaListVM.RefreshValues();
```

## See Also

- [Area Index](../)