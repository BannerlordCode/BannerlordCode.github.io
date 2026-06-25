---
title: "CustomBattleTroopTypeVM"
description: "Auto-generated class reference for CustomBattleTroopTypeVM."
---
# CustomBattleTroopTypeVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleTroopTypeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs`

## Overview

`CustomBattleTroopTypeVM` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `TroopSkillsHint` | `public BasicTooltipViewModel TroopSkillsHint { get; set; }` |
| `NameHint` | `public HintViewModel NameHint { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CustomBattleTroopTypeVM from the subsystem API first
CustomBattleTroopTypeVM customBattleTroopTypeVM = ...;
customBattleTroopTypeVM.RefreshValues();
```

### ExecuteToggleSelection
`public void ExecuteToggleSelection()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with toggle selection.

```csharp
// Obtain an instance of CustomBattleTroopTypeVM from the subsystem API first
CustomBattleTroopTypeVM customBattleTroopTypeVM = ...;
customBattleTroopTypeVM.ExecuteToggleSelection();
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with randomize.

```csharp
// Obtain an instance of CustomBattleTroopTypeVM from the subsystem API first
CustomBattleTroopTypeVM customBattleTroopTypeVM = ...;
customBattleTroopTypeVM.ExecuteRandomize();
```

### GetCharacterTierData
`public static StringItemWithHintVM GetCharacterTierData(BasicCharacterObject character, bool isBig = false)`

**Purpose:** **Purpose:** Reads and returns the character tier data value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleTroopTypeVM.GetCharacterTierData(character, false);
```

### GetCharacterTier
`public static int GetCharacterTier(BasicCharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the character tier value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleTroopTypeVM.GetCharacterTier(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleTroopTypeVM customBattleTroopTypeVM = ...;
customBattleTroopTypeVM.RefreshValues();
```

## See Also

- [Area Index](../)