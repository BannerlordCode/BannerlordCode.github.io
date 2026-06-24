<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyUpgradeTroopVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyUpgradeTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyUpgradeTroopVM : PartyTroopManagerVM`
**Base:** `PartyTroopManagerVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs`

## Overview

`PartyUpgradeTroopVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UpgradeCostText` | `public string UpgradeCostText { get; set; }` |
| `UpgradesAndRequirementsText` | `public string UpgradesAndRequirementsText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnRanOutTroop
`public void OnRanOutTroop(PartyCharacterVM troop)`

**Purpose:** Called when the `ran out troop` event is raised.

### OnTroopUpgraded
`public void OnTroopUpgraded()`

**Purpose:** Called when the `troop upgraded` event is raised.

### OpenPopUp
`public override void OpenPopUp()`

**Purpose:** Handles logic related to `open pop up`.

### ExecuteDone
`public override void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteCancel
`public override void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteItemPrimaryAction
`public override void ExecuteItemPrimaryAction()`

**Purpose:** Executes the `item primary action` operation or workflow.

### ExecuteItemSecondaryAction
`public override void ExecuteItemSecondaryAction()`

**Purpose:** Executes the `item secondary action` operation or workflow.

### ExecuteItemTertiaryAction
`public override void ExecuteItemTertiaryAction()`

**Purpose:** Executes the `item tertiary action` operation or workflow.

## Usage Example

```csharp
var value = new PartyUpgradeTroopVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)