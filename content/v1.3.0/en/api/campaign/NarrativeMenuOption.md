---
title: "NarrativeMenuOption"
description: "Auto-generated class reference for NarrativeMenuOption."
---
# NarrativeMenuOption

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class NarrativeMenuOption`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOption.cs`

## Overview

`NarrativeMenuOption` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PositiveEffectText` | `public TextObject PositiveEffectText { get; }` |

## Key Methods

### OnCondition
`public bool OnCondition(CharacterCreationManager characterCreationManager)`

**Purpose:** **Purpose:** Invoked when the condition event is raised.

```csharp
// Obtain an instance of NarrativeMenuOption from the subsystem API first
NarrativeMenuOption narrativeMenuOption = ...;
var result = narrativeMenuOption.OnCondition(characterCreationManager);
```

### OnSelect
`public void OnSelect(CharacterCreationManager characterCreationManager)`

**Purpose:** **Purpose:** Invoked when the select event is raised.

```csharp
// Obtain an instance of NarrativeMenuOption from the subsystem API first
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.OnSelect(characterCreationManager);
```

### OnConsequence
`public void OnConsequence(CharacterCreationManager characterCreationManager)`

**Purpose:** **Purpose:** Invoked when the consequence event is raised.

```csharp
// Obtain an instance of NarrativeMenuOption from the subsystem API first
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.OnConsequence(characterCreationManager);
```

### SetOnCondition
`public void SetOnCondition(NarrativeMenuOptionOnConditionDelegate onCondition)`

**Purpose:** **Purpose:** Assigns a new value to on condition and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOption from the subsystem API first
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.SetOnCondition(onCondition);
```

### SetOnSelect
`public void SetOnSelect(NarrativeMenuOptionOnSelectDelegate onSelect)`

**Purpose:** **Purpose:** Assigns a new value to on select and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOption from the subsystem API first
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.SetOnSelect(onSelect);
```

### SetOnConsequence
`public void SetOnConsequence(NarrativeMenuOptionOnConsequenceDelegate onConsequence)`

**Purpose:** **Purpose:** Assigns a new value to on consequence and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuOption from the subsystem API first
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.SetOnConsequence(onConsequence);
```

### ApplyFinalEffects
`public void ApplyFinalEffects(CharacterCreationContent characterCreationContent)`

**Purpose:** **Purpose:** Applies the effect of final effects to the this instance.

```csharp
// Obtain an instance of NarrativeMenuOption from the subsystem API first
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.ApplyFinalEffects(characterCreationContent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.OnCondition(characterCreationManager);
```

## See Also

- [Area Index](../)