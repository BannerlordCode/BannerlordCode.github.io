---
title: "HideoutAmbushBossFightCinematicController"
description: "Auto-generated class reference for HideoutAmbushBossFightCinematicController."
---
# HideoutAmbushBossFightCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`

## Overview

`HideoutAmbushBossFightCinematicController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutAmbushBossFightCinematicController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public HideoutAmbushBossFightCinematicController.HideoutCinematicState State { get; }` |
| `InStateTransition` | `public bool InStateTransition { get; }` |
| `IsCinematicActive` | `public bool IsCinematicActive { get; }` |
| `CinematicDuration` | `public float CinematicDuration { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## Key Methods

### StartCinematic
`public void StartCinematic(HideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)`

**Purpose:** Starts the cinematic flow or state machine.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.StartCinematic(initialFadeOutFinished, cinematicFinishedCallback, 0, 0, 0, false);
```

### GetBossStandingEyePosition
`public void GetBossStandingEyePosition(out Vec3 eyePosition)`

**Purpose:** Reads and returns the boss standing eye position value held by the this instance.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetBossStandingEyePosition(eyePosition);
```

### GetPlayerStandingEyePosition
`public void GetPlayerStandingEyePosition(out Vec3 eyePosition)`

**Purpose:** Reads and returns the player standing eye position value held by the this instance.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetPlayerStandingEyePosition(eyePosition);
```

### GetBanditsInitialFrame
`public MatrixFrame GetBanditsInitialFrame()`

**Purpose:** Reads and returns the bandits initial frame value held by the this instance.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
var result = hideoutAmbushBossFightCinematicController.GetBanditsInitialFrame();
```

### GetScenePrefabParameters
`public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)`

**Purpose:** Reads and returns the scene prefab parameters value held by the this instance.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetScenePrefabParameters(innerRadius, outerRadius, walkDistance);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.OnMissionTick(0);
```

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, MatrixFrame initialPlayerFrame, MatrixFrame targetPlayerFrame, int agentCount, float agentOffsetAngle)`

**Purpose:** Reads and returns the ally frames value held by the this instance.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetAllyFrames(initialFrames, targetFrames, initialPlayerFrame, targetPlayerFrame, 0, 0);
```

### GetSpineTroopCount
`public int GetSpineTroopCount(int totalTroopCount)`

**Purpose:** Reads and returns the spine troop count value held by the this instance.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
var result = hideoutAmbushBossFightCinematicController.GetSpineTroopCount(0);
```

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, MatrixFrame initialBossFrame, MatrixFrame targetBossFrame, int agentCount, float agentOffsetAngle)`

**Purpose:** Reads and returns the bandit frames value held by the this instance.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.GetBanditFrames(initialFrames, targetFrames, initialBossFrame, targetBossFrame, 0, 0);
```

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent> playerCompanions, ref Agent bossAgent, ref List<Agent> bossCompanions, ref float placementPerturbation, ref float placementAngle)`

**Purpose:** Invoked when the initial fade out finished event is raised.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished(playerAgent, playerCompanions, bossAgent, bossCompanions, placementPerturbation, placementAngle);
```

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

**Purpose:** Invoked when the hideout cinematic finished event is raised.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
hideoutAmbushBossFightCinematicController.OnHideoutCinematicFinished();
```

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**Purpose:** Determines whether the this instance already holds reached target.

```csharp
// Obtain an instance of HideoutAmbushBossFightCinematicController from the subsystem API first
HideoutAmbushBossFightCinematicController hideoutAmbushBossFightCinematicController = ...;
var result = hideoutAmbushBossFightCinematicController.HasReachedTarget(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutAmbushBossFightCinematicController>();
```

## See Also

- [Area Index](../)