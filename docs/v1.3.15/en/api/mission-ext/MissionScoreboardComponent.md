<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionScoreboardComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## Overview

`MissionScoreboardComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MissionScoreboardComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsOneSided` | `public bool IsOneSided { get { return this._scoreboardSides == MissionScoreboardComponent.ScoreboardSides.OneSide; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get { IRoundComponent roundComponent = this._mpGameModeBase.RoundComponent; if (roundComponent == null) { return BattleSideEnum.None; }` |
| `Headers` | `public MissionScoreboardComponent.ScoreboardHeader Headers { get { return this._scoreboardData.GetScoreboardHeaders(); }` |
| `RoundWinnerList` | `public IEnumerable<BattleSideEnum> RoundWinnerList { get { return this._roundWinnerList.AsReadOnly(); }` |
| `Sides` | `public MissionScoreboardComponent.MissionScoreboardSide Sides { get { return this._sides; }` |
| `Spectators` | `public List<MissionPeer> Spectators { get { return this._spectators; }` |
| `CurrentPlayerCount` | `public int CurrentPlayerCount { get { return this._players.Count; }` |
| `Players` | `public IEnumerable<MissionPeer> Players { get { return this._players; }` |

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

### GetMatchWinnerSide
```csharp
public BattleSideEnum GetMatchWinnerSide()
```

### OnScoreHit
```csharp
public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)
```

### GetValueOf
```csharp
public string GetValueOf(MissionPeer missionPeer)
```

### GetValueOf
```csharp
public string GetValueOf(BotData botData)
```

### AddPlayer
```csharp
public void AddPlayer(MissionPeer peer)
```

### RemovePlayer
```csharp
public void RemovePlayer(MissionPeer peer)
```

### GetValuesOf
```csharp
public string GetValuesOf(MissionPeer peer)
```

### GetHeaderNames
```csharp
public string GetHeaderNames()
```

### GetHeaderIds
```csharp
public string GetHeaderIds()
```

### GetScore
```csharp
public int GetScore(MissionPeer peer)
```

## Usage Example

```csharp
// Typical usage of MissionScoreboardComponent (Component)
agent.GetComponent<MissionScoreboardComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)