---
title: "MatchmakingWaitTimeStats"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatchmakingWaitTimeStats`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchmakingWaitTimeStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingWaitTimeStats`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingWaitTimeStats.cs`

## 概述

`MatchmakingWaitTimeStats` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Empty` | `public static MatchmakingWaitTimeStats Empty { get; }` |

## 主要方法

### AddRegionStats
`public void AddRegionStats(MatchmakingWaitTimeRegionStats regionStats)`

**用途 / Purpose:** 向当前集合/状态中添加 `region stats`。

### GetRegionStats
`public MatchmakingWaitTimeRegionStats GetRegionStats(string region)`

**用途 / Purpose:** 获取 `region stats` 的当前值。

### GetWaitTime
`public int GetWaitTime(string region, string gameType, WaitTimeStatType statType)`

**用途 / Purpose:** 获取 `wait time` 的当前值。

## 使用示例

```csharp
var value = new MatchmakingWaitTimeStats();
value.AddRegionStats(regionStats);
```

## 参见

- [完整类目录](../catalog)