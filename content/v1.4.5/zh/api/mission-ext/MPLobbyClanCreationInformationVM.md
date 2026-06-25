---
title: "MPLobbyClanCreationInformationVM"
description: "MPLobbyClanCreationInformationVM 的自动生成类参考。"
---
# MPLobbyClanCreationInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanCreationInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanCreationInformationVM.cs`

## 概述

`MPLobbyClanCreationInformationVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanCreateClan` | `public bool CanCreateClan { get; set; }` |
| `DoesHaveEnoughPlayersToCreateClan` | `public bool DoesHaveEnoughPlayersToCreateClan { get; set; }` |
| `CurrentPlayerCount` | `public int CurrentPlayerCount { get; set; }` |
| `RequiredPlayerCount` | `public int RequiredPlayerCount { get; set; }` |
| `CreateClanText` | `public string CreateClanText { get; set; }` |
| `CreateClanDescriptionText` | `public string CreateClanDescriptionText { get; set; }` |
| `DontHaveEnoughPlayersInPartyText` | `public string DontHaveEnoughPlayersInPartyText { get; set; }` |
| `PartyMemberCountText` | `public string PartyMemberCountText { get; set; }` |
| `PlayerText` | `public string PlayerText { get; set; }` |
| `CreateYourClanText` | `public string CreateYourClanText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `PartyMembers` | `public MBBindingList<MPLobbyClanMemberItemVM> PartyMembers { get; set; }` |
| `CantCreateHint` | `public HintViewModel CantCreateHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanCreationInformationVM 实例
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.RefreshValues();
```

### RefreshWith
`public void RefreshWith(ClanHomeInfo info)`

**用途 / Purpose:** 使 with 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanCreationInformationVM 实例
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.RefreshWith(info);
```

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** 在 friend list updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanCreationInformationVM 实例
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.OnFriendListUpdated(false);
```

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated()`

**用途 / Purpose:** 在 player name updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanCreationInformationVM 实例
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.OnPlayerNameUpdated();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 open popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanCreationInformationVM 实例
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 close popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanCreationInformationVM 实例
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.ExecuteClosePopup();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanCreationInformationVM mPLobbyClanCreationInformationVM = ...;
mPLobbyClanCreationInformationVM.RefreshValues();
```

## 参见

- [本区域目录](../)