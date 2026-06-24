<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentManager

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentManager : ITournamentManager`
**Base:** `ITournamentManager`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentManager.cs`

## 概述

`TournamentManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `TournamentManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddTournament
`public void AddTournament(TournamentGame game)`

**用途 / Purpose:** 向当前集合/状态中添加 `tournament`。

### RemoveTournament
`public void RemoveTournament(TournamentGame game)`

**用途 / Purpose:** 从当前集合/状态中移除 `tournament`。

### GetTournamentGame
`public TournamentGame GetTournamentGame(Town town)`

**用途 / Purpose:** 获取 `tournament game` 的当前值。

### OnPlayerJoinMatch
`public void OnPlayerJoinMatch(Type gameType)`

**用途 / Purpose:** 当 `player join match` 事件触发时调用此方法。

### OnPlayerJoinTournament
`public void OnPlayerJoinTournament(Type gameType, Settlement settlement)`

**用途 / Purpose:** 当 `player join tournament` 事件触发时调用此方法。

### OnPlayerWatchTournament
`public void OnPlayerWatchTournament(Type gameType, Settlement settlement)`

**用途 / Purpose:** 当 `player watch tournament` 事件触发时调用此方法。

### OnPlayerWinMatch
`public void OnPlayerWinMatch(Type gameType)`

**用途 / Purpose:** 当 `player win match` 事件触发时调用此方法。

### OnPlayerWinTournament
`public void OnPlayerWinTournament(Type gameType)`

**用途 / Purpose:** 当 `player win tournament` 事件触发时调用此方法。

### GetLeaderboard
`public List<KeyValuePair<Hero, int>> GetLeaderboard()`

**用途 / Purpose:** 获取 `leaderboard` 的当前值。

### GetLeaderBoardRank
`public int GetLeaderBoardRank(Hero hero)`

**用途 / Purpose:** 获取 `leader board rank` 的当前值。

### GetLeaderBoardLeader
`public Hero GetLeaderBoardLeader()`

**用途 / Purpose:** 获取 `leader board leader` 的当前值。

### InitializeLeaderboardEntry
`public void InitializeLeaderboardEntry(Hero hero, int initialVictories = 0)`

**用途 / Purpose:** 初始化 `leaderboard entry` 的状态、资源或绑定。

### AddLeaderboardEntry
`public void AddLeaderboardEntry(Hero hero)`

**用途 / Purpose:** 向当前集合/状态中添加 `leaderboard entry`。

### DeleteLeaderboardEntry
`public void DeleteLeaderboardEntry(Hero hero)`

**用途 / Purpose:** 处理 `delete leaderboard entry` 相关逻辑。

### ResolveTournament
`public void ResolveTournament(TournamentGame tournament, Town town)`

**用途 / Purpose:** 处理 `resolve tournament` 相关逻辑。

### GivePrizeToWinner
`public void GivePrizeToWinner(TournamentGame tournament, Hero winner, bool isPlayerParticipated)`

**用途 / Purpose:** 处理 `give prize to winner` 相关逻辑。

## 使用示例

```csharp
var manager = TournamentManager.Current;
```

## 参见

- [完整类目录](../catalog)