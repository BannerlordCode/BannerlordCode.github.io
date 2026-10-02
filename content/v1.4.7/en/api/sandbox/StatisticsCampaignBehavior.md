---
title: "StatisticsCampaignBehavior"
description: "StatisticsCampaignBehavior — class in SandBox.CampaignBehaviors. 42 public members (0 static)."
---

<!-- v147-skeleton -->
# StatisticsCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`  
**Module:** `SandBox`  
**Type:** `public class StatisticsCampaignBehavior : CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior`  
**Base:** `CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior`  
**Source:** `SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs`

## Overview

`StatisticsCampaignBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (42): `SyncData`, `RegisterEvents`, `OnDefectionPersuasionSucess`, `OnPlayerAcceptedRansomOffer`, `GetHighestTournamentRank`, `GetNumberOfTournamentWins`, ….
- **Extension points** (2): `SyncData`, `RegisterEvents`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |
| `GetDenarsEarnedFromCaravans` | method | Instance entry point. Takes no arguments. Returns `ulong`. Read path: prefer it over reaching for the backing store. |
| `GetDenarsEarnedFromRansoms` | method | Instance entry point. Takes no arguments. Returns `ulong`. Read path: prefer it over reaching for the backing store. |
| `GetDenarsEarnedFromTaxes` | method | Instance entry point. Takes no arguments. Returns `ulong`. Read path: prefer it over reaching for the backing store. |
| `GetDenarsEarnedFromTributes` | method | Instance entry point. Takes no arguments. Returns `ulong`. Read path: prefer it over reaching for the backing store. |
| `GetDenarsEarnedFromWorkshops` | method | Instance entry point. Takes no arguments. Returns `ulong`. Read path: prefer it over reaching for the backing store. |
| `GetDenarsPaidAsTributes` | method | Instance entry point. Takes no arguments. Returns `ulong`. Read path: prefer it over reaching for the backing store. |
| `GetHighestTournamentRank` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetLargestArmyFormedByPlayer` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetLargestBattleWonAsLeader` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMostExpensiveItemCrafted` | method | Instance entry point. Takes no arguments. Returns `ValueTuple<string, int>`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfBattlesLost` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfBattlesWon` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfCastlesCaptured` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfChildrenBorn` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfClansDefected` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfCompanionsHired` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfCraftingOrdersCompleted` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfCraftingPartsUnlocked` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfEnemyClansDestroyed` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfHeroesKilledInBattle` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfHeroPrisonersTaken` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfHideoutsCleared` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |

18 further public members follow the same patterns.
## Usage Example

```csharp
public class MyStatisticsCampaignBehavior : CampaignBehaviorBase, IStatisticsCampaignBehavior, ICampaignBehavior
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyStatisticsCampaignBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [FlattenedTroopRoster](../../campaign/FlattenedTroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [HideoutEventComponent](../../campaign/HideoutEventComponent/) — `TaleWorlds.CampaignSystem.MapEvents`.
- [TournamentManager](../../campaign/TournamentManager/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [FlattenedTroopRosterElement](../../campaign/FlattenedTroopRosterElement/) — `TaleWorlds.CampaignSystem.Roster`.
- [Workshop](../../campaign/Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.

Section: [api/sandbox/](../) — the other types in this bucket.
