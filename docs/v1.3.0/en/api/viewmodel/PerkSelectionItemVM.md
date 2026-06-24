<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkSelectionItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerkSelectionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PerkSelectionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs`

## Overview

`PerkSelectionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PickText` | `public string PickText { get; set; }` |
| `PerkName` | `public string PerkName { get; set; }` |
| `PerkDescription` | `public string PerkDescription { get; set; }` |
| `PerkRole` | `public string PerkRole { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Executes the `selection` operation or workflow.

## Usage Example

```csharp
var value = new PerkSelectionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)