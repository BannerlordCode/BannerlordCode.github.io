<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemPlacementComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemPlacementComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class ItemPlacementComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase`
**Base:** `TournamentLeaderboardSortControllerVM.ItemComparerBase`
**领域:** campaign-ext

## 概述

`ItemPlacementComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 ItemPlacementComparer 实例，再调用它的公开方法
var value = new ItemPlacementComparer();
value.ExecuteSortByName();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
