<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutCinematicController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutCinematicController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutCinematicController.cs`

## Overview

`HideoutCinematicController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutCinematicController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public HideoutCinematicController.HideoutCinematicState State { get; }` |
| `InStateTransition` | `public bool InStateTransition { get; }` |
| `IsCinematicActive` | `public bool IsCinematicActive { get; }` |
| `CinematicDuration` | `public float CinematicDuration { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## Key Methods

### StartCinematic
`public void StartCinematic(HideoutCinematicController.OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)`

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

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent> playerCompanions, ref Agent bossAgent, ref List<Agent> bossCompanions, ref float placementPerturbation, ref float placementAngle)`

**Purpose:** Called when the `initial fade out finished` event is raised.

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

**Purpose:** Called when the `hideout cinematic finished` event is raised.

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**Purpose:** Checks whether the current object has/contains `reached target`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutCinematicController>();
```

## See Also

- [Complete Class Catalog](../catalog)