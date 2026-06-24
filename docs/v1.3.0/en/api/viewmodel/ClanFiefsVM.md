<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanFiefsVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFiefsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFiefsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs`

## Overview

`ClanFiefsVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GovernorActionText` | `public string GovernorActionText { get; set; }` |
| `CanChangeGovernorOfCurrentFief` | `public bool CanChangeGovernorOfCurrentFief { get; set; }` |
| `GovernorActionHint` | `public HintViewModel GovernorActionHint { get; set; }` |
| `IsAnyValidFiefSelected` | `public bool IsAnyValidFiefSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TaxText` | `public string TaxText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ProfitText` | `public string ProfitText { get; set; }` |
| `TownsText` | `public string TownsText { get; set; }` |
| `CastlesText` | `public string CastlesText { get; set; }` |
| `NoFiefsText` | `public string NoFiefsText { get; set; }` |
| `NoGovernorText` | `public string NoGovernorText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Settlements` | `public MBBindingList<ClanSettlementItemVM> Settlements { get; set; }` |
| `Castles` | `public MBBindingList<ClanSettlementItemVM> Castles { get; set; }` |
| `CurrentSelectedFief` | `public ClanSettlementItemVM CurrentSelectedFief { get; set; }` |
| `SortController` | `public ClanFiefsSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshAllLists
`public void RefreshAllLists()`

**Purpose:** Refreshes the display or cache of `all lists`.

### SelectFief
`public void SelectFief(Settlement settlement)`

**Purpose:** Handles logic related to `select fief`.

### ExecuteAssignGovernor
`public void ExecuteAssignGovernor()`

**Purpose:** Executes the `assign governor` operation or workflow.

## Usage Example

```csharp
var value = new ClanFiefsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)