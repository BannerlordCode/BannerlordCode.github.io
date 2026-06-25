---
title: "TournamentGame"
description: "Auto-generated class reference for TournamentGame."
---
# TournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentGame`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentGame.cs`

## Overview

`TournamentGame` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Town` | `public Town Town { get; }` |
| `CreationTime` | `public CampaignTime CreationTime { get; }` |
| `Mode` | `public QualificationMode Mode { get; }` |
| `Prize` | `public ItemObject Prize { get; }` |
| `RemoveTournamentAfterDays` | `public abstract int RemoveTournamentAfterDays { get; }` |
| `MaximumParticipantCount` | `public abstract int MaximumParticipantCount { get; }` |

## Key Methods

### GetMenuText
`public abstract TextObject GetMenuText()`

**Purpose:** Reads and returns the `menu text` value held by the current object.

```csharp
// Obtain an instance of TournamentGame from the subsystem API first
TournamentGame tournamentGame = ...;
var result = tournamentGame.GetMenuText();
```

### OpenMission
`public abstract void OpenMission(Settlement settlement, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with `mission`.

```csharp
// Obtain an instance of TournamentGame from the subsystem API first
TournamentGame tournamentGame = ...;
tournamentGame.OpenMission(settlement, false);
```

### GetParticipantCharacters
`public abstract MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)`

**Purpose:** Reads and returns the `participant characters` value held by the current object.

```csharp
// Obtain an instance of TournamentGame from the subsystem API first
TournamentGame tournamentGame = ...;
var result = tournamentGame.GetParticipantCharacters(settlement, false);
```

### CanBeAParticipant
`public virtual bool CanBeAParticipant(CharacterObject character, bool considerSkills)`

**Purpose:** Checks whether the current object meets the preconditions for `be a participant`.

```csharp
// Obtain an instance of TournamentGame from the subsystem API first
TournamentGame tournamentGame = ...;
var result = tournamentGame.CanBeAParticipant(character, false);
```

### PrepareForTournamentGame
`public void PrepareForTournamentGame(bool isPlayerParticipating)`

**Purpose:** Finishes prerequisite setup for the upcoming `for tournament game` operation.

```csharp
// Obtain an instance of TournamentGame from the subsystem API first
TournamentGame tournamentGame = ...;
tournamentGame.PrepareForTournamentGame(false);
```

### UpdateTournamentPrize
`public void UpdateTournamentPrize(bool includePlayer, bool removeCurrentPrize = false)`

**Purpose:** Recalculates and stores the latest representation of `tournament prize`.

```csharp
// Obtain an instance of TournamentGame from the subsystem API first
TournamentGame tournamentGame = ...;
tournamentGame.UpdateTournamentPrize(false, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TournamentGame instance = ...;
```

## See Also

- [Area Index](../)