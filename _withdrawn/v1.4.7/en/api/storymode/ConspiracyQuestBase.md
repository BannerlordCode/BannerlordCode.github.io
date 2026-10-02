---
title: "ConspiracyQuestBase"
description: "ConspiracyQuestBase — class in StoryMode.Quests.SecondPhase. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# ConspiracyQuestBase

**Namespace:** `StoryMode.Quests.SecondPhase`  
**Module:** `StoryMode`  
**Type:** `public abstract class ConspiracyQuestBase : QuestBase`  
**Base:** `QuestBase`  
**Source:** `StoryMode/Quests/SecondPhase/ConspiracyQuestBase.cs`

## Overview

`ConspiracyQuestBase` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends QuestBase, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ConspiracyQuestBase`.
- **Instance members** (11): `SideNotificationText`, `StartMessageLogFromMentor`, `StartLog`, `ConspiracyStrengthDecreaseAmount`, `Mentor`, `IsRemainingTimeHidden`, ….
- **Extension points** (9): `SideNotificationText`, `StartMessageLogFromMentor`, `StartLog`, `ConspiracyStrengthDecreaseAmount`, `IsRemainingTimeHidden`, `SpecialQuestType`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsRemainingTimeHidden` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SpecialQuestType` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `ConspiracyStrengthDecreaseAmount` | property (abstract) | Abstract — a subclass must supply it `float` property. Read it for current state; a declared setter writes that state in place. |
| `SideNotificationText` | property (abstract) | Abstract — a subclass must supply it `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `StartLog` | property (abstract) | Abstract — a subclass must supply it `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `StartMessageLogFromMentor` | property (abstract) | Abstract — a subclass must supply it `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `OnCompleteWithSuccess` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnStartQuest` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Mentor` | property | Instance entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `DistributeConspiracyRaiderTroopsByLevel` | method | Protected — for subclasses only. Takes 3 arguments: `PartyTemplateObject raiderTemplate`, `PartyBase partyToFill`, `int troopCountLimit`. |
| `ConspiracyQuestBase` | ctor | Protected — for subclasses only. Takes 2 arguments: `string questId`, `Hero questGiver`. Returns ``. |

- Constructed as `protected ConspiracyQuestBase(string questId, Hero questGiver)`.

## Usage Example

```csharp
public class MyConspiracyQuestBase : QuestBase
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyConspiracyQuestBase());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/Quests/SecondPhase/ConspiracyQuestBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SecondPhase](../SecondPhase/) — `StoryMode.StoryModePhases`.
- [StoryModeHeroes](../StoryModeHeroes/) — `StoryMode.StoryModeObjects`.
- [ConspiracyQuestMapNotification](../ConspiracyQuestMapNotification/) — `StoryMode`.

Section: [api/storymode/](../) — the other types in this bucket.
