<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleServer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleServer : Client<BattleServer>`
**Base:** `Client<BattleServer>`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleServer.cs`

## Overview

`BattleServer` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneName` | `public string SceneName { get; }` |
| `GameType` | `public string GameType { get; }` |
| `Faction1` | `public string Faction1 { get; }` |
| `Faction2` | `public string Faction2 { get; }` |
| `MinRequiredPlayerCountToStartBattle` | `public int MinRequiredPlayerCountToStartBattle { get; }` |
| `BattleSize` | `public int BattleSize { get; }` |
| `RoundThreshold` | `public int RoundThreshold { get; }` |
| `MoraleThreshold` | `public float MoraleThreshold { get; }` |
| `BattleId` | `public Guid BattleId { get; }` |
| `UseAnalytics` | `public bool UseAnalytics { get; }` |
| `CaptureMovementData` | `public bool CaptureMovementData { get; }` |
| `AnalyticsServiceAddress` | `public string AnalyticsServiceAddress { get; }` |
| `IsPremadeGame` | `public bool IsPremadeGame { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |
| `AssignedPlayers` | `public PlayerId AssignedPlayers { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsFinished` | `public bool IsFinished { get; }` |

## Key Methods

### Initialize
`public void Initialize(IBattleServerSessionHandler handler)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

**Purpose:** Sets the value or state of `badge component`.

### StartServer
`public void StartServer()`

**Purpose:** Handles logic related to `start server`.

### OnConnected
`public override void OnConnected()`

**Purpose:** Called when the `connected` event is raised.

### OnCantConnect
`public override void OnCantConnect()`

**Purpose:** Called when the `cant connect` event is raised.

### OnDisconnected
`public override void OnDisconnected()`

**Purpose:** Called when the `disconnected` event is raised.

### BeginEndMission
`public void BeginEndMission()`

**Purpose:** Handles logic related to `begin end mission`.

### EndMission
`public void EndMission(BattleResult battleResult, GameLog gameLogs, int gameTime, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**Purpose:** Handles logic related to `end mission`.

### BattleCancelledForPlayerLeaving
`public void BattleCancelledForPlayerLeaving(PlayerId leaverID)`

**Purpose:** Handles logic related to `battle cancelled for player leaving`.

### BattleStarted
`public void BattleStarted(BattleResult battleResult)`

**Purpose:** Handles logic related to `battle started`.

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores)`

**Purpose:** Updates the state or data of `battle stats`.

### DoNotAcceptNewPlayers
`public void DoNotAcceptNewPlayers()`

**Purpose:** Handles logic related to `do not accept new players`.

### OnWarmupEnded
`public void OnWarmupEnded()`

**Purpose:** Called when the `warmup ended` event is raised.

### OnPlayerSpawned
`public void OnPlayerSpawned(PlayerId playerId)`

**Purpose:** Called when the `player spawned` event is raised.

### GetPeer
`public BattlePeer GetPeer(string name)`

**Purpose:** Gets the current value of `peer`.

### GetPeer
`public BattlePeer GetPeer(PlayerId playerId)`

**Purpose:** Gets the current value of `peer`.

### GetPlayerParty
`public Guid GetPlayerParty(PlayerId playerId)`

**Purpose:** Gets the current value of `player party`.

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType, BattleResult battleResult)`

**Purpose:** Handles the `player disconnect` event or callback.

### InformGameServerReady
`public void InformGameServerReady()`

**Purpose:** Handles logic related to `inform game server ready`.

### OnFriendlyHit
`public void OnFriendlyHit(int round, PlayerId hitter, PlayerId victim, float damage)`

**Purpose:** Called when the `friendly hit` event is raised.

### OnFriendlyKill
`public void OnFriendlyKill(int round, PlayerId killer, PlayerId victim)`

**Purpose:** Called when the `friendly kill` event is raised.

### AllPlayersConnected
`public bool AllPlayersConnected()`

**Purpose:** Handles logic related to `all players connected`.

## Usage Example

```csharp
var value = new BattleServer();
value.Initialize(handler);
```

## See Also

- [Complete Class Catalog](../catalog)