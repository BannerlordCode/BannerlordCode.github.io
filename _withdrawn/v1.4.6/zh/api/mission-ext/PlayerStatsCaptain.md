---
title: "PlayerStatsCaptain"
description: "PlayerStatsCaptain：TaleWorlds.MountAndBlade.Diamond 的 public 类，继承 PlayerStatsRanked；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsCaptain

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsCaptain : PlayerStatsRanked`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PlayerStatsCaptain 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs。它是一个 public 类，实现/继承 PlayerStatsRanked，继承链为 PlayerStatsCaptain → PlayerStatsRanked → PlayerStatsBase。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerStatsCaptain 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 PlayerStatsCaptain → PlayerStatsRanked → PlayerStatsBase。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CaptainsKilled` | `public int CaptainsKilled` | 属性 |
| `MVPs` | `public int MVPs` | 属性 |
| `Score` | `public int Score` | 属性 |
| `AverageScore` | `public int AverageScore` | 属性 |
| `PlayerStatsCaptain` | `public PlayerStatsCaptain()` | 构造函数 |
| `FillWith` | `public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int rating, int ratingDeviation, string rank, bool evaluating, int evaluationMatchesPlayedCount, int captainsKilled, int mvps, int score)` | 方法 |
| `FillWithNewPlayer` | `public void FillWithNewPlayer(PlayerId playerId, int defaultRating, int defaultRatingDeviation)` | 方法 |
| `Update` | `public void Update(BattlePlayerStatsCaptain stats, bool won)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PlayerStatsRanked](../PlayerStatsRanked/)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
