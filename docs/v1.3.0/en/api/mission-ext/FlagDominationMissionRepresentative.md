<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FlagDominationMissionRepresentative`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FlagDominationMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagDominationMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs`

## Overview

`FlagDominationMissionRepresentative` lives in `TaleWorlds.MountAndBlade.MissionRepresentatives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.MissionRepresentatives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGoldAmountForVisual
`public int GetGoldAmountForVisual()`

**Purpose:** Gets the current value of `gold amount for visual`.

### UpdateSelectedClassServer
`public void UpdateSelectedClassServer(Agent agent)`

**Purpose:** Updates the state or data of `selected class server`.

### CheckIfSurvivedLastRoundAndReset
`public bool CheckIfSurvivedLastRoundAndReset()`

**Purpose:** Handles logic related to `check if survived last round and reset`.

### GetGoldGainsFromKillData
`public int GetGoldGainsFromKillData(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isFriendly)`

**Purpose:** Gets the current value of `gold gains from kill data`.

### GetGoldGainFromKillDataAndUpdateFlags
`public int GetGoldGainFromKillDataAndUpdateFlags(MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist)`

**Purpose:** Gets the current value of `gold gain from kill data and update flags`.

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**Purpose:** Gets the current value of `gold gains from ally death reward`.

## Usage Example

```csharp
var value = new FlagDominationMissionRepresentative();
value.GetGoldAmountForVisual();
```

## See Also

- [Complete Class Catalog](../catalog)