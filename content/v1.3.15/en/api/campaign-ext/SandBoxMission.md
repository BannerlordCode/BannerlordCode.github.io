---
title: "SandBoxMission"
description: "Auto-generated class reference for SandBoxMission."
---
# SandBoxMission

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxMission`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/SandBoxMission.cs`

## Overview

`SandBoxMission` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTournamentArcheryMission
`public static IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** **Purpose:** Opens the resource or UI associated with tournament archery mission.

```csharp
// Static call; no instance required
SandBoxMission.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentFightMission
`public static IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** **Purpose:** Opens the resource or UI associated with tournament fight mission.

```csharp
// Static call; no instance required
SandBoxMission.OpenTournamentFightMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentHorseRaceMission
`public static IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** **Purpose:** Opens the resource or UI associated with tournament horse race mission.

```csharp
// Static call; no instance required
SandBoxMission.OpenTournamentHorseRaceMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentJoustingMission
`public static IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** **Purpose:** Opens the resource or UI associated with tournament jousting mission.

```csharp
// Static call; no instance required
SandBoxMission.OpenTournamentJoustingMission("example", tournamentGame, settlement, culture, false);
```

### OpenBattleChallengeMission
`public static IMission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**Purpose:** **Purpose:** Opens the resource or UI associated with battle challenge mission.

```csharp
// Static call; no instance required
SandBoxMission.OpenBattleChallengeMission("example", priorityCharsAttacker, priorityCharsDefender);
```

## Usage Example

```csharp
SandBoxMission.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## See Also

- [Area Index](../)