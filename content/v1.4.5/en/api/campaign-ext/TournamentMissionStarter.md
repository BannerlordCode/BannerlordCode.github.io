---
title: "TournamentMissionStarter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentMissionStarter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentMissionStarter

**Namespace:** SandBox.Tournaments
**Module:** SandBox.Tournaments
**Type:** `public static class TournamentMissionStarter`
**Area:** campaign-ext

## Overview

`TournamentMissionStarter` lives in `SandBox.Tournaments`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Tournaments` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTournamentArcheryMission
`public static Mission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament archery mission`.

### OpenTournamentFightMission
`public static Mission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament fight mission`.

### OpenTournamentHorseRaceMission
`public static Mission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament horse race mission`.

### OpenTournamentJoustingMission
`public static Mission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament jousting mission`.

### OpenBattleChallengeMission
`public static Mission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**Purpose:** Handles logic related to `open battle challenge mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TournamentMissionStarter.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
