---
title: "RankBarInfo"
description: "RankBarInfo：TaleWorlds.MountAndBlade.Diamond.Ranked 的 public 类；公开成员 13 个（方法 2、属性 9、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RankBarInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Ranked`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class RankBarInfo`
**File:** `TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

RankBarInfo 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs。它是一个 public 类，继承链为 RankBarInfo。public/protected 成员共 13 个：2 方法、9 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RankBarInfo 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.Ranked`，继承链 RankBarInfo。成员构成以属性为主（属性 9/13，方法 2/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/Ranked/RankBarInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RankId` | `public string RankId` | 属性 |
| `PreviousRankId` | `public string PreviousRankId` | 属性 |
| `NextRankId` | `public string NextRankId` | 属性 |
| `ProgressPercentage` | `public float ProgressPercentage` | 属性 |
| `Rating` | `public int Rating` | 属性 |
| `RatingToNextRank` | `public int RatingToNextRank` | 属性 |
| `IsEvaluating` | `public bool IsEvaluating` | 属性 |
| `EvaluationMatchesPlayed` | `public int EvaluationMatchesPlayed` | 属性 |
| `TotalEvaluationMatchesRequired` | `public int TotalEvaluationMatchesRequired` | 属性 |
| `RankBarInfo` | `public RankBarInfo()` | 构造函数 |
| `RankBarInfo` | `public RankBarInfo(string rankId, string previousRankId, string nextRankId, float progressPercentage, int rating, int ratingToNextRank, bool isEvaluating, int evaluationMatchesPlayed, int totalEvaluationMatchesRequired)` | 构造函数 |
| `CreateBarInfo` | `public static RankBarInfo CreateBarInfo(string rankId, string previousRankId, string nextRankId, float progressPercentage, int rating, int ratingToNextRank)` | 方法 |
| `CreateUnrankedInfo` | `public static RankBarInfo CreateUnrankedInfo(int matchesPlayed, int totalMatchesRequired)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GameTypeRankInfo](../GameTypeRankInfo/)
- [同命名空间 Ranks](../Ranks/)
