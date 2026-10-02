---
title: "MatchmakingQueueRegionStats"
description: "MatchmakingQueueRegionStats：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 11 个（方法 4、属性 6、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatchmakingQueueRegionStats

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MatchmakingQueueRegionStats`
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MatchmakingQueueRegionStats 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs。它是一个 public 类，继承链为 MatchmakingQueueRegionStats。public/protected 成员共 11 个：4 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MatchmakingQueueRegionStats 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 MatchmakingQueueRegionStats。成员构成以属性为主（属性 6/11，方法 4/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Region` | `public string Region` | 属性 |
| `TotalCount` | `public int TotalCount` | 属性 |
| `MaxWaitTime` | `public int MaxWaitTime` | 属性 |
| `MinWaitTime` | `public int MinWaitTime` | 属性 |
| `MedianWaitTime` | `public int MedianWaitTime` | 属性 |
| `AverageWaitTime` | `public int AverageWaitTime` | 属性 |
| `MatchmakingQueueRegionStats` | `public MatchmakingQueueRegionStats(string region)` | 构造函数 |
| `GetQueueCountObjectOf` | `public MatchmakingQueueGameTypeStats GetQueueCountObjectOf(string[]gameTypes)` | 方法 |
| `AddStats` | `public void AddStats(MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats)` | 方法 |
| `GetQueueCountOf` | `public int GetQueueCountOf(string[]gameTypes)` | 方法 |
| `SetWaitTimeStats` | `public void SetWaitTimeStats(int averageWaitTime, int maxWaitTime, int minWaitTime, int medianWaitTime)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
