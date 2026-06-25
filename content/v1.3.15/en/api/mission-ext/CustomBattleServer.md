---
title: "CustomBattleServer"
description: "Auto-generated class reference for CustomBattleServer."
---
# CustomBattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleServer : Client<CustomBattleServer>`
**Base:** `Client<CustomBattleServer>`
**File:** `TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs`

## Overview

`CustomBattleServer` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

**Purpose:** Assigns a new value to `badge component` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.SetBadgeComponent(badgeComponent);
```

### Connect
`public void Connect(ICustomBattleServerSessionHandler handler, string authToken, bool isSinglePlatformServer, string loadedModuleIDs, bool allowsOptionalModules, bool isPlayerHosted)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.Connect(handler, "example", false, "example", false, false);
```

### OnConnected
`public override void OnConnected()`

**Purpose:** Invoked when the `connected` event is raised.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.OnConnected();
```

### OnCantConnect
`public override void OnCantConnect()`

**Purpose:** Invoked when the `cant connect` event is raised.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.OnCantConnect();
```

### OnDisconnected
`public override void OnDisconnected()`

**Purpose:** Invoked when the `disconnected` event is raised.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.OnDisconnected();
```

### OnPlayerDisconnectedFromLobbyMessage
`public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message)`

**Purpose:** Invoked when the `player disconnected from lobby message` event is raised.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.OnPlayerDisconnectedFromLobbyMessage(message);
```

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.ResponseCustomGameClientConnection(playerJoinData);
```

### RegisterGame
`public Task RegisterGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission)`

**Purpose:** Registers `game` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
var result = customBattleServer.RegisterGame("example", "example", "example", 0, "example", "example", 0, "example", "example", "example", 0);
```

### RegisterGame
`public Task RegisterGame(int gameDefinitionId, string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission, string overriddenIP)`

**Purpose:** Registers `game` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
var result = customBattleServer.RegisterGame(0, "example", "example", "example", 0, "example", "example", 0, "example", "example", "example", 0, "example");
```

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType, string newMap, int newCount)`

**Purpose:** Recalculates and stores the latest representation of `custom game data`.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.UpdateCustomGameData("example", "example", 0);
```

### KickPlayer
`public void KickPlayer(PlayerId id, bool banPlayer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.KickPlayer(id, false);
```

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType)`

**Purpose:** Executes the response logic associated with `player disconnect`.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.HandlePlayerDisconnect(playerId, disconnectType);
```

### FinishAsIdle
`public void FinishAsIdle(GameLog gameLogs)`

**Purpose:** Concludes the `as idle` flow and performs any cleanup.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.FinishAsIdle(gameLogs);
```

### FinishGame
`public void FinishGame(GameLog gameLogs)`

**Purpose:** Concludes the `game` flow and performs any cleanup.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.FinishGame(gameLogs);
```

### UpdateGameProperties
`public void UpdateGameProperties(string gameType, string scene, string uniqueSceneId)`

**Purpose:** Recalculates and stores the latest representation of `game properties`.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.UpdateGameProperties("example", "example", "example");
```

### BeforeStartingNextBattle
`public void BeforeStartingNextBattle(GameLog gameLogs)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.BeforeStartingNextBattle(gameLogs);
```

### BattleStarted
`public void BattleStarted(Dictionary<PlayerId, int> playerTeams, string cultureTeam1, string cultureTeam2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.BattleStarted(dictionary<PlayerId, 0, "example", "example");
```

### BattleFinished
`public void BattleFinished(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.BattleFinished(battleResult, dictionary<int, 0, dictionary<PlayerId, 0);
```

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**Purpose:** Recalculates and stores the latest representation of `battle stats`.

```csharp
// Obtain an instance of CustomBattleServer from the subsystem API first
CustomBattleServer customBattleServer = ...;
customBattleServer.UpdateBattleStats(battleResult, dictionary<int, 0, dictionary<PlayerId, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleServer customBattleServer = ...;
customBattleServer.SetBadgeComponent(badgeComponent);
```

## See Also

- [Area Index](../)