---
title: "CustomBattleServer"
description: "CustomBattleServer 的自动生成类参考。"
---
# CustomBattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleServer : Client<CustomBattleServer>`
**Base:** `Client<CustomBattleServer>`
**File:** `TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs`

## 概述

`CustomBattleServer` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Finished` | `public bool Finished { get; }` |
| `IsRegistered` | `public bool IsRegistered { get; }` |
| `IsPlaying` | `public bool IsPlaying { get; }` |
| `Connected` | `public bool Connected { get; }` |
| `CurrentState` | `public CustomBattleServer.State CurrentState { get; }` |
| `IsIdle` | `public bool IsIdle { get; }` |
| `CustomGameType` | `public string CustomGameType { get; }` |
| `CustomGameScene` | `public string CustomGameScene { get; }` |
| `Port` | `public int Port { get; }` |
| `BattleResult` | `public MultipleBattleResult BattleResult { get; }` |

## 主要方法

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

**用途 / Purpose:** **用途 / Purpose:** 为 badge component 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.SetBadgeComponent(badgeComponent);
```

### Connect
`public void Connect(ICustomBattleServerSessionHandler handler, string authToken, bool isSinglePlatformServer, string loadedModuleIDs, bool allowsOptionalModules, bool isPlayerHosted)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Connect 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.Connect(handler, "example", false, "example", false, false);
```

### OnConnected
`public override void OnConnected()`

**用途 / Purpose:** **用途 / Purpose:** 在 connected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.OnConnected();
```

### OnCantConnect
`public override void OnCantConnect()`

**用途 / Purpose:** **用途 / Purpose:** 在 cant connect 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.OnCantConnect();
```

### OnDisconnected
`public override void OnDisconnected()`

**用途 / Purpose:** **用途 / Purpose:** 在 disconnected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.OnDisconnected();
```

### OnPlayerDisconnectedFromLobbyMessage
`public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message)`

**用途 / Purpose:** **用途 / Purpose:** 在 player disconnected from lobby message 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.OnPlayerDisconnectedFromLobbyMessage(message);
```

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ResponseCustomGameClientConnection 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.ResponseCustomGameClientConnection(playerJoinData);
```

### RegisterGame
`public Task RegisterGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission)`

**用途 / Purpose:** **用途 / Purpose:** 将game注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
var result = customBattleServer.RegisterGame("example", "example", "example", 0, "example", "example", 0, "example", "example", "example", 0);
```

### RegisterGame
`public Task RegisterGame(int gameDefinitionId, string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission, string overriddenIP)`

**用途 / Purpose:** **用途 / Purpose:** 将game注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
var result = customBattleServer.RegisterGame(0, "example", "example", "example", 0, "example", "example", 0, "example", "example", "example", 0, "example");
```

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType, string newMap, int newCount)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 custom game data 的最新表示。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.UpdateCustomGameData("example", "example", 0);
```

### KickPlayer
`public void KickPlayer(PlayerId id, bool banPlayer)`

**用途 / Purpose:** **用途 / Purpose:** 调用 KickPlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.KickPlayer(id, false);
```

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 player disconnect 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.HandlePlayerDisconnect(playerId, disconnectType);
```

### FinishAsIdle
`public void FinishAsIdle(GameLog gameLogs)`

**用途 / Purpose:** **用途 / Purpose:** 结束as idle流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.FinishAsIdle(gameLogs);
```

### FinishGame
`public void FinishGame(GameLog gameLogs)`

**用途 / Purpose:** **用途 / Purpose:** 结束game流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.FinishGame(gameLogs);
```

### UpdateGameProperties
`public void UpdateGameProperties(string gameType, string scene, string uniqueSceneId)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 game properties 的最新表示。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.UpdateGameProperties("example", "example", "example");
```

### BeforeStartingNextBattle
`public void BeforeStartingNextBattle(GameLog gameLogs)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeforeStartingNextBattle 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.BeforeStartingNextBattle(gameLogs);
```

### BattleStarted
`public void BattleStarted(Dictionary<PlayerId, int> playerTeams, string cultureTeam1, string cultureTeam2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BattleStarted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.BattleStarted(dictionary<PlayerId, 0, "example", "example");
```

### BattleFinished
`public void BattleFinished(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BattleFinished 对应的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.BattleFinished(battleResult, dictionary<int, 0, dictionary<PlayerId, 0);
```

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 battle stats 的最新表示。

```csharp
// 先通过子系统 API 拿到 CustomBattleServer 实例
CustomBattleServer customBattleServer = ...;
customBattleServer.UpdateBattleStats(battleResult, dictionary<int, 0, dictionary<PlayerId, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleServer customBattleServer = ...;
customBattleServer.SetBadgeComponent(badgeComponent);
```

## 参见

- [本区域目录](../)