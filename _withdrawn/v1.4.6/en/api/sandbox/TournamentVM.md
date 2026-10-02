---
title: "TournamentVM"
description: "TournamentVM: a public class in SandBox.ViewModelCollection.Tournament, inheriting ViewModel; 62 exposed members (14 methods, 47 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Tournament/TournamentVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TournamentVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tournament/TournamentVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 62 public/protected members: 14 methods, 47 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Tournament`, inheritance chain TournamentVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 47/62, methods 14/62), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tournament/TournamentVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DisableUI` | `public Action DisableUI` | property |
| `Tournament` | `public TournamentBehavior Tournament` | property |
| `TournamentVM` | `public TournamentVM(Action disableUI, TournamentBehavior tournamentBehavior)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteBet` | `public void ExecuteBet()` | method |
| `ExecuteJoinTournament` | `public void ExecuteJoinTournament()` | method |
| `ExecuteSkipRound` | `public void ExecuteSkipRound()` | method |
| `ExecuteSkipAllRounds` | `public void ExecuteSkipAllRounds()` | method |
| `ExecuteWatchRound` | `public void ExecuteWatchRound()` | method |
| `ExecuteLeave` | `public void ExecuteLeave()` | method |
| `Refresh` | `public void Refresh()` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | method |
| `ExecuteShowPrizeItemTooltip` | `public void ExecuteShowPrizeItemTooltip()` | method |
| `ExecuteHidePrizeItemTooltip` | `public void ExecuteHidePrizeItemTooltip()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `TournamentWinnerTitle` | `public string TournamentWinnerTitle` | property |
| `TournamentWinner` | `public TournamentParticipantVM TournamentWinner` | property |
| `MaximumBetValue` | `public int MaximumBetValue` | property |
| `IsBetButtonEnabled` | `public bool IsBetButtonEnabled` | property |
| `BetText` | `public string BetText` | property |
| `BetTitleText` | `public string BetTitleText` | property |
| `CurrentWagerText` | `public string CurrentWagerText` | property |
| `BetDescriptionText` | `public string BetDescriptionText` | property |
| `PrizeVisual` | `public ItemImageIdentifierVM PrizeVisual` | property |
| `PrizeItemName` | `public string PrizeItemName` | property |
| `TournamentPrizeText` | `public string TournamentPrizeText` | property |
| `WageredDenars` | `public int WageredDenars` | property |
| `ExpectedBetDenars` | `public int ExpectedBetDenars` | property |
| `BetOddsText` | `public string BetOddsText` | property |
| `BettedDenarsText` | `public string BettedDenarsText` | property |
| `OverallExpectedDenarsText` | `public string OverallExpectedDenarsText` | property |
| `CurrentExpectedDenarsText` | `public string CurrentExpectedDenarsText` | property |
| `TotalDenarsText` | `public string TotalDenarsText` | property |
| `AcceptText` | `public string AcceptText` | property |
| `CancelText` | `public string CancelText` | property |
| `IsCurrentMatchActive` | `public bool IsCurrentMatchActive` | property |
| `CurrentMatch` | `public TournamentMatchVM CurrentMatch` | property |
| `IsTournamentIncomplete` | `public bool IsTournamentIncomplete` | property |
| `ActiveRoundIndex` | `public int ActiveRoundIndex` | property |
| `CanPlayerJoin` | `public bool CanPlayerJoin` | property |
| `HasPrizeItem` | `public bool HasPrizeItem` | property |
| `JoinTournamentText` | `public string JoinTournamentText` | property |
| `SkipRoundText` | `public string SkipRoundText` | property |
| `WatchRoundText` | `public string WatchRoundText` | property |
| `LeaveText` | `public string LeaveText` | property |
| `Round1` | `public TournamentRoundVM Round1` | property |
| `Round2` | `public TournamentRoundVM Round2` | property |
| `Round3` | `public TournamentRoundVM Round3` | property |
| `Round4` | `public TournamentRoundVM Round4` | property |
| `InitializationOver` | `public bool InitializationOver` | property |
| `TournamentTitle` | `public string TournamentTitle` | property |
| `IsOver` | `public bool IsOver` | property |
| `WinnerIntro` | `public string WinnerIntro` | property |
| `MBBindingList` | `public MBBindingList<TournamentRewardVM>BattleRewards` | property |
| `IsWinnerHero` | `public bool IsWinnerHero` | property |
| `IsBetWindowEnabled` | `public bool IsBetWindowEnabled` | property |
| `WinnerBanner` | `public BannerImageIdentifierVM WinnerBanner` | property |
| `SkipAllRoundsHint` | `public HintViewModel SkipAllRoundsHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TournamentMatchVM](../TournamentMatchVM/)
- [same namespace TournamentParticipantVM](../TournamentParticipantVM/)
- [same namespace TournamentRoundVM](../TournamentRoundVM/)
- [same namespace TournamentTeamVM](../TournamentTeamVM/)
