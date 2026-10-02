---
title: "PlayerStatsBase"
description: "PlayerStatsBase：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 11 个（方法 2、属性 9、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsBase

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PlayerStatsBase 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs。它是一个 public 类，继承链为 PlayerStatsBase。public/protected 成员共 11 个：2 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerStatsBase 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 PlayerStatsBase。成员构成以属性为主（属性 9/11，方法 2/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | 属性 |
| `KillCount` | `public int KillCount` | 属性 |
| `DeathCount` | `public int DeathCount` | 属性 |
| `AssistCount` | `public int AssistCount` | 属性 |
| `WinCount` | `public int WinCount` | 属性 |
| `LoseCount` | `public int LoseCount` | 属性 |
| `ForfeitCount` | `public int ForfeitCount` | 属性 |
| `AverageKillPerDeath` | `public float AverageKillPerDeath` | 属性 |
| `GameType` | `public string GameType` | 属性 |
| `FillWith` | `public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount)` | 方法 |
| `Update` | `public virtual void Update(BattlePlayerStatsBase battleStats, bool won)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
