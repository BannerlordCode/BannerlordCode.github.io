---
title: "MPLobbyRecentGamesVM"
description: "MPLobbyRecentGamesVM 的自动生成类参考。"
---
# MPLobbyRecentGamesVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGamesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGamesVM.cs`

## 概述

`MPLobbyRecentGamesVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `GotItems` | `public bool GotItems { get; set; }` |
| `IsPlayerActionsActive` | `public bool IsPlayerActionsActive { get; set; }` |
| `RecentGamesText` | `public string RecentGamesText { get; set; }` |
| `NoRecentGamesFoundText` | `public string NoRecentGamesFoundText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `PlayerActions` | `public MBBindingList<StringPairItemWithActionVM> PlayerActions { get; set; }` |
| `Games` | `public MBBindingList<MPLobbyRecentGameItemVM> Games { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGamesVM 实例
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.RefreshValues();
```

### RefreshData
`public void RefreshData(MBReadOnlyList<MatchHistoryData> matches)`

**用途 / Purpose:** **用途 / Purpose:** 使 data 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGamesVM 实例
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.RefreshData(matches);
```

### ActivatePlayerActions
`public void ActivatePlayerActions(MPLobbyRecentGamePlayerItemVM playerVM)`

**用途 / Purpose:** **用途 / Purpose:** 激活player actions对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGamesVM 实例
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.ActivatePlayerActions(playerVM);
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGamesVM 实例
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGamesVM 实例
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.ExecuteClosePopup();
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** **用途 / Purpose:** 在 friend list updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyRecentGamesVM 实例
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.OnFriendListUpdated(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyRecentGamesVM mPLobbyRecentGamesVM = ...;
mPLobbyRecentGamesVM.RefreshValues();
```

## 参见

- [本区域目录](../)