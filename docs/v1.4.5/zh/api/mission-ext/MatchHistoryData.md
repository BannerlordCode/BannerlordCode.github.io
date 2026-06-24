<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatchHistoryData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MatchHistoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/MatchHistoryData.cs`

## 概述

`MatchHistoryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MatchHistoryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MatchId` | `public string MatchId { get; set; }` |
| `MatchType` | `public string MatchType { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Map` | `public string Map { get; set; }` |
| `MatchDate` | `public DateTime MatchDate { get; set; }` |
| `WinnerTeam` | `public int WinnerTeam { get; set; }` |
| `Faction1` | `public string Faction1 { get; set; }` |
| `Faction2` | `public string Faction2 { get; set; }` |
| `DefenderScore` | `public int DefenderScore { get; set; }` |
| `AttackerScore` | `public int AttackerScore { get; set; }` |
| `Players` | `public List<PlayerInfo> Players { get; set; }` |

## 主要方法

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same content with`。

### AddOrUpdatePlayer
`public void AddOrUpdatePlayer(string id, string username, int forcedIndex, int teamNo)`

**用途 / Purpose:** 向当前集合/状态中添加 `or update player`。

### TryUpdatePlayerStats
`public bool TryUpdatePlayerStats(string id, int kill, int death, int assist)`

**用途 / Purpose:** 尝试获取 `update player stats`，通常以 out 参数返回结果。

## 使用示例

```csharp
var value = new MatchHistoryData();
```

## 参见

- [完整类目录](../catalog)