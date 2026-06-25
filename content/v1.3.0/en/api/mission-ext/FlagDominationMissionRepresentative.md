---
title: "FlagDominationMissionRepresentative"
description: "Auto-generated class reference for FlagDominationMissionRepresentative."
---
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

**Purpose:** Reads and returns the `gold amount for visual` value held by the current object.

```csharp
// Obtain an instance of FlagDominationMissionRepresentative from the subsystem API first
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.GetGoldAmountForVisual();
```

### UpdateSelectedClassServer
`public void UpdateSelectedClassServer(Agent agent)`

**Purpose:** Recalculates and stores the latest representation of `selected class server`.

```csharp
// Obtain an instance of FlagDominationMissionRepresentative from the subsystem API first
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
flagDominationMissionRepresentative.UpdateSelectedClassServer(agent);
```

### CheckIfSurvivedLastRoundAndReset
`public bool CheckIfSurvivedLastRoundAndReset()`

**Purpose:** Verifies whether `if survived last round and reset` holds true for the current object.

```csharp
// Obtain an instance of FlagDominationMissionRepresentative from the subsystem API first
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.CheckIfSurvivedLastRoundAndReset();
```

### GetGoldGainsFromKillData
`public int GetGoldGainsFromKillData(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isFriendly)`

**Purpose:** Reads and returns the `gold gains from kill data` value held by the current object.

```csharp
// Obtain an instance of FlagDominationMissionRepresentative from the subsystem API first
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.GetGoldGainsFromKillData(killerPerkHandler, assistingHitterPerkHandler, victimClass, false, false);
```

### GetGoldGainFromKillDataAndUpdateFlags
`public int GetGoldGainFromKillDataAndUpdateFlags(MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist)`

**Purpose:** Reads and returns the `gold gain from kill data and update flags` value held by the current object.

```csharp
// Obtain an instance of FlagDominationMissionRepresentative from the subsystem API first
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.GetGoldGainFromKillDataAndUpdateFlags(victimClass, false);
```

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**Purpose:** Reads and returns the `gold gains from ally death reward` value held by the current object.

```csharp
// Obtain an instance of FlagDominationMissionRepresentative from the subsystem API first
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.GetGoldGainsFromAllyDeathReward(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
flagDominationMissionRepresentative.GetGoldAmountForVisual();
```

## See Also

- [Area Index](../)