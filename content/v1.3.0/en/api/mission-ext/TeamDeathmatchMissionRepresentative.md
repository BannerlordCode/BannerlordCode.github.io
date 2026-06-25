---
title: "TeamDeathmatchMissionRepresentative"
description: "Auto-generated class reference for TeamDeathmatchMissionRepresentative."
---
# TeamDeathmatchMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamDeathmatchMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/TeamDeathmatchMissionRepresentative.cs`

## Overview

`TeamDeathmatchMissionRepresentative` lives in `TaleWorlds.MountAndBlade.MissionRepresentatives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.MissionRepresentatives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAgentSpawned
`public override void OnAgentSpawned()`

**Purpose:** Invoked when the agent spawned event is raised.

```csharp
// Obtain an instance of TeamDeathmatchMissionRepresentative from the subsystem API first
TeamDeathmatchMissionRepresentative teamDeathmatchMissionRepresentative = ...;
teamDeathmatchMissionRepresentative.OnAgentSpawned();
```

### GetGoldGainsFromKillDataAndUpdateFlags
`public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)`

**Purpose:** Reads and returns the gold gains from kill data and update flags value held by the this instance.

```csharp
// Obtain an instance of TeamDeathmatchMissionRepresentative from the subsystem API first
TeamDeathmatchMissionRepresentative teamDeathmatchMissionRepresentative = ...;
var result = teamDeathmatchMissionRepresentative.GetGoldGainsFromKillDataAndUpdateFlags(killerPerkHandler, assistingHitterPerkHandler, victimClass, false, false, false);
```

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**Purpose:** Reads and returns the gold gains from ally death reward value held by the this instance.

```csharp
// Obtain an instance of TeamDeathmatchMissionRepresentative from the subsystem API first
TeamDeathmatchMissionRepresentative teamDeathmatchMissionRepresentative = ...;
var result = teamDeathmatchMissionRepresentative.GetGoldGainsFromAllyDeathReward(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamDeathmatchMissionRepresentative teamDeathmatchMissionRepresentative = ...;
teamDeathmatchMissionRepresentative.OnAgentSpawned();
```

## See Also

- [Area Index](../)