---
title: "TournamentVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentVM.cs`

## 概述

`TournamentVM` 位于 `SandBox.ViewModelCollection.Tournament`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tournament` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteBet
`public void ExecuteBet()`

**用途 / Purpose:** 执行 `bet` 操作或流程。

### ExecuteJoinTournament
`public void ExecuteJoinTournament()`

**用途 / Purpose:** 执行 `join tournament` 操作或流程。

### ExecuteSkipRound
`public void ExecuteSkipRound()`

**用途 / Purpose:** 执行 `skip round` 操作或流程。

### ExecuteSkipAllRounds
`public void ExecuteSkipAllRounds()`

**用途 / Purpose:** 执行 `skip all rounds` 操作或流程。

### ExecuteWatchRound
`public void ExecuteWatchRound()`

**用途 / Purpose:** 执行 `watch round` 操作或流程。

### ExecuteLeave
`public void ExecuteLeave()`

**用途 / Purpose:** 执行 `leave` 操作或流程。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### ExecuteShowPrizeItemTooltip
`public void ExecuteShowPrizeItemTooltip()`

**用途 / Purpose:** 执行 `show prize item tooltip` 操作或流程。

### ExecuteHidePrizeItemTooltip
`public void ExecuteHidePrizeItemTooltip()`

**用途 / Purpose:** 执行 `hide prize item tooltip` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

## 使用示例

```csharp
var value = new TournamentVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)