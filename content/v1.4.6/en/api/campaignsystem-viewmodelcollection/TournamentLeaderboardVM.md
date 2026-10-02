---
title: "TournamentLeaderboardVM"
description: "TournamentLeaderboardVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 14 exposed members (4 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs."
---
# TournamentLeaderboardVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TournamentLeaderboardVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs`

## Overview

TournamentLeaderboardVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentLeaderboardVM → ViewModel. It exposes 14 public/protected members: 4 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentLeaderboardVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard) the module directory; inheritance chain TournamentLeaderboardVM → ViewModel. The surface is property-led (properties 9/14, methods 4/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TournamentLeaderboardEntryItemVM](../TournamentLeaderboardEntryItemVM)
- [same namespace TournamentLeaderboardSortControllerVM](../TournamentLeaderboardSortControllerVM)
