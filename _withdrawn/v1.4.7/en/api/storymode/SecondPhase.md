---
title: "SecondPhase"
description: "SecondPhase — class in StoryMode.StoryModePhases. 11 public members (1 static)."
---

<!-- v147-skeleton -->
# SecondPhase

**Namespace:** `StoryMode.StoryModePhases`  
**Module:** `StoryMode`  
**Type:** `public class SecondPhase`  
**Source:** `StoryMode/StoryModePhases/SecondPhase.cs`

## Overview

`SecondPhase` is a named type in the StoryMode.StoryModePhases namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SecondPhase`.
- **Static entry points** (1): `Instance`.
- **Instance members** (6): `OnSessionLaunched`, `TriggerConspiracy`, `IncreaseConspiracyStrength`, `DecreaseConspiracyStrength`, `ActivateConspiracy`, `CreateNextConspiracyQuest`.
- **Data and constants** (3): `MaxConspiracyStrength`, `DailyConspiracyChange`, `ConspiracyQuestDurationAsDays`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Instance` | property (static) | Static entry point `SecondPhase` property. Read it for current state; a declared setter writes that state in place. |
| `ActivateConspiracy` | method | Instance entry point. Takes no arguments. |
| `CreateNextConspiracyQuest` | method | Instance entry point. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `DecreaseConspiracyStrength` | method | Instance entry point. Takes 1 argument: `float amount`. |
| `IncreaseConspiracyStrength` | method | Instance entry point. Takes no arguments. |
| `OnSessionLaunched` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `TriggerConspiracy` | method | Instance entry point. Takes no arguments. |
| `ConspiracyQuestDurationAsDays` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `DailyConspiracyChange` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `MaxConspiracyStrength` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `SecondPhase` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public SecondPhase()`.

## Usage Example

```csharp
var secondPhase = new SecondPhase();
secondPhase.OnSessionLaunched();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `StoryMode/StoryModePhases/SecondPhase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DestroyRaidersConspiracyQuest](../DestroyRaidersConspiracyQuest/) — `StoryMode.Quests.SecondPhase.ConspiracyQuests`.
- [ConspiracyBaseOfOperationsDiscoveredConspiracyQuest](../ConspiracyBaseOfOperationsDiscoveredConspiracyQuest/) — `StoryMode.Quests.SecondPhase.ConspiracyQuests`.
- [DisruptSupplyLinesConspiracyQuest](../DisruptSupplyLinesConspiracyQuest/) — `StoryMode.Quests.SecondPhase.ConspiracyQuests`.
- [StoryModeHeroes](../StoryModeHeroes/) — `StoryMode.StoryModeObjects`.
- [ConspiracyQuestBase](../ConspiracyQuestBase/) — `StoryMode.Quests.SecondPhase`.

Section: [api/storymode/](../) — the other types in this bucket.
