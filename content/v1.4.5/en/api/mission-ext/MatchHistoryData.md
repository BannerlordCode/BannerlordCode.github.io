---
title: "MatchHistoryData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchHistoryData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MatchHistoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/MatchHistoryData.cs`

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

**Purpose:** Checks whether the current object has/contains `same content with`.

### AddOrUpdatePlayer
`public void AddOrUpdatePlayer(string id, string username, int forcedIndex, int teamNo)`

**Purpose:** Adds `or update player` to the current collection or state.

### TryUpdatePlayerStats
`public bool TryUpdatePlayerStats(string id, int kill, int death, int assist)`

**Purpose:** Attempts to get `update player stats`, usually returning the result in an out parameter.

## Usage Example

```csharp
var value = new MatchHistoryData();
```

## See Also

- [Complete Class Catalog](../catalog)