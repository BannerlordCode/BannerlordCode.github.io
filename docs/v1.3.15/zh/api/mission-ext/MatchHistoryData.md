<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatchHistoryData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchHistoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs`

## 概述

`MatchHistoryData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

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
```csharp
public override bool HasSameContentWith(MultiplayerLocalData other)
```

### AddOrUpdatePlayer
```csharp
public void AddOrUpdatePlayer(string id, string username, int forcedIndex, int teamNo)
```

### TryUpdatePlayerStats
```csharp
public bool TryUpdatePlayerStats(string id, int kill, int death, int assist)
```

## 使用示例

```csharp
// MatchHistoryData (Data) 的典型用法
new MatchHistoryData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)