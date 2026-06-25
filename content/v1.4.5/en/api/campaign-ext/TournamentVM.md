---
title: "TournamentVM"
description: "Auto-generated class reference for TournamentVM."
---
# TournamentVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tournament/TournamentVM.cs`

## Overview

`TournamentVM` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisableUI` | `public Action DisableUI { get; set; }` |
| `Tournament` | `public TournamentBehavior Tournament { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `TournamentWinnerTitle` | `public string TournamentWinnerTitle { get; set; }` |
| `TournamentWinner` | `public TournamentParticipantVM TournamentWinner { get; set; }` |
| `MaximumBetValue` | `public int MaximumBetValue { get; set; }` |
| `IsBetButtonEnabled` | `public bool IsBetButtonEnabled { get; }` |
| `BetText` | `public string BetText { get; set; }` |
| `BetTitleText` | `public string BetTitleText { get; set; }` |
| `CurrentWagerText` | `public string CurrentWagerText { get; set; }` |
| `BetDescriptionText` | `public string BetDescriptionText { get; set; }` |
| `PrizeVisual` | `public ItemImageIdentifierVM PrizeVisual { get; set; }` |
| `PrizeItemName` | `public string PrizeItemName { get; set; }` |
| `TournamentPrizeText` | `public string TournamentPrizeText { get; set; }` |
| `WageredDenars` | `public int WageredDenars { get; set; }` |
| `ExpectedBetDenars` | `public int ExpectedBetDenars { get; set; }` |
| `BetOddsText` | `public string BetOddsText { get; set; }` |
| `BettedDenarsText` | `public string BettedDenarsText { get; set; }` |
| `OverallExpectedDenarsText` | `public string OverallExpectedDenarsText { get; set; }` |
| `CurrentExpectedDenarsText` | `public string CurrentExpectedDenarsText { get; set; }` |
| `TotalDenarsText` | `public string TotalDenarsText { get; set; }` |
| `AcceptText` | `public string AcceptText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `IsCurrentMatchActive` | `public bool IsCurrentMatchActive { get; set; }` |
| `CurrentMatch` | `public TournamentMatchVM CurrentMatch { get; set; }` |
| `IsTournamentIncomplete` | `public bool IsTournamentIncomplete { get; set; }` |
| `ActiveRoundIndex` | `public int ActiveRoundIndex { get; set; }` |
| `CanPlayerJoin` | `public bool CanPlayerJoin { get; set; }` |
| `HasPrizeItem` | `public bool HasPrizeItem { get; set; }` |
| `JoinTournamentText` | `public string JoinTournamentText { get; set; }` |
| `SkipRoundText` | `public string SkipRoundText { get; set; }` |
| `WatchRoundText` | `public string WatchRoundText { get; set; }` |
| `LeaveText` | `public string LeaveText { get; set; }` |
| `Round1` | `public TournamentRoundVM Round1 { get; set; }` |
| `Round2` | `public TournamentRoundVM Round2 { get; set; }` |
| `Round3` | `public TournamentRoundVM Round3 { get; set; }` |
| `Round4` | `public TournamentRoundVM Round4 { get; set; }` |
| `TournamentTitle` | `public string TournamentTitle { get; set; }` |
| `IsOver` | `public bool IsOver { get; set; }` |
| `WinnerIntro` | `public string WinnerIntro { get; set; }` |
| `BattleRewards` | `public MBBindingList<TournamentRewardVM> BattleRewards { get; set; }` |
| `IsWinnerHero` | `public bool IsWinnerHero { get; set; }` |
| `IsBetWindowEnabled` | `public bool IsBetWindowEnabled { get; set; }` |
| `WinnerBanner` | `public BannerImageIdentifierVM WinnerBanner { get; set; }` |
| `SkipAllRoundsHint` | `public HintViewModel SkipAllRoundsHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.RefreshValues();
```

### ExecuteBet
`public void ExecuteBet()`

**Purpose:** Runs the operation or workflow associated with bet.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteBet();
```

### ExecuteJoinTournament
`public void ExecuteJoinTournament()`

**Purpose:** Runs the operation or workflow associated with join tournament.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteJoinTournament();
```

### ExecuteSkipRound
`public void ExecuteSkipRound()`

**Purpose:** Runs the operation or workflow associated with skip round.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteSkipRound();
```

### ExecuteSkipAllRounds
`public void ExecuteSkipAllRounds()`

**Purpose:** Runs the operation or workflow associated with skip all rounds.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteSkipAllRounds();
```

### ExecuteWatchRound
`public void ExecuteWatchRound()`

**Purpose:** Runs the operation or workflow associated with watch round.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteWatchRound();
```

### ExecuteLeave
`public void ExecuteLeave()`

**Purpose:** Runs the operation or workflow associated with leave.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteLeave();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.Refresh();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.OnAgentRemoved(agent);
```

### ExecuteShowPrizeItemTooltip
`public void ExecuteShowPrizeItemTooltip()`

**Purpose:** Runs the operation or workflow associated with show prize item tooltip.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteShowPrizeItemTooltip();
```

### ExecuteHidePrizeItemTooltip
`public void ExecuteHidePrizeItemTooltip()`

**Purpose:** Runs the operation or workflow associated with hide prize item tooltip.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteHidePrizeItemTooltip();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of TournamentVM from the subsystem API first
TournamentVM tournamentVM = ...;
tournamentVM.SetCancelInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentVM tournamentVM = ...;
tournamentVM.RefreshValues();
```

## See Also

- [Area Index](../)