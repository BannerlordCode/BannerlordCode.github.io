---
title: "MPLobbyFriendsVM"
description: "MPLobbyFriendsVM 的自动生成类参考。"
---
# MPLobbyFriendsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendsVM.cs`

## 概述

`MPLobbyFriendsVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsListEnabled` | `public bool IsListEnabled { get; set; }` |
| `IsPlayerActionsActive` | `public bool IsPlayerActionsActive { get; set; }` |
| `IsPartyAvailable` | `public bool IsPartyAvailable { get; set; }` |
| `IsPartyFull` | `public bool IsPartyFull { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `Player` | `public MPLobbyPartyPlayerVM Player { get; set; }` |
| `PartyFriends` | `public MBBindingList<MPLobbyPartyPlayerVM> PartyFriends { get; set; }` |
| `PlayerActions` | `public MBBindingList<StringPairItemWithActionVM> PlayerActions { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `InGameText` | `public string InGameText { get; set; }` |
| `OnlineText` | `public string OnlineText { get; set; }` |
| `OfflineText` | `public string OfflineText { get; set; }` |
| `FriendListHint` | `public HintViewModel FriendListHint { get; set; }` |
| `FriendServices` | `public MBBindingList<MPLobbyFriendServiceVM> FriendServices { get; set; }` |
| `ActiveService` | `public MPLobbyFriendServiceVM ActiveService { get; set; }` |
| `TotalOnlineFriendCount` | `public int TotalOnlineFriendCount { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `HasNotification` | `public bool HasNotification { get; set; }` |
| `ToggleInputKey` | `public InputKeyItemVM ToggleInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnFinalize();
```

### OnStateActivate
`public void OnStateActivate()`

**用途 / Purpose:** 在 「state activate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnStateActivate();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnTick(0);
```

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

**用途 / Purpose:** 在 「player invited to party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnPlayerInvitedToParty(playerId);
```

### OnPlayerAddedToParty
`public void OnPlayerAddedToParty(PlayerId playerId)`

**用途 / Purpose:** 在 「player added to party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnPlayerAddedToParty(playerId);
```

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId)`

**用途 / Purpose:** 在 「player removed from party」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnPlayerRemovedFromParty(playerId);
```

### UpdateCanInviteOtherPlayersToParty
`public void UpdateCanInviteOtherPlayersToParty()`

**用途 / Purpose:** 重新计算并更新 「can invite other players to party」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.UpdateCanInviteOtherPlayersToParty();
```

### UpdatePartyLeader
`public void UpdatePartyLeader()`

**用途 / Purpose:** 重新计算并更新 「party leader」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.UpdatePartyLeader();
```

### OnFriendRequestNotificationsReceived
`public void OnFriendRequestNotificationsReceived(List<LobbyNotification> notifications)`

**用途 / Purpose:** 在 「friend request notifications received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnFriendRequestNotificationsReceived(notifications);
```

### GetAllFriends
`public MBBindingList<MPLobbyPlayerBaseVM> GetAllFriends()`

**用途 / Purpose:** 读取并返回当前对象中 「all friends」 的结果。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
var result = mPLobbyFriendsVM.GetAllFriends();
```

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**用途 / Purpose:** 在 「supported features refreshed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnSupportedFeaturesRefreshed(supportedFeatures);
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** 在 「friend list updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.OnFriendListUpdated(false);
```

### SetToggleFriendListKey
`public void SetToggleFriendListKey(HotKey hotkey)`

**用途 / Purpose:** 为 「toggle friend list key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendsVM 实例
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.SetToggleFriendListKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyFriendsVM mPLobbyFriendsVM = ...;
mPLobbyFriendsVM.RefreshValues();
```

## 参见

- [本区域目录](../)