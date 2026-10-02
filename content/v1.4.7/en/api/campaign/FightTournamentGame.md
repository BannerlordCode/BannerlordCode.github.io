---
title: "FightTournamentGame"
description: "FightTournamentGame — class in TaleWorlds.CampaignSystem.TournamentGames. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# FightTournamentGame

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class FightTournamentGame : TournamentGame`  
**Base:** `TournamentGame`  
**Source:** `TaleWorlds.CampaignSystem/TournamentGames/FightTournamentGame.cs`

## Overview

`FightTournamentGame` is a named type in the TaleWorlds.CampaignSystem.TournamentGames namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends TournamentGame, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `FightTournamentGame`.
- **Instance members** (9): `MaxTeamSize`, `MaxTeamNumberPerMatch`, `RemoveTournamentAfterDays`, `MaximumParticipantCount`, `CanBeAParticipant`, `GetMenuText`, ….
- **Extension points** (9): `MaxTeamSize`, `MaxTeamNumberPerMatch`, `RemoveTournamentAfterDays`, `MaximumParticipantCount`, `CanBeAParticipant`, `GetMenuText`, ….
- **Data and constants** (1): `ParticipantTroopMinimumTierLimit`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanBeAParticipant` | method (override) | Overrides the base member. Takes 2 arguments: `CharacterObject character`, `bool considerSkills`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GetMenuText` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetParticipantCharacters` | method (override) | Overrides the base member. Takes 2 arguments: `Settlement settlement`, `bool includePlayer`. Returns `MBList<CharacterObject>`. Read path: prefer it over reaching for the backing store. |
| `MaximumParticipantCount` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaxTeamNumberPerMatch` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaxTeamSize` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `OpenMission` | method (override) | Overrides the base member. Takes 2 arguments: `Settlement settlement`, `bool isPlayerParticipating`. |
| `RemoveTournamentAfterDays` | property (override) | Overrides the base member `int` property. Removes from or clears the collection this type owns. |
| `GetTournamentPrize` | method (override) | Overrides the base member. Takes 2 arguments: `bool includePlayer`, `int lastRecordedLordCountForTournamentPrize`. Returns `ItemObject`. Read path: prefer it over reaching for the backing store. |
| `ParticipantTroopMinimumTierLimit` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `FightTournamentGame` | ctor | Instance entry point. Takes 1 argument: `Town town`. Returns ``. |

- Constructed as `public FightTournamentGame(Town town)`.

## Usage Example

```csharp
var fightTournamentGame = new FightTournamentGame(town);
fightTournamentGame.CanBeAParticipant(character, considerSkills);
// Read current state through fightTournamentGame.MaxTeamSize.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/TournamentGames/FightTournamentGame.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TournamentGame](../TournamentGame/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [LocationComplex](../LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/campaign/](../) — the other types in this bucket.
