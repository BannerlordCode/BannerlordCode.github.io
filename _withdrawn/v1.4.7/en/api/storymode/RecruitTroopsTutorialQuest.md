---
title: "RecruitTroopsTutorialQuest"
description: "RecruitTroopsTutorialQuest — class in StoryMode.Quests.TutorialPhase. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# RecruitTroopsTutorialQuest

**Namespace:** `StoryMode.Quests.TutorialPhase`  
**Module:** `StoryMode`  
**Type:** `public class RecruitTroopsTutorialQuest : StoryModeQuestBase`  
**Base:** `StoryModeQuestBase`  
**Source:** `StoryMode/Quests/TutorialPhase/RecruitTroopsTutorialQuest.cs`

## Overview

`RecruitTroopsTutorialQuest` is a named type in the StoryMode.Quests.TutorialPhase namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends StoryModeQuestBase, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `RecruitTroopsTutorialQuest`.
- **Instance members** (4): `Title`, `SetDialogs`, `InitializeQuestOnGameLoad`, `HourlyTick`.
- **Extension points** (4): `Title`, `SetDialogs`, `InitializeQuestOnGameLoad`, `HourlyTick`.
- **Data and constants** (1): `RecruitTroopAmount`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Title` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `HourlyTick` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeQuestOnGameLoad` | method (override) | Overrides the base member. Takes no arguments. |
| `SetDialogs` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `RecruitTroopAmount` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `RecruitTroopsTutorialQuest` | ctor | Instance entry point. Takes 1 argument: `Hero questGiver`. Returns ``. |

- Constructed as `public RecruitTroopsTutorialQuest(Hero questGiver)`.

## Usage Example

```csharp
var recruitTroopsTutorialQuest = new RecruitTroopsTutorialQuest(questGiver);
recruitTroopsTutorialQuest.SetDialogs();
// Read current state through recruitTroopsTutorialQuest.Title.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/Quests/TutorialPhase/RecruitTroopsTutorialQuest.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TutorialPhase](../TutorialPhase/) — `StoryMode.StoryModePhases`.
- [RecruitTroopTutorialQuestTask](../RecruitTroopTutorialQuestTask/) — `StoryMode.Quests.QuestTasks`.

Section: [api/storymode/](../) — the other types in this bucket.
