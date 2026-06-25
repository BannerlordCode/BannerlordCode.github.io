---
title: "MPLobbyProfileVM"
description: "MPLobbyProfileVM 的自动生成类参考。"
---
# MPLobbyProfileVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyProfileVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyProfileVM.cs`

## 概述

`MPLobbyProfileVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |
| `ShowMoreText` | `public string ShowMoreText { get; set; }` |
| `FindGameText` | `public string FindGameText { get; set; }` |
| `MatchFindNotPossibleText` | `public string MatchFindNotPossibleText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SelectionInfoText` | `public string SelectionInfoText { get; set; }` |
| `RecentGamesTitleText` | `public string RecentGamesTitleText { get; set; }` |
| `HasBadgeNotification` | `public bool HasBadgeNotification { get; set; }` |
| `RecentGamesSummary` | `public MBBindingList<MPLobbyRecentGameItemVM> RecentGamesSummary { get; set; }` |
| `PlayerInfo` | `public MPLobbyPlayerProfileVM PlayerInfo { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyProfileVM 实例
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.RefreshValues();
```

### RefreshRecentGames
`public void RefreshRecentGames(MBReadOnlyList<MatchHistoryData> recentGames)`

**用途 / Purpose:** 使 recent games 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyProfileVM 实例
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.RefreshRecentGames(recentGames);
```

### OnMatchSelectionChanged
`public void OnMatchSelectionChanged(string selectionInfo, bool isMatchFindPossible)`

**用途 / Purpose:** 在 match selection changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyProfileVM 实例
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.OnMatchSelectionChanged("example", false);
```

### UpdatePlayerData
`public void UpdatePlayerData(PlayerData playerData, bool updateStatistics = true, bool updateRating = true)`

**用途 / Purpose:** 重新计算并更新 player data 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyProfileVM 实例
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.UpdatePlayerData(playerData, false, false);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 在 player name updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyProfileVM 实例
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.OnPlayerNameUpdated("example");
```

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**用途 / Purpose:** 在 notification received 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyProfileVM 实例
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.OnNotificationReceived(notification);
```

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** 在 clan info changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyProfileVM 实例
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.OnClanInfoChanged();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyProfileVM mPLobbyProfileVM = ...;
mPLobbyProfileVM.RefreshValues();
```

## 参见

- [本区域目录](../)