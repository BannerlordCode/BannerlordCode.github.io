---
title: "MPLobbyClanInvitationPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyClanInvitationPopupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanInvitationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanInvitationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanInvitationPopupVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Open
`public void Open(string clanName, string clanTag, bool isCreation)`

**用途 / Purpose:** 处理 `open` 相关逻辑。

### Close
`public void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

### UpdateConfirmation
`public void UpdateConfirmation(PlayerId playerId, ClanCreationAnswer answer)`

**用途 / Purpose:** 更新 `confirmation` 的状态或数据。

## 使用示例

```csharp
var value = new MPLobbyClanInvitationPopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)