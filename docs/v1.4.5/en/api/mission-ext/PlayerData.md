<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerData.cs`

## Overview

`PlayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PlayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `OwnerPlayerId` | `public PlayerId OwnerPlayerId { get; set; }` |
| `Sigil` | `public string Sigil { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; set; }` |
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

## Key Methods

### FillWith
`public void FillWith(PlayerId playerId, PlayerId ownerPlayerId, BodyProperties bodyProperties, bool isFemale, string sigil, int experience, string lastPlayerName, string username, int userId, string lastRegion, string lastGameTypes, DateTime? lastLogin, int playtime, string shownBadgeId, int gold, PlayerStatsBase stats, bool shouldLog, bool isUsingClanSigil)`

**Purpose:** Handles logic related to `fill with`.

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId, PlayerId ownerPlayerId, string gameTypes)`

**Purpose:** Handles logic related to `fill with new player`.

### HasGameStats
`public bool HasGameStats(string gameType)`

**Purpose:** Checks whether the current object has/contains `game stats`.

### GetGameStats
`public PlayerStatsBase GetGameStats(string gameType)`

**Purpose:** Gets the current value of `game stats`.

### UpdateGameStats
`public void UpdateGameStats(PlayerStatsBase playerGameTypeStats)`

**Purpose:** Updates the state or data of `game stats`.

## Usage Example

```csharp
var value = new PlayerData();
```

## See Also

- [Complete Class Catalog](../catalog)