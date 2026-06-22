<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchmakingQueueStats`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchmakingQueueStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MatchmakingQueueStats` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Empty` | `public static MatchmakingQueueStats Empty { get; }` |
| `TotalCount` | `public int TotalCount { get; }` |
| `AverageWaitTime` | `public int AverageWaitTime { get; }` |


## Key Methods

### AddRegionStats

```csharp
public void AddRegionStats(MatchmakingQueueRegionStats matchmakingQueueRegionStats)
```

### GetRegionStats

```csharp
public MatchmakingQueueRegionStats GetRegionStats(string region)
```

### GetQueueCountOf

```csharp
public int GetQueueCountOf(string region, string gameTypes)
```

### GetRegionNames

```csharp
public string GetRegionNames()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)