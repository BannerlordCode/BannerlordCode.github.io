<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerData.cs`

## Overview

`PlayerData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `OwnerPlayerId` | `public PlayerId OwnerPlayerId { get; set; }` |
| `Sigil` | `public string Sigil { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; set; }` |
| `ShownBadgeIndex` | `public int ShownBadgeIndex { get; set; }` |
| `Stats` | `public PlayerStatsBase Stats { get; set; }` |
| `Race` | `public int Race { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `KillCount` | `public int KillCount { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `AssistCount` | `public int AssistCount { get; }` |
| `WinCount` | `public int WinCount { get; }` |
| `LoseCount` | `public int LoseCount { get; }` |
| `Experience` | `public int Experience { get; set; }` |
| `LastPlayerName` | `public string LastPlayerName { get; set; }` |
| `Username` | `public string Username { get; set; }` |
| `UserId` | `public int UserId { get; set; }` |
| `IsUsingClanSigil` | `public bool IsUsingClanSigil { get; set; }` |
| `LastRegion` | `public string LastRegion { get; set; }` |
| `LastGameTypes` | `public string LastGameTypes { get; set; }` |
| `LastLogin` | `public DateTime? LastLogin { get; set; }` |
| `Playtime` | `public int Playtime { get; set; }` |
| `ShownBadgeId` | `public string ShownBadgeId { get; set; }` |
| `Gold` | `public int Gold { get; set; }` |
| `IsMuted` | `public bool IsMuted { get; set; }` |
| `Level` | `public int Level { get; }` |
| `ExperienceToNextLevel` | `public int ExperienceToNextLevel { get; }` |
| `ExperienceInCurrentLevel` | `public int ExperienceInCurrentLevel { get; }` |

## Key Methods

### FillWith
```csharp
public void FillWith(PlayerId playerId, PlayerId ownerPlayerId, BodyProperties bodyProperties, bool isFemale, string sigil, int experience, string lastPlayerName, string username, int userId, string lastRegion, string lastGameTypes, DateTime? lastLogin, int playtime, string shownBadgeId, int gold, PlayerStatsBase stats, bool shouldLog, bool isUsingClanSigil)
```

### FillWithNewPlayer
```csharp
public void FillWithNewPlayer(PlayerId playerId, PlayerId ownerPlayerId, string gameTypes)
```

### HasGameStats
```csharp
public bool HasGameStats(string gameType)
```

### GetGameStats
```csharp
public PlayerStatsBase GetGameStats(string gameType)
```

### UpdateGameStats
```csharp
public void UpdateGameStats(PlayerStatsBase playerGameTypeStats)
```

## Usage Example

```csharp
// Typical usage of PlayerData (Data)
new PlayerData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)