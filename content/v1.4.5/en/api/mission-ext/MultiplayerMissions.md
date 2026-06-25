---
title: "MultiplayerMissions"
description: "Auto-generated class reference for MultiplayerMissions."
---
# MultiplayerMissions

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerMissions`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerMissions.cs`

## Overview

`MultiplayerMissions` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTeamDeathmatchMission
`public static void OpenTeamDeathmatchMission(string scene)`

**Purpose:** **Purpose:** Opens the resource or UI associated with team deathmatch mission.

```csharp
// Static call; no instance required
MultiplayerMissions.OpenTeamDeathmatchMission("example");
```

### OpenDuelMission
`public static void OpenDuelMission(string scene)`

**Purpose:** **Purpose:** Opens the resource or UI associated with duel mission.

```csharp
// Static call; no instance required
MultiplayerMissions.OpenDuelMission("example");
```

### OpenSiegeMission
`public static void OpenSiegeMission(string scene)`

**Purpose:** **Purpose:** Opens the resource or UI associated with siege mission.

```csharp
// Static call; no instance required
MultiplayerMissions.OpenSiegeMission("example");
```

### OpenBattleMission
`public static void OpenBattleMission(string scene)`

**Purpose:** **Purpose:** Opens the resource or UI associated with battle mission.

```csharp
// Static call; no instance required
MultiplayerMissions.OpenBattleMission("example");
```

### OpenCaptainMission
`public static void OpenCaptainMission(string scene)`

**Purpose:** **Purpose:** Opens the resource or UI associated with captain mission.

```csharp
// Static call; no instance required
MultiplayerMissions.OpenCaptainMission("example");
```

### OpenSkirmishMission
`public static void OpenSkirmishMission(string scene)`

**Purpose:** **Purpose:** Opens the resource or UI associated with skirmish mission.

```csharp
// Static call; no instance required
MultiplayerMissions.OpenSkirmishMission("example");
```

## Usage Example

```csharp
MultiplayerMissions.OpenTeamDeathmatchMission("example");
```

## See Also

- [Area Index](../)