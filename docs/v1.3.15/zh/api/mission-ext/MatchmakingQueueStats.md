<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatchmakingQueueStats`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchmakingQueueStats

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MatchmakingQueueStats` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Empty` | `public static MatchmakingQueueStats Empty { get; }` |
| `TotalCount` | `public int TotalCount { get; }` |
| `AverageWaitTime` | `public int AverageWaitTime { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)