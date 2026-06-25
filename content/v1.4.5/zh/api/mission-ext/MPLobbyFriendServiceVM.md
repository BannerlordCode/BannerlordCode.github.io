---
title: "MPLobbyFriendServiceVM"
description: "MPLobbyFriendServiceVM 的自动生成类参考。"
---
# MPLobbyFriendServiceVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendServiceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendServiceVM.cs`

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

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendServiceVM 实例
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
var result = mPLobbyFriendServiceVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendServiceVM 实例
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendServiceVM 实例
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.OnFinalize();
```

### OnStateActivate
`public void OnStateActivate()`

**用途 / Purpose:** 在 「state activate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendServiceVM 实例
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.OnStateActivate();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendServiceVM 实例
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.OnTick(0);
```

### ForceRefresh
`public void ForceRefresh()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendServiceVM 实例
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.ForceRefresh();
```

### UpdateCanInviteOtherPlayersToParty
`public void UpdateCanInviteOtherPlayersToParty()`

**用途 / Purpose:** 重新计算并更新 「can invite other players to party」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendServiceVM 实例
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.UpdateCanInviteOtherPlayersToParty();
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool updateForced = false)`

**用途 / Purpose:** 在 「friend list updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendServiceVM 实例
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.OnFriendListUpdated(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyFriendServiceVM mPLobbyFriendServiceVM = ...;
mPLobbyFriendServiceVM.Compare(x, y);
```

## 参见

- [本区域目录](../)