---
title: "ArenaMasterCampaignBehavior"
description: "ArenaMasterCampaignBehavior — class in SandBox.CampaignBehaviors. 8 public members (3 static)."
---

<!-- v147-skeleton -->
# ArenaMasterCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`  
**Module:** `SandBox`  
**Type:** `public class ArenaMasterCampaignBehavior : CampaignBehaviorBase`  
**Base:** `CampaignBehaviorBase`  
**Source:** `SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs`

## Overview

`ArenaMasterCampaignBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Static entry points** (3): `conversation_tournament_soon_on_condition`, `conversation_arena_join_tournament_on_consequence`, `conversation_arena_join_fight_on_consequence`.
- **Instance members** (5): `RegisterEvents`, `SyncData`, `OnSessionLaunched`, `OnSettlementEntered`, `AddDialogs`.
- **Extension points** (2): `RegisterEvents`, `SyncData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `conversation_arena_join_fight_on_consequence` | method (static) | Static entry point. Takes no arguments. |
| `conversation_arena_join_tournament_on_consequence` | method (static) | Static entry point. Takes no arguments. |
| `conversation_tournament_soon_on_condition` | method (static) | Static entry point. Takes no arguments. Returns `bool`. |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnSessionLaunched` | method | Instance entry point. Takes 1 argument: `CampaignGameStarter campaignGameStarter`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSettlementEntered` | method | Instance entry point. Takes 3 arguments: `MobileParty mobileParty`, `Settlement settlement`, `Hero hero`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddDialogs` | method | Protected — for subclasses only. Takes 1 argument: `CampaignGameStarter campaignGameStarter`. Adds to the collection or relation this type owns. |

## Usage Example

```csharp
public class MyArenaMasterCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyArenaMasterCampaignBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/CampaignBehaviors/ArenaMasterCampaignBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../../campaign/LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [CreateLocationCharacterDelegate](../../campaign/CreateLocationCharacterDelegate/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [AgentBehaviorManager](../AgentBehaviorManager/) — `SandBox.AI`.
- [TournamentManager](../../campaign/TournamentManager/) — `TaleWorlds.CampaignSystem.TournamentGames`.

Section: [api/sandbox/](../) — the other types in this bucket.
