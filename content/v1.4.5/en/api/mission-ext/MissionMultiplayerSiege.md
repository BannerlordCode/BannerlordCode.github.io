---
title: "MissionMultiplayerSiege"
description: "Auto-generated class reference for MissionMultiplayerSiege."
---
# MissionMultiplayerSiege

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiege : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs`

## Overview

`MissionMultiplayerSiege` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Contribution` | `public float Contribution { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |

## Key Methods

### IncreaseAmount
`public void IncreaseAmount(float deltaContribution)`

**Purpose:** **Purpose:** Executes the IncreaseAmount logic.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.IncreaseAmount(0);
```

### RegisterObjective
`public bool RegisterObjective(GameEntity entity)`

**Purpose:** **Purpose:** Registers objective with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.RegisterObjective(entity);
```

### AddContributionForObjective
`public void AddContributionForObjective(GameEntity objectiveEntity, MissionPeer contributorPeer, float contribution)`

**Purpose:** **Purpose:** Adds contribution for objective to the current collection or state.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.AddContributionForObjective(objectiveEntity, contributorPeer, 0);
```

### GetAllContributorsForSideAndClear
`public List<KeyValuePair<MissionPeer, float>> GetAllContributorsForSideAndClear(GameEntity objectiveEntity, BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the all contributors for side and clear value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.GetAllContributorsForSideAndClear(objectiveEntity, side);
```

### OnDestructableComponentDestroyedDelegate
`public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer contributors)`

**Purpose:** **Purpose:** Invoked when the destructable component destroyed delegate event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnDestructableComponentDestroyedDelegate(destructableComponent, attackerScriptComponentBehaviour, contributors);
```

### OnObjectiveGoldGainedDelegate
`public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain)`

**Purpose:** **Purpose:** Invoked when the objective gold gained delegate event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnObjectiveGoldGainedDelegate(peer, 0);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnBehaviorInitialize();
```

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**Purpose:** **Purpose:** Reads and returns the mission type value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.GetMissionType();
```

### UseRoundController
`public override bool UseRoundController()`

**Purpose:** **Purpose:** Executes the UseRoundController logic.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.UseRoundController();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnMissionTick(0);
```

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

**Purpose:** **Purpose:** Verifies whether for match end holds true for the this instance.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.CheckForMatchEnd();
```

### GetWinnerTeam
`public override Team GetWinnerTeam()`

**Purpose:** **Purpose:** Reads and returns the winner team value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.GetWinnerTeam();
```

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

**Purpose:** **Purpose:** Reads and returns the flag owner team value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.GetFlagOwnerTeam(flag);
```

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

**Purpose:** **Purpose:** Verifies whether for warmup end holds true for the this instance.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.CheckForWarmupEnd();
```

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** **Purpose:** Invoked when the peer changed team event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnPeerChangedTeam(peer, oldTeam, newTeam);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnRemoveBehavior();
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** **Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionMultiplayerSiege from the subsystem API first
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnClearScene();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.IncreaseAmount(0);
```

## See Also

- [Area Index](../)