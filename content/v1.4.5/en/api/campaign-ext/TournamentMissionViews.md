---
title: "TournamentMissionViews"
description: "Auto-generated class reference for TournamentMissionViews."
---
# TournamentMissionViews

**Namespace:** SandBox.View.Missions.Tournaments
**Module:** SandBox.View
**Type:** `public class TournamentMissionViews`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions.Tournaments/TournamentMissionViews.cs`

## Overview

`TournamentMissionViews` lives in `SandBox.View.Missions.Tournaments` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Missions.Tournaments` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTournamentArcheryMission
`public static MissionView OpenTournamentArcheryMission(Mission mission)`

**Purpose:** **Purpose:** Opens the resource or UI associated with tournament archery mission.

```csharp
// Static call; no instance required
TournamentMissionViews.OpenTournamentArcheryMission(mission);
```

### OpenTournamentFightMission
`public static MissionView OpenTournamentFightMission(Mission mission)`

**Purpose:** **Purpose:** Opens the resource or UI associated with tournament fight mission.

```csharp
// Static call; no instance required
TournamentMissionViews.OpenTournamentFightMission(mission);
```

### OpenTournamentHorseRaceMission
`public static MissionView OpenTournamentHorseRaceMission(Mission mission)`

**Purpose:** **Purpose:** Opens the resource or UI associated with tournament horse race mission.

```csharp
// Static call; no instance required
TournamentMissionViews.OpenTournamentHorseRaceMission(mission);
```

### OpenTournamentJoustingMission
`public static MissionView OpenTournamentJoustingMission(Mission mission)`

**Purpose:** **Purpose:** Opens the resource or UI associated with tournament jousting mission.

```csharp
// Static call; no instance required
TournamentMissionViews.OpenTournamentJoustingMission(mission);
```

## Usage Example

```csharp
TournamentMissionViews.OpenTournamentArcheryMission(mission);
```

## See Also

- [Area Index](../)