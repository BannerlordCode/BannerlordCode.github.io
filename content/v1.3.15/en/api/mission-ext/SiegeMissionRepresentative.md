---
title: "SiegeMissionRepresentative"
description: "Auto-generated class reference for SiegeMissionRepresentative."
---
# SiegeMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs`

## Overview

`SiegeMissionRepresentative` lives in `TaleWorlds.MountAndBlade.MissionRepresentatives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.MissionRepresentatives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAgentSpawned
`public override void OnAgentSpawned()`

**Purpose:** Invoked when the `agent spawned` event is raised.

```csharp
// Obtain an instance of SiegeMissionRepresentative from the subsystem API first
SiegeMissionRepresentative siegeMissionRepresentative = ...;
siegeMissionRepresentative.OnAgentSpawned();
```

### GetGoldGainsFromKillDataAndUpdateFlags
`public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)`

**Purpose:** Reads and returns the `gold gains from kill data and update flags` value held by the current object.

```csharp
// Obtain an instance of SiegeMissionRepresentative from the subsystem API first
SiegeMissionRepresentative siegeMissionRepresentative = ...;
var result = siegeMissionRepresentative.GetGoldGainsFromKillDataAndUpdateFlags(killerPerkHandler, assistingHitterPerkHandler, victimClass, false, false, false);
```

### GetGoldGainsFromObjectiveAssist
`public int GetGoldGainsFromObjectiveAssist(GameEntity objectiveMostParentEntity, float contributionRatio, bool isCompleted)`

**Purpose:** Reads and returns the `gold gains from objective assist` value held by the current object.

```csharp
// Obtain an instance of SiegeMissionRepresentative from the subsystem API first
SiegeMissionRepresentative siegeMissionRepresentative = ...;
var result = siegeMissionRepresentative.GetGoldGainsFromObjectiveAssist(objectiveMostParentEntity, 0, false);
```

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**Purpose:** Reads and returns the `gold gains from ally death reward` value held by the current object.

```csharp
// Obtain an instance of SiegeMissionRepresentative from the subsystem API first
SiegeMissionRepresentative siegeMissionRepresentative = ...;
var result = siegeMissionRepresentative.GetGoldGainsFromAllyDeathReward(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeMissionRepresentative siegeMissionRepresentative = ...;
siegeMissionRepresentative.OnAgentSpawned();
```

## See Also

- [Area Index](../)