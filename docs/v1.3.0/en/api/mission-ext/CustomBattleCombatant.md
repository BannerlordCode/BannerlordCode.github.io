<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleCombatant`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `tactics skill amount`.

### AddCharacter
`public void AddCharacter(BasicCharacterObject characterObject, int number)`

**Purpose:** Adds `character` to the current collection or state.

### SetGeneral
`public void SetGeneral(BasicCharacterObject generalCharacter)`

**Purpose:** Sets the value or state of `general`.

### KillCharacter
`public void KillCharacter(BasicCharacterObject character)`

**Purpose:** Handles logic related to `kill character`.

## Usage Example

```csharp
var value = new CustomBattleCombatant();
value.GetTacticsSkillAmount();
```

## See Also

- [Complete Class Catalog](../catalog)