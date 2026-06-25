---
title: "TournamentMissionStarter"
description: "Auto-generated class reference for TournamentMissionStarter."
---
# TournamentMissionStarter

**Namespace:** SandBox.Tournaments
**Module:** SandBox.Tournaments
**Type:** `public static class TournamentMissionStarter`
**Base:** none
**File:** `SandBox/Tournaments/TournamentMissionStarter.cs`

## Overview

`TournamentMissionStarter` lives in `SandBox.Tournaments` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Tournaments` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTournamentArcheryMission
`public static Mission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with tournament archery mission.

```csharp
// Static call; no instance required
TournamentMissionStarter.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentFightMission
`public static Mission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with tournament fight mission.

```csharp
// Static call; no instance required
TournamentMissionStarter.OpenTournamentFightMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentHorseRaceMission
`public static Mission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with tournament horse race mission.

```csharp
// Static call; no instance required
TournamentMissionStarter.OpenTournamentHorseRaceMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentJoustingMission
`public static Mission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with tournament jousting mission.

```csharp
// Static call; no instance required
TournamentMissionStarter.OpenTournamentJoustingMission("example", tournamentGame, settlement, culture, false);
```

### OpenBattleChallengeMission
`public static Mission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**Purpose:** Opens the resource or UI associated with battle challenge mission.

```csharp
// Static call; no instance required
TournamentMissionStarter.OpenBattleChallengeMission("example", priorityCharsAttacker, priorityCharsDefender);
```

## Usage Example

```csharp
TournamentMissionStarter.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## See Also

- [Area Index](../)