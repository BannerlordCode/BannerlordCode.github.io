---
title: "SPScoreboardSortControllerVM"
description: "SPScoreboardSortControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard, inheriting ViewModel; 35 exposed members (6 methods, 20 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPScoreboardSortControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardSortControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPScoreboardSortControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 35 public/protected members: 6 methods, 20 properties, 1 constructors, 8 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardSortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`, inheritance chain SPScoreboardSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 20/35, methods 6/35), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM/)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM/)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys/)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM/)
