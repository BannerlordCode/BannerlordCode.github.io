<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleServer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleServer

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CustomBattleServer` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void SetBadgeComponent(IBadgeComponent badgeComponent)
```

### Connect

```csharp
public void Connect(ICustomBattleServerSessionHandler handler, string authToken, bool isSinglePlatformServer, string loadedModuleIDs, bool allowsOptionalModules, bool isPlayerHosted)
```

### OnConnected

```csharp
public override void OnConnected()
```

### OnCantConnect

```csharp
public override void OnCantConnect()
```

### OnDisconnected

```csharp
public override void OnDisconnected()
```

### OnPlayerDisconnectedFromLobbyMessage

```csharp
public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message)
```

### ResponseCustomGameClientConnection

```csharp
public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)
```

### RegisterGame

```csharp
public Task RegisterGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission)
```

### RegisterGame

```csharp
public Task RegisterGame(int gameDefinitionId, string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission, string overriddenIP)
```

### UpdateCustomGameData

```csharp
public void UpdateCustomGameData(string newGameType, string newMap, int newCount)
```

### KickPlayer

```csharp
public void KickPlayer(PlayerId id, bool banPlayer)
```

### HandlePlayerDisconnect

```csharp
public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType)
```

### FinishAsIdle

```csharp
public void FinishAsIdle(GameLog gameLogs)
```

### FinishGame

```csharp
public void FinishGame(GameLog gameLogs)
```

### UpdateGameProperties

```csharp
public void UpdateGameProperties(string gameType, string scene, string uniqueSceneId)
```

### BeforeStartingNextBattle

```csharp
public void BeforeStartingNextBattle(GameLog gameLogs)
```

### BattleStarted

```csharp
public void BattleStarted(Dictionary<PlayerId, int> playerTeams, string cultureTeam1, string cultureTeam2)
```

### BattleFinished

```csharp
public void BattleFinished(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)
```

### UpdateBattleStats

```csharp
public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)