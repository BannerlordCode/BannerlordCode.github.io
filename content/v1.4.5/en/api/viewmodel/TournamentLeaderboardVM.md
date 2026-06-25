---
title: "TournamentLeaderboardVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentLeaderboardVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentLeaderboardVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard/TournamentLeaderboardVM.cs`

## Overview

`TournamentLeaderboardVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new TournamentLeaderboardVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)