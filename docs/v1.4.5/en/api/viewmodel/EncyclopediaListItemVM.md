<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListItemVM.cs`

## Overview

`EncyclopediaListItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Object` | `public object Object { get; }` |
| `ListItem` | `public EncyclopediaListItem ListItem { get; set; }` |
| `IsFiltered` | `public bool IsFiltered { get; set; }` |
| `PlayerCanSeeValues` | `public bool PlayerCanSeeValues { get; set; }` |
| `Id` | `public string Id { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ComparedValue` | `public string ComparedValue { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Execute
`public void Execute()`

**Purpose:** Executes the `execute` operation or workflow.

### SetComparedValue
`public void SetComparedValue(EncyclopediaListItemComparerBase comparer)`

**Purpose:** Sets the value or state of `compared value`.

### ExecuteBeginTooltip
`public void ExecuteBeginTooltip()`

**Purpose:** Executes the `begin tooltip` operation or workflow.

### ExecuteEndTooltip
`public void ExecuteEndTooltip()`

**Purpose:** Executes the `end tooltip` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaListItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)