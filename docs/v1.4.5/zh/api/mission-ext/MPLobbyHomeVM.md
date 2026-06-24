<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyHomeVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyHomeVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyHomeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPLobbyHomeVM.cs`

## 概述

`MPLobbyHomeVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |
| `IsNewsAvailable` | `public bool IsNewsAvailable { get; set; }` |
| `FindGameText` | `public string FindGameText { get; set; }` |
| `MatchFindNotPossibleText` | `public string MatchFindNotPossibleText { get; set; }` |
| `SelectionInfoText` | `public string SelectionInfoText { get; set; }` |
| `OpenProfileText` | `public string OpenProfileText { get; set; }` |
| `Player` | `public MPLobbyPlayerBaseVM Player { get; set; }` |
| `News` | `public MPNewsVM News { get; set; }` |
| `Announcements` | `public MPAnnouncementsVM Announcements { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData, bool updateRating = true)`

**用途 / Purpose:** 刷新 `player data` 的显示或缓存。

### OnMatchSelectionChanged
`public void OnMatchSelectionChanged(string selectionInfo, bool isMatchFindPossible)`

**用途 / Purpose:** 当 `match selection changed` 事件触发时调用此方法。

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** 当 `clan info changed` 事件触发时调用此方法。

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 当 `player name updated` 事件触发时调用此方法。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MPLobbyHomeVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)