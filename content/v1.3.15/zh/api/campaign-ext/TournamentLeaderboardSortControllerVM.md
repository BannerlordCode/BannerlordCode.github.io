---
title: "TournamentLeaderboardSortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentLeaderboardSortControllerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentLeaderboardSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentLeaderboardSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs`

## 概述

`TournamentLeaderboardSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `VictoriesState` | `public int VictoriesState { get; set; }` |
| `PrizeState` | `public int PrizeState { get; set; }` |
| `PlacementState` | `public int PlacementState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsPrizeSelected` | `public bool IsPrizeSelected { get; set; }` |
| `IsPlacementSelected` | `public bool IsPlacementSelected { get; set; }` |
| `IsVictoriesSelected` | `public bool IsVictoriesSelected { get; set; }` |

## 主要方法

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 `sort by name` 操作或流程。

### ExecuteSortByPrize
`public void ExecuteSortByPrize()`

**用途 / Purpose:** 执行 `sort by prize` 操作或流程。

### ExecuteSortByPlacement
`public void ExecuteSortByPlacement()`

**用途 / Purpose:** 执行 `sort by placement` 操作或流程。

### ExecuteSortByVictories
`public void ExecuteSortByVictories()`

**用途 / Purpose:** 执行 `sort by victories` 操作或流程。

### SetSortMode
`public void SetSortMode(bool isAcending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new TournamentLeaderboardSortControllerVM();
value.ExecuteSortByName();
```

## 参见

- [完整类目录](../catalog)