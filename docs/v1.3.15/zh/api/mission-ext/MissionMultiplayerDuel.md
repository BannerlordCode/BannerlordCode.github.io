<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerDuel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerDuel

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMultiplayerDuel` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `RequesterPeer` | `public MissionPeer RequesterPeer { get; }` |
| `RequesteePeer` | `public MissionPeer RequesteePeer { get; }` |
| `DuelAreaIndex` | `public int DuelAreaIndex { get; }` |
| `DuelAreaTroopType` | `public TroopType DuelAreaTroopType { get; }` |
| `Timer` | `public MissionTime Timer { get; }` |
| `DuelingTeam` | `public Team DuelingTeam { get; }` |
| `Started` | `public bool Started { get; }` |
| `ChallengeEnded` | `public bool ChallengeEnded { get; }` |
| `ChallengeWinnerPeer` | `public MissionPeer ChallengeWinnerPeer { get; }` |
| `ChallengeLoserPeer` | `public MissionPeer ChallengeLoserPeer { get; }` |
| `DuelingAgent` | `public Agent DuelingAgent { get; }` |
| `MountAgent` | `public Agent MountAgent { get; }` |
| `KillCountInDuel` | `public int KillCountInDuel { get; }` |


## 主要方法

### GetMissionType

```csharp
public override MultiplayerGameType GetMissionType()
```

### AfterStart

```csharp
public override void AfterStart()
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### CheckIfPlayerCanDespawn

```csharp
public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)
```

### OnPlayerDespawn

```csharp
public void OnPlayerDespawn(MissionPeer missionPeer)
```

### DuelRequestReceived

```csharp
public void DuelRequestReceived(MissionPeer requesterPeer, MissionPeer requesteePeer)
```

### DuelRequestAccepted

```csharp
public void DuelRequestAccepted(Agent requesterAgent, Agent requesteeAgent)
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### GetDuelAreaIndexIfDuelTeam

```csharp
public int GetDuelAreaIndexIfDuelTeam(Team team)
```

### OnAgentBuild

```csharp
public override void OnAgentBuild(Agent agent, Banner banner)
```

### OnDuelPreparation

```csharp
public void OnDuelPreparation(Team duelTeam)
```

### OnDuelStarted

```csharp
public void OnDuelStarted()
```

### OnDuelEnding

```csharp
public void OnDuelEnding()
```

### OnDuelEnded

```csharp
public void OnDuelEnded()
```

### OnAgentBuild

```csharp
public void OnAgentBuild(Agent agent)
```

### IsDuelStillValid

```csharp
public bool IsDuelStillValid(bool doNotCheckAgent = false)
```

### IsPeerInThisDuel

```csharp
public bool IsPeerInThisDuel(MissionPeer peer)
```

### UpdateDuelAreaIndex

```csharp
public void UpdateDuelAreaIndex(KeyValuePair<int, TroopType> duelAreaPair)
```

### OnDuelPreparation

```csharp
public void OnDuelPreparation(Team duelingTeam)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)