<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPScoreboardStatsVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardStatsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardStatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs`

## 概述

`SPScoreboardStatsVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsMainParty` | `public bool IsMainParty { get; set; }` |
| `Kill` | `public int Kill { get; set; }` |
| `Dead` | `public int Dead { get; set; }` |
| `Wounded` | `public int Wounded { get; set; }` |
| `Routed` | `public int Routed { get; set; }` |
| `Remaining` | `public int Remaining { get; set; }` |
| `ReadyToUpgrade` | `public int ReadyToUpgrade { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateScores
`public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**用途 / Purpose:** 更新 `scores` 的状态或数据。

### IsAnyStatRelevant
`public bool IsAnyStatRelevant()`

**用途 / Purpose:** 处理 `is any stat relevant` 相关逻辑。

### GetScoreForOneAliveMember
`public SPScoreboardStatsVM GetScoreForOneAliveMember()`

**用途 / Purpose:** 获取 `score for one alive member` 的当前值。

## 使用示例

```csharp
var value = new SPScoreboardStatsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)