<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchmakingQueueRegionStats`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `queue count object of`.

### AddStats
`public void AddStats(MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats)`

**Purpose:** Adds `stats` to the current collection or state.

### GetQueueCountOf
`public int GetQueueCountOf(string gameTypes)`

**Purpose:** Gets the current value of `queue count of`.

### SetWaitTimeStats
`public void SetWaitTimeStats(int averageWaitTime, int maxWaitTime, int minWaitTime, int medianWaitTime)`

**Purpose:** Sets the value or state of `wait time stats`.

## Usage Example

```csharp
var value = new MatchmakingQueueRegionStats();
value.GetQueueCountObjectOf("example");
```

## See Also

- [Complete Class Catalog](../catalog)