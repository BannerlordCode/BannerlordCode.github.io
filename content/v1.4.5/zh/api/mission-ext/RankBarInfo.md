---
title: "RankBarInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RankBarInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RankBarInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Ranked
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RankBarInfo`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Ranked/RankBarInfo.cs`

## 概述

`RankBarInfo` 位于 `TaleWorlds.MountAndBlade.Diamond.Ranked`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.Ranked` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RankId` | `public string RankId { get; set; }` |
| `PreviousRankId` | `public string PreviousRankId { get; set; }` |
| `NextRankId` | `public string NextRankId { get; set; }` |
| `ProgressPercentage` | `public float ProgressPercentage { get; set; }` |
| `Rating` | `public int Rating { get; set; }` |
| `RatingToNextRank` | `public int RatingToNextRank { get; set; }` |
| `IsEvaluating` | `public bool IsEvaluating { get; set; }` |
| `EvaluationMatchesPlayed` | `public int EvaluationMatchesPlayed { get; set; }` |
| `TotalEvaluationMatchesRequired` | `public int TotalEvaluationMatchesRequired { get; set; }` |

## 主要方法

### CreateBarInfo
`public static RankBarInfo CreateBarInfo(string rankId, string previousRankId, string nextRankId, float progressPercentage, int rating, int ratingToNextRank)`

**用途 / Purpose:** 创建一个 `bar info` 实例或对象。

### CreateUnrankedInfo
`public static RankBarInfo CreateUnrankedInfo(int matchesPlayed, int totalMatchesRequired)`

**用途 / Purpose:** 创建一个 `unranked info` 实例或对象。

## 使用示例

```csharp
RankBarInfo.CreateBarInfo("example", "example", "example", 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)