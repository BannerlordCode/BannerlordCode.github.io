---
title: "MPLobbyRankLeaderboardVM"
description: "MPLobbyRankLeaderboardVM 的自动生成类参考。"
---
# MPLobbyRankLeaderboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRankLeaderboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRankLeaderboardVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.RefreshValues();
```

### OpenWith
`public async void OpenWith(string gameType)`

**用途 / Purpose:** 打开「with」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.OpenWith("example");
```

### ExecuteLoadFirstPage
`public void ExecuteLoadFirstPage()`

**用途 / Purpose:** 执行 「load first page」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteLoadFirstPage();
```

### ExecuteLoadPreviousPage
`public void ExecuteLoadPreviousPage()`

**用途 / Purpose:** 执行 「load previous page」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteLoadPreviousPage();
```

### ExecuteLoadNextPage
`public void ExecuteLoadNextPage()`

**用途 / Purpose:** 执行 「load next page」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteLoadNextPage();
```

### ExecuteLoadLastPage
`public void ExecuteLoadLastPage()`

**用途 / Purpose:** 执行 「load last page」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteLoadLastPage();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 「close popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ExecuteClosePopup();
```

### ActivatePlayerActions
`public void ActivatePlayerActions(MPLobbyLeaderboardPlayerItemVM playerVM)`

**用途 / Purpose:** 激活「player actions」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.ActivatePlayerActions(playerVM);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetCancelInputKey(hotKey);
```

### SetPreviousInputKey
`public void SetPreviousInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「previous input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetPreviousInputKey(hotKey);
```

### SetNextInputKey
`public void SetNextInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「next input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetNextInputKey(hotKey);
```

### SetFirstInputKey
`public void SetFirstInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「first input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetFirstInputKey(hotKey);
```

### SetLastInputKey
`public void SetLastInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「last input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankLeaderboardVM 实例
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.SetLastInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyRankLeaderboardVM mPLobbyRankLeaderboardVM = ...;
mPLobbyRankLeaderboardVM.RefreshValues();
```

## 参见

- [本区域目录](../)