---
title: "NarrativeMenu"
description: "Auto-generated class reference for NarrativeMenu."
---
# NarrativeMenu

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class NarrativeMenu`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenu.cs`

## Overview

`NarrativeMenu` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNarrativeMenuCharacterArgsDelegate
`public delegate List<NarrativeMenuCharacterArgs> GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager)`

**Purpose:** Reads and returns the narrative menu character args delegate value held by the this instance.

```csharp
// Obtain an instance of NarrativeMenu from the subsystem API first
NarrativeMenu narrativeMenu = ...;
var result = narrativeMenu.GetNarrativeMenuCharacterArgsDelegate(culture, "example", characterCreationManager);
```

### AddNarrativeMenuOption
`public void AddNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)`

**Purpose:** Adds narrative menu option to the current collection or state.

```csharp
// Obtain an instance of NarrativeMenu from the subsystem API first
NarrativeMenu narrativeMenu = ...;
narrativeMenu.AddNarrativeMenuOption(narrativeMenuOption);
```

### RemoveNarrativeMenuOption
`public void RemoveNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)`

**Purpose:** Removes narrative menu option from the current collection or state.

```csharp
// Obtain an instance of NarrativeMenu from the subsystem API first
NarrativeMenu narrativeMenu = ...;
narrativeMenu.RemoveNarrativeMenuOption(narrativeMenuOption);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NarrativeMenu narrativeMenu = ...;
narrativeMenu.GetNarrativeMenuCharacterArgsDelegate(culture, "example", characterCreationManager);
```

## See Also

- [Area Index](../)