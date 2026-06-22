<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleServer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleServer

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BattleServer` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)