---
title: "ThirdPhase"
description: "ThirdPhase — class in StoryMode.StoryModePhases. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# ThirdPhase

**Namespace:** `StoryMode.StoryModePhases`  
**Module:** `StoryMode`  
**Type:** `public class ThirdPhase`  
**Source:** `StoryMode/StoryModePhases/ThirdPhase.cs`

## Overview

`ThirdPhase` is a named type in the StoryMode.StoryModePhases namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ThirdPhase`.
- **Instance members** (6): `OppositionKingdoms`, `AllyKingdoms`, `AddAllyKingdom`, `AddOppositionKingdom`, `RemoveOppositionKingdom`, `CompleteThirdPhase`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddAllyKingdom` | method | Instance entry point. Takes 1 argument: `Kingdom kingdom`. Adds to the collection or relation this type owns. |
| `AddOppositionKingdom` | method | Instance entry point. Takes 1 argument: `Kingdom kingdom`. Adds to the collection or relation this type owns. |
| `AllyKingdoms` | property | Instance entry point `MBReadOnlyList<Kingdom>` property. Read it for current state; a declared setter writes that state in place. |
| `CompleteThirdPhase` | method | Instance entry point. Takes 1 argument: `QuestBase.QuestCompleteDetails defeatTheConspiracyQuestCompleteDetail`. |
| `OppositionKingdoms` | property | Instance entry point `MBReadOnlyList<Kingdom>` property. Read it for current state; a declared setter writes that state in place. |
| `RemoveOppositionKingdom` | method | Instance entry point. Takes 1 argument: `Kingdom kingdom`. Removes from or clears the collection this type owns. |
| `ThirdPhase` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public ThirdPhase()`.

## Usage Example

```csharp
var thirdPhase = new ThirdPhase();
thirdPhase.AddAllyKingdom(kingdom);
// Read current state through thirdPhase.OppositionKingdoms.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `StoryMode/StoryModePhases/ThirdPhase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ActivityManager](../../activitysystem/ActivityManager/) — `TaleWorlds.ActivitySystem`.
- [ActivityOutcome](../../activitysystem/ActivityOutcome/) — `TaleWorlds.ActivitySystem`.

Section: [api/storymode/](../) — the other types in this bucket.
