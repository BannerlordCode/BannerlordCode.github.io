---
title: "CustomBattleCombatant"
description: "Auto-generated class reference for CustomBattleCombatant."
---
# CustomBattleCombatant

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleCombatant : IBattleCombatant`
**Base:** `IBattleCombatant`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleCombatant.cs`

## Overview

`CustomBattleCombatant` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `BasicCulture` | `public BasicCultureObject BasicCulture { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `NumberOfAllMembers` | `public int NumberOfAllMembers { get; }` |

## Key Methods

### GetTacticsSkillAmount
`public int GetTacticsSkillAmount()`

**Purpose:** Reads and returns the tactics skill amount value held by the this instance.

```csharp
// Obtain an instance of CustomBattleCombatant from the subsystem API first
CustomBattleCombatant customBattleCombatant = ...;
var result = customBattleCombatant.GetTacticsSkillAmount();
```

### AddCharacter
`public void AddCharacter(BasicCharacterObject characterObject, int number)`

**Purpose:** Adds character to the current collection or state.

```csharp
// Obtain an instance of CustomBattleCombatant from the subsystem API first
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.AddCharacter(characterObject, 0);
```

### SetGeneral
`public void SetGeneral(BasicCharacterObject generalCharacter)`

**Purpose:** Assigns a new value to general and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleCombatant from the subsystem API first
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.SetGeneral(generalCharacter);
```

### IsUnderPlayersCommand
`public bool IsUnderPlayersCommand(BattleSideEnum playerSide)`

**Purpose:** Determines whether the this instance is in the under players command state or condition.

```csharp
// Obtain an instance of CustomBattleCombatant from the subsystem API first
CustomBattleCombatant customBattleCombatant = ...;
var result = customBattleCombatant.IsUnderPlayersCommand(playerSide);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.GetTacticsSkillAmount();
```

## See Also

- [Area Index](../)