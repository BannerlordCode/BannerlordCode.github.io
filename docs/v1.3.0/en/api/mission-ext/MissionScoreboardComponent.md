<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## Overview

`MissionScoreboardComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionScoreboardComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

### GetMatchWinnerSide
`public BattleSideEnum GetMatchWinnerSide()`

**Purpose:** Gets the current value of `match winner side`.

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Called when the `score hit` event is raised.

### GetValueOf
`public string GetValueOf(MissionPeer missionPeer)`

**Purpose:** Gets the current value of `value of`.

### GetValueOf
`public string GetValueOf(BotData botData)`

**Purpose:** Gets the current value of `value of`.

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**Purpose:** Adds `player` to the current collection or state.

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**Purpose:** Removes `player` from the current collection or state.

### GetValuesOf
`public string GetValuesOf(MissionPeer peer)`

**Purpose:** Gets the current value of `values of`.

### GetHeaderNames
`public string GetHeaderNames()`

**Purpose:** Gets the current value of `header names`.

### GetHeaderIds
`public string GetHeaderIds()`

**Purpose:** Gets the current value of `header ids`.

### GetScore
`public int GetScore(MissionPeer peer)`

**Purpose:** Gets the current value of `score`.

### UpdateHeader
`public void UpdateHeader(MissionScoreboardComponent.ScoreboardHeader headers)`

**Purpose:** Updates the state or data of `header`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### CalculateAndGetMVPScoreWithPeer
`public KeyValuePair<MissionPeer, int> CalculateAndGetMVPScoreWithPeer()`

**Purpose:** Handles logic related to `calculate and get m v p score with peer`.

## Usage Example

```csharp
var component = agent.GetComponent<MissionScoreboardComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)