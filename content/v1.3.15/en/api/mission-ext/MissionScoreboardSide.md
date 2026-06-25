---
title: "MissionScoreboardSide"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardSide`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionScoreboardSide

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardSide`
**Area:** mission-ext

## Overview

`MissionScoreboardSide` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### ResetBotScores
`public void ResetBotScores()`

**Purpose:** Resets `bot scores` to its initial state.

### ChangeTeamScore
`public void ChangeTeamScore(Team team, int scoreChange)`

**Purpose:** Handles logic related to `change team score`.

### GetSideSafe
`public MissionScoreboardComponent.MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `side safe`.

### GetRoundScore
`public int GetRoundScore(BattleSideEnum side)`

**Purpose:** Gets the current value of `round score`.

### HandleServerUpdateRoundScoresMessage
`public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)`

**Purpose:** Handles the `server update round scores message` event or callback.

### HandleServerSetRoundMVP
`public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)`

**Purpose:** Handles the `server set round m v p` event or callback.

### CalculateTotalNumbers
`public void CalculateTotalNumbers()`

**Purpose:** Handles logic related to `calculate total numbers`.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### OnPlayerConnectedToServer
`public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)`

**Purpose:** Called when the `player connected to server` event is raised.

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Called when the `player disconnected from server` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**Purpose:** Called when the `assign player as sergeant of formation` event is raised.

### BotPropertiesChanged
`public void BotPropertiesChanged(BattleSideEnum side)`

**Purpose:** Handles logic related to `bot properties changed`.

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(NetworkCommunicator player)`

**Purpose:** Handles logic related to `player properties changed`.

### PlayerPropertiesChanged
`public void PlayerPropertiesChanged(MissionPeer player)`

**Purpose:** Handles logic related to `player properties changed`.

### HandleServerEventBotDataMessage
`public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)`

**Purpose:** Handles the `server event bot data message` event or callback.

### OnRoundEnding
`public void OnRoundEnding()`

**Purpose:** Called when the `round ending` event is raised.

### OnMultiplayerGameClientBehaviorInitialized
`public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator> onBotsControlledChanged)`

**Purpose:** Called when the `multiplayer game client behavior initialized` event is raised.

## Usage Example

```csharp
// First obtain a MissionScoreboardSide instance from game state, then call one of its public methods
var value = new MissionScoreboardSide();
value.AfterStart();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
