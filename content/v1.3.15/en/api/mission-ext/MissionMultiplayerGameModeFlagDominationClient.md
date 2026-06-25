---
title: "MissionMultiplayerGameModeFlagDominationClient"
description: "Auto-generated class reference for MissionMultiplayerGameModeFlagDominationClient."
---
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeFlagDominationClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs`

## Overview

`MissionMultiplayerGameModeFlagDominationClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `IsGameModeUsingCasualGold` | `public override bool IsGameModeUsingCasualGold { get; }` |
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnRemoveBehavior();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.AfterStart();
```

### OnPreparationEnded
`public void OnPreparationEnded()`

**Purpose:** **Purpose:** Invoked when the preparation ended event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnPreparationEnded();
```

### GetMissionCameraLockMode
`public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**Purpose:** **Purpose:** Reads and returns the mission camera lock mode value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
var result = missionMultiplayerGameModeFlagDominationClient.GetMissionCameraLockMode(false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** **Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnClearScene();
```

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

**Purpose:** **Purpose:** Reads and returns the flag owner value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
var result = missionMultiplayerGameModeFlagDominationClient.GetFlagOwner(flag);
```

### OnTeamPowerChanged
`public void OnTeamPowerChanged(BattleSideEnum teamSide, float power)`

**Purpose:** **Purpose:** Invoked when the team power changed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnTeamPowerChanged(teamSide, 0);
```

### OnMoraleChanged
`public void OnMoraleChanged(float morale)`

**Purpose:** **Purpose:** Invoked when the morale changed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnMoraleChanged(0);
```

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** **Purpose:** Invoked when the gold amount changed for representative event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

**Purpose:** **Purpose:** Invoked when the number of flags changed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnNumberOfFlagsChanged();
```

### OnBotsControlledChanged
`public void OnBotsControlledChanged(MissionPeer missionPeer, int botAliveCount, int botTotalCount)`

**Purpose:** **Purpose:** Invoked when the bots controlled changed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnBotsControlledChanged(missionPeer, 0, 0);
```

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)`

**Purpose:** **Purpose:** Invoked when the capture point owner changed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnCapturePointOwnerChanged(flagCapturePoint, ownerTeam);
```

### OnRequestForfeitSpawn
`public void OnRequestForfeitSpawn()`

**Purpose:** **Purpose:** Invoked when the request forfeit spawn event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnRequestForfeitSpawn();
```

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

**Purpose:** **Purpose:** Reads and returns the compass targets value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
var result = missionMultiplayerGameModeFlagDominationClient.GetCompassTargets();
```

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** **Purpose:** Reads and returns the gold amount value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
var result = missionMultiplayerGameModeFlagDominationClient.GetGoldAmount();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeFlagDominationClient from the subsystem API first
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnMissionTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnBehaviorInitialize();
```

## See Also

- [Area Index](../)