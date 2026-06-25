---
title: "MPLobbyPlayerProfileVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyPlayerProfileVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyPlayerProfileVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPlayerProfileVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyPlayerProfileVM.cs`

## 概述

`MPLobbyPlayerProfileVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDataLoading` | `public bool IsDataLoading { get; set; }` |
| `StatsTitleText` | `public string StatsTitleText { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `Player` | `public MPLobbyPlayerBaseVM Player { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetPlayerID
`public async void SetPlayerID(PlayerId playerID)`

**用途 / Purpose:** 设置 `player i d` 的值或状态。

### OpenWith
`public void OpenWith(PlayerId playerID)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### UpdatePlayerData
`public void UpdatePlayerData(PlayerData playerData, bool updateStatistics = false, bool updateRating = false)`

**用途 / Purpose:** 更新 `player data` 的状态或数据。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### OnClanInfoChanged
`public void OnClanInfoChanged()`

**用途 / Purpose:** 当 `clan info changed` 事件触发时调用此方法。

### OnPlayerNameUpdated
`public void OnPlayerNameUpdated(string playerName)`

**用途 / Purpose:** 当 `player name updated` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MPLobbyPlayerProfileVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)