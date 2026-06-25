---
title: "BattleServer"
description: "Auto-generated class reference for BattleServer."
---
# BattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleServer : Client<BattleServer>`
**Base:** `Client<BattleServer>`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattleServer.cs`

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

## Key Methods

### Initialize
`public void Initialize(IBattleServerSessionHandler handler)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.Initialize(handler);
```

### SetBadgeComponent
`public void SetBadgeComponent(IBadgeComponent badgeComponent)`

**Purpose:** Assigns a new value to `badge component` and updates the object's internal state.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.SetBadgeComponent(badgeComponent);
```

### StartServer
`public void StartServer()`

**Purpose:** Starts the `server` flow or state machine.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.StartServer();
```

### OnConnected
`public override void OnConnected()`

**Purpose:** Invoked when the `connected` event is raised.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.OnConnected();
```

### OnCantConnect
`public override void OnCantConnect()`

**Purpose:** Invoked when the `cant connect` event is raised.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.OnCantConnect();
```

### OnDisconnected
`public override void OnDisconnected()`

**Purpose:** Invoked when the `disconnected` event is raised.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.OnDisconnected();
```

### BeginEndMission
`public void BeginEndMission()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.BeginEndMission();
```

### EndMission
`public void EndMission(BattleResult battleResult, GameLog gameLogs, int gameTime, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.EndMission(battleResult, gameLogs, 0, dictionary<int, 0, dictionary<PlayerId, 0);
```

### BattleCancelledForPlayerLeaving
`public void BattleCancelledForPlayerLeaving(PlayerId leaverID)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.BattleCancelledForPlayerLeaving(leaverID);
```

### BattleStarted
`public void BattleStarted(BattleResult battleResult)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.BattleStarted(battleResult);
```

### UpdateBattleStats
`public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores)`

**Purpose:** Recalculates and stores the latest representation of `battle stats`.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.UpdateBattleStats(battleResult, dictionary<int, 0);
```

### DoNotAcceptNewPlayers
`public void DoNotAcceptNewPlayers()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.DoNotAcceptNewPlayers();
```

### OnWarmupEnded
`public void OnWarmupEnded()`

**Purpose:** Invoked when the `warmup ended` event is raised.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.OnWarmupEnded();
```

### OnPlayerSpawned
`public void OnPlayerSpawned(PlayerId playerId)`

**Purpose:** Invoked when the `player spawned` event is raised.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.OnPlayerSpawned(playerId);
```

### GetPeer
`public BattlePeer GetPeer(string name)`

**Purpose:** Reads and returns the `peer` value held by the current object.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
var result = battleServer.GetPeer("example");
```

### GetPeer
`public BattlePeer GetPeer(PlayerId playerId)`

**Purpose:** Reads and returns the `peer` value held by the current object.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
var result = battleServer.GetPeer(playerId);
```

### GetPlayerParty
`public Guid GetPlayerParty(PlayerId playerId)`

**Purpose:** Reads and returns the `player party` value held by the current object.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
var result = battleServer.GetPlayerParty(playerId);
```

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType, BattleResult battleResult)`

**Purpose:** Executes the response logic associated with `player disconnect`.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.HandlePlayerDisconnect(playerId, disconnectType, battleResult);
```

### InformGameServerReady
`public async void InformGameServerReady()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.InformGameServerReady();
```

### OnFriendlyHit
`public void OnFriendlyHit(int round, PlayerId hitter, PlayerId victim, float damage)`

**Purpose:** Invoked when the `friendly hit` event is raised.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.OnFriendlyHit(0, hitter, victim, 0);
```

### OnFriendlyKill
`public void OnFriendlyKill(int round, PlayerId killer, PlayerId victim)`

**Purpose:** Invoked when the `friendly kill` event is raised.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
battleServer.OnFriendlyKill(0, killer, victim);
```

### AllPlayersConnected
`public bool AllPlayersConnected()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleServer from the subsystem API first
BattleServer battleServer = ...;
var result = battleServer.AllPlayersConnected();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BattleServer battleServer = ...;
battleServer.Initialize(handler);
```

## See Also

- [Area Index](../)