<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatchHistoryData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatchHistoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs`

## Overview

`MatchHistoryData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

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

## Usage Example

```csharp
// Typical usage of MatchHistoryData (Data)
new MatchHistoryData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)