<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyFriendServiceVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyFriendServiceVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendServiceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendServiceVM.cs`

## 概述

`MPLobbyFriendServiceVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInGameStatusActive` | `public bool IsInGameStatusActive { get; set; }` |
| `InGameFriends` | `public MPLobbyFriendGroupVM InGameFriends { get; set; }` |
| `OnlineFriends` | `public MPLobbyFriendGroupVM OnlineFriends { get; set; }` |
| `OfflineFriends` | `public MPLobbyFriendGroupVM OfflineFriends { get; set; }` |
| `InGameText` | `public string InGameText { get; set; }` |
| `OnlineText` | `public string OnlineText { get; set; }` |
| `OfflineText` | `public string OfflineText { get; set; }` |
| `ServiceName` | `public string ServiceName { get; set; }` |
| `FriendRequests` | `public MPLobbyFriendGroupVM FriendRequests { get; set; }` |
| `GotAnyFriendRequests` | `public bool GotAnyFriendRequests { get; set; }` |
| `PendingRequests` | `public MPLobbyFriendGroupVM PendingRequests { get; set; }` |
| `GotAnyPendingRequests` | `public bool GotAnyPendingRequests { get; set; }` |
| `ServiceNameHint` | `public HintViewModel ServiceNameHint { get; set; }` |

## 主要方法

### Compare
`public int Compare(MPLobbyPlayerBaseVM x, MPLobbyPlayerBaseVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

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

### ForceRefresh
`public void ForceRefresh()`

**用途 / Purpose:** 处理 `force refresh` 相关逻辑。

### UpdateCanInviteOtherPlayersToParty
`public void UpdateCanInviteOtherPlayersToParty()`

**用途 / Purpose:** 更新 `can invite other players to party` 的状态或数据。

### OnFriendListUpdated
`public void OnFriendListUpdated(bool updateForced = false)`

**用途 / Purpose:** 当 `friend list updated` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MPLobbyFriendServiceVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)