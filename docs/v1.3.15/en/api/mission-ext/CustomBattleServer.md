<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleServer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CustomBattleServer` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)