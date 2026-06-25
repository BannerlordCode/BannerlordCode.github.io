---
title: "MPLobbyClanVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyClanVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanVM.cs`

## 概述

`MPLobbyClanVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SelectedSubPageIndex` | `public int SelectedSubPageIndex { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `ClanOverview` | `public MPLobbyClanOverviewVM ClanOverview { get; set; }` |
| `ClanRoster` | `public MPLobbyClanRosterVM ClanRoster { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnClanInfoChanged
`public async void OnClanInfoChanged()`

**用途 / Purpose:** 当 `clan info changed` 事件触发时调用此方法。

### TrySetClanSubPage
`public async void TrySetClanSubPage(ClanSubPages newPage)`

**用途 / Purpose:** 尝试获取 `set clan sub page`，通常以 out 参数返回结果。

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**用途 / Purpose:** 当 `notification received` 事件触发时调用此方法。

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 当 `player name updated` 事件触发时调用此方法。

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 `open popup` 操作或流程。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

## 使用示例

```csharp
var value = new MPLobbyClanVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)