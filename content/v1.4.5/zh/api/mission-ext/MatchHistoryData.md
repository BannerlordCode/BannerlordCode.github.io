---
title: "MatchHistoryData"
description: "MatchHistoryData 的自动生成类参考。"
---
# MatchHistoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/MatchHistoryData.cs`

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

**用途 / Purpose:** 判断当前对象是否已经持有 「same content with」。

```csharp
// 先通过子系统 API 拿到 MatchHistoryData 实例
MatchHistoryData matchHistoryData = ...;
var result = matchHistoryData.HasSameContentWith(other);
```

### AddOrUpdatePlayer
`public void AddOrUpdatePlayer(string id, string username, int forcedIndex, int teamNo)`

**用途 / Purpose:** 将 「or update player」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MatchHistoryData 实例
MatchHistoryData matchHistoryData = ...;
matchHistoryData.AddOrUpdatePlayer("example", "example", 0, 0);
```

### TryUpdatePlayerStats
`public bool TryUpdatePlayerStats(string id, int kill, int death, int assist)`

**用途 / Purpose:** 尝试获取 「update player stats」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MatchHistoryData 实例
MatchHistoryData matchHistoryData = ...;
var result = matchHistoryData.TryUpdatePlayerStats("example", 0, 0, 0);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
MatchHistoryData entry = ...;
```

## 参见

- [本区域目录](../)