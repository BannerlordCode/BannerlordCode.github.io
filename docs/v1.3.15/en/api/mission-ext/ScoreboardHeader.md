<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardHeader`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardHeader

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ScoreboardHeader` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsOneSided` | `public bool IsOneSided { get; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get; }` |
| `Headers` | `public MissionScoreboardComponent.ScoreboardHeader Headers { get; }` |
| `RoundWinnerList` | `public IEnumerable<BattleSideEnum> RoundWinnerList { get; }` |
| `Sides` | `public MissionScoreboardComponent.MissionScoreboardSide Sides { get; }` |
| `Spectators` | `public List<MissionPeer> Spectators { get; }` |
| `CurrentPlayerCount` | `public int CurrentPlayerCount { get; }` |
| `Players` | `public IEnumerable<MissionPeer> Players { get; }` |


## Key Methods

### AfterStart

```csharp
public override void AfterStart()
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### ResetBotScores

```csharp
public void ResetBotScores()
```

### ChangeTeamScore

```csharp
public void ChangeTeamScore(Team team, int scoreChange)
```

### GetSideSafe

```csharp
public MissionScoreboardComponent.MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)
```

### GetRoundScore

```csharp
public int GetRoundScore(BattleSideEnum side)
```

### HandleServerUpdateRoundScoresMessage

```csharp
public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)
```

### HandleServerSetRoundMVP

```csharp
public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)
```

### CalculateTotalNumbers

```csharp
public void CalculateTotalNumbers()
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### OnPlayerConnectedToServer

```csharp
public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)
```

### OnPlayerDisconnectedFromServer

```csharp
public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)
```

### OnAgentBuild

```csharp
public override void OnAgentBuild(Agent agent, Banner banner)
```

### OnAssignPlayerAsSergeantOfFormation

```csharp
public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)
```

### BotPropertiesChanged

```csharp
public void BotPropertiesChanged(BattleSideEnum side)
```

### PlayerPropertiesChanged

```csharp
public void PlayerPropertiesChanged(NetworkCommunicator player)
```

### PlayerPropertiesChanged

```csharp
public void PlayerPropertiesChanged(MissionPeer player)
```

### HandleServerEventBotDataMessage

```csharp
public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)
```

### OnRoundEnding

```csharp
public void OnRoundEnding()
```

### OnMultiplayerGameClientBehaviorInitialized

```csharp
public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator> onBotsControlledChanged)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)