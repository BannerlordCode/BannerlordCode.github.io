---
title: "TournamentVM"
description: "TournamentVM：SandBox.ViewModelCollection.Tournament 的 public 类，继承 ViewModel；公开成员 62 个（方法 14、属性 47、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Tournament/TournamentVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TournamentVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Tournament/TournamentVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TournamentVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 62 个：14 方法、47 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Tournament`，继承链 TournamentVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 47/62，方法 14/62），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Tournament/TournamentVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisableUI` | `public Action DisableUI` | 属性 |
| `Tournament` | `public TournamentBehavior Tournament` | 属性 |
| `TournamentVM` | `public TournamentVM(Action disableUI, TournamentBehavior tournamentBehavior)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteBet` | `public void ExecuteBet()` | 方法 |
| `ExecuteJoinTournament` | `public void ExecuteJoinTournament()` | 方法 |
| `ExecuteSkipRound` | `public void ExecuteSkipRound()` | 方法 |
| `ExecuteSkipAllRounds` | `public void ExecuteSkipAllRounds()` | 方法 |
| `ExecuteWatchRound` | `public void ExecuteWatchRound()` | 方法 |
| `ExecuteLeave` | `public void ExecuteLeave()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | 方法 |
| `ExecuteShowPrizeItemTooltip` | `public void ExecuteShowPrizeItemTooltip()` | 方法 |
| `ExecuteHidePrizeItemTooltip` | `public void ExecuteHidePrizeItemTooltip()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `TournamentWinnerTitle` | `public string TournamentWinnerTitle` | 属性 |
| `TournamentWinner` | `public TournamentParticipantVM TournamentWinner` | 属性 |
| `MaximumBetValue` | `public int MaximumBetValue` | 属性 |
| `IsBetButtonEnabled` | `public bool IsBetButtonEnabled` | 属性 |
| `BetText` | `public string BetText` | 属性 |
| `BetTitleText` | `public string BetTitleText` | 属性 |
| `CurrentWagerText` | `public string CurrentWagerText` | 属性 |
| `BetDescriptionText` | `public string BetDescriptionText` | 属性 |
| `PrizeVisual` | `public ItemImageIdentifierVM PrizeVisual` | 属性 |
| `PrizeItemName` | `public string PrizeItemName` | 属性 |
| `TournamentPrizeText` | `public string TournamentPrizeText` | 属性 |
| `WageredDenars` | `public int WageredDenars` | 属性 |
| `ExpectedBetDenars` | `public int ExpectedBetDenars` | 属性 |
| `BetOddsText` | `public string BetOddsText` | 属性 |
| `BettedDenarsText` | `public string BettedDenarsText` | 属性 |
| `OverallExpectedDenarsText` | `public string OverallExpectedDenarsText` | 属性 |
| `CurrentExpectedDenarsText` | `public string CurrentExpectedDenarsText` | 属性 |
| `TotalDenarsText` | `public string TotalDenarsText` | 属性 |
| `AcceptText` | `public string AcceptText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `IsCurrentMatchActive` | `public bool IsCurrentMatchActive` | 属性 |
| `CurrentMatch` | `public TournamentMatchVM CurrentMatch` | 属性 |
| `IsTournamentIncomplete` | `public bool IsTournamentIncomplete` | 属性 |
| `ActiveRoundIndex` | `public int ActiveRoundIndex` | 属性 |
| `CanPlayerJoin` | `public bool CanPlayerJoin` | 属性 |
| `HasPrizeItem` | `public bool HasPrizeItem` | 属性 |
| `JoinTournamentText` | `public string JoinTournamentText` | 属性 |
| `SkipRoundText` | `public string SkipRoundText` | 属性 |
| `WatchRoundText` | `public string WatchRoundText` | 属性 |
| `LeaveText` | `public string LeaveText` | 属性 |
| `Round1` | `public TournamentRoundVM Round1` | 属性 |
| `Round2` | `public TournamentRoundVM Round2` | 属性 |
| `Round3` | `public TournamentRoundVM Round3` | 属性 |
| `Round4` | `public TournamentRoundVM Round4` | 属性 |
| `InitializationOver` | `public bool InitializationOver` | 属性 |
| `TournamentTitle` | `public string TournamentTitle` | 属性 |
| `IsOver` | `public bool IsOver` | 属性 |
| `WinnerIntro` | `public string WinnerIntro` | 属性 |
| `MBBindingList` | `public MBBindingList<TournamentRewardVM>BattleRewards` | 属性 |
| `IsWinnerHero` | `public bool IsWinnerHero` | 属性 |
| `IsBetWindowEnabled` | `public bool IsBetWindowEnabled` | 属性 |
| `WinnerBanner` | `public BannerImageIdentifierVM WinnerBanner` | 属性 |
| `SkipAllRoundsHint` | `public HintViewModel SkipAllRoundsHint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 TournamentMatchVM](../TournamentMatchVM/)
- [同命名空间 TournamentParticipantVM](../TournamentParticipantVM/)
- [同命名空间 TournamentRoundVM](../TournamentRoundVM/)
- [同命名空间 TournamentTeamVM](../TournamentTeamVM/)
