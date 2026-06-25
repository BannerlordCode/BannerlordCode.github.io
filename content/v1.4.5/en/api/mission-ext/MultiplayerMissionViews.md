---
title: "MultiplayerMissionViews"
description: "Auto-generated class reference for MultiplayerMissionViews."
---
# MultiplayerMissionViews

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionViews`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerMissionViews.cs`

## Overview

`MultiplayerMissionViews` lives in `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTeamDeathmatchMission
`public static MissionView OpenTeamDeathmatchMission(Mission mission)`

**Purpose:** Opens the resource or UI associated with `team deathmatch mission`.

```csharp
// Static call; no instance required
MultiplayerMissionViews.OpenTeamDeathmatchMission(mission);
```

### OpenDuelMission
`public static MissionView OpenDuelMission(Mission mission)`

**Purpose:** Opens the resource or UI associated with `duel mission`.

```csharp
// Static call; no instance required
MultiplayerMissionViews.OpenDuelMission(mission);
```

### OpenSiegeMission
`public static MissionView OpenSiegeMission(Mission mission)`

**Purpose:** Opens the resource or UI associated with `siege mission`.

```csharp
// Static call; no instance required
MultiplayerMissionViews.OpenSiegeMission(mission);
```

### OpenBattle
`public static MissionView OpenBattle(Mission mission)`

**Purpose:** Opens the resource or UI associated with `battle`.

```csharp
// Static call; no instance required
MultiplayerMissionViews.OpenBattle(mission);
```

### OpenCaptain
`public static MissionView OpenCaptain(Mission mission)`

**Purpose:** Opens the resource or UI associated with `captain`.

```csharp
// Static call; no instance required
MultiplayerMissionViews.OpenCaptain(mission);
```

### OpenSkirmish
`public static MissionView OpenSkirmish(Mission mission)`

**Purpose:** Opens the resource or UI associated with `skirmish`.

```csharp
// Static call; no instance required
MultiplayerMissionViews.OpenSkirmish(mission);
```

## Usage Example

```csharp
MultiplayerMissionViews.OpenTeamDeathmatchMission(mission);
```

## See Also

- [Area Index](../)