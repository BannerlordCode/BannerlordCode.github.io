---
title: "ArmyCompositionItemVM"
description: "Auto-generated class reference for ArmyCompositionItemVM."
---
# ArmyCompositionItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyCompositionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs`

## Overview

`ArmyCompositionItemVM` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopTypes` | `public MBBindingList<CustomBattleTroopTypeVM> TroopTypes { get; set; }` |
| `InvalidHint` | `public HintViewModel InvalidHint { get; set; }` |
| `AddTroopTypeHint` | `public HintViewModel AddTroopTypeHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `CompositionValue` | `public int CompositionValue { get; set; }` |
| `CompositionValuePercentageText` | `public string CompositionValuePercentageText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ArmyCompositionItemVM from the subsystem API first
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.RefreshValues();
```

### SetCurrentSelectedCulture
`public void SetCurrentSelectedCulture(BasicCultureObject culture)`

**Purpose:** Assigns a new value to current selected culture and updates the object's internal state.

```csharp
// Obtain an instance of ArmyCompositionItemVM from the subsystem API first
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.SetCurrentSelectedCulture(culture);
```

### ExecuteRandomize
`public void ExecuteRandomize(int compositionValue)`

**Purpose:** Runs the operation or workflow associated with randomize.

```csharp
// Obtain an instance of ArmyCompositionItemVM from the subsystem API first
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.ExecuteRandomize(0);
```

### ExecuteAddTroopTypes
`public void ExecuteAddTroopTypes()`

**Purpose:** Runs the operation or workflow associated with add troop types.

```csharp
// Obtain an instance of ArmyCompositionItemVM from the subsystem API first
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.ExecuteAddTroopTypes();
```

### RefreshCompositionValue
`public void RefreshCompositionValue()`

**Purpose:** Keeps the display or cache of composition value in sync with the underlying state.

```csharp
// Obtain an instance of ArmyCompositionItemVM from the subsystem API first
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.RefreshCompositionValue();
```

### GetTroopTypeIconData
`public static StringItemWithHintVM GetTroopTypeIconData(BasicCharacterObject basicCharacterObject, CompositionType type, bool isBig = false)`

**Purpose:** Reads and returns the troop type icon data value held by the this instance.

```csharp
// Static call; no instance required
ArmyCompositionItemVM.GetTroopTypeIconData(basicCharacterObject, type, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.RefreshValues();
```

## See Also

- [Area Index](../)