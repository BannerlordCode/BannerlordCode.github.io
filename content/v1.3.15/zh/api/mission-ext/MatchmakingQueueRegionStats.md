---
title: "MatchmakingQueueRegionStats"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatchmakingQueueRegionStats`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchmakingQueueRegionStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingQueueRegionStats`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs`

## 概述

`MatchmakingQueueRegionStats` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public MatchmakingQueueGameTypeStats GetQueueCountObjectOf(string gameTypes)`

**用途 / Purpose:** 获取 `queue count object of` 的当前值。

### AddStats
`public void AddStats(MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats)`

**用途 / Purpose:** 向当前集合/状态中添加 `stats`。

### GetQueueCountOf
`public int GetQueueCountOf(string gameTypes)`

**用途 / Purpose:** 获取 `queue count of` 的当前值。

### SetWaitTimeStats
`public void SetWaitTimeStats(int averageWaitTime, int maxWaitTime, int minWaitTime, int medianWaitTime)`

**用途 / Purpose:** 设置 `wait time stats` 的值或状态。

## 使用示例

```csharp
var value = new MatchmakingQueueRegionStats();
value.GetQueueCountObjectOf("example");
```

## 参见

- [完整类目录](../catalog)