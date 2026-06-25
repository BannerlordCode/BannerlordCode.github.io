---
title: "MatchmakingQueueStats"
description: "Auto-generated class reference for MatchmakingQueueStats."
---
# MatchmakingQueueStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingQueueStats`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueStats.cs`

## Overview

`MatchmakingQueueStats` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Empty` | `public static MatchmakingQueueStats Empty { get; }` |
| `TotalCount` | `public int TotalCount { get; }` |
| `AverageWaitTime` | `public int AverageWaitTime { get; }` |

## Key Methods

### AddRegionStats
`public void AddRegionStats(MatchmakingQueueRegionStats matchmakingQueueRegionStats)`

**Purpose:** Adds `region stats` to the current collection or state.

```csharp
// Obtain an instance of MatchmakingQueueStats from the subsystem API first
MatchmakingQueueStats matchmakingQueueStats = ...;
matchmakingQueueStats.AddRegionStats(matchmakingQueueRegionStats);
```

### GetRegionStats
`public MatchmakingQueueRegionStats GetRegionStats(string region)`

**Purpose:** Reads and returns the `region stats` value held by the current object.

```csharp
// Obtain an instance of MatchmakingQueueStats from the subsystem API first
MatchmakingQueueStats matchmakingQueueStats = ...;
var result = matchmakingQueueStats.GetRegionStats("example");
```

### GetQueueCountOf
`public int GetQueueCountOf(string region, string gameTypes)`

**Purpose:** Reads and returns the `queue count of` value held by the current object.

```csharp
// Obtain an instance of MatchmakingQueueStats from the subsystem API first
MatchmakingQueueStats matchmakingQueueStats = ...;
var result = matchmakingQueueStats.GetQueueCountOf("example", "example");
```

### GetRegionNames
`public string GetRegionNames()`

**Purpose:** Reads and returns the `region names` value held by the current object.

```csharp
// Obtain an instance of MatchmakingQueueStats from the subsystem API first
MatchmakingQueueStats matchmakingQueueStats = ...;
var result = matchmakingQueueStats.GetRegionNames();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MatchmakingQueueStats matchmakingQueueStats = ...;
matchmakingQueueStats.AddRegionStats(matchmakingQueueRegionStats);
```

## See Also

- [Area Index](../)