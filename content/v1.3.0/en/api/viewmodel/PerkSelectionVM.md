---
title: "PerkSelectionVM"
description: "Auto-generated class reference for PerkSelectionVM."
---
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

**Purpose:** **Purpose:** Assigns a new value to current selection perk and updates the object's internal state.

```csharp
// Obtain an instance of PerkSelectionVM from the subsystem API first
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.SetCurrentSelectionPerk(perk);
```

### ResetSelectedPerks
`public void ResetSelectedPerks()`

**Purpose:** **Purpose:** Returns selected perks to its default or initial condition.

```csharp
// Obtain an instance of PerkSelectionVM from the subsystem API first
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.ResetSelectedPerks();
```

### ApplySelectedPerks
`public void ApplySelectedPerks()`

**Purpose:** **Purpose:** Applies the effect of selected perks to the this instance.

```csharp
// Obtain an instance of PerkSelectionVM from the subsystem API first
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.ApplySelectedPerks();
```

### IsPerkSelected
`public bool IsPerkSelected(PerkObject perk)`

**Purpose:** **Purpose:** Determines whether the this instance is in the perk selected state or condition.

```csharp
// Obtain an instance of PerkSelectionVM from the subsystem API first
PerkSelectionVM perkSelectionVM = ...;
var result = perkSelectionVM.IsPerkSelected(perk);
```

### IsAnyPerkSelected
`public bool IsAnyPerkSelected()`

**Purpose:** **Purpose:** Determines whether the this instance is in the any perk selected state or condition.

```csharp
// Obtain an instance of PerkSelectionVM from the subsystem API first
PerkSelectionVM perkSelectionVM = ...;
var result = perkSelectionVM.IsAnyPerkSelected();
```

### ExecuteDeactivate
`public void ExecuteDeactivate()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with deactivate.

```csharp
// Obtain an instance of PerkSelectionVM from the subsystem API first
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.ExecuteDeactivate();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.SetCurrentSelectionPerk(perk);
```

## See Also

- [Area Index](../)