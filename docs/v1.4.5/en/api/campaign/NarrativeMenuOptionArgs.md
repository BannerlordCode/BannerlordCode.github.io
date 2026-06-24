<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NarrativeMenuOptionArgs`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NarrativeMenuOptionArgs

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NarrativeMenuOptionArgs`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenuOptionArgs.cs`

## Overview

`NarrativeMenuOptionArgs` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AffectedSkills` | `public MBList<SkillObject> AffectedSkills { get; }` |
| `SkillLevelToAdd` | `public int SkillLevelToAdd { get; }` |
| `AffectedTraits` | `public MBList<TraitObject> AffectedTraits { get; }` |
| `TraitLevelToAdd` | `public int TraitLevelToAdd { get; }` |
| `FocusToAdd` | `public int FocusToAdd { get; }` |
| `UnspentFocusToAdd` | `public int UnspentFocusToAdd { get; }` |
| `EffectedAttribute` | `public CharacterAttribute EffectedAttribute { get; }` |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd { get; }` |
| `UnspentAttributeToAdd` | `public int UnspentAttributeToAdd { get; }` |
| `RenownToAdd` | `public int RenownToAdd { get; }` |
| `GoldToAdd` | `public int GoldToAdd { get; }` |

## Key Methods

### SetAffectedSkills
`public void SetAffectedSkills(SkillObject affectedSkills)`

**Purpose:** Sets the value or state of `affected skills`.

### SetFocusToSkills
`public void SetFocusToSkills(int focusToAdd)`

**Purpose:** Sets the value or state of `focus to skills`.

### SetLevelToSkills
`public void SetLevelToSkills(int levelToAdd)`

**Purpose:** Sets the value or state of `level to skills`.

### SetAffectedTraits
`public void SetAffectedTraits(TraitObject affectedTraits)`

**Purpose:** Sets the value or state of `affected traits`.

### SetLevelToTraits
`public void SetLevelToTraits(int levelToAdd)`

**Purpose:** Sets the value or state of `level to traits`.

### SetLevelToAttribute
`public void SetLevelToAttribute(CharacterAttribute characterAttribute, int levelToAdd)`

**Purpose:** Sets the value or state of `level to attribute`.

### SetRenownToAdd
`public void SetRenownToAdd(int value)`

**Purpose:** Sets the value or state of `renown to add`.

### SetUnspentFocusToAdd
`public void SetUnspentFocusToAdd(int value)`

**Purpose:** Sets the value or state of `unspent focus to add`.

### SetUnspentAttributeToAdd
`public void SetUnspentAttributeToAdd(int value)`

**Purpose:** Sets the value or state of `unspent attribute to add`.

## Usage Example

```csharp
var value = new NarrativeMenuOptionArgs();
value.SetAffectedSkills(affectedSkills);
```

## See Also

- [Complete Class Catalog](../catalog)