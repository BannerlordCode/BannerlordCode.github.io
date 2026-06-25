---
title: "TournamentLeaderboardEntryItemVM"
description: "TournamentLeaderboardEntryItemVM 的自动生成类参考。"
---
# TournamentLeaderboardEntryItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentLeaderboardEntryItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard/TournamentLeaderboardEntryItemVM.cs`

## 概述

`TournamentLeaderboardEntryItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Rank` | `public int Rank { get; }` |
| `PrizeValue` | `public float PrizeValue { get; }` |
| `ChampionRewardsHint` | `public BasicTooltipViewModel ChampionRewardsHint { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `RankText` | `public string RankText { get; set; }` |
| `Victories` | `public int Victories { get; set; }` |
| `IsChampion` | `public bool IsChampion { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `Hero` | `public HeroVM Hero { get; set; }` |
| `PrizeStr` | `public string PrizeStr { get; set; }` |
| `PlacementOnLeaderboard` | `public int PlacementOnLeaderboard { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentLeaderboardEntryItemVM 实例
TournamentLeaderboardEntryItemVM tournamentLeaderboardEntryItemVM = ...;
tournamentLeaderboardEntryItemVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentLeaderboardEntryItemVM tournamentLeaderboardEntryItemVM = ...;
tournamentLeaderboardEntryItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)