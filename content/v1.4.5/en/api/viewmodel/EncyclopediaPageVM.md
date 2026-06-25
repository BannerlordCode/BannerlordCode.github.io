---
title: "EncyclopediaPageVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaPageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaPageVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaPageVM.cs`

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

**Purpose:** Gets the current value of `name`.

### GetNavigationBarURL
`public virtual string GetNavigationBarURL()`

**Purpose:** Gets the current value of `navigation bar u r l`.

### Refresh
`public virtual void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### OnTick
`public virtual void OnTick()`

**Purpose:** Called when the `tick` event is raised.

### ExecuteSwitchBookmarkedState
`public virtual void ExecuteSwitchBookmarkedState()`

**Purpose:** Executes the `switch bookmarked state` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaPageVM();
value.GetName();
```

## See Also

- [Complete Class Catalog](../catalog)