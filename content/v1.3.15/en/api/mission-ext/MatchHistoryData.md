---
title: "MatchHistoryData"
description: "Auto-generated class reference for MatchHistoryData."
---
# MatchHistoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs`

## Overview

`MatchHistoryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MatchHistoryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Key Methods

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**Purpose:** Determines whether the current object already holds `same content with`.

```csharp
// Obtain an instance of MatchHistoryData from the subsystem API first
MatchHistoryData matchHistoryData = ...;
var result = matchHistoryData.HasSameContentWith(other);
```

### AddOrUpdatePlayer
`public void AddOrUpdatePlayer(string id, string username, int forcedIndex, int teamNo)`

**Purpose:** Adds `or update player` to the current collection or state.

```csharp
// Obtain an instance of MatchHistoryData from the subsystem API first
MatchHistoryData matchHistoryData = ...;
matchHistoryData.AddOrUpdatePlayer("example", "example", 0, 0);
```

### TryUpdatePlayerStats
`public bool TryUpdatePlayerStats(string id, int kill, int death, int assist)`

**Purpose:** Attempts to retrieve `update player stats`, usually returning success through an out parameter.

```csharp
// Obtain an instance of MatchHistoryData from the subsystem API first
MatchHistoryData matchHistoryData = ...;
var result = matchHistoryData.TryUpdatePlayerStats("example", 0, 0, 0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MatchHistoryData entry = ...;
```

## See Also

- [Area Index](../)