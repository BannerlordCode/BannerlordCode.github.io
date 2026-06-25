---
title: "MultiplayerMissions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerMissions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissions

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerMissions`
**Area:** mission-ext

## Overview

`MultiplayerMissions` lives in `TaleWorlds.MountAndBlade.Multiplayer`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenTeamDeathmatchMission
`public static void OpenTeamDeathmatchMission(string scene)`

**Purpose:** Handles logic related to `open team deathmatch mission`.

### OpenDuelMission
`public static void OpenDuelMission(string scene)`

**Purpose:** Handles logic related to `open duel mission`.

### OpenSiegeMission
`public static void OpenSiegeMission(string scene)`

**Purpose:** Handles logic related to `open siege mission`.

### OpenBattleMission
`public static void OpenBattleMission(string scene)`

**Purpose:** Handles logic related to `open battle mission`.

### OpenCaptainMission
`public static void OpenCaptainMission(string scene)`

**Purpose:** Handles logic related to `open captain mission`.

### OpenSkirmishMission
`public static void OpenSkirmishMission(string scene)`

**Purpose:** Handles logic related to `open skirmish mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerMissions.OpenTeamDeathmatchMission("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
