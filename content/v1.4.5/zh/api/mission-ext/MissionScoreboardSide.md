---
title: "MissionScoreboardSide"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionScoreboardSide`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardSide

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardSide`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## 概述

`MissionScoreboardSide` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**用途 / Purpose:** 向当前集合/状态中添加 `player`。

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**用途 / Purpose:** 从当前集合/状态中移除 `player`。

### GetValuesOf
`public string GetValuesOf(MissionPeer peer)`

**用途 / Purpose:** 获取 `values of` 的当前值。

### GetHeaderNames
`public string GetHeaderNames()`

**用途 / Purpose:** 获取 `header names` 的当前值。

### GetHeaderIds
`public string GetHeaderIds()`

**用途 / Purpose:** 获取 `header ids` 的当前值。

### GetScore
`public int GetScore(MissionPeer peer)`

**用途 / Purpose:** 获取 `score` 的当前值。

### UpdateHeader
`public void UpdateHeader(ScoreboardHeader headers)`

**用途 / Purpose:** 更新 `header` 的状态或数据。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### CalculateAndGetMVPScoreWithPeer
`public KeyValuePair<MissionPeer, int> CalculateAndGetMVPScoreWithPeer()`

**用途 / Purpose:** 处理 `calculate and get m v p score with peer` 相关逻辑。

## 使用示例

```csharp
var value = new MissionScoreboardSide();
value.AddPlayer(peer);
```

## 参见

- [完整类目录](../catalog)