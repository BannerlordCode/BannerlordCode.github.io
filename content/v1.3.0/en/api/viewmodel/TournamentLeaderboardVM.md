---
title: "TournamentLeaderboardVM"
description: "Auto-generated class reference for TournamentLeaderboardVM."
---
# TournamentLeaderboardVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of TournamentLeaderboardVM from the subsystem API first
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of TournamentLeaderboardVM from the subsystem API first
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.OnFinalize();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of TournamentLeaderboardVM from the subsystem API first
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.ExecuteDone();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of TournamentLeaderboardVM from the subsystem API first
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentLeaderboardVM tournamentLeaderboardVM = ...;
tournamentLeaderboardVM.RefreshValues();
```

## See Also

- [Area Index](../)