---
title: "SandBoxMission"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxMission`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMission

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxMission`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxMission.cs`

## Overview

`SandBoxMission` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTournamentArcheryMission
`public static IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament archery mission`.

### OpenTournamentFightMission
`public static IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament fight mission`.

### OpenTournamentHorseRaceMission
`public static IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament horse race mission`.

### OpenTournamentJoustingMission
`public static IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament jousting mission`.

### OpenBattleChallengeMission
`public static IMission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**Purpose:** Handles logic related to `open battle challenge mission`.

## Usage Example

```csharp
SandBoxMission.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## See Also

- [Complete Class Catalog](../catalog)