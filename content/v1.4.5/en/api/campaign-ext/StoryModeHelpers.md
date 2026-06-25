---
title: "StoryModeHelpers"
description: "Auto-generated class reference for StoryModeHelpers."
---
# StoryModeHelpers

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeHelpers`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/StoryMode/StoryModeHelpers.cs`

## Overview

`StoryModeHelpers` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetPlayerSiblingsSkillsIfNeeded
`public static void SetPlayerSiblingsSkillsIfNeeded(Hero hero)`

**Purpose:** Assigns a new value to `player siblings skills if needed` and updates the object's internal state.

```csharp
// Static call; no instance required
StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(hero);
```

## Usage Example

```csharp
StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(hero);
```

## See Also

- [Area Index](../)