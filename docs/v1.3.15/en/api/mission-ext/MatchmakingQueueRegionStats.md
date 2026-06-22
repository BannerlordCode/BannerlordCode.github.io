<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchmakingQueueRegionStats`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchmakingQueueRegionStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MatchmakingQueueRegionStats` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public MatchmakingQueueGameTypeStats GetQueueCountObjectOf(string gameTypes)
```

### AddStats

```csharp
public void AddStats(MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats)
```

### GetQueueCountOf

```csharp
public int GetQueueCountOf(string gameTypes)
```

### SetWaitTimeStats

```csharp
public void SetWaitTimeStats(int averageWaitTime, int maxWaitTime, int minWaitTime, int medianWaitTime)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)