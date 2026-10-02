---
title: "TournamentLeaderboardSortControllerVM"
description: "TournamentLeaderboardSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard, inheriting ViewModel; 23 exposed members (4 methods, 13 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentLeaderboardSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TournamentLeaderboardSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

TournamentLeaderboardSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentLeaderboardSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 23 public/protected members: 4 methods, 13 properties, 1 constructors, 5 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentLeaderboardSortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`, inheritance chain TournamentLeaderboardSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 13/23, methods 4/23), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TournamentLeaderboardSortControllerVM` | `public TournamentLeaderboardSortControllerVM(ref MBBindingList<TournamentLeaderboardEntryItemVM>listToControl)` | constructor |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | method |
| `ExecuteSortByPrize` | `public void ExecuteSortByPrize()` | method |
| `ExecuteSortByPlacement` | `public void ExecuteSortByPlacement()` | method |
| `ExecuteSortByVictories` | `public void ExecuteSortByVictories()` | method |
| `NameState` | `public int NameState` | property |
| `VictoriesState` | `public int VictoriesState` | property |
| `PrizeState` | `public int PrizeState` | property |
| `PlacementState` | `public int PlacementState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsPrizeSelected` | `public bool IsPrizeSelected` | property |
| `IsPlacementSelected` | `public bool IsPlacementSelected` | property |
| `IsVictoriesSelected` | `public bool IsVictoriesSelected` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<TournamentLeaderboardEntryItemVM>` | property |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | property |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemPrizeComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | property |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemPlacementComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | property |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemVictoriesComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<TournamentLeaderboardEntryItemVM>` | nested type |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | nested type |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemPrizeComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | nested type |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemPlacementComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | nested type |
| `TournamentLeaderboardSortControllerVM.ItemComparerBase` | `public class ItemVictoriesComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TournamentLeaderboardEntryItemVM](../TournamentLeaderboardEntryItemVM/)
- [same namespace TournamentLeaderboardVM](../TournamentLeaderboardVM/)
