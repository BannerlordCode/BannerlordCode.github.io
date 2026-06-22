<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatchmakingQueueRegionStats`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchmakingQueueRegionStats

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MatchmakingQueueRegionStats` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Region` | `public string Region { get; set; }` |
| `TotalCount` | `public int TotalCount { get; }` |
| `MaxWaitTime` | `public int MaxWaitTime { get; set; }` |
| `MinWaitTime` | `public int MinWaitTime { get; set; }` |
| `MedianWaitTime` | `public int MedianWaitTime { get; set; }` |
| `AverageWaitTime` | `public int AverageWaitTime { get; set; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)