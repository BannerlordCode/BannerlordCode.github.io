---
title: "MPLobbyClanCreationInformationVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyClanCreationInformationVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanCreationInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanCreationInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanCreationInformationVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshWith
`public void RefreshWith(ClanHomeInfo info)`

**用途 / Purpose:** 刷新 `with` 的显示或缓存。

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** 当 `friend list updated` 事件触发时调用此方法。

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated()`

**用途 / Purpose:** 当 `player name updated` 事件触发时调用此方法。

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 `open popup` 操作或流程。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

## 使用示例

```csharp
var value = new MPLobbyClanCreationInformationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)