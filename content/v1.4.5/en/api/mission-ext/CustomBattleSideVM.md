---
title: "CustomBattleSideVM"
description: "Auto-generated class reference for CustomBattleSideVM."
---
# CustomBattleSideVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs`

## Overview

`CustomBattleSideVM` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedCharacter` | `public BasicCharacterObject SelectedCharacter { get; }` |
| `CurrentSelectedCharacter` | `public CharacterViewModel CurrentSelectedCharacter { get; set; }` |
| `ArmorsList` | `public MBBindingList<CharacterEquipmentItemVM> ArmorsList { get; set; }` |
| `WeaponsList` | `public MBBindingList<CharacterEquipmentItemVM> WeaponsList { get; set; }` |
| `FactionText` | `public string FactionText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CharacterSelectionGroup` | `public SelectorVM<CharacterItemVM> CharacterSelectionGroup { get; set; }` |
| `CompositionGroup` | `public ArmyCompositionGroupVM CompositionGroup { get; set; }` |
| `FactionSelectionGroup` | `public CustomBattleFactionSelectionVM FactionSelectionGroup { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CustomBattleSideVM from the subsystem API first
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.RefreshValues();
```

### OnPlayerTypeChange
`public void OnPlayerTypeChange(CustomBattlePlayerType playerType)`

**Purpose:** **Purpose:** Invoked when the player type change event is raised.

```csharp
// Obtain an instance of CustomBattleSideVM from the subsystem API first
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.OnPlayerTypeChange(playerType);
```

### UpdateCharacterVisual
`public void UpdateCharacterVisual()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of character visual.

```csharp
// Obtain an instance of CustomBattleSideVM from the subsystem API first
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.UpdateCharacterVisual();
```

### Randomize
`public void Randomize(CustomBattleSideVM oppositeSide = null)`

**Purpose:** **Purpose:** Executes the Randomize logic.

```csharp
// Obtain an instance of CustomBattleSideVM from the subsystem API first
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.Randomize(null);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleSideVM customBattleSideVM = ...;
customBattleSideVM.RefreshValues();
```

## See Also

- [Area Index](../)