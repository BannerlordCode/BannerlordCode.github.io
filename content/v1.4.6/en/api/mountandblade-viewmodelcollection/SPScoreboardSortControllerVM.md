---
title: "SPScoreboardSortControllerVM"
description: "SPScoreboardSortControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 35 exposed members (6 methods, 20 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs."
---
# SPScoreboardSortControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardSortControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs`

## Overview

SPScoreboardSortControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardSortControllerVM → ViewModel. It exposes 35 public/protected members: 6 methods, 20 properties, 1 constructors, 8 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardSortControllerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard) the module directory; inheritance chain SPScoreboardSortControllerVM → ViewModel. The surface is property-led (properties 20/35, methods 6/35), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPScoreboardSortControllerVM` | `public SPScoreboardSortControllerVM(ref MBBindingList<SPScoreboardPartyVM>listToControl)` | constructor |
| `ExecuteSortByRemaining` | `public void ExecuteSortByRemaining()` | method |
| `ExecuteSortByKill` | `public void ExecuteSortByKill()` | method |
| `ExecuteSortByUpgrade` | `public void ExecuteSortByUpgrade()` | method |
| `ExecuteSortByDead` | `public void ExecuteSortByDead()` | method |
| `ExecuteSortByWounded` | `public void ExecuteSortByWounded()` | method |
| `ExecuteSortByRouted` | `public void ExecuteSortByRouted()` | method |
| `RemainingState` | `public int RemainingState` | property |
| `IsRemainingSelected` | `public bool IsRemainingSelected` | property |
| `KillState` | `public int KillState` | property |
| `IsKillSelected` | `public bool IsKillSelected` | property |
| `UpgradeState` | `public int UpgradeState` | property |
| `IsUpgradeSelected` | `public bool IsUpgradeSelected` | property |
| `DeadState` | `public int DeadState` | property |
| `IsDeadSelected` | `public bool IsDeadSelected` | property |
| `WoundedState` | `public int WoundedState` | property |
| `IsWoundedSelected` | `public bool IsWoundedSelected` | property |
| `RoutedState` | `public int RoutedState` | property |
| `IsRoutedSelected` | `public bool IsRoutedSelected` | property |
| `IComparer` | `public abstract class ScoreboardUnitItemComparerBase : IComparer<SPScoreboardUnitVM>` | property |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemRemainingComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | property |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemKillComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | property |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemUpgradeComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | property |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemDeadComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | property |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemWoundedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | property |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemRoutedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | property |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemMemberComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | property |
| `IComparer` | `public abstract class ScoreboardUnitItemComparerBase : IComparer<SPScoreboardUnitVM>` | nested type |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemRemainingComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | nested type |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemKillComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | nested type |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemUpgradeComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | nested type |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemDeadComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | nested type |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemWoundedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | nested type |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemRoutedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | nested type |
| `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | `public class ItemMemberComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase` | nested type |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM)
