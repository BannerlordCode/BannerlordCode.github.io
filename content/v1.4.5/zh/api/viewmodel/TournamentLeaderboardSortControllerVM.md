---
title: "TournamentLeaderboardSortControllerVM"
description: "TournamentLeaderboardSortControllerVM 的自动生成类参考。"
---
# TournamentLeaderboardSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentLeaderboardSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs`

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

### SetSortMode
`public void SetSortMode(bool isAcending)`

**用途 / Purpose:** 为 「sort mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**用途 / Purpose:** 执行 「sort by name」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByPrize
`public void ExecuteSortByPrize()`

**用途 / Purpose:** 执行 「sort by prize」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByPrize();
```

### ExecuteSortByPlacement
`public void ExecuteSortByPlacement()`

**用途 / Purpose:** 执行 「sort by placement」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByPlacement();
```

### ExecuteSortByVictories
`public void ExecuteSortByVictories()`

**用途 / Purpose:** 执行 「sort by victories」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardSortControllerVM 实例
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByVictories();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.SetSortMode(false);
```

## 参见

- [本区域目录](../)