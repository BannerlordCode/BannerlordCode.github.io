---
title: "MissionMultiplayerSiege"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerSiege`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerSiege

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiege : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs`

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

**Purpose:** Handles logic related to `increase amount`.

### RegisterObjective
`public bool RegisterObjective(GameEntity entity)`

**Purpose:** Handles logic related to `register objective`.

### AddContributionForObjective
`public void AddContributionForObjective(GameEntity objectiveEntity, MissionPeer contributorPeer, float contribution)`

**Purpose:** Adds `contribution for objective` to the current collection or state.

### GetAllContributorsForSideAndClear
`public List<KeyValuePair<MissionPeer, float>> GetAllContributorsForSideAndClear(GameEntity objectiveEntity, BattleSideEnum side)`

**Purpose:** Gets the current value of `all contributors for side and clear`.

### OnDestructableComponentDestroyedDelegate
`public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer contributors)`

**Purpose:** Called when the `destructable component destroyed delegate` event is raised.

### OnObjectiveGoldGainedDelegate
`public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain)`

**Purpose:** Called when the `objective gold gained delegate` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**Purpose:** Gets the current value of `mission type`.

### UseRoundController
`public override bool UseRoundController()`

**Purpose:** Handles logic related to `use round controller`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

**Purpose:** Handles logic related to `check for match end`.

### GetWinnerTeam
`public override Team GetWinnerTeam()`

**Purpose:** Gets the current value of `winner team`.

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

**Purpose:** Gets the current value of `flag owner team`.

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

**Purpose:** Handles logic related to `check for warmup end`.

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** Called when the `peer changed team` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

## Usage Example

```csharp
var value = new MissionMultiplayerSiege();
value.IncreaseAmount(0);
```

## See Also

- [Complete Class Catalog](../catalog)