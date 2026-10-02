---
title: "TournamentMatch"
description: "TournamentMatch — class in TaleWorlds.CampaignSystem.TournamentGames. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# TournamentMatch

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class TournamentMatch`  
**Source:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs`

## Overview

`TournamentMatch` is a named type in the TaleWorlds.CampaignSystem.TournamentGames namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentMatch`.
- **Instance members** (13): `Teams`, `Participants`, `State`, `Winners`, `IsReady`, `End`, ….
- **Data and constants** (1): `QualificationMode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddParticipant` | method | Instance entry point. Takes 2 arguments: `TournamentParticipant participant`, `bool firstTime`. Adds to the collection or relation this type owns. |
| `End` | method | Instance entry point. Takes no arguments. |
| `GetParticipant` | method | Instance entry point. Takes 1 argument: `int uniqueSeed`. Returns `TournamentParticipant`. Read path: prefer it over reaching for the backing store. |
| `IsParticipantRequired` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerParticipating` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerWinner` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReady` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MatchState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `Participants` | property | Instance entry point `IEnumerable<TournamentParticipant>` property. Read it for current state; a declared setter writes that state in place. |
| `Start` | method | Instance entry point. Takes no arguments. |
| `State` | property | Instance entry point `TournamentMatch.MatchState` property. Read it for current state; a declared setter writes that state in place. |
| `Teams` | property | Instance entry point `IEnumerable<TournamentTeam>` property. Read it for current state; a declared setter writes that state in place. |
| `Winners` | property | Instance entry point `IEnumerable<TournamentParticipant>` property. Read it for current state; a declared setter writes that state in place. |
| `TournamentMatch` | ctor | Instance entry point. Takes 4 arguments: `int participantCount`, `int numberOfTeamsPerMatch`, `int numberOfWinnerParticipants`, `TournamentGame.QualificationMode qualificationMode`. Returns ``. |
| `QualificationMode` | field | Instance entry point `TournamentGame.QualificationMode` field — direct storage with no validation or notification. |

- Constructed as `public TournamentMatch(int participantCount, int numberOfTeamsPerMatch, int numberOfWinnerParticipants, TournamentGame.QualificationMode qualificationMode)`.

## Usage Example

```csharp
var tournamentMatch = new TournamentMatch(participantCount, numberOfTeamsPerMatch, numberOfWinnerParticipants, qualificationMode);
tournamentMatch.End();
// Read current state through tournamentMatch.Teams.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TournamentGame](../TournamentGame/) — `TaleWorlds.CampaignSystem.TournamentGames`.

Section: [api/campaign/](../) — the other types in this bucket.
