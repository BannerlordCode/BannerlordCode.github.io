---
title: "CustomBattleServer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleServer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleServer : Client<CustomBattleServer>`
**Base:** `Client<CustomBattleServer>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs`

## 概述

`CustomBattleServer` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsRegistered` | `public bool IsRegistered { get; }` |
| `Connected` | `public bool Connected { get; }` |
| `CurrentState` | `public State CurrentState { get; }` |
| `IsIdle` | `public bool IsIdle { get; }` |
| `CustomGameType` | `public string CustomGameType { get; }` |
| `CustomGameScene` | `public string CustomGameScene { get; }` |
| `Port` | `public int Port { get; }` |
| `BattleResult` | `public MultipleBattleResult BattleResult { get; }` |

## 主要方法

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

**用途 / Purpose:** 设置 `badge component` 的值或状态。

### Connect
`public void Connect(ICustomBattleServerSessionHandler handler, string authToken, bool isSinglePlatformServer, string loadedModuleIDs, bool allowsOptionalModules, bool isPlayerHosted)`

**用途 / Purpose:** 处理 `connect` 相关逻辑。

### OnConnected
`public override void OnConnected()`

**用途 / Purpose:** 当 `connected` 事件触发时调用此方法。

### OnCantConnect
`public override void OnCantConnect()`

**用途 / Purpose:** 当 `cant connect` 事件触发时调用此方法。

### OnDisconnected
`public override void OnDisconnected()`

**用途 / Purpose:** 当 `disconnected` 事件触发时调用此方法。

### OnPlayerDisconnectedFromLobbyMessage
`public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message)`

**用途 / Purpose:** 当 `player disconnected from lobby message` 事件触发时调用此方法。

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)`

**用途 / Purpose:** 处理 `response custom game client connection` 相关逻辑。

### RegisterGame
`public async Task RegisterGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission)`

**用途 / Purpose:** 处理 `register game` 相关逻辑。

### RegisterGame
`public async Task RegisterGame(int gameDefinitionId, string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission, string overriddenIP)`

**用途 / Purpose:** 处理 `register game` 相关逻辑。

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType, string newMap, int newCount)`

**用途 / Purpose:** 更新 `custom game data` 的状态或数据。

### KickPlayer
`public void KickPlayer(PlayerId id, bool banPlayer)`

**用途 / Purpose:** 处理 `kick player` 相关逻辑。

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType)`

**用途 / Purpose:** 处理 `player disconnect` 事件或回调。

### FinishAsIdle
`public void FinishAsIdle(GameLog gameLogs)`

**用途 / Purpose:** 处理 `finish as idle` 相关逻辑。

### FinishGame
`public void FinishGame(GameLog gameLogs)`

**用途 / Purpose:** 处理 `finish game` 相关逻辑。

### UpdateGameProperties
`public void UpdateGameProperties(string gameType, string scene, string uniqueSceneId)`

**用途 / Purpose:** 更新 `game properties` 的状态或数据。

### BeforeStartingNextBattle
`public void BeforeStartingNextBattle(GameLog gameLogs)`

**用途 / Purpose:** 处理 `before starting next battle` 相关逻辑。

### BattleStarted
`public void BattleStarted(Dictionary<PlayerId, int> playerTeams, string cultureTeam1, string cultureTeam2)`

**用途 / Purpose:** 处理 `battle started` 相关逻辑。

### BattleFinished
`public void BattleFinished(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**用途 / Purpose:** 处理 `battle finished` 相关逻辑。

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**用途 / Purpose:** 更新 `battle stats` 的状态或数据。

## 使用示例

```csharp
var value = new CustomBattleServer();
value.SetBadgeComponent(badgeComponent);
```

## 参见

- [完整类目录](../catalog)