---
title: "TournamentLeaderboardVM"
description: "TournamentLeaderboardVM 的自动生成类参考。"
---
# TournamentLeaderboardVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs`

## 概述

`TournamentLeaderboardVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SortController` | `public TournamentLeaderboardSortControllerVM SortController { get; set; }` |
| `Entries` | `public MBBindingList<TournamentLeaderboardEntryItemVM> Entries { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `HeroText` | `public string HeroText { get; set; }` |
| `VictoriesText` | `public string VictoriesText { get; set; }` |
| `RankText` | `public string RankText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardVM 实例
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardVM 实例
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.OnFinalize();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardVM 实例
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.ExecuteDone();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardVM 实例
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.RefreshValues();
```

## 参见

- [本区域目录](../)