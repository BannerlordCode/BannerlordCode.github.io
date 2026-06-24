<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleCombatant`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleCombatant

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleCombatant : IBattleCombatant`
**Base:** `IBattleCombatant`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleCombatant.cs`

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

**Purpose:** Gets the current value of `tactics skill amount`.

### AddCharacter
`public void AddCharacter(BasicCharacterObject characterObject, int number)`

**Purpose:** Adds `character` to the current collection or state.

### SetGeneral
`public void SetGeneral(BasicCharacterObject generalCharacter)`

**Purpose:** Sets the value or state of `general`.

### IsUnderPlayersCommand
`public bool IsUnderPlayersCommand(BattleSideEnum playerSide)`

**Purpose:** Handles logic related to `is under players command`.

## Usage Example

```csharp
var value = new CustomBattleCombatant();
value.GetTacticsSkillAmount();
```

## See Also

- [Complete Class Catalog](../catalog)