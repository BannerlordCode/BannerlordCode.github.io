---
title: "PlayerStatsCaptain"
description: "PlayerStatsCaptain 的自动生成类参考。"
---
# PlayerStatsCaptain

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsCaptain : PlayerStatsRanked`
**Base:** `PlayerStatsRanked`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs`

## 概述

`PlayerStatsCaptain` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaptainsKilled` | `public int CaptainsKilled { get; set; }` |
| `MVPs` | `public int MVPs { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `AverageScore` | `public int AverageScore { get; }` |

## 主要方法

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int rating, int ratingDeviation, string rank, bool evaluating, int evaluationMatchesPlayedCount, int captainsKilled, int mvps, int score)`

**用途 / Purpose:** 处理与 「fill with」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PlayerStatsCaptain 实例
PlayerStatsCaptain playerStatsCaptain = ...;
playerStatsCaptain.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0, 0, 0, 0);
```

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId, int defaultRating, int defaultRatingDeviation)`

**用途 / Purpose:** 处理与 「fill with new player」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PlayerStatsCaptain 实例
PlayerStatsCaptain playerStatsCaptain = ...;
playerStatsCaptain.FillWithNewPlayer(playerId, 0, 0);
```

### Update
`public void Update(BattlePlayerStatsCaptain stats, bool won)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 PlayerStatsCaptain 实例
PlayerStatsCaptain playerStatsCaptain = ...;
playerStatsCaptain.Update(stats, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayerStatsCaptain playerStatsCaptain = ...;
playerStatsCaptain.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0, "example", false, 0, 0, 0, 0);
```

## 参见

- [本区域目录](../)