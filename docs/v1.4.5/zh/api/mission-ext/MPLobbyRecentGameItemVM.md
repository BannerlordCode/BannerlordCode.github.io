<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyRecentGameItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyRecentGameItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRecentGameItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRecentGameItemVM.cs`

## 概述

`MPLobbyRecentGameItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MatchInfo` | `public MatchHistoryData MatchInfo { get; }` |
| `LastSeenPlayersText` | `public string LastSeenPlayersText { get; set; }` |
| `PlayersA` | `public MBBindingList<MPLobbyRecentGamePlayerItemVM> PlayersA { get; set; }` |
| `PlayersB` | `public MBBindingList<MPLobbyRecentGamePlayerItemVM> PlayersB { get; set; }` |
| `CultureA` | `public string CultureA { get; set; }` |
| `CultureB` | `public string CultureB { get; set; }` |
| `FactionNameA` | `public string FactionNameA { get; set; }` |
| `FactionNameB` | `public string FactionNameB { get; set; }` |
| `ScoreA` | `public string ScoreA { get; set; }` |
| `ScoreB` | `public string ScoreB { get; set; }` |
| `GameMode` | `public string GameMode { get; set; }` |
| `Date` | `public string Date { get; set; }` |
| `Seperator` | `public string Seperator { get; set; }` |
| `MatchResultIndex` | `public int MatchResultIndex { get; set; }` |
| `PlayerResultIndex` | `public int PlayerResultIndex { get; set; }` |
| `AbandonedHint` | `public HintViewModel AbandonedHint { get; set; }` |
| `WonHint` | `public HintViewModel WonHint { get; set; }` |
| `LostHint` | `public HintViewModel LostHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### FillFrom
`public void FillFrom(MatchHistoryData match)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### OnFriendListUpdated
`public void OnFriendListUpdated(bool forceUpdate = false)`

**用途 / Purpose:** 当 `friend list updated` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MPLobbyRecentGameItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)