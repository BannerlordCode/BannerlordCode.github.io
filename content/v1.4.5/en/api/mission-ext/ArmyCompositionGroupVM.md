---
title: "ArmyCompositionGroupVM"
description: "Auto-generated class reference for ArmyCompositionGroupVM."
---
# ArmyCompositionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyCompositionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs`

## Overview

`ArmyCompositionGroupVM` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MeleeInfantryComposition` | `public ArmyCompositionItemVM MeleeInfantryComposition { get; set; }` |
| `RangedInfantryComposition` | `public ArmyCompositionItemVM RangedInfantryComposition { get; set; }` |
| `MeleeCavalryComposition` | `public ArmyCompositionItemVM MeleeCavalryComposition { get; set; }` |
| `RangedCavalryComposition` | `public ArmyCompositionItemVM RangedCavalryComposition { get; set; }` |
| `ArmySizeTitle` | `public string ArmySizeTitle { get; set; }` |
| `ArmySize` | `public int ArmySize { get; set; }` |
| `MaxArmySize` | `public int MaxArmySize { get; set; }` |
| `MinArmySize` | `public int MinArmySize { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ArmyCompositionGroupVM from the subsystem API first
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.RefreshValues();
```

### SetCurrentSelectedCulture
`public void SetCurrentSelectedCulture(BasicCultureObject selectedCulture)`

**Purpose:** Assigns a new value to current selected culture and updates the object's internal state.

```csharp
// Obtain an instance of ArmyCompositionGroupVM from the subsystem API first
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.SetCurrentSelectedCulture(selectedCulture);
```

### ExecuteRandomize
`public void ExecuteRandomize(ArmyCompositionGroupVM oppositeSide = null)`

**Purpose:** Runs the operation or workflow associated with randomize.

```csharp
// Obtain an instance of ArmyCompositionGroupVM from the subsystem API first
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.ExecuteRandomize(null);
```

### OnPlayerTypeChange
`public void OnPlayerTypeChange(CustomBattlePlayerType playerType)`

**Purpose:** Invoked when the player type change event is raised.

```csharp
// Obtain an instance of ArmyCompositionGroupVM from the subsystem API first
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.OnPlayerTypeChange(playerType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)