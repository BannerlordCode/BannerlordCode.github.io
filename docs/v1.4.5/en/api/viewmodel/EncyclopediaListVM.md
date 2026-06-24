<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### GetName
`public override string GetName()`

**Purpose:** Gets the current value of `name`.

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Gets the current value of `navigation bar u r l`.

### CopyFiltersFrom
`public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool> filters)`

**Purpose:** Handles logic related to `copy filters from`.

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new EncyclopediaListVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)