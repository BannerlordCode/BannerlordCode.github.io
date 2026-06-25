---
title: "TournamentVM"
description: "TournamentVM 的自动生成类参考。"
---
# TournamentVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tournament/TournamentVM.cs`

## 概述

`TournamentVM` 位于 `SandBox.ViewModelCollection.Tournament`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tournament` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.RefreshValues();
```

### ExecuteBet
`public void ExecuteBet()`

**用途 / Purpose:** 执行 bet 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteBet();
```

### ExecuteJoinTournament
`public void ExecuteJoinTournament()`

**用途 / Purpose:** 执行 join tournament 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteJoinTournament();
```

### ExecuteSkipRound
`public void ExecuteSkipRound()`

**用途 / Purpose:** 执行 skip round 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteSkipRound();
```

### ExecuteSkipAllRounds
`public void ExecuteSkipAllRounds()`

**用途 / Purpose:** 执行 skip all rounds 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteSkipAllRounds();
```

### ExecuteWatchRound
`public void ExecuteWatchRound()`

**用途 / Purpose:** 执行 watch round 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteWatchRound();
```

### ExecuteLeave
`public void ExecuteLeave()`

**用途 / Purpose:** 执行 leave 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteLeave();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.Refresh();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.OnAgentRemoved(agent);
```

### ExecuteShowPrizeItemTooltip
`public void ExecuteShowPrizeItemTooltip()`

**用途 / Purpose:** 执行 show prize item tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteShowPrizeItemTooltip();
```

### ExecuteHidePrizeItemTooltip
`public void ExecuteHidePrizeItemTooltip()`

**用途 / Purpose:** 执行 hide prize item tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.ExecuteHidePrizeItemTooltip();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TournamentVM 实例
TournamentVM tournamentVM = ...;
tournamentVM.SetCancelInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentVM tournamentVM = ...;
tournamentVM.RefreshValues();
```

## 参见

- [本区域目录](../)