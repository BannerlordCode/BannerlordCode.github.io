<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkSelectionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerkSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PerkSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs`

## Overview

`PerkSelectionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AvailablePerks` | `public MBBindingList<PerkSelectionItemVM> AvailablePerks { get; set; }` |

## Key Methods

### SetCurrentSelectionPerk
`public void SetCurrentSelectionPerk(PerkVM perk)`

**Purpose:** Sets the value or state of `current selection perk`.

### ResetSelectedPerks
`public void ResetSelectedPerks()`

**Purpose:** Resets `selected perks` to its initial state.

### ApplySelectedPerks
`public void ApplySelectedPerks()`

**Purpose:** Applies `selected perks` to the current object.

### IsPerkSelected
`public bool IsPerkSelected(PerkObject perk)`

**Purpose:** Handles logic related to `is perk selected`.

### IsAnyPerkSelected
`public bool IsAnyPerkSelected()`

**Purpose:** Handles logic related to `is any perk selected`.

### ExecuteDeactivate
`public void ExecuteDeactivate()`

**Purpose:** Executes the `deactivate` operation or workflow.

## Usage Example

```csharp
var value = new PerkSelectionVM();
value.SetCurrentSelectionPerk(perk);
```

## See Also

- [Complete Class Catalog](../catalog)