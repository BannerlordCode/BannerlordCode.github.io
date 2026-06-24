<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentManager

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentManager : ITournamentManager`
**Base:** `ITournamentManager`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentManager.cs`

## Overview

`TournamentManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `TournamentManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddTournament
`public void AddTournament(TournamentGame game)`

**Purpose:** Adds `tournament` to the current collection or state.

### RemoveTournament
`public void RemoveTournament(TournamentGame game)`

**Purpose:** Removes `tournament` from the current collection or state.

### GetTournamentGame
`public TournamentGame GetTournamentGame(Town town)`

**Purpose:** Gets the current value of `tournament game`.

### OnPlayerJoinMatch
`public void OnPlayerJoinMatch(Type gameType)`

**Purpose:** Called when the `player join match` event is raised.

### OnPlayerJoinTournament
`public void OnPlayerJoinTournament(Type gameType, Settlement settlement)`

**Purpose:** Called when the `player join tournament` event is raised.

### OnPlayerWatchTournament
`public void OnPlayerWatchTournament(Type gameType, Settlement settlement)`

**Purpose:** Called when the `player watch tournament` event is raised.

### OnPlayerWinMatch
`public void OnPlayerWinMatch(Type gameType)`

**Purpose:** Called when the `player win match` event is raised.

### OnPlayerWinTournament
`public void OnPlayerWinTournament(Type gameType)`

**Purpose:** Called when the `player win tournament` event is raised.

### GetLeaderboard
`public List<KeyValuePair<Hero, int>> GetLeaderboard()`

**Purpose:** Gets the current value of `leaderboard`.

### GetLeaderBoardRank
`public int GetLeaderBoardRank(Hero hero)`

**Purpose:** Gets the current value of `leader board rank`.

### GetLeaderBoardLeader
`public Hero GetLeaderBoardLeader()`

**Purpose:** Gets the current value of `leader board leader`.

### InitializeLeaderboardEntry
`public void InitializeLeaderboardEntry(Hero hero, int initialVictories = 0)`

**Purpose:** Initializes the state, resources, or bindings for `leaderboard entry`.

### AddLeaderboardEntry
`public void AddLeaderboardEntry(Hero hero)`

**Purpose:** Adds `leaderboard entry` to the current collection or state.

### DeleteLeaderboardEntry
`public void DeleteLeaderboardEntry(Hero hero)`

**Purpose:** Handles logic related to `delete leaderboard entry`.

### ResolveTournament
`public void ResolveTournament(TournamentGame tournament, Town town)`

**Purpose:** Handles logic related to `resolve tournament`.

### GivePrizeToWinner
`public void GivePrizeToWinner(TournamentGame tournament, Hero winner, bool isPlayerParticipated)`

**Purpose:** Handles logic related to `give prize to winner`.

## Usage Example

```csharp
var manager = TournamentManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)