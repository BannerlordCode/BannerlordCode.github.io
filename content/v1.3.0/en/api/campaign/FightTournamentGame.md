---
title: "FightTournamentGame"
description: "Auto-generated class reference for FightTournamentGame."
---
# FightTournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FightTournamentGame : TournamentGame`
**Base:** `TournamentGame`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/FightTournamentGame.cs`

## Overview

`FightTournamentGame` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxTeamSize` | `public override int MaxTeamSize { get; }` |
| `MaxTeamNumberPerMatch` | `public override int MaxTeamNumberPerMatch { get; }` |
| `RemoveTournamentAfterDays` | `public override int RemoveTournamentAfterDays { get; }` |
| `MaximumParticipantCount` | `public override int MaximumParticipantCount { get; }` |

## Key Methods

### CanBeAParticipant
`public override bool CanBeAParticipant(CharacterObject character, bool considerSkills)`

**Purpose:** Checks whether the current object meets the preconditions for `be a participant`.

```csharp
// Obtain an instance of FightTournamentGame from the subsystem API first
FightTournamentGame fightTournamentGame = ...;
var result = fightTournamentGame.CanBeAParticipant(character, false);
```

### GetMenuText
`public override TextObject GetMenuText()`

**Purpose:** Reads and returns the `menu text` value held by the current object.

```csharp
// Obtain an instance of FightTournamentGame from the subsystem API first
FightTournamentGame fightTournamentGame = ...;
var result = fightTournamentGame.GetMenuText();
```

### OpenMission
`public override void OpenMission(Settlement settlement, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with `mission`.

```csharp
// Obtain an instance of FightTournamentGame from the subsystem API first
FightTournamentGame fightTournamentGame = ...;
fightTournamentGame.OpenMission(settlement, false);
```

### GetParticipantCharacters
`public override MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)`

**Purpose:** Reads and returns the `participant characters` value held by the current object.

```csharp
// Obtain an instance of FightTournamentGame from the subsystem API first
FightTournamentGame fightTournamentGame = ...;
var result = fightTournamentGame.GetParticipantCharacters(settlement, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FightTournamentGame fightTournamentGame = ...;
fightTournamentGame.CanBeAParticipant(character, false);
```

## See Also

- [Area Index](../)