---
title: "MatchmakingWaitTimeRegionStats"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchmakingWaitTimeRegionStats`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchmakingWaitTimeRegionStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingWaitTimeRegionStats`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingWaitTimeRegionStats.cs`

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

**Purpose:** Sets the value or state of `game type average`.

### HasStatsForGameType
`public bool HasStatsForGameType(string gameType)`

**Purpose:** Checks whether the current object has/contains `stats for game type`.

### GetWaitTime
`public int GetWaitTime(string gameType, WaitTimeStatType statType)`

**Purpose:** Gets the current value of `wait time`.

## Usage Example

```csharp
var value = new MatchmakingWaitTimeRegionStats();
value.SetGameTypeAverage("example", statType, 0);
```

## See Also

- [Complete Class Catalog](../catalog)