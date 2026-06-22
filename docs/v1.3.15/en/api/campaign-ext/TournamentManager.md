<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentManager

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentManager : ITournamentManager`
**Base:** `ITournamentManager`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentManager.cs`

## Overview

`TournamentManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### AddTournament
```csharp
public void AddTournament(TournamentGame game)
```

### RemoveTournament
```csharp
public void RemoveTournament(TournamentGame game)
```

### GetTournamentGame
```csharp
public TournamentGame GetTournamentGame(Town town)
```

### OnPlayerJoinMatch
```csharp
public void OnPlayerJoinMatch(Type gameType)
```

### OnPlayerJoinTournament
```csharp
public void OnPlayerJoinTournament(Type gameType, Settlement settlement)
```

### OnPlayerWatchTournament
```csharp
public void OnPlayerWatchTournament(Type gameType, Settlement settlement)
```

### OnPlayerWinMatch
```csharp
public void OnPlayerWinMatch(Type gameType)
```

### OnPlayerWinTournament
```csharp
public void OnPlayerWinTournament(Type gameType)
```

### GetLeaderboard
```csharp
public List<KeyValuePair<Hero, int>> GetLeaderboard()
```

### GetLeaderBoardRank
```csharp
public int GetLeaderBoardRank(Hero hero)
```

### GetLeaderBoardLeader
```csharp
public Hero GetLeaderBoardLeader()
```

### InitializeLeaderboardEntry
```csharp
public void InitializeLeaderboardEntry(Hero hero, int initialVictories = 0)
```

### AddLeaderboardEntry
```csharp
public void AddLeaderboardEntry(Hero hero)
```

### DeleteLeaderboardEntry
```csharp
public void DeleteLeaderboardEntry(Hero hero)
```

### ResolveTournament
```csharp
public void ResolveTournament(TournamentGame tournament, Town town)
```

### GivePrizeToWinner
```csharp
public void GivePrizeToWinner(TournamentGame tournament, Hero winner, bool isPlayerParticipated)
```

## Usage Example

```csharp
// Typical usage of TournamentManager (Manager)
TournamentManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)