---
title: "MatchmakingQueueRegionStats"
description: "MatchmakingQueueRegionStats 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 queue count object of 的结果。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueRegionStats 实例
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
var result = matchmakingQueueRegionStats.GetQueueCountObjectOf("example");
```

### AddStats
`public void AddStats(MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats)`

**用途 / Purpose:** **用途 / Purpose:** 将 stats 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueRegionStats 实例
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
matchmakingQueueRegionStats.AddStats(matchmakingQueueGameTypeStats);
```

### GetQueueCountOf
`public int GetQueueCountOf(string gameTypes)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 queue count of 的结果。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueRegionStats 实例
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
var result = matchmakingQueueRegionStats.GetQueueCountOf("example");
```

### SetWaitTimeStats
`public void SetWaitTimeStats(int averageWaitTime, int maxWaitTime, int minWaitTime, int medianWaitTime)`

**用途 / Purpose:** **用途 / Purpose:** 为 wait time stats 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueRegionStats 实例
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
matchmakingQueueRegionStats.SetWaitTimeStats(0, 0, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MatchmakingQueueRegionStats matchmakingQueueRegionStats = ...;
matchmakingQueueRegionStats.GetQueueCountObjectOf("example");
```

## 参见

- [本区域目录](../)