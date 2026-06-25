---
title: "TournamentManager"
description: "Auto-generated class reference for TournamentManager."
---
# TournamentManager

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentManager : ITournamentManager`
**Base:** `ITournamentManager`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentManager.cs`

## Overview

`TournamentManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `TournamentManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddTournament
`public void AddTournament(TournamentGame game)`

**Purpose:** Adds tournament to the current collection or state.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.AddTournament(game);
```

### RemoveTournament
`public void RemoveTournament(TournamentGame game)`

**Purpose:** Removes tournament from the current collection or state.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.RemoveTournament(game);
```

### GetTournamentGame
`public TournamentGame GetTournamentGame(Town town)`

**Purpose:** Reads and returns the tournament game value held by the this instance.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
var result = tournamentManager.GetTournamentGame(town);
```

### OnPlayerJoinMatch
`public void OnPlayerJoinMatch(Type gameType)`

**Purpose:** Invoked when the player join match event is raised.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerJoinMatch(gameType);
```

### OnPlayerJoinTournament
`public void OnPlayerJoinTournament(Type gameType, Settlement settlement)`

**Purpose:** Invoked when the player join tournament event is raised.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerJoinTournament(gameType, settlement);
```

### OnPlayerWatchTournament
`public void OnPlayerWatchTournament(Type gameType, Settlement settlement)`

**Purpose:** Invoked when the player watch tournament event is raised.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerWatchTournament(gameType, settlement);
```

### OnPlayerWinMatch
`public void OnPlayerWinMatch(Type gameType)`

**Purpose:** Invoked when the player win match event is raised.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerWinMatch(gameType);
```

### OnPlayerWinTournament
`public void OnPlayerWinTournament(Type gameType)`

**Purpose:** Invoked when the player win tournament event is raised.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerWinTournament(gameType);
```

### GetLeaderboard
`public List<KeyValuePair<Hero, int>> GetLeaderboard()`

**Purpose:** Reads and returns the leaderboard value held by the this instance.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
var result = tournamentManager.GetLeaderboard();
```

### GetLeaderBoardRank
`public int GetLeaderBoardRank(Hero hero)`

**Purpose:** Reads and returns the leader board rank value held by the this instance.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
var result = tournamentManager.GetLeaderBoardRank(hero);
```

### GetLeaderBoardLeader
`public Hero GetLeaderBoardLeader()`

**Purpose:** Reads and returns the leader board leader value held by the this instance.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
var result = tournamentManager.GetLeaderBoardLeader();
```

### InitializeLeaderboardEntry
`public void InitializeLeaderboardEntry(Hero hero, int initialVictories = 0)`

**Purpose:** Prepares the resources, state, or bindings required by leaderboard entry.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.InitializeLeaderboardEntry(hero, 0);
```

### AddLeaderboardEntry
`public void AddLeaderboardEntry(Hero hero)`

**Purpose:** Adds leaderboard entry to the current collection or state.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.AddLeaderboardEntry(hero);
```

### DeleteLeaderboardEntry
`public void DeleteLeaderboardEntry(Hero hero)`

**Purpose:** Executes the DeleteLeaderboardEntry logic.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.DeleteLeaderboardEntry(hero);
```

### ResolveTournament
`public void ResolveTournament(TournamentGame tournament, Town town)`

**Purpose:** Executes the ResolveTournament logic.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.ResolveTournament(tournament, town);
```

### GivePrizeToWinner
`public void GivePrizeToWinner(TournamentGame tournament, Hero winner, bool isPlayerParticipated)`

**Purpose:** Executes the GivePrizeToWinner logic.

```csharp
// Obtain an instance of TournamentManager from the subsystem API first
TournamentManager tournamentManager = ...;
tournamentManager.GivePrizeToWinner(tournament, winner, false);
```

## Usage Example

```csharp
var manager = TournamentManager.Current;
```

## See Also

- [Area Index](../)