---
title: "TournamentBehavior"
description: "TournamentBehavior — class in SandBox.Tournaments.MissionLogics. 36 public members (2 static)."
---

<!-- v147-skeleton -->
# TournamentBehavior

**Namespace:** `SandBox.Tournaments.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class TournamentBehavior : MissionLogic, ICameraModeLogic`  
**Base:** `MissionLogic, ICameraModeLogic`  
**Source:** `SandBox/Tournaments/MissionLogics/TournamentBehavior.cs`

## Overview

`TournamentBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, ICameraModeLogic, so the members it does not redeclare are inherited from there. 16 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentBehavior`.
- **Static entry points** (2): `DeleteTournamentSetsExcept`, `DeleteAllTournamentSets`.
- **Instance members** (27): `TournamentGame`, `Rounds`, `GetMissionCameraLockMode`, `IsPlayerEliminated`, `CurrentRoundIndex`, `LastMatch`, ….
- **Extension points** (3): `AfterStart`, `OnMissionTick`, `OnEndMissionRequest`.
- **Data and constants** (6): `TournamentEnd`, `RoundCount`, `ParticipantCount`, `EndMatchTimerDuration`, `CheerTimerDuration`, `MaximumOdd`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `DeleteAllTournamentSets` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `DeleteTournamentSetsExcept` | method (static) | Static entry point. Takes 1 argument: `GameEntity selectedSetEntity`. Removes from or clears the collection this type owns. |
| `OnEndMissionRequest` | method (override) | Overrides the base member. Takes 1 argument: `out bool canPlayerLeave`. Returns `InquiryData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BetOdd` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `BettedDenars` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentMatch` | property | Instance entry point `TournamentMatch` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentRound` | property | Instance entry point `TournamentRound` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentRoundIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `EndTournamentViaLeave` | method | Instance entry point. Takes no arguments. |
| `GetAllPossibleParticipants` | method | Instance entry point. Takes no arguments. Returns `MBList<CharacterObject>`. Read path: prefer it over reaching for the backing store. |
| `GetExpectedDenarsForBet` | method | Instance entry point. Takes 1 argument: `int bet`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMaximumBet` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMissionCameraLockMode` | method | Instance entry point. Takes 1 argument: `bool lockedToMainPlayer`. Returns `SpectatorCameraTypes`. Read path: prefer it over reaching for the backing store. |
| `IsPlayerEliminated` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerParticipating` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LastMatch` | property | Instance entry point `TournamentMatch` property. Read it for current state; a declared setter writes that state in place. |
| `MaximumBetInstance` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `NextRound` | property | Instance entry point `TournamentRound` property. Read it for current state; a declared setter writes that state in place. |
| `OverallExpectedDenars` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PlaceABet` | method | Instance entry point. Takes 1 argument: `int bet`. |
| `PlayerDenars` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Rounds` | property | Instance entry point `TournamentRound[]` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public TournamentBehavior(TournamentGame tournamentGame, Settlement settlement, ITournamentGameBehavior gameBehavior, bool isPlayerParticipating)`.

12 further public members follow the same patterns.
## Usage Example

```csharp
public class MyTournamentBehavior : MissionLogic, ICameraModeLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyTournamentBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Tournaments/MissionLogics/TournamentBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TournamentGame](../../campaign/TournamentGame/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [TournamentMatch](../../campaign/TournamentMatch/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [ITournamentGameBehavior](../ITournamentGameBehavior/) — `SandBox.Tournaments`.
- [TournamentManager](../../campaign/TournamentManager/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [DefaultPerks](../../campaign/DefaultPerks/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/sandbox/](../) — the other types in this bucket.
