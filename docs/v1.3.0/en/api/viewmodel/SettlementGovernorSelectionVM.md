<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementGovernorSelectionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementGovernorSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementGovernorSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionVM.cs`

## Overview

`SettlementGovernorSelectionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AvailableGovernors` | `public MBBindingList<SettlementGovernorSelectionItemVM> AvailableGovernors { get; set; }` |
| `CurrentGovernorIndex` | `public int CurrentGovernorIndex { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new SettlementGovernorSelectionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)