<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RankBarInfo`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RankBarInfo

**命名空间:** TaleWorlds.MountAndBlade.Diamond.Ranked
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class RankBarInfo`
**领域:** mission-ext

## 概述

`RankBarInfo` 位于 `TaleWorlds.MountAndBlade.Diamond.Ranked`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
RankBarInfo.CreateBarInfo("example", "example", "example", 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
