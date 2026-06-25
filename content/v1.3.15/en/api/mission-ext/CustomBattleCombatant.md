---
title: "CustomBattleCombatant"
description: "Auto-generated class reference for CustomBattleCombatant."
---
# CustomBattleCombatant

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleCombatant : IBattleCombatant`
**Base:** `IBattleCombatant`
**File:** `TaleWorlds.MountAndBlade/CustomBattleCombatant.cs`

## Overview

`CustomBattleCombatant` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `General` | `public BasicCharacterObject General { get; }` |
| `BasicCulture` | `public BasicCultureObject BasicCulture { get; }` |
| `PrimaryColorPair` | `public Tuple<uint, uint> PrimaryColorPair { get; }` |
| `AlternativeColorPair` | `public Tuple<uint, uint> AlternativeColorPair { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `Characters` | `public IEnumerable<BasicCharacterObject> Characters { get; }` |
| `CountOfCharacters` | `public int CountOfCharacters { get; }` |
| `NumberOfAllMembers` | `public int NumberOfAllMembers { get; }` |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers { get; }` |

## Key Methods

### GetTacticsSkillAmount
`public int GetTacticsSkillAmount()`

**Purpose:** Reads and returns the `tactics skill amount` value held by the current object.

```csharp
// Obtain an instance of CustomBattleCombatant from the subsystem API first
CustomBattleCombatant customBattleCombatant = ...;
var result = customBattleCombatant.GetTacticsSkillAmount();
```

### AddCharacter
`public void AddCharacter(BasicCharacterObject characterObject, int number)`

**Purpose:** Adds `character` to the current collection or state.

```csharp
// Obtain an instance of CustomBattleCombatant from the subsystem API first
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.AddCharacter(characterObject, 0);
```

### SetGeneral
`public void SetGeneral(BasicCharacterObject generalCharacter)`

**Purpose:** Assigns a new value to `general` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleCombatant from the subsystem API first
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.SetGeneral(generalCharacter);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.GetTacticsSkillAmount();
```

## See Also

- [Area Index](../)