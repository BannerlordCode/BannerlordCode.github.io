<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutAmbushBossFightCinematicController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutAmbushBossFightCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushBossFightCinematicController.cs`

## Overview

`HideoutAmbushBossFightCinematicController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutAmbushBossFightCinematicController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public HideoutCinematicState State { get; }` |
| `InStateTransition` | `public bool InStateTransition { get; }` |

## Key Methods

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent> playerCompanions, ref Agent bossAgent, ref List<Agent> bossCompanions, ref float placementPerturbation, ref float placementAngle)`

**Purpose:** Called when the `initial fade out finished` event is raised.

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

**Purpose:** Called when the `hideout cinematic finished` event is raised.

### HideoutCinematicAgentInfo
`public readonly struct HideoutCinematicAgentInfo(Agent agent, HideoutAgentType type, in MatrixFrame initialFrame, in MatrixFrame targetFrame)`

**Purpose:** Handles logic related to `hideout cinematic agent info`.

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**Purpose:** Checks whether the current object has/contains `reached target`.

### StartCinematic
`public void StartCinematic(OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)`

**Purpose:** Handles logic related to `start cinematic`.

### GetBossStandingEyePosition
`public void GetBossStandingEyePosition(out Vec3 eyePosition)`

**Purpose:** Gets the current value of `boss standing eye position`.

### GetPlayerStandingEyePosition
`public void GetPlayerStandingEyePosition(out Vec3 eyePosition)`

**Purpose:** Gets the current value of `player standing eye position`.

### GetBanditsInitialFrame
`public MatrixFrame GetBanditsInitialFrame()`

**Purpose:** Gets the current value of `bandits initial frame`.

### GetScenePrefabParameters
`public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)`

**Purpose:** Gets the current value of `scene prefab parameters`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, MatrixFrame initialPlayerFrame, MatrixFrame targetPlayerFrame, int agentCount, float agentOffsetAngle)`

**Purpose:** Gets the current value of `ally frames`.

### GetSpineTroopCount
`public int GetSpineTroopCount(int totalTroopCount)`

**Purpose:** Gets the current value of `spine troop count`.

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, MatrixFrame initialBossFrame, MatrixFrame targetBossFrame, int agentCount, float agentOffsetAngle)`

**Purpose:** Gets the current value of `bandit frames`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutAmbushBossFightCinematicController>();
```

## See Also

- [Complete Class Catalog](../catalog)