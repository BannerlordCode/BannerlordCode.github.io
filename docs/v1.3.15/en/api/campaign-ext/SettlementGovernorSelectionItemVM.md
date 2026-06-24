<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementGovernorSelectionItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementGovernorSelectionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementGovernorSelectionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs`

## Overview

`SettlementGovernorSelectionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Governor` | `public Hero Governor { get; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `GovernorHint` | `public BasicTooltipViewModel GovernorHint { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnSelection
`public void OnSelection()`

**Purpose:** Called when the `selection` event is raised.

## Usage Example

```csharp
var value = new SettlementGovernorSelectionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)