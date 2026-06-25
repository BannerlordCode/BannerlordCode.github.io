---
title: "MultiplayerIntermissionVotingManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerIntermissionVotingManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerIntermissionVotingManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerIntermissionVotingManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs`

## 概述

`MultiplayerIntermissionVotingManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MultiplayerIntermissionVotingManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MultiplayerIntermissionVotingManager Instance { get; }` |
| `MapVoteItems` | `public List<IntermissionVoteItem> MapVoteItems { get; }` |
| `CultureVoteItems` | `public List<IntermissionVoteItem> CultureVoteItems { get; }` |
| `UsableMaps` | `public List<CustomGameUsableMap> UsableMaps { get; }` |

## 主要方法

### AddMapItem
`public void AddMapItem(string mapID)`

**用途 / Purpose:** 向当前集合/状态中添加 `map item`。

### AddUsableMap
`public void AddUsableMap(CustomGameUsableMap usableMap)`

**用途 / Purpose:** 向当前集合/状态中添加 `usable map`。

### GetUsableMaps
`public List<string> GetUsableMaps(string gameType)`

**用途 / Purpose:** 获取 `usable maps` 的当前值。

### AddCultureItem
`public void AddCultureItem(string cultureID)`

**用途 / Purpose:** 向当前集合/状态中添加 `culture item`。

### AddVote
`public void AddVote(PlayerId voterID, string itemID, int voteCount)`

**用途 / Purpose:** 向当前集合/状态中添加 `vote`。

### SetVotesOfMap
`public void SetVotesOfMap(int mapItemIndex, int voteCount)`

**用途 / Purpose:** 设置 `votes of map` 的值或状态。

### SetVotesOfCulture
`public void SetVotesOfCulture(int cultureItemIndex, int voteCount)`

**用途 / Purpose:** 设置 `votes of culture` 的值或状态。

### ClearVotes
`public void ClearVotes()`

**用途 / Purpose:** 处理 `clear votes` 相关逻辑。

### ClearItems
`public void ClearItems()`

**用途 / Purpose:** 处理 `clear items` 相关逻辑。

### IsCultureItem
`public bool IsCultureItem(string itemID)`

**用途 / Purpose:** 处理 `is culture item` 相关逻辑。

### IsMapItem
`public bool IsMapItem(string itemID)`

**用途 / Purpose:** 处理 `is map item` 相关逻辑。

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerID)`

**用途 / Purpose:** 处理 `player disconnect` 事件或回调。

### SelectRandomCultures
`public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode)`

**用途 / Purpose:** 处理 `select random cultures` 相关逻辑。

### IsPeerVotedForItem
`public bool IsPeerVotedForItem(NetworkCommunicator peer, string itemID)`

**用途 / Purpose:** 处理 `is peer voted for item` 相关逻辑。

### SortVotesAndPickBest
`public void SortVotesAndPickBest()`

**用途 / Purpose:** 处理 `sort votes and pick best` 相关逻辑。

### MapItemAddedDelegate
`public delegate void MapItemAddedDelegate(string mapId)`

**用途 / Purpose:** 处理 `map item added delegate` 相关逻辑。

### CultureItemAddedDelegate
`public delegate void CultureItemAddedDelegate(string cultureId)`

**用途 / Purpose:** 处理 `culture item added delegate` 相关逻辑。

### MapItemVoteCountChangedDelegate
`public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount)`

**用途 / Purpose:** 处理 `map item vote count changed delegate` 相关逻辑。

### CultureItemVoteCountChangedDelegate
`public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount)`

**用途 / Purpose:** 处理 `culture item vote count changed delegate` 相关逻辑。

## 使用示例

```csharp
var manager = MultiplayerIntermissionVotingManager.Current;
```

## 参见

- [完整类目录](../catalog)