---
title: "EncyclopediaPageVM"
description: "Auto-generated class reference for EncyclopediaPageVM."
---
# EncyclopediaPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaPageVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaPageVM.cs`

## Overview

`EncyclopediaPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLoadingOver` | `public bool IsLoadingOver { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |
| `BookmarkHint` | `public HintViewModel BookmarkHint { get; set; }` |
| `Items` | `public virtual MBBindingList<EncyclopediaListItemVM> Items { get; set; }` |
| `FilterGroups` | `public virtual MBBindingList<EncyclopediaFilterGroupVM> FilterGroups { get; set; }` |
| `SortController` | `public virtual EncyclopediaListSortControllerVM SortController { get; set; }` |

## Key Methods

### GetName
`public virtual string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaPageVM from the subsystem API first
EncyclopediaPageVM encyclopediaPageVM = ...;
var result = encyclopediaPageVM.GetName();
```

### GetNavigationBarURL
`public virtual string GetNavigationBarURL()`

**Purpose:** Reads and returns the `navigation bar u r l` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaPageVM from the subsystem API first
EncyclopediaPageVM encyclopediaPageVM = ...;
var result = encyclopediaPageVM.GetNavigationBarURL();
```

### Refresh
`public virtual void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of EncyclopediaPageVM from the subsystem API first
EncyclopediaPageVM encyclopediaPageVM = ...;
encyclopediaPageVM.Refresh();
```

### OnTick
`public virtual void OnTick()`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of EncyclopediaPageVM from the subsystem API first
EncyclopediaPageVM encyclopediaPageVM = ...;
encyclopediaPageVM.OnTick();
```

### ExecuteSwitchBookmarkedState
`public virtual void ExecuteSwitchBookmarkedState()`

**Purpose:** Runs the operation or workflow associated with `switch bookmarked state`.

```csharp
// Obtain an instance of EncyclopediaPageVM from the subsystem API first
EncyclopediaPageVM encyclopediaPageVM = ...;
encyclopediaPageVM.ExecuteSwitchBookmarkedState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaPageVM encyclopediaPageVM = ...;
encyclopediaPageVM.GetName();
```

## See Also

- [Area Index](../)