<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchmakingQueueStats`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MatchmakingQueueStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingQueueStats`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueStats.cs`

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

### GetRegionStats
`public MatchmakingQueueRegionStats GetRegionStats(string region)`

**Purpose:** Gets the current value of `region stats`.

### GetQueueCountOf
`public int GetQueueCountOf(string region, string gameTypes)`

**Purpose:** Gets the current value of `queue count of`.

### GetRegionNames
`public string GetRegionNames()`

**Purpose:** Gets the current value of `region names`.

## Usage Example

```csharp
var value = new MatchmakingQueueStats();
value.AddRegionStats(matchmakingQueueRegionStats);
```

## See Also

- [Complete Class Catalog](../catalog)