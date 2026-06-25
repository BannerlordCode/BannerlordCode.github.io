---
title: "TeamDeathmatchMissionRepresentative"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamDeathmatchMissionRepresentative`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `agent spawned` event is raised.

### GetGoldGainsFromKillDataAndUpdateFlags
`public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)`

**Purpose:** Gets the current value of `gold gains from kill data and update flags`.

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**Purpose:** Gets the current value of `gold gains from ally death reward`.

## Usage Example

```csharp
var value = new TeamDeathmatchMissionRepresentative();
value.OnAgentSpawned();
```

## See Also

- [Complete Class Catalog](../catalog)