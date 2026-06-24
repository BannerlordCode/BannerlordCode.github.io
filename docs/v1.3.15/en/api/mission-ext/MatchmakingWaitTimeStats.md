<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchmakingWaitTimeStats`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Adds `region stats` to the current collection or state.

### GetRegionStats
`public MatchmakingWaitTimeRegionStats GetRegionStats(string region)`

**Purpose:** Gets the current value of `region stats`.

### GetWaitTime
`public int GetWaitTime(string region, string gameType, WaitTimeStatType statType)`

**Purpose:** Gets the current value of `wait time`.

## Usage Example

```csharp
var value = new MatchmakingWaitTimeStats();
value.AddRegionStats(regionStats);
```

## See Also

- [Complete Class Catalog](../catalog)