<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaContentPageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaContentPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaContentPageVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaContentPageVM.cs`

## Overview

`EncyclopediaContentPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled { get; set; }` |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled { get; set; }` |
| `PreviousButtonLabel` | `public string PreviousButtonLabel { get; set; }` |
| `NextButtonLabel` | `public string NextButtonLabel { get; set; }` |
| `PreviousButtonHint` | `public HintViewModel PreviousButtonHint { get; set; }` |
| `NextButtonHint` | `public HintViewModel NextButtonHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### InitializeQuickNavigation
`public void InitializeQuickNavigation(EncyclopediaListVM list)`

**Purpose:** Initializes the state, resources, or bindings for `quick navigation`.

### ExecuteGoToNextItem
`public void ExecuteGoToNextItem()`

**Purpose:** Executes the `go to next item` operation or workflow.

### ExecuteGoToPreviousItem
`public void ExecuteGoToPreviousItem()`

**Purpose:** Executes the `go to previous item` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaContentPageVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)