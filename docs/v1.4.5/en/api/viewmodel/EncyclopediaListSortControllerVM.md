<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListSortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListSortControllerVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetSortSelection
`public void SetSortSelection(int index)`

**Purpose:** Sets the value or state of `sort selection`.

### ExecuteSwitchSortOrder
`public void ExecuteSwitchSortOrder()`

**Purpose:** Executes the `switch sort order` operation or workflow.

### SetSortOrder
`public void SetSortOrder(bool isAscending)`

**Purpose:** Sets the value or state of `sort order`.

### GetSortOrder
`public bool GetSortOrder()`

**Purpose:** Gets the current value of `sort order`.

## Usage Example

```csharp
var value = new EncyclopediaListSortControllerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)