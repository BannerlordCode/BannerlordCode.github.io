---
title: "MatchmakingQueueStats"
description: "MatchmakingQueueStats 的自动生成类参考。"
---
# MatchmakingQueueStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingQueueStats`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueStats.cs`

## 概述

`MatchmakingQueueStats` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Empty` | `public static MatchmakingQueueStats Empty { get; }` |
| `TotalCount` | `public int TotalCount { get; }` |
| `AverageWaitTime` | `public int AverageWaitTime { get; }` |

## 主要方法

### AddRegionStats
`public void AddRegionStats(MatchmakingQueueRegionStats matchmakingQueueRegionStats)`

**用途 / Purpose:** 将 「region stats」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueStats 实例
MatchmakingQueueStats matchmakingQueueStats = ...;
matchmakingQueueStats.AddRegionStats(matchmakingQueueRegionStats);
```

### GetRegionStats
`public MatchmakingQueueRegionStats GetRegionStats(string region)`

**用途 / Purpose:** 读取并返回当前对象中 「region stats」 的结果。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueStats 实例
MatchmakingQueueStats matchmakingQueueStats = ...;
var result = matchmakingQueueStats.GetRegionStats("example");
```

### GetQueueCountOf
`public int GetQueueCountOf(string region, string gameTypes)`

**用途 / Purpose:** 读取并返回当前对象中 「queue count of」 的结果。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueStats 实例
MatchmakingQueueStats matchmakingQueueStats = ...;
var result = matchmakingQueueStats.GetQueueCountOf("example", "example");
```

### GetRegionNames
`public string GetRegionNames()`

**用途 / Purpose:** 读取并返回当前对象中 「region names」 的结果。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueStats 实例
MatchmakingQueueStats matchmakingQueueStats = ...;
var result = matchmakingQueueStats.GetRegionNames();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MatchmakingQueueStats matchmakingQueueStats = ...;
matchmakingQueueStats.AddRegionStats(matchmakingQueueRegionStats);
```

## 参见

- [本区域目录](../)