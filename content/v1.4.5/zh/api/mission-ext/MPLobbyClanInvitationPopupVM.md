---
title: "MPLobbyClanInvitationPopupVM"
description: "MPLobbyClanInvitationPopupVM 的自动生成类参考。"
---
# MPLobbyClanInvitationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanInvitationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanInvitationPopupVM.cs`

## 概述

`MPLobbyClanInvitationPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsCreation` | `public bool IsCreation { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanNameAndTag` | `public string ClanNameAndTag { get; set; }` |
| `InviteReceivedText` | `public string InviteReceivedText { get; set; }` |
| `WithPlayersText` | `public string WithPlayersText { get; set; }` |
| `WantToJoinText` | `public string WantToJoinText { get; set; }` |
| `PartyMembersList` | `public MBBindingList<MPLobbyClanMemberItemVM> PartyMembersList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanInvitationPopupVM 实例
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.RefreshValues();
```

### Open
`public void Open(string clanName, string clanTag, bool isCreation)`

**用途 / Purpose:** **用途 / Purpose:** 打开当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanInvitationPopupVM 实例
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.Open("example", "example", false);
```

### Close
`public void Close()`

**用途 / Purpose:** **用途 / Purpose:** 关闭当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanInvitationPopupVM 实例
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.Close();
```

### UpdateConfirmation
`public void UpdateConfirmation(PlayerId playerId, ClanCreationAnswer answer)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 confirmation 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanInvitationPopupVM 实例
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.UpdateConfirmation(playerId, answer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanInvitationPopupVM mPLobbyClanInvitationPopupVM = ...;
mPLobbyClanInvitationPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)