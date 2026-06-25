---
title: "MatchmakingWaitTimeStats"
description: "Auto-generated class reference for MatchmakingWaitTimeStats."
---
# MatchmakingWaitTimeStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingWaitTimeStats`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingWaitTimeStats.cs`

## Overview

`MatchmakingWaitTimeStats` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Empty` | `public static MatchmakingWaitTimeStats Empty { get; }` |

## Key Methods

### AddRegionStats
`public void AddRegionStats(MatchmakingWaitTimeRegionStats regionStats)`

**Purpose:** **Purpose:** Adds region stats to the current collection or state.

```csharp
// Obtain an instance of MatchmakingWaitTimeStats from the subsystem API first
MatchmakingWaitTimeStats matchmakingWaitTimeStats = ...;
matchmakingWaitTimeStats.AddRegionStats(regionStats);
```

### GetRegionStats
`public MatchmakingWaitTimeRegionStats GetRegionStats(string region)`

**Purpose:** **Purpose:** Reads and returns the region stats value held by the this instance.

```csharp
// Obtain an instance of MatchmakingWaitTimeStats from the subsystem API first
MatchmakingWaitTimeStats matchmakingWaitTimeStats = ...;
var result = matchmakingWaitTimeStats.GetRegionStats("example");
```

### GetWaitTime
`public int GetWaitTime(string region, string gameType, WaitTimeStatType statType)`

**Purpose:** **Purpose:** Reads and returns the wait time value held by the this instance.

```csharp
// Obtain an instance of MatchmakingWaitTimeStats from the subsystem API first
MatchmakingWaitTimeStats matchmakingWaitTimeStats = ...;
var result = matchmakingWaitTimeStats.GetWaitTime("example", "example", statType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MatchmakingWaitTimeStats matchmakingWaitTimeStats = ...;
matchmakingWaitTimeStats.AddRegionStats(regionStats);
```

## See Also

- [Area Index](../)