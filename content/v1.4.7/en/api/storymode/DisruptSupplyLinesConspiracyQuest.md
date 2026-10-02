---
title: "DisruptSupplyLinesConspiracyQuest"
description: "DisruptSupplyLinesConspiracyQuest — class in StoryMode.Quests.SecondPhase.ConspiracyQuests. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# DisruptSupplyLinesConspiracyQuest

**Namespace:** `StoryMode.Quests.SecondPhase.ConspiracyQuests`  
**Module:** `StoryMode`  
**Type:** `public class DisruptSupplyLinesConspiracyQuest : ConspiracyQuestBase`  
**Base:** `ConspiracyQuestBase`  
**Source:** `StoryMode/Quests/SecondPhase/ConspiracyQuests/DisruptSupplyLinesConspiracyQuest.cs`

## Overview

`DisruptSupplyLinesConspiracyQuest` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends ConspiracyQuestBase, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DisruptSupplyLinesConspiracyQuest`.
- **Instance members** (13): `Title`, `SideNotificationText`, `StartMessageLogFromMentor`, `StartLog`, `ConspiracyStrengthDecreaseAmount`, `ConspiracyCaravan`, ….
- **Extension points** (11): `Title`, `SideNotificationText`, `StartMessageLogFromMentor`, `StartLog`, `ConspiracyStrengthDecreaseAmount`, `InitializeQuestOnGameLoad`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ConspiracyStrengthDecreaseAmount` | property (override) | Overrides the base member `float` property. Read it for current state; a declared setter writes that state in place. |
| `SideNotificationText` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `StartLog` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `StartMessageLogFromMentor` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `Title` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `DailyTick` | method (override) | Overrides the base member. Takes no arguments. |
| `HourlyTick` | method (override) | Overrides the base member. Takes no arguments. |
| `InitializeQuestOnGameLoad` | method (override) | Overrides the base member. Takes no arguments. |
| `OnTimedOut` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDialogs` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CaravanPartySize` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ConspiracyCaravan` | property | Instance entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `DisruptSupplyLinesConspiracyQuest` | ctor | Instance entry point. Takes 2 arguments: `string questId`, `Hero questGiver`. Returns ``. |

- Constructed as `public DisruptSupplyLinesConspiracyQuest(string questId, Hero questGiver)`.

## Usage Example

```csharp
public class MyDisruptSupplyLinesConspiracyQuest : ConspiracyQuestBase
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyDisruptSupplyLinesConspiracyQuest());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 11 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/Quests/SecondPhase/ConspiracyQuests/DisruptSupplyLinesConspiracyQuest.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConspiracyQuestBase](../ConspiracyQuestBase/) — `StoryMode.Quests.SecondPhase`.
- [SecondPhase](../SecondPhase/) — `StoryMode.StoryModePhases`.
- [StoryModeHeroes](../StoryModeHeroes/) — `StoryMode.StoryModeObjects`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [ConspiracyQuestMapNotification](../ConspiracyQuestMapNotification/) — `StoryMode`.
- [CustomPartyComponent](../../campaign/CustomPartyComponent/) — `TaleWorlds.CampaignSystem.Party.PartyComponents`.
- [ItemRoster](../../campaign/ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [ConversationHelper](../../campaign-ext/ConversationHelper/) — `TaleWorlds.CampaignSystem.Conversation`.

Section: [api/storymode/](../) — the other types in this bucket.
