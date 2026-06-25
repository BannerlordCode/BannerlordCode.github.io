---
title: "MPLobbyFriendsVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyFriendsVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyFriendsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendsVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnStateActivate
`public void OnStateActivate()`

**用途 / Purpose:** 当 `state activate` 事件触发时调用此方法。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnPlayerInvitedToParty
`public void OnPlayerInvitedToParty(PlayerId playerId)`

**用途 / Purpose:** 当 `player invited to party` 事件触发时调用此方法。

### OnPlayerAddedToParty
`public void OnPlayerAddedToParty(PlayerId playerId)`

**用途 / Purpose:** 当 `player added to party` 事件触发时调用此方法。

### OnPlayerRemovedFromParty
`public void OnPlayerRemovedFromParty(PlayerId playerId)`

**用途 / Purpose:** 当 `player removed from party` 事件触发时调用此方法。

### UpdateCanInviteOtherPlayersToParty
`public void UpdateCanInviteOtherPlayersToParty()`

**用途 / Purpose:** 更新 `can invite other players to party` 的状态或数据。

### UpdatePartyLeader
`public void UpdatePartyLeader()`

**用途 / Purpose:** 更新 `party leader` 的状态或数据。

### OnFriendRequestNotificationsReceived
`public void OnFriendRequestNotificationsReceived(List<LobbyNotification> notifications)`

**用途 / Purpose:** 当 `friend request notifications received` 事件触发时调用此方法。

### GetAllFriends
`public MBBindingList<MPLobbyPlayerBaseVM> GetAllFriends()`

**用途 / Purpose:** 获取 `all friends` 的当前值。

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**用途 / Purpose:** 当 `supported features refreshed` 事件触发时调用此方法。

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** 当 `friend list updated` 事件触发时调用此方法。

### SetToggleFriendListKey
`public void SetToggleFriendListKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `toggle friend list key` 的值或状态。

## 使用示例

```csharp
var value = new MPLobbyFriendsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)