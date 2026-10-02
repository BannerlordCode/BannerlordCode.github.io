---
title: "DefeatTheConspiracyQuestBehavior"
description: "DefeatTheConspiracyQuestBehavior — class in StoryMode.Quests.ThirdPhase. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# DefeatTheConspiracyQuestBehavior

**Namespace:** `StoryMode.Quests.ThirdPhase`  
**Module:** `StoryMode`  
**Type:** `public class DefeatTheConspiracyQuestBehavior : CampaignBehaviorBase`  
**Base:** `CampaignBehaviorBase`  
**Source:** `StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`

## Overview

`DefeatTheConspiracyQuestBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (4): `IsMobilePartyCreatedForQuest`, `RegisterEvents`, `InitializeFinalPhase`, `SyncData`.
- **Extension points** (2): `RegisterEvents`, `SyncData`.
- **Data and constants** (1): `TroopLimitPerNewClanParty`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |
| `IsMobilePartyCreatedForQuest` | method | Instance entry point. Takes 1 argument: `MobileParty mobileParty`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `TroopLimitPerNewClanParty` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `InitializeFinalPhase` | method | Protected — for subclasses only. Takes no arguments. |

## Usage Example

```csharp
public class MyDefeatTheConspiracyQuestBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyDefeatTheConspiracyQuestBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ThirdPhase](../ThirdPhase/) — `StoryMode.StoryModePhases`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SecondPhase](../SecondPhase/) — `StoryMode.StoryModePhases`.
- [HeroCreator](../../campaign/HeroCreator/) — `TaleWorlds.CampaignSystem`.
- [ItemRoster](../../campaign/ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [LordPartyComponent](../../campaign/LordPartyComponent/) — `TaleWorlds.CampaignSystem.Party.PartyComponents`.
- [SceneNotificationData](../../core-extra/SceneNotificationData/) — `TaleWorlds.Core`.
- [AntiEmpireConspiracyBeginsSceneNotificationItem](../../campaign/AntiEmpireConspiracyBeginsSceneNotificationItem/) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/storymode/](../) — the other types in this bucket.
