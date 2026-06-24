<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeMissionRepresentative`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionRepresentatives/SiegeMissionRepresentative.cs`

## Overview

`SiegeMissionRepresentative` lives in `TaleWorlds.MountAndBlade.MissionRepresentatives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.MissionRepresentatives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAgentSpawned
`public override void OnAgentSpawned()`

**Purpose:** Called when the `agent spawned` event is raised.

### GetGoldGainsFromKillDataAndUpdateFlags
`public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)`

**Purpose:** Gets the current value of `gold gains from kill data and update flags`.

### GetGoldGainsFromObjectiveAssist
`public int GetGoldGainsFromObjectiveAssist(GameEntity objectiveMostParentEntity, float contributionRatio, bool isCompleted)`

**Purpose:** Gets the current value of `gold gains from objective assist`.

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**Purpose:** Gets the current value of `gold gains from ally death reward`.

## Usage Example

```csharp
var value = new SiegeMissionRepresentative();
value.OnAgentSpawned();
```

## See Also

- [Complete Class Catalog](../catalog)