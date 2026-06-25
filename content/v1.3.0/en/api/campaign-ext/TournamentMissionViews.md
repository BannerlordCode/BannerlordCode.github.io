---
title: "TournamentMissionViews"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentMissionViews`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentMissionViews

**Namespace:** SandBox.View.Missions.Tournaments
**Module:** SandBox.View
**Type:** `public class TournamentMissionViews`
**Base:** none
**File:** `SandBox.View/Missions/Tournaments/TournamentMissionViews.cs`

## Overview

`TournamentMissionViews` lives in `SandBox.View.Missions.Tournaments` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Missions.Tournaments` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTournamentArcheryMission
`public static MissionView OpenTournamentArcheryMission(Mission mission)`

**Purpose:** Handles logic related to `open tournament archery mission`.

### OpenTournamentFightMission
`public static MissionView OpenTournamentFightMission(Mission mission)`

**Purpose:** Handles logic related to `open tournament fight mission`.

### OpenTournamentHorseRaceMission
`public static MissionView OpenTournamentHorseRaceMission(Mission mission)`

**Purpose:** Handles logic related to `open tournament horse race mission`.

### OpenTournamentJoustingMission
`public static MissionView OpenTournamentJoustingMission(Mission mission)`

**Purpose:** Handles logic related to `open tournament jousting mission`.

## Usage Example

```csharp
TournamentMissionViews.OpenTournamentArcheryMission(mission);
```

## See Also

- [Complete Class Catalog](../catalog)