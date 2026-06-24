<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartiesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs`

## Overview

`ClanPartiesVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalExpense` | `public int TotalExpense { get; }` |
| `TotalIncome` | `public int TotalIncome { get; }` |
| `CreateNewPartyActionHint` | `public HintViewModel CreateNewPartyActionHint { get; set; }` |
| `IsAnyValidPartySelected` | `public bool IsAnyValidPartySelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CaravansText` | `public string CaravansText { get; set; }` |
| `GarrisonsText` | `public string GarrisonsText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CreateNewPartyText` | `public string CreateNewPartyText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanCreateNewParty` | `public bool CanCreateNewParty { get; set; }` |
| `Parties` | `public MBBindingList<ClanPartyItemVM> Parties { get; set; }` |
| `Caravans` | `public MBBindingList<ClanPartyItemVM> Caravans { get; set; }` |
| `Garrisons` | `public MBBindingList<ClanPartyItemVM> Garrisons { get; set; }` |
| `CurrentSelectedParty` | `public ClanPartyItemVM CurrentSelectedParty { get; set; }` |
| `SortController` | `public ClanPartiesSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshTotalExpense
`public void RefreshTotalExpense()`

**Purpose:** Refreshes the display or cache of `total expense`.

### RefreshPartiesList
`public void RefreshPartiesList()`

**Purpose:** Refreshes the display or cache of `parties list`.

### ExecuteCreateNewParty
`public void ExecuteCreateNewParty()`

**Purpose:** Executes the `create new party` operation or workflow.

### SelectParty
`public void SelectParty(PartyBase party)`

**Purpose:** Handles logic related to `select party`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnShowNewPartyPopup
`public void OnShowNewPartyPopup()`

**Purpose:** Called when the `show new party popup` event is raised.

### OnShowChangeLeaderPopup
`public void OnShowChangeLeaderPopup()`

**Purpose:** Called when the `show change leader popup` event is raised.

## Usage Example

```csharp
var value = new ClanPartiesVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)