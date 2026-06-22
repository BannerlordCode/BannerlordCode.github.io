<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerDuel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerDuel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMultiplayerDuel` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)