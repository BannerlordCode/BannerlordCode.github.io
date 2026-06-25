---
title: "MissionMultiplayerDuel"
description: "Auto-generated class reference for MissionMultiplayerDuel."
---
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

**Purpose:** **Purpose:** Reads and returns the mission type value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.GetMissionType();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.AfterStart();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnBehaviorInitialize();
```

### CheckIfPlayerCanDespawn
`public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

**Purpose:** **Purpose:** Verifies whether if player can despawn holds true for the this instance.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.CheckIfPlayerCanDespawn(missionPeer);
```

### OnPlayerDespawn
`public void OnPlayerDespawn(MissionPeer missionPeer)`

**Purpose:** **Purpose:** Invoked when the player despawn event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnPlayerDespawn(missionPeer);
```

### DuelRequestReceived
`public void DuelRequestReceived(MissionPeer requesterPeer, MissionPeer requesteePeer)`

**Purpose:** **Purpose:** Executes the DuelRequestReceived logic.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.DuelRequestReceived(requesterPeer, requesteePeer);
```

### DuelRequestAccepted
`public void DuelRequestAccepted(Agent requesterAgent, Agent requesteeAgent)`

**Purpose:** **Purpose:** Executes the DuelRequestAccepted logic.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.DuelRequestAccepted(requesterAgent, requesteeAgent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### GetDuelAreaIndexIfDuelTeam
`public int GetDuelAreaIndexIfDuelTeam(Team team)`

**Purpose:** **Purpose:** Reads and returns the duel area index if duel team value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.GetDuelAreaIndexIfDuelTeam(team);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnAgentBuild(agent, banner);
```

### OnDuelPreparation
`public void OnDuelPreparation(Team duelTeam)`

**Purpose:** **Purpose:** Invoked when the duel preparation event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelPreparation(duelTeam);
```

### OnDuelStarted
`public void OnDuelStarted()`

**Purpose:** **Purpose:** Invoked when the duel started event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelStarted();
```

### OnDuelEnding
`public void OnDuelEnding()`

**Purpose:** **Purpose:** Invoked when the duel ending event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelEnding();
```

### OnDuelEnded
`public void OnDuelEnded()`

**Purpose:** **Purpose:** Invoked when the duel ended event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelEnded();
```

### OnAgentBuild
`public void OnAgentBuild(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnAgentBuild(agent);
```

### IsDuelStillValid
`public bool IsDuelStillValid(bool doNotCheckAgent = false)`

**Purpose:** **Purpose:** Determines whether the this instance is in the duel still valid state or condition.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.IsDuelStillValid(false);
```

### IsPeerInThisDuel
`public bool IsPeerInThisDuel(MissionPeer peer)`

**Purpose:** **Purpose:** Determines whether the this instance is in the peer in this duel state or condition.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
var result = missionMultiplayerDuel.IsPeerInThisDuel(peer);
```

### UpdateDuelAreaIndex
`public void UpdateDuelAreaIndex(KeyValuePair<int, TroopType> duelAreaPair)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of duel area index.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.UpdateDuelAreaIndex(keyValuePair<int, duelAreaPair);
```

### OnDuelPreparation
`public void OnDuelPreparation(Team duelingTeam)`

**Purpose:** **Purpose:** Invoked when the duel preparation event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelPreparation(duelingTeam);
```

### OnDuelEnded
`public void OnDuelEnded()`

**Purpose:** **Purpose:** Invoked when the duel ended event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelEnded();
```

### IncreaseWinCount
`public void IncreaseWinCount()`

**Purpose:** **Purpose:** Executes the IncreaseWinCount logic.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.IncreaseWinCount();
```

### SetAgents
`public void SetAgents(Agent agent)`

**Purpose:** **Purpose:** Assigns a new value to agents and updates the object's internal state.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.SetAgents(agent);
```

### OnDuelEndedDelegate
`public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer, TroopType troopType)`

**Purpose:** **Purpose:** Invoked when the duel ended delegate event is raised.

```csharp
// Obtain an instance of MissionMultiplayerDuel from the subsystem API first
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.OnDuelEndedDelegate(winnerPeer, troopType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerDuel missionMultiplayerDuel = ...;
missionMultiplayerDuel.GetMissionType();
```

## See Also

- [Area Index](../)