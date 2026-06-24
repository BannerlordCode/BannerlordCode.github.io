<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerDuel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerDuel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerDuel : MissionMultiplayerGameModeBase`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs`

## Overview

`MissionMultiplayerDuel` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override MultiplayerGameType GetMissionType()`

**Purpose:** Gets the current value of `mission type`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### CheckIfPlayerCanDespawn
`public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

**Purpose:** Handles logic related to `check if player can despawn`.

### OnPlayerDespawn
`public void OnPlayerDespawn(MissionPeer missionPeer)`

**Purpose:** Called when the `player despawn` event is raised.

### DuelRequestReceived
`public void DuelRequestReceived(MissionPeer requesterPeer, MissionPeer requesteePeer)`

**Purpose:** Handles logic related to `duel request received`.

### DuelRequestAccepted
`public void DuelRequestAccepted(Agent requesterAgent, Agent requesteeAgent)`

**Purpose:** Handles logic related to `duel request accepted`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### GetDuelAreaIndexIfDuelTeam
`public int GetDuelAreaIndexIfDuelTeam(Team team)`

**Purpose:** Gets the current value of `duel area index if duel team`.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnDuelPreparation
`public void OnDuelPreparation(Team duelTeam)`

**Purpose:** Called when the `duel preparation` event is raised.

### OnDuelStarted
`public void OnDuelStarted()`

**Purpose:** Called when the `duel started` event is raised.

### OnDuelEnding
`public void OnDuelEnding()`

**Purpose:** Called when the `duel ending` event is raised.

### OnDuelEnded
`public void OnDuelEnded()`

**Purpose:** Called when the `duel ended` event is raised.

### OnAgentBuild
`public void OnAgentBuild(Agent agent)`

**Purpose:** Called when the `agent build` event is raised.

### IsDuelStillValid
`public bool IsDuelStillValid(bool doNotCheckAgent = false)`

**Purpose:** Handles logic related to `is duel still valid`.

### IsPeerInThisDuel
`public bool IsPeerInThisDuel(MissionPeer peer)`

**Purpose:** Handles logic related to `is peer in this duel`.

### UpdateDuelAreaIndex
`public void UpdateDuelAreaIndex(KeyValuePair<int, TroopType> duelAreaPair)`

**Purpose:** Updates the state or data of `duel area index`.

### OnDuelPreparation
`public void OnDuelPreparation(Team duelingTeam)`

**Purpose:** Called when the `duel preparation` event is raised.

### OnDuelEnded
`public void OnDuelEnded()`

**Purpose:** Called when the `duel ended` event is raised.

### IncreaseWinCount
`public void IncreaseWinCount()`

**Purpose:** Handles logic related to `increase win count`.

### SetAgents
`public void SetAgents(Agent agent)`

**Purpose:** Sets the value or state of `agents`.

### OnDuelEndedDelegate
`public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer, TroopType troopType)`

**Purpose:** Called when the `duel ended delegate` event is raised.

## Usage Example

```csharp
var value = new MissionMultiplayerDuel();
value.GetMissionType();
```

## See Also

- [Complete Class Catalog](../catalog)