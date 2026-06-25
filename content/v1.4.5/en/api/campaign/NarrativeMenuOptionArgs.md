---
title: "NarrativeMenuOptionArgs"
description: "Auto-generated class reference for NarrativeMenuOptionArgs."
---
# NarrativeMenuOptionArgs

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NarrativeMenuOptionArgs`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenuOptionArgs.cs`

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

**Purpose:** Assigns a new value to `affected skills` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetAffectedSkills(affectedSkills);
```

### SetFocusToSkills
`public void SetFocusToSkills(int focusToAdd)`

**Purpose:** Assigns a new value to `focus to skills` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetFocusToSkills(0);
```

### SetLevelToSkills
`public void SetLevelToSkills(int levelToAdd)`

**Purpose:** Assigns a new value to `level to skills` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetLevelToSkills(0);
```

### SetAffectedTraits
`public void SetAffectedTraits(TraitObject affectedTraits)`

**Purpose:** Assigns a new value to `affected traits` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetAffectedTraits(affectedTraits);
```

### SetLevelToTraits
`public void SetLevelToTraits(int levelToAdd)`

**Purpose:** Assigns a new value to `level to traits` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetLevelToTraits(0);
```

### SetLevelToAttribute
`public void SetLevelToAttribute(CharacterAttribute characterAttribute, int levelToAdd)`

**Purpose:** Assigns a new value to `level to attribute` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetLevelToAttribute(characterAttribute, 0);
```

### SetRenownToAdd
`public void SetRenownToAdd(int value)`

**Purpose:** Assigns a new value to `renown to add` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetRenownToAdd(0);
```

### SetUnspentFocusToAdd
`public void SetUnspentFocusToAdd(int value)`

**Purpose:** Assigns a new value to `unspent focus to add` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetUnspentFocusToAdd(0);
```

### SetUnspentAttributeToAdd
`public void SetUnspentAttributeToAdd(int value)`

**Purpose:** Assigns a new value to `unspent attribute to add` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOptionArgs from the subsystem API first
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetUnspentAttributeToAdd(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NarrativeMenuOptionArgs narrativeMenuOptionArgs = ...;
narrativeMenuOptionArgs.SetAffectedSkills(affectedSkills);
```

## See Also

- [Area Index](../)