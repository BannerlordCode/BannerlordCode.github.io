---
title: "TutorialQuestPhase"
description: "TutorialQuestPhase — enum in StoryMode.StoryModePhases. No public members of its own."
---

<!-- v147-skeleton -->
# TutorialQuestPhase

**Namespace:** `StoryMode.StoryModePhases`  
**Module:** `StoryMode`  
**Type:** `public enum TutorialQuestPhase`  
**Source:** `StoryMode/StoryModePhases/TutorialQuestPhase.cs`

## Overview

`TutorialQuestPhase` is an enum: a closed set of named integer values. The engine persists and switches on these numbers, so the numeric values are part of the save format and of the wire behaviour, not just an implementation detail.

## Mental Model

An enum is a vocabulary shared across systems. Read it as the set of states the engine can be in for one narrow concept, and never invent new values — extending a persisted enum means assigning a new number, not reusing an old one.

Compare with the symbol, cast to integer only when talking to the engine, and always handle the Default/unknown member that a save from another version may contain.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on TutorialQuestPhase itself in `StoryMode.StoryModePhases`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// TutorialQuestPhase values used in StoryMode.StoryModePhases.
// The members of this enum are declared in TutorialQuestPhase.cs.

var raw = (int)state;   // the integer is what the engine persists
```

## Risks and Boundaries

- The numeric values are persisted; reordering them corrupts existing saves.
- An unmatched value from a modded or newer build is legal — switch statements need a default branch.
- Flags-style enums combine with bitwise operators; a plain `==` comparison is wrong for those.
- The declaration in `StoryMode/StoryModePhases/TutorialQuestPhase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/storymode/](../) — the other types in this bucket.
