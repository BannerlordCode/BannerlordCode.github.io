<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerTeamDeathmatch`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `mission type`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** Called when the `peer changed team` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

**Purpose:** Handles logic related to `check for match end`.

### GetWinnerTeam
`public override Team GetWinnerTeam()`

**Purpose:** Gets the current value of `winner team`.

## Usage Example

```csharp
var value = new MissionMultiplayerTeamDeathmatch();
value.GetMissionType();
```

## See Also

- [Complete Class Catalog](../catalog)