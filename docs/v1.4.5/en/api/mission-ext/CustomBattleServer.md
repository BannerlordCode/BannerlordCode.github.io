<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleServer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleServer : Client<CustomBattleServer>`
**Base:** `Client<CustomBattleServer>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/CustomBattleServer.cs`

## Overview

`CustomBattleServer` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

**Purpose:** Sets the value or state of `badge component`.

### Connect
`public void Connect(ICustomBattleServerSessionHandler handler, string authToken, bool isSinglePlatformServer, string loadedModuleIDs, bool allowsOptionalModules, bool isPlayerHosted)`

**Purpose:** Handles logic related to `connect`.

### OnConnected
`public override void OnConnected()`

**Purpose:** Called when the `connected` event is raised.

### OnCantConnect
`public override void OnCantConnect()`

**Purpose:** Called when the `cant connect` event is raised.

### OnDisconnected
`public override void OnDisconnected()`

**Purpose:** Called when the `disconnected` event is raised.

### OnPlayerDisconnectedFromLobbyMessage
`public void OnPlayerDisconnectedFromLobbyMessage(PlayerDisconnectedFromLobbyMessage message)`

**Purpose:** Called when the `player disconnected from lobby message` event is raised.

### ResponseCustomGameClientConnection
`public void ResponseCustomGameClientConnection(PlayerJoinGameResponseDataFromHost playerJoinData)`

**Purpose:** Handles logic related to `response custom game client connection`.

### RegisterGame
`public async Task RegisterGame(string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission)`

**Purpose:** Handles logic related to `register game`.

### RegisterGame
`public async Task RegisterGame(int gameDefinitionId, string gameModule, string gameType, string serverName, int maxPlayerCount, string scene, string uniqueSceneId, int port, string region, string gamePassword, string adminPassword, int permission, string overriddenIP)`

**Purpose:** Handles logic related to `register game`.

### UpdateCustomGameData
`public void UpdateCustomGameData(string newGameType, string newMap, int newCount)`

**Purpose:** Updates the state or data of `custom game data`.

### KickPlayer
`public void KickPlayer(PlayerId id, bool banPlayer)`

**Purpose:** Handles logic related to `kick player`.

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType)`

**Purpose:** Handles the `player disconnect` event or callback.

### FinishAsIdle
`public void FinishAsIdle(GameLog gameLogs)`

**Purpose:** Handles logic related to `finish as idle`.

### FinishGame
`public void FinishGame(GameLog gameLogs)`

**Purpose:** Handles logic related to `finish game`.

### UpdateGameProperties
`public void UpdateGameProperties(string gameType, string scene, string uniqueSceneId)`

**Purpose:** Updates the state or data of `game properties`.

### BeforeStartingNextBattle
`public void BeforeStartingNextBattle(GameLog gameLogs)`

**Purpose:** Handles logic related to `before starting next battle`.

### BattleStarted
`public void BattleStarted(Dictionary<PlayerId, int> playerTeams, string cultureTeam1, string cultureTeam2)`

**Purpose:** Handles logic related to `battle started`.

### BattleFinished
`public void BattleFinished(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**Purpose:** Handles logic related to `battle finished`.

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**Purpose:** Updates the state or data of `battle stats`.

## Usage Example

```csharp
var value = new CustomBattleServer();
value.SetBadgeComponent(badgeComponent);
```

## See Also

- [Complete Class Catalog](../catalog)