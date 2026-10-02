---
title: "SPScoreboardSortControllerVM"
description: "SPScoreboardSortControllerVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 35 个（方法 6、属性 20、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs。"
---
# SPScoreboardSortControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardSortControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs`

## 概述

SPScoreboardSortControllerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPScoreboardSortControllerVM → ViewModel。public/protected 成员共 35 个：6 方法、20 属性、1 构造函数、8 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPScoreboardSortControllerVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard），继承链 SPScoreboardSortControllerVM → ViewModel。成员构成以属性为主（属性 20/35，方法 6/35），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPScoreboardSortControllerVM` | `public SPScoreboardSortControllerVM(ref MBBindingList<SPScoreboardPartyVM>listToControl)` | 构造函数 |
| `ExecuteSortByRemaining` | `public void ExecuteSortByRemaining()` | 方法 |
| `ExecuteSortByKill` | `public void ExecuteSortByKill()` | 方法 |
| `ExecuteSortByUpgrade` | `public void ExecuteSortByUpgrade()` | 方法 |
| `ExecuteSortByDead` | `public void ExecuteSortByDead()` | 方法 |
| `ExecuteSortByWounded` | `public void ExecuteSortByWounded()` | 方法 |
| `ExecuteSortByRouted` | `public void ExecuteSortByRouted()` | 方法 |
| `RemainingState` | `public int RemainingState` | 属性 |
| `IsRemainingSelected` | `public bool IsRemainingSelected` | 属性 |
| `KillState` | `public int KillState` | 属性 |
| `IsKillSelected` | `public bool IsKillSelected` | 属性 |
| `UpgradeState` | `public int UpgradeState` | 属性 |
| `IsUpgradeSelected` | `public bool IsUpgradeSelected` | 属性 |
| `DeadState` | `public int DeadState` | 属性 |
| `IsDeadSelected` | `public bool IsDeadSelected` | 属性 |
| `WoundedState` | `public int WoundedState` | 属性 |
| `IsWoundedSelected` | `public bool IsWoundedSelected` | 属性 |
| `RoutedState` | `public int RoutedState` | 属性 |
| `IsRoutedSelected` | `public bool IsRoutedSelected` | 属性 |
| `IComparer` | `public abstract class ScoreboardUnitItemComparerBase : IComparer<SPScoreboardUnitVM>` | 属性 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemRemainingComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 属性 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemKillComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 属性 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemUpgradeComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 属性 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemDeadComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 属性 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemWoundedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 属性 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemRoutedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 属性 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemMemberComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 属性 |
| `IComparer` | `public abstract class ScoreboardUnitItemComparerBase : IComparer<SPScoreboardUnitVM>` | 嵌套类型 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemRemainingComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 嵌套类型 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemKillComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 嵌套类型 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemUpgradeComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 嵌套类型 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemDeadComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 嵌套类型 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemWoundedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 嵌套类型 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemRoutedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 嵌套类型 |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemMemberComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | 嵌套类型 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [同命名空间 ScoreboardBaseVM](../ScoreboardBaseVM)
- [同命名空间 ScoreboardHotkeys](../ScoreboardHotkeys)
- [同命名空间 SPScoreboardPartyVM](../SPScoreboardPartyVM)
