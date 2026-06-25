---
title: "TournamentLeaderboardEntryItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentLeaderboardEntryItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentLeaderboardEntryItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentLeaderboardEntryItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardEntryItemVM.cs`

## Overview

`TournamentLeaderboardEntryItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new TournamentLeaderboardEntryItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)