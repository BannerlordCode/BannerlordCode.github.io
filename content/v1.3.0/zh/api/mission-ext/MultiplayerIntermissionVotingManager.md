---
title: "MultiplayerIntermissionVotingManager"
description: "MultiplayerIntermissionVotingManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 将 「map item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.AddMapItem("example");
```

### AddUsableMap
`public void AddUsableMap(CustomGameUsableMap usableMap)`

**用途 / Purpose:** 将 「usable map」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.AddUsableMap(usableMap);
```

### GetUsableMaps
`public List<string> GetUsableMaps(string gameType)`

**用途 / Purpose:** 读取并返回当前对象中 「usable maps」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
var result = multiplayerIntermissionVotingManager.GetUsableMaps("example");
```

### AddCultureItem
`public void AddCultureItem(string cultureID)`

**用途 / Purpose:** 将 「culture item」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.AddCultureItem("example");
```

### AddVote
`public void AddVote(PlayerId voterID, string itemID, int voteCount)`

**用途 / Purpose:** 将 「vote」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.AddVote(voterID, "example", 0);
```

### SetVotesOfMap
`public void SetVotesOfMap(int mapItemIndex, int voteCount)`

**用途 / Purpose:** 为 「votes of map」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.SetVotesOfMap(0, 0);
```

### SetVotesOfCulture
`public void SetVotesOfCulture(int cultureItemIndex, int voteCount)`

**用途 / Purpose:** 为 「votes of culture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.SetVotesOfCulture(0, 0);
```

### ClearVotes
`public void ClearVotes()`

**用途 / Purpose:** 清空当前对象中的「votes」。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.ClearVotes();
```

### ClearItems
`public void ClearItems()`

**用途 / Purpose:** 清空当前对象中的「items」。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.ClearItems();
```

### IsCultureItem
`public bool IsCultureItem(string itemID)`

**用途 / Purpose:** 判断当前对象是否处于 「culture item」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
var result = multiplayerIntermissionVotingManager.IsCultureItem("example");
```

### IsMapItem
`public bool IsMapItem(string itemID)`

**用途 / Purpose:** 判断当前对象是否处于 「map item」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
var result = multiplayerIntermissionVotingManager.IsMapItem("example");
```

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerID)`

**用途 / Purpose:** 执行与 「player disconnect」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.HandlePlayerDisconnect(playerID);
```

### SelectRandomCultures
`public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.SelectRandomCultures(accessMode);
```

### IsPeerVotedForItem
`public bool IsPeerVotedForItem(NetworkCommunicator peer, string itemID)`

**用途 / Purpose:** 判断当前对象是否处于 「peer voted for item」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
var result = multiplayerIntermissionVotingManager.IsPeerVotedForItem(peer, "example");
```

### SortVotesAndPickBest
`public void SortVotesAndPickBest()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.SortVotesAndPickBest();
```

### MapItemAddedDelegate
`public delegate void MapItemAddedDelegate(string mapId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.MapItemAddedDelegate("example");
```

### CultureItemAddedDelegate
`public delegate void CultureItemAddedDelegate(string cultureId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.CultureItemAddedDelegate("example");
```

### MapItemVoteCountChangedDelegate
`public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.MapItemVoteCountChangedDelegate(0, 0);
```

### CultureItemVoteCountChangedDelegate
`public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerIntermissionVotingManager 实例
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.CultureItemVoteCountChangedDelegate(0, 0);
```

## 使用示例

```csharp
var manager = MultiplayerIntermissionVotingManager.Current;
```

## 参见

- [本区域目录](../)