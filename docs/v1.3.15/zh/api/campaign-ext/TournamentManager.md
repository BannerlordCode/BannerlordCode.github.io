<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentManager

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentManager : ITournamentManager`
**Base:** `ITournamentManager`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentManager.cs`

## 概述

`TournamentManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

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

## 使用示例

```csharp
// TournamentManager (Manager) 的典型用法
TournamentManager.Current;
```

## 参见

- [完整类目录](../catalog)