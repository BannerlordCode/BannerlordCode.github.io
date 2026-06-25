---
title: "MissionMultiplayerFlagDomination"
description: "Auto-generated class reference for MissionMultiplayerFlagDomination."
---
# MissionMultiplayerFlagDomination

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerFlagDomination : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs`

## Overview

`MissionMultiplayerFlagDomination` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `MoraleRounded` | `public float MoraleRounded { get; }` |
| `GameModeUsesSingleSpawning` | `public bool GameModeUsesSingleSpawning { get; }` |

## Key Methods

### UseGold
`public bool UseGold()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.UseGold();
```

### AllowCustomPlayerBanners
`public override bool AllowCustomPlayerBanners()`

**Purpose:** Permits `custom player banners` to be enabled or performed on the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.AllowCustomPlayerBanners();
```

### UseRoundController
`public override bool UseRoundController()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.UseRoundController();
```

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**Purpose:** Reads and returns the `mission type` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetMissionType();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnRemoveBehavior();
```

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** Invoked when the `peer changed team` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnPeerChangedTeam(peer, oldTeam, newTeam);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnMissionTick(0);
```

### GetTimeUntilBattleSideVictory
`public float GetTimeUntilBattleSideVictory(BattleSideEnum side)`

**Purpose:** Reads and returns the `time until battle side victory` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetTimeUntilBattleSideVictory(side);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the `clear scene` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnClearScene();
```

### CheckIfOvertime
`public override bool CheckIfOvertime()`

**Purpose:** Verifies whether `if overtime` holds true for the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.CheckIfOvertime();
```

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

**Purpose:** Verifies whether `for warmup end` holds true for the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.CheckForWarmupEnd();
```

### CheckForRoundEnd
`public override bool CheckForRoundEnd()`

**Purpose:** Verifies whether `for round end` holds true for the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.CheckForRoundEnd();
```

### UseCultureSelection
`public override bool UseCultureSelection()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.UseCultureSelection();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the `agent build` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnAgentBuild(agent, banner);
```

### ForfeitSpawning
`public void ForfeitSpawning(NetworkCommunicator peer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.ForfeitSpawning(peer);
```

### SetWinnerTeam
`public static void SetWinnerTeam(int winnerTeamNo)`

**Purpose:** Assigns a new value to `winner team` and updates the object's internal state.

```csharp
// Static call; no instance required
MissionMultiplayerFlagDomination.SetWinnerTeam(0);
```

### GetNumberOfAttackersAroundFlag
`public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)`

**Purpose:** Reads and returns the `number of attackers around flag` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetNumberOfAttackersAroundFlag(capturePoint);
```

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

**Purpose:** Reads and returns the `flag owner team` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetFlagOwnerTeam(flag);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### GetTroopNumberMultiplierForMissingPlayer
`public override float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

**Purpose:** Reads and returns the `troop number multiplier for missing player` value held by the current object.

```csharp
// Obtain an instance of MissionMultiplayerFlagDomination from the subsystem API first
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetTroopNumberMultiplierForMissingPlayer(spawningPeer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.UseGold();
```

## See Also

- [Area Index](../)