---
title: "MatchmakingWaitTimeStats"
description: "MatchmakingWaitTimeStats：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 5 个（方法 3、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/MatchmakingWaitTimeStats.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatchmakingWaitTimeStats

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MatchmakingWaitTimeStats`
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingWaitTimeStats.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MatchmakingWaitTimeStats 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/MatchmakingWaitTimeStats.cs。它是一个 public 类，继承链为 MatchmakingWaitTimeStats。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MatchmakingWaitTimeStats 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 MatchmakingWaitTimeStats。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/MatchmakingWaitTimeStats.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Empty` | `public static MatchmakingWaitTimeStats Empty` | 属性 |
| `MatchmakingWaitTimeStats` | `public MatchmakingWaitTimeStats()` | 构造函数 |
| `AddRegionStats` | `public void AddRegionStats(MatchmakingWaitTimeRegionStats regionStats)` | 方法 |
| `GetRegionStats` | `public MatchmakingWaitTimeRegionStats GetRegionStats(string region)` | 方法 |
| `GetWaitTime` | `public int GetWaitTime(string region, string gameType, WaitTimeStatType statType)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
