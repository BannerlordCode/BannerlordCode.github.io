---
title: "TournamentManager"
description: "TournamentManager — class in TaleWorlds.CampaignSystem.TournamentGames. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# TournamentManager

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class TournamentManager : ITournamentManager`  
**Base:** `ITournamentManager`  
**Source:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentManager.cs`

## Overview

`TournamentManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends ITournamentManager, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentManager`.
- **Instance members** (16): `AddTournament`, `RemoveTournament`, `GetTournamentGame`, `OnPlayerJoinMatch`, `OnPlayerJoinTournament`, `OnPlayerWatchTournament`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddLeaderboardEntry` | method | Instance entry point. Takes 1 argument: `Hero hero`. Adds to the collection or relation this type owns. |
| `AddTournament` | method | Instance entry point. Takes 1 argument: `TournamentGame game`. Adds to the collection or relation this type owns. |
| `DeleteLeaderboardEntry` | method | Instance entry point. Takes 1 argument: `Hero hero`. Removes from or clears the collection this type owns. |
| `GetLeaderboard` | method | Instance entry point. Takes no arguments. Returns `List<KeyValuePair<Hero, int>>`. Read path: prefer it over reaching for the backing store. |
| `GetLeaderBoardLeader` | method | Instance entry point. Takes no arguments. Returns `Hero`. Read path: prefer it over reaching for the backing store. |
| `GetLeaderBoardRank` | method | Instance entry point. Takes 1 argument: `Hero hero`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetTournamentGame` | method | Instance entry point. Takes 1 argument: `Town town`. Returns `TournamentGame`. Read path: prefer it over reaching for the backing store. |
| `GivePrizeToWinner` | method | Instance entry point. Takes 3 arguments: `TournamentGame tournament`, `Hero winner`, `bool isPlayerParticipated`. |
| `InitializeLeaderboardEntry` | method | Instance entry point. Takes 2 arguments: `Hero hero`, `int initialVictories`. |
| `OnPlayerJoinMatch` | method | Instance entry point. Takes 1 argument: `Type gameType`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPlayerJoinTournament` | method | Instance entry point. Takes 2 arguments: `Type gameType`, `Settlement settlement`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPlayerWatchTournament` | method | Instance entry point. Takes 2 arguments: `Type gameType`, `Settlement settlement`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPlayerWinMatch` | method | Instance entry point. Takes 1 argument: `Type gameType`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPlayerWinTournament` | method | Instance entry point. Takes 1 argument: `Type gameType`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveTournament` | method | Instance entry point. Takes 1 argument: `TournamentGame game`. Removes from or clears the collection this type owns. |
| `ResolveTournament` | method | Instance entry point. Takes 2 arguments: `TournamentGame tournament`, `Town town`. Read path: prefer it over reaching for the backing store. |
| `TournamentManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public TournamentManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var tournamentManager = new TournamentManager();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/TournamentGames/TournamentManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ITournamentManager](../ITournamentManager/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [TournamentGame](../TournamentGame/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [HeroDeveloper](../HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/campaign/](../) — the other types in this bucket.
