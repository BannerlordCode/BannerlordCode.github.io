---
title: "CreateKingdomQuest"
description: "CreateKingdomQuest — class in StoryMode.Quests.FirstPhase. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# CreateKingdomQuest

**Namespace:** `StoryMode.Quests.FirstPhase`  
**Module:** `StoryMode`  
**Type:** `public class CreateKingdomQuest : StoryModeQuestBase`  
**Base:** `StoryModeQuestBase`  
**Source:** `StoryMode/Quests/FirstPhase/CreateKingdomQuest.cs`

## Overview

`CreateKingdomQuest` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends StoryModeQuestBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CreateKingdomQuest`.
- **Instance members** (6): `Title`, `IsRemainingTimeHidden`, `SetDialogs`, `InitializeQuestOnGameLoad`, `HourlyTick`, `RegisterEvents`.
- **Extension points** (6): `Title`, `IsRemainingTimeHidden`, `SetDialogs`, `InitializeQuestOnGameLoad`, `HourlyTick`, `RegisterEvents`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsRemainingTimeHidden` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Title` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `HourlyTick` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeQuestOnGameLoad` | method (override) | Overrides the base member. Takes no arguments. |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDialogs` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CreateKingdomQuest` | ctor | Instance entry point. Takes 1 argument: `Hero questGiver`. Returns ``. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |

- Constructed as `public CreateKingdomQuest(Hero questGiver)`.

## Usage Example

```csharp
public class MyCreateKingdomQuest : StoryModeQuestBase
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyCreateKingdomQuest());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/Quests/FirstPhase/CreateKingdomQuest.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FirstPhase](../FirstPhase/) — `StoryMode.StoryModePhases`.
- [StoryModeHeroes](../StoryModeHeroes/) — `StoryMode.StoryModeObjects`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/storymode/](../) — the other types in this bucket.
