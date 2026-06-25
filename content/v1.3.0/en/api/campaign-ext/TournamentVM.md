---
title: "TournamentVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentVM.cs`

## Overview

`TournamentVM` lives in `SandBox.ViewModelCollection.Tournament` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Tournament` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisableUI` | `public Action DisableUI { get; }` |
| `Tournament` | `public TournamentBehavior Tournament { get; }` |
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
| `InitializationOver` | `public bool InitializationOver { get; set; }` |
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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteBet
`public void ExecuteBet()`

**Purpose:** Executes the `bet` operation or workflow.

### ExecuteJoinTournament
`public void ExecuteJoinTournament()`

**Purpose:** Executes the `join tournament` operation or workflow.

### ExecuteSkipRound
`public void ExecuteSkipRound()`

**Purpose:** Executes the `skip round` operation or workflow.

### ExecuteSkipAllRounds
`public void ExecuteSkipAllRounds()`

**Purpose:** Executes the `skip all rounds` operation or workflow.

### ExecuteWatchRound
`public void ExecuteWatchRound()`

**Purpose:** Executes the `watch round` operation or workflow.

### ExecuteLeave
`public void ExecuteLeave()`

**Purpose:** Executes the `leave` operation or workflow.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### ExecuteShowPrizeItemTooltip
`public void ExecuteShowPrizeItemTooltip()`

**Purpose:** Executes the `show prize item tooltip` operation or workflow.

### ExecuteHidePrizeItemTooltip
`public void ExecuteHidePrizeItemTooltip()`

**Purpose:** Executes the `hide prize item tooltip` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

## Usage Example

```csharp
var value = new TournamentVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)