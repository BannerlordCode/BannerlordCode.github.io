---
title: "PartyUpgradeTroopVM"
description: "Auto-generated class reference for PartyUpgradeTroopVM."
---
# PartyUpgradeTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyUpgradeTroopVM : PartyTroopManagerVM`
**Base:** `PartyTroopManagerVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.RefreshValues();
```

### OnRanOutTroop
`public void OnRanOutTroop(PartyCharacterVM troop)`

**Purpose:** Invoked when the `ran out troop` event is raised.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.OnRanOutTroop(troop);
```

### OnTroopUpgraded
`public void OnTroopUpgraded()`

**Purpose:** Invoked when the `troop upgraded` event is raised.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.OnTroopUpgraded();
```

### OpenPopUp
`public override void OpenPopUp()`

**Purpose:** Opens the resource or UI associated with `pop up`.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.OpenPopUp();
```

### ExecuteDone
`public override void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with `done`.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteDone();
```

### ExecuteCancel
`public override void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteCancel();
```

### ExecuteItemPrimaryAction
`public override void ExecuteItemPrimaryAction()`

**Purpose:** Runs the operation or workflow associated with `item primary action`.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteItemPrimaryAction();
```

### ExecuteItemSecondaryAction
`public override void ExecuteItemSecondaryAction()`

**Purpose:** Runs the operation or workflow associated with `item secondary action`.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteItemSecondaryAction();
```

### ExecuteItemTertiaryAction
`public override void ExecuteItemTertiaryAction()`

**Purpose:** Runs the operation or workflow associated with `item tertiary action`.

```csharp
// Obtain an instance of PartyUpgradeTroopVM from the subsystem API first
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteItemTertiaryAction();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.RefreshValues();
```

## See Also

- [Area Index](../)