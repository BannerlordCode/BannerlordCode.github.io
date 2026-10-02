---
title: "TournamentLeaderboardVM"
description: "TournamentLeaderboardVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard, inheriting ViewModel; 14 exposed members (4 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentLeaderboardVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TournamentLeaderboardVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

TournamentLeaderboardVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentLeaderboardVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 4 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentLeaderboardVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`, inheritance chain TournamentLeaderboardVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/14, methods 4/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TournamentLeaderboardVM` | `public TournamentLeaderboardVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `SortController` | `public TournamentLeaderboardSortControllerVM SortController` | property |
| `MBBindingList` | `public MBBindingList<TournamentLeaderboardEntryItemVM>Entries` | property |
| `DoneText` | `public string DoneText` | property |
| `TitleText` | `public string TitleText` | property |
| `HeroText` | `public string HeroText` | property |
| `VictoriesText` | `public string VictoriesText` | property |
| `RankText` | `public string RankText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TournamentLeaderboardEntryItemVM](../TournamentLeaderboardEntryItemVM/)
- [same namespace TournamentLeaderboardSortControllerVM](../TournamentLeaderboardSortControllerVM/)
