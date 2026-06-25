---
title: "MatchmakingQueueRegionStats"
description: "Auto-generated class reference for MatchmakingQueueRegionStats."
---
# MatchmakingQueueRegionStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingQueueRegionStats`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs`

## Overview

`MatchmakingQueueRegionStats` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Region` | `public string Region { get; set; }` |
| `TotalCount` | `public int TotalCount { get; }` |
| `MaxWaitTime` | `public int MaxWaitTime { get; set; }` |
| `MinWaitTime` | `public int MinWaitTime { get; set; }` |
| `MedianWaitTime` | `public int MedianWaitTime { get; set; }` |
| `AverageWaitTime` | `public int AverageWaitTime { get; set; }` |

## Key Methods

### GetQueueCountObjectOf
`public MatchmakingQueueGameTypeStats GetQueueCountObjectOf(string gameTypes)`

**Purpose:** Reads and returns the queue count object of value held by the this instance.

```csharp
// Obtain an instance of MatchmakingQueueRegionStats from the subsystem API first
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
var result = matchmakingQueueRegionStats.GetQueueCountObjectOf("example");
```

### AddStats
`public void AddStats(MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats)`

**Purpose:** Adds stats to the current collection or state.

```csharp
// Obtain an instance of MatchmakingQueueRegionStats from the subsystem API first
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
matchmakingQueueRegionStats.AddStats(matchmakingQueueGameTypeStats);
```

### GetQueueCountOf
`public int GetQueueCountOf(string gameTypes)`

**Purpose:** Reads and returns the queue count of value held by the this instance.

```csharp
// Obtain an instance of MatchmakingQueueRegionStats from the subsystem API first
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
var result = matchmakingQueueRegionStats.GetQueueCountOf("example");
```

### SetWaitTimeStats
`public void SetWaitTimeStats(int averageWaitTime, int maxWaitTime, int minWaitTime, int medianWaitTime)`

**Purpose:** Assigns a new value to wait time stats and updates the object's internal state.

```csharp
// Obtain an instance of MatchmakingQueueRegionStats from the subsystem API first
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
matchmakingQueueRegionStats.SetWaitTimeStats(0, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
matchmakingQueueRegionStats.GetQueueCountObjectOf("example");
```

## See Also

- [Area Index](../)