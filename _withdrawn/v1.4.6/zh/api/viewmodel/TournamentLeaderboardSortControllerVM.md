---
title: "TournamentLeaderboardSortControllerVM"
description: "TournamentLeaderboardSortControllerVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard 的 public 类，继承 ViewModel；公开成员 23 个（方法 4、属性 13、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentLeaderboardSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TournamentLeaderboardSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

TournamentLeaderboardSortControllerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TournamentLeaderboardSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 23 个：4 方法、13 属性、1 构造函数、5 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentLeaderboardSortControllerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`，继承链 TournamentLeaderboardSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/23，方法 4/23），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentLeaderboardSortControllerVM` | `public TournamentLeaderboardSortControllerVM(ref MBBindingList<TournamentLeaderboardEntryItemVM>listToControl)` | 构造函数 |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | 方法 |
| `ExecuteSortByPrize` | `public void ExecuteSortByPrize()` | 方法 |
| `ExecuteSortByPlacement` | `public void ExecuteSortByPlacement()` | 方法 |
| `ExecuteSortByVictories` | `public void ExecuteSortByVictories()` | 方法 |
| `NameState` | `public int NameState` | 属性 |
| `VictoriesState` | `public int VictoriesState` | 属性 |
| `PrizeState` | `public int PrizeState` | 属性 |
| `PlacementState` | `public int PlacementState` | 属性 |
| `IsNameSelected` | `public bool IsNameSelected` | 属性 |
| `IsPrizeSelected` | `public bool IsPrizeSelected` | 属性 |
| `IsPlacementSelected` | `public bool IsPlacementSelected` | 属性 |
| `IsVictoriesSelected` | `public bool IsVictoriesSelected` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<TournamentLeaderboardEntryItemVM>` | 属性 |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | 属性 |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemPrizeComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | 属性 |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemPlacementComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | 属性 |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemVictoriesComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<TournamentLeaderboardEntryItemVM>` | 嵌套类型 |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemPrizeComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemPlacementComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | 嵌套类型 |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemVictoriesComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 TournamentLeaderboardEntryItemVM](../TournamentLeaderboardEntryItemVM/)
- [同命名空间 TournamentLeaderboardVM](../TournamentLeaderboardVM/)
