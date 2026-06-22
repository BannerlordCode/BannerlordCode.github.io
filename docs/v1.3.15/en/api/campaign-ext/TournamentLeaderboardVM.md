<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentLeaderboardVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentLeaderboardVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TournamentLeaderboardVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SortController` | `public TournamentLeaderboardSortControllerVM SortController { get; set; }` |
| `Entries` | `public MBBindingList<TournamentLeaderboardEntryItemVM> Entries { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `HeroText` | `public string HeroText { get; set; }` |
| `VictoriesText` | `public string VictoriesText { get; set; }` |
| `RankText` | `public string RankText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)