---
title: "MPLobbyFriendGroupVM"
description: "MPLobbyFriendGroupVM 的自动生成类参考。"
---
# MPLobbyFriendGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyFriendGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyFriendGroupVM.cs`

## 概述

`MPLobbyFriendGroupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `GroupType` | `public FriendGroupType GroupType { get; set; }` |
| `FriendList` | `public MBBindingList<MPLobbyFriendItemVM> FriendList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendGroupVM 实例
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.RefreshValues();
```

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendGroupVM 实例
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.Tick();
```

### ClearFriends
`public void ClearFriends()`

**用途 / Purpose:** 清空当前对象中的「friends」。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendGroupVM 实例
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.ClearFriends();
```

### AddFriend
`public void AddFriend(MPLobbyFriendItemVM player)`

**用途 / Purpose:** 将 「friend」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendGroupVM 实例
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.AddFriend(player);
```

### RemoveFriend
`public void RemoveFriend(MPLobbyFriendItemVM player)`

**用途 / Purpose:** 从当前容器或状态中移除 「friend」。

```csharp
// 先通过子系统 API 拿到 MPLobbyFriendGroupVM 实例
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.RemoveFriend(player);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyFriendGroupVM mPLobbyFriendGroupVM = ...;
mPLobbyFriendGroupVM.RefreshValues();
```

## 参见

- [本区域目录](../)