---
title: "NarrativeMenu"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NarrativeMenu`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NarrativeMenu

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class NarrativeMenu`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenu.cs`

## Overview

`NarrativeMenu` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNarrativeMenuCharacterArgsDelegate
`public delegate List<NarrativeMenuCharacterArgs> GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager)`

**Purpose:** Gets the current value of `narrative menu character args delegate`.

### AddNarrativeMenuOption
`public void AddNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)`

**Purpose:** Adds `narrative menu option` to the current collection or state.

### RemoveNarrativeMenuOption
`public void RemoveNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)`

**Purpose:** Removes `narrative menu option` from the current collection or state.

## Usage Example

```csharp
var value = new NarrativeMenu();
value.GetNarrativeMenuCharacterArgsDelegate(culture, "example", characterCreationManager);
```

## See Also

- [Complete Class Catalog](../catalog)