---
title: "MissionMultiplayerTeamDeathmatch"
description: "Auto-generated class reference for MissionMultiplayerTeamDeathmatch."
---
# MissionMultiplayerTeamDeathmatch

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerTeamDeathmatch : MissionMultiplayerGameModeBase`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatch.cs`

## Overview

`MissionMultiplayerTeamDeathmatch` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |

## Key Methods

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**Purpose:** Reads and returns the `mission type` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatch from the subsystem API first
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
var result = missionMultiplayerTeamDeathmatch.GetMissionType();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatch from the subsystem API first
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatch from the subsystem API first
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.AfterStart();
```

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** Invoked when the `peer changed team` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatch from the subsystem API first
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.OnPeerChangedTeam(peer, oldTeam, newTeam);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatch from the subsystem API first
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

**Purpose:** Verifies whether `for match end` holds true for the current object.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatch from the subsystem API first
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
var result = missionMultiplayerTeamDeathmatch.CheckForMatchEnd();
```

### GetWinnerTeam
`public override Team GetWinnerTeam()`

**Purpose:** Reads and returns the `winner team` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerTeamDeathmatch from the subsystem API first
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
var result = missionMultiplayerTeamDeathmatch.GetWinnerTeam();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.GetMissionType();
```

## See Also

- [Area Index](../)