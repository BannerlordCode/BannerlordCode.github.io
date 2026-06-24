<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerMissionViews`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionViews

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionViews`
**Area:** mission-ext

## Overview

`MultiplayerMissionViews` lives in `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTeamDeathmatchMission
`public static MissionView OpenTeamDeathmatchMission(Mission mission)`

**Purpose:** Handles logic related to `open team deathmatch mission`.

### OpenDuelMission
`public static MissionView OpenDuelMission(Mission mission)`

**Purpose:** Handles logic related to `open duel mission`.

### OpenSiegeMission
`public static MissionView OpenSiegeMission(Mission mission)`

**Purpose:** Handles logic related to `open siege mission`.

### OpenBattle
`public static MissionView OpenBattle(Mission mission)`

**Purpose:** Handles logic related to `open battle`.

### OpenCaptain
`public static MissionView OpenCaptain(Mission mission)`

**Purpose:** Handles logic related to `open captain`.

### OpenSkirmish
`public static MissionView OpenSkirmish(Mission mission)`

**Purpose:** Handles logic related to `open skirmish`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerMissionViews.OpenTeamDeathmatchMission(mission);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
