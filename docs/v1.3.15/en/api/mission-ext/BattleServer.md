<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleServer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleServer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BattleServer` is a class in the `TaleWorlds.MountAndBlade.Diamond` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void Initialize(IBattleServerSessionHandler handler)
```

### SetBadgeComponent

```csharp
public void SetBadgeComponent(IBadgeComponent badgeComponent)
```

### StartServer

```csharp
public void StartServer()
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

### BeginEndMission

```csharp
public void BeginEndMission()
```

### EndMission

```csharp
public void EndMission(BattleResult battleResult, GameLog gameLogs, int gameTime, Dictionary<int, int> teamScores, Dictionary<PlayerId, int> playerScores)
```

### BattleCancelledForPlayerLeaving

```csharp
public void BattleCancelledForPlayerLeaving(PlayerId leaverID)
```

### BattleStarted

```csharp
public void BattleStarted(BattleResult battleResult)
```

### UpdateBattleStats

```csharp
public void UpdateBattleStats(BattleResult battleResult, Dictionary<int, int> teamScores)
```

### DoNotAcceptNewPlayers

```csharp
public void DoNotAcceptNewPlayers()
```

### OnWarmupEnded

```csharp
public void OnWarmupEnded()
```

### OnPlayerSpawned

```csharp
public void OnPlayerSpawned(PlayerId playerId)
```

### GetPeer

```csharp
public BattlePeer GetPeer(string name)
```

### GetPeer

```csharp
public BattlePeer GetPeer(PlayerId playerId)
```

### GetPlayerParty

```csharp
public Guid GetPlayerParty(PlayerId playerId)
```

### HandlePlayerDisconnect

```csharp
public void HandlePlayerDisconnect(PlayerId playerId, DisconnectType disconnectType, BattleResult battleResult)
```

### InformGameServerReady

```csharp
public void InformGameServerReady()
```

### OnFriendlyHit

```csharp
public void OnFriendlyHit(int round, PlayerId hitter, PlayerId victim, float damage)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)