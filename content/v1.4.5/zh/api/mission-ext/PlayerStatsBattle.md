---
title: "PlayerStatsBattle"
description: "PlayerStatsBattle 的自动生成类参考。"
---
# PlayerStatsBattle

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsBattle : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerStatsBattle.cs`

## 概述

`PlayerStatsBattle` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RoundsWon` | `public int RoundsWon { get; }` |
| `RoundsLost` | `public int RoundsLost { get; }` |

## 主要方法

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int roundsWon, int roundsLost)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FillWith 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlayerStatsBattle 实例
PlayerStatsBattle playerStatsBattle = ...;
playerStatsBattle.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0);
```

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FillWithNewPlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlayerStatsBattle 实例
PlayerStatsBattle playerStatsBattle = ...;
playerStatsBattle.FillWithNewPlayer(playerId);
```

### Update
`public void Update(BattlePlayerStatsBattle stats, bool won)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 PlayerStatsBattle 实例
PlayerStatsBattle playerStatsBattle = ...;
playerStatsBattle.Update(stats, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayerStatsBattle playerStatsBattle = ...;
playerStatsBattle.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0, 0);
```

## 参见

- [本区域目录](../)