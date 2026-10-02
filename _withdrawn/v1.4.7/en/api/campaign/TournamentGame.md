---
title: "TournamentGame"
description: "TournamentGame — class in TaleWorlds.CampaignSystem.TournamentGames. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# TournamentGame

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class TournamentGame`  
**Source:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentGame.cs`

## Overview

`TournamentGame` is a named type in the TaleWorlds.CampaignSystem.TournamentGames namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentGame`.
- **Instance members** (14): `MaxTeamSize`, `MaxTeamNumberPerMatch`, `TournamentWinRenown`, `TournamentWinInfluence`, `RemoveTournamentAfterDays`, `MaximumParticipantCount`, ….
- **Extension points** (11): `MaxTeamSize`, `MaxTeamNumberPerMatch`, `TournamentWinRenown`, `TournamentWinInfluence`, `RemoveTournamentAfterDays`, `MaximumParticipantCount`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanBeAParticipant` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `CharacterObject character`, `bool considerSkills`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GetMenuText` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetParticipantCharacters` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Settlement settlement`, `bool includePlayer`. Returns `MBList<CharacterObject>`. Read path: prefer it over reaching for the backing store. |
| `MaximumParticipantCount` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaxTeamNumberPerMatch` | property (virtual) | Virtual — override it to change behaviour for every caller `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaxTeamSize` | property (virtual) | Virtual — override it to change behaviour for every caller `int` property. Read it for current state; a declared setter writes that state in place. |
| `OpenMission` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Settlement settlement`, `bool isPlayerParticipating`. |
| `RemoveTournamentAfterDays` | property (abstract) | Abstract — a subclass must supply it `int` property. Removes from or clears the collection this type owns. |
| `TournamentWinInfluence` | property (virtual) | Virtual — override it to change behaviour for every caller `float` property. Read it for current state; a declared setter writes that state in place. |
| `TournamentWinRenown` | property (virtual) | Virtual — override it to change behaviour for every caller `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetTournamentPrize` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `bool includePlayer`, `int lastRecordedLordCountForTournamentPrize`. Returns `ItemObject`. Read path: prefer it over reaching for the backing store. |
| `PrepareForTournamentGame` | method | Instance entry point. Takes 1 argument: `bool isPlayerParticipating`. |
| `QualificationMode` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateTournamentPrize` | method | Instance entry point. Takes 2 arguments: `bool includePlayer`, `bool removeCurrentPrize`. Called from the owner’s update loop — do not assume a frame boundary. |
| `TournamentGame` | ctor | Protected — for subclasses only. Takes 2 arguments: `Town town`, `ItemObject prize`. Returns ``. |

- Constructed as `protected TournamentGame(Town town, ItemObject prize = null)`.

## Usage Example

```csharp
// TournamentGame is read through its properties:
//   MaxTeamSize : int
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 11 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/TournamentGames/TournamentGame.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/campaign/](../) — the other types in this bucket.
