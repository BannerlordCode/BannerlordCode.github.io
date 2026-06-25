---
title: "TournamentManager"
description: "TournamentManager 的自动生成类参考。"
---
# TournamentManager

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentManager : ITournamentManager`
**Base:** `ITournamentManager`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentManager.cs`

## 概述

`TournamentManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `TournamentManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddTournament
`public void AddTournament(TournamentGame game)`

**用途 / Purpose:** 将 tournament 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.AddTournament(game);
```

### RemoveTournament
`public void RemoveTournament(TournamentGame game)`

**用途 / Purpose:** 从当前容器或状态中移除 tournament。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.RemoveTournament(game);
```

### GetTournamentGame
`public TournamentGame GetTournamentGame(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 tournament game 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
var result = tournamentManager.GetTournamentGame(town);
```

### OnPlayerJoinMatch
`public void OnPlayerJoinMatch(Type gameType)`

**用途 / Purpose:** 在 player join match 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerJoinMatch(gameType);
```

### OnPlayerJoinTournament
`public void OnPlayerJoinTournament(Type gameType, Settlement settlement)`

**用途 / Purpose:** 在 player join tournament 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerJoinTournament(gameType, settlement);
```

### OnPlayerWatchTournament
`public void OnPlayerWatchTournament(Type gameType, Settlement settlement)`

**用途 / Purpose:** 在 player watch tournament 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerWatchTournament(gameType, settlement);
```

### OnPlayerWinMatch
`public void OnPlayerWinMatch(Type gameType)`

**用途 / Purpose:** 在 player win match 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerWinMatch(gameType);
```

### OnPlayerWinTournament
`public void OnPlayerWinTournament(Type gameType)`

**用途 / Purpose:** 在 player win tournament 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.OnPlayerWinTournament(gameType);
```

### GetLeaderboard
`public List<KeyValuePair<Hero, int>> GetLeaderboard()`

**用途 / Purpose:** 读取并返回当前对象中 leaderboard 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
var result = tournamentManager.GetLeaderboard();
```

### GetLeaderBoardRank
`public int GetLeaderBoardRank(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 leader board rank 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
var result = tournamentManager.GetLeaderBoardRank(hero);
```

### GetLeaderBoardLeader
`public Hero GetLeaderBoardLeader()`

**用途 / Purpose:** 读取并返回当前对象中 leader board leader 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
var result = tournamentManager.GetLeaderBoardLeader();
```

### InitializeLeaderboardEntry
`public void InitializeLeaderboardEntry(Hero hero, int initialVictories = 0)`

**用途 / Purpose:** 为 leaderboard entry 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.InitializeLeaderboardEntry(hero, 0);
```

### AddLeaderboardEntry
`public void AddLeaderboardEntry(Hero hero)`

**用途 / Purpose:** 将 leaderboard entry 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.AddLeaderboardEntry(hero);
```

### DeleteLeaderboardEntry
`public void DeleteLeaderboardEntry(Hero hero)`

**用途 / Purpose:** 调用 DeleteLeaderboardEntry 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.DeleteLeaderboardEntry(hero);
```

### ResolveTournament
`public void ResolveTournament(TournamentGame tournament, Town town)`

**用途 / Purpose:** 调用 ResolveTournament 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.ResolveTournament(tournament, town);
```

### GivePrizeToWinner
`public void GivePrizeToWinner(TournamentGame tournament, Hero winner, bool isPlayerParticipated)`

**用途 / Purpose:** 调用 GivePrizeToWinner 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentManager 实例
TournamentManager tournamentManager = ...;
tournamentManager.GivePrizeToWinner(tournament, winner, false);
```

## 使用示例

```csharp
var manager = TournamentManager.Current;
```

## 参见

- [本区域目录](../)