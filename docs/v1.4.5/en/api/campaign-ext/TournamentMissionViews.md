<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentMissionViews`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentMissionViews

**Namespace:** SandBox.View.Missions.Tournaments
**Module:** SandBox.View
**Type:** `public class TournamentMissionViews`
**Area:** campaign-ext

## Overview

`TournamentMissionViews` lives in `SandBox.View.Missions.Tournaments`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
TournamentMissionViews.OpenTournamentArcheryMission(mission);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
