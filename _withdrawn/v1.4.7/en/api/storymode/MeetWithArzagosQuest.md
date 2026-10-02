---
title: "MeetWithArzagosQuest"
description: "MeetWithArzagosQuest — class in StoryMode.Quests.FirstPhase. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# MeetWithArzagosQuest

**Namespace:** `StoryMode.Quests.FirstPhase`  
**Module:** `StoryMode`  
**Type:** `public class MeetWithArzagosQuest : StoryModeQuestBase`  
**Base:** `StoryModeQuestBase`  
**Source:** `StoryMode/Quests/FirstPhase/MeetWithArzagosQuest.cs`

## Overview

`MeetWithArzagosQuest` is a named type in the StoryMode.Quests.FirstPhase namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends StoryModeQuestBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MeetWithArzagosQuest`.
- **Instance members** (6): `Title`, `IsRemainingTimeHidden`, `InitializeQuestOnGameLoad`, `HourlyTick`, `SetDialogs`, `OnCompleteWithSuccess`.
- **Extension points** (6): `Title`, `IsRemainingTimeHidden`, `InitializeQuestOnGameLoad`, `HourlyTick`, `SetDialogs`, `OnCompleteWithSuccess`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsRemainingTimeHidden` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Title` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `HourlyTick` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeQuestOnGameLoad` | method (override) | Overrides the base member. Takes no arguments. |
| `OnCompleteWithSuccess` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetDialogs` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `MeetWithArzagosQuest` | ctor | Instance entry point. Takes 1 argument: `Settlement settlement`. Returns ``. |

- Constructed as `public MeetWithArzagosQuest(Settlement settlement)`.

## Usage Example

```csharp
var meetWithArzagosQuest = new MeetWithArzagosQuest(settlement);
meetWithArzagosQuest.InitializeQuestOnGameLoad();
// Read current state through meetWithArzagosQuest.Title.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/Quests/FirstPhase/MeetWithArzagosQuest.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FirstPhase](../FirstPhase/) — `StoryMode.StoryModePhases`.
- [StoryModeHeroes](../StoryModeHeroes/) — `StoryMode.StoryModeObjects`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [AssembleTheBannerQuest](../AssembleTheBannerQuest/) — `StoryMode.Quests.FirstPhase`.

Section: [api/storymode/](../) — the other types in this bucket.
