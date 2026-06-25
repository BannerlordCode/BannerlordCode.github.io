---
title: "MatchmakingWaitTimeRegionStats"
description: "Auto-generated class reference for MatchmakingWaitTimeRegionStats."
---
# MatchmakingWaitTimeRegionStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingWaitTimeRegionStats`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/MatchmakingWaitTimeRegionStats.cs`

## Overview

`MatchmakingWaitTimeRegionStats` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Region` | `public string Region { get; }` |

## Key Methods

### SetGameTypeAverage
`public void SetGameTypeAverage(string gameType, WaitTimeStatType statType, int average)`

**Purpose:** Assigns a new value to `game type average` and updates the object's internal state.

```csharp
// Obtain an instance of MatchmakingWaitTimeRegionStats from the subsystem API first
MatchmakingWaitTimeRegionStats matchmakingWaitTimeRegionStats = ...;
matchmakingWaitTimeRegionStats.SetGameTypeAverage("example", statType, 0);
```

### HasStatsForGameType
`public bool HasStatsForGameType(string gameType)`

**Purpose:** Determines whether the current object already holds `stats for game type`.

```csharp
// Obtain an instance of MatchmakingWaitTimeRegionStats from the subsystem API first
MatchmakingWaitTimeRegionStats matchmakingWaitTimeRegionStats = ...;
var result = matchmakingWaitTimeRegionStats.HasStatsForGameType("example");
```

### GetWaitTime
`public int GetWaitTime(string gameType, WaitTimeStatType statType)`

**Purpose:** Reads and returns the `wait time` value held by the current object.

```csharp
// Obtain an instance of MatchmakingWaitTimeRegionStats from the subsystem API first
MatchmakingWaitTimeRegionStats matchmakingWaitTimeRegionStats = ...;
var result = matchmakingWaitTimeRegionStats.GetWaitTime("example", statType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MatchmakingWaitTimeRegionStats matchmakingWaitTimeRegionStats = ...;
matchmakingWaitTimeRegionStats.SetGameTypeAverage("example", statType, 0);
```

## See Also

- [Area Index](../)