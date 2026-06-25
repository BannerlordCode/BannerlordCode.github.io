---
title: "MPLobbyRecentGameItemVM"
description: "MPLobbyRecentGameItemVM 的自动生成类参考。"
---
# MPLobbyRecentGameItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGameItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGameItemVM.cs`

## 概述

`MPLobbyRecentGameItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MatchInfo` | `public MatchHistoryData MatchInfo { get; }` |
| `LastSeenPlayersText` | `public string LastSeenPlayersText { get; set; }` |
| `PlayersA` | `public MBBindingList<MPLobbyRecentGamePlayerItemVM> PlayersA { get; set; }` |
| `PlayersB` | `public MBBindingList<MPLobbyRecentGamePlayerItemVM> PlayersB { get; set; }` |
| `CultureA` | `public string CultureA { get; set; }` |
| `CultureB` | `public string CultureB { get; set; }` |
| `FactionNameA` | `public string FactionNameA { get; set; }` |
| `FactionNameB` | `public string FactionNameB { get; set; }` |
| `ScoreA` | `public string ScoreA { get; set; }` |
| `ScoreB` | `public string ScoreB { get; set; }` |
| `GameMode` | `public string GameMode { get; set; }` |
| `Date` | `public string Date { get; set; }` |
| `Seperator` | `public string Seperator { get; set; }` |
| `MatchResultIndex` | `public int MatchResultIndex { get; set; }` |
| `PlayerResultIndex` | `public int PlayerResultIndex { get; set; }` |
| `AbandonedHint` | `public HintViewModel AbandonedHint { get; set; }` |
| `WonHint` | `public HintViewModel WonHint { get; set; }` |
| `LostHint` | `public HintViewModel LostHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGameItemVM 实例
MPLobbyRecentGameItemVM mPLobbyRecentGameItemVM = ...;
mPLobbyRecentGameItemVM.RefreshValues();
```

### FillFrom
`public void FillFrom(MatchHistoryData match)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGameItemVM 实例
MPLobbyRecentGameItemVM mPLobbyRecentGameItemVM = ...;
mPLobbyRecentGameItemVM.FillFrom(match);
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** 在 「friend list updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGameItemVM 实例
MPLobbyRecentGameItemVM mPLobbyRecentGameItemVM = ...;
mPLobbyRecentGameItemVM.OnFriendListUpdated(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyRecentGameItemVM mPLobbyRecentGameItemVM = ...;
mPLobbyRecentGameItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)