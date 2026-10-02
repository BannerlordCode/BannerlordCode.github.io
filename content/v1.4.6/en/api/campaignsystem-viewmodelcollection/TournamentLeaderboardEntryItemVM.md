---
title: "TournamentLeaderboardEntryItemVM"
description: "TournamentLeaderboardEntryItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardEntryItemVM.cs."
---
# TournamentLeaderboardEntryItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TournamentLeaderboardEntryItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardEntryItemVM.cs`

## Overview

TournamentLeaderboardEntryItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardEntryItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentLeaderboardEntryItemVM → ViewModel. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentLeaderboardEntryItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard) the module directory; inheritance chain TournamentLeaderboardEntryItemVM → ViewModel. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardEntryItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Rank` | `public int Rank` | property |
| `PrizeValue` | `public float PrizeValue` | property |
| `TournamentLeaderboardEntryItemVM` | `public TournamentLeaderboardEntryItemVM(Hero hero, int victories, int placement)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ChampionRewardsHint` | `public BasicTooltipViewModel ChampionRewardsHint` | property |
| `Name` | `public string Name` | property |
| `RankText` | `public string RankText` | property |
| `Victories` | `public int Victories` | property |
| `IsChampion` | `public bool IsChampion` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `Hero` | `public HeroVM Hero` | property |
| `PrizeStr` | `public string PrizeStr` | property |
| `PlacementOnLeaderboard` | `public int PlacementOnLeaderboard` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TournamentLeaderboardSortControllerVM](../TournamentLeaderboardSortControllerVM)
- [same namespace TournamentLeaderboardVM](../TournamentLeaderboardVM)
