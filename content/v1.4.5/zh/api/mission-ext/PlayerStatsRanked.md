---
title: "PlayerStatsRanked"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerStatsRanked`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerStatsRanked

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsRanked : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsRanked.cs`

## 概述

`PlayerStatsRanked` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Rating` | `public int Rating { get; set; }` |
| `Rank` | `public string Rank { get; set; }` |
| `Evaluating` | `public bool Evaluating { get; set; }` |
| `EvaluationMatchesPlayedCount` | `public int EvaluationMatchesPlayedCount { get; set; }` |

## 主要方法

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int rating, int ratingDeviation, string rank, bool evaluating, int evaluationMatchesPlayedCount)`

**用途 / Purpose:** 处理 `fill with` 相关逻辑。

### FillWithNewPlayer
`public virtual void FillWithNewPlayer(PlayerId playerId, string gameType, int defaultRating, int defaultRatingDeviation)`

**用途 / Purpose:** 处理 `fill with new player` 相关逻辑。

## 使用示例

```csharp
var value = new PlayerStatsRanked();
value.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0);
```

## 参见

- [完整类目录](../catalog)