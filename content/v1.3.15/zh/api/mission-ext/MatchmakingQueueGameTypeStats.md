---
title: "MatchmakingQueueGameTypeStats"
description: "MatchmakingQueueGameTypeStats 的自动生成类参考。"
---
# MatchmakingQueueGameTypeStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchmakingQueueGameTypeStats`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueGameTypeStats.cs`

## 概述

`MatchmakingQueueGameTypeStats` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameTypes` | `public string GameTypes { get; set; }` |
| `Count` | `public int Count { get; set; }` |
| `TotalWaitTime` | `public int TotalWaitTime { get; set; }` |

## 主要方法

### HasGameType
`public bool HasGameType(string gameType)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 game type。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueGameTypeStats 实例
MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats = ...;
var result = matchmakingQueueGameTypeStats.HasGameType("example");
```

### EqualWith
`public bool EqualWith(string gameTypes)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EqualWith 对应的操作。

```csharp
// 先通过子系统 API 拿到 MatchmakingQueueGameTypeStats 实例
MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats = ...;
var result = matchmakingQueueGameTypeStats.EqualWith("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats = ...;
matchmakingQueueGameTypeStats.HasGameType("example");
```

## 参见

- [本区域目录](../)