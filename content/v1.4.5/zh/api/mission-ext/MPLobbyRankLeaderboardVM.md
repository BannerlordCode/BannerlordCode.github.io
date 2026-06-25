---
title: "MPLobbyRankLeaderboardVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyRankLeaderboardVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyRankLeaderboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRankLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRankLeaderboardVM.cs`

## 概述

`MPLobbyRankLeaderboardVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PreviousInputKey` | `public InputKeyItemVM PreviousInputKey { get; set; }` |
| `NextInputKey` | `public InputKeyItemVM NextInputKey { get; set; }` |
| `FirstInputKey` | `public InputKeyItemVM FirstInputKey { get; set; }` |
| `LastInputKey` | `public InputKeyItemVM LastInputKey { get; set; }` |
| `CurrentPageIndex` | `public int CurrentPageIndex { get; set; }` |
| `TotalPageCount` | `public int TotalPageCount { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDataLoading` | `public bool IsDataLoading { get; set; }` |
| `HasData` | `public bool HasData { get; set; }` |
| `IsPlayerActionsActive` | `public bool IsPlayerActionsActive { get; set; }` |
| `IsPreviousPageAvailable` | `public bool IsPreviousPageAvailable { get; set; }` |
| `IsNextPageAvailable` | `public bool IsNextPageAvailable { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `NoDataAvailableText` | `public string NoDataAvailableText { get; set; }` |
| `CurrentPageText` | `public string CurrentPageText { get; set; }` |
| `LeaderboardPlayers` | `public MBBindingList<MPLobbyLeaderboardPlayerItemVM> LeaderboardPlayers { get; set; }` |
| `PlayerActions` | `public MBBindingList<StringPairItemWithActionVM> PlayerActions { get; set; }` |
| `PreviousPageHint` | `public HintViewModel PreviousPageHint { get; set; }` |
| `NextPageHint` | `public HintViewModel NextPageHint { get; set; }` |
| `FirstPageHint` | `public HintViewModel FirstPageHint { get; set; }` |
| `LastPageHint` | `public HintViewModel LastPageHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OpenWith
`public async void OpenWith(string gameType)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### ExecuteLoadFirstPage
`public void ExecuteLoadFirstPage()`

**用途 / Purpose:** 执行 `load first page` 操作或流程。

### ExecuteLoadPreviousPage
`public void ExecuteLoadPreviousPage()`

**用途 / Purpose:** 执行 `load previous page` 操作或流程。

### ExecuteLoadNextPage
`public void ExecuteLoadNextPage()`

**用途 / Purpose:** 执行 `load next page` 操作或流程。

### ExecuteLoadLastPage
`public void ExecuteLoadLastPage()`

**用途 / Purpose:** 执行 `load last page` 操作或流程。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### ActivatePlayerActions
`public void ActivatePlayerActions(MPLobbyLeaderboardPlayerItemVM playerVM)`

**用途 / Purpose:** 处理 `activate player actions` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetPreviousInputKey
`public void SetPreviousInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `previous input key` 的值或状态。

### SetNextInputKey
`public void SetNextInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `next input key` 的值或状态。

### SetFirstInputKey
`public void SetFirstInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `first input key` 的值或状态。

### SetLastInputKey
`public void SetLastInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `last input key` 的值或状态。

## 使用示例

```csharp
var value = new MPLobbyRankLeaderboardVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)