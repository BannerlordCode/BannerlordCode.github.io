---
title: "HideoutCinematicController"
description: "Auto-generated class reference for HideoutCinematicController."
---
# HideoutCinematicController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutCinematicController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutCinematicController.cs`

## Overview

`HideoutCinematicController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutCinematicController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public HideoutCinematicState State { get; }` |
| `InStateTransition` | `public bool InStateTransition { get; }` |

## Key Methods

### OnInitialFadeOutFinished
`public delegate void OnInitialFadeOutFinished(ref Agent playerAgent, ref List<Agent> playerCompanions, ref Agent bossAgent, ref List<Agent> bossCompanions, ref float placementPerturbation, ref float placementAngle)`

**Purpose:** **Purpose:** Invoked when the initial fade out finished event is raised.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.OnInitialFadeOutFinished(playerAgent, playerCompanions, bossAgent, bossCompanions, placementPerturbation, placementAngle);
```

### OnHideoutCinematicFinished
`public delegate void OnHideoutCinematicFinished()`

**Purpose:** **Purpose:** Invoked when the hideout cinematic finished event is raised.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.OnHideoutCinematicFinished();
```

### HideoutCinematicAgentInfo
`public readonly struct HideoutCinematicAgentInfo(Agent agent, HideoutAgentType type, in MatrixFrame initialFrame, in MatrixFrame targetFrame)`

**Purpose:** **Purpose:** Hides the UI or element associated with out cinematic agent info.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
var result = hideoutCinematicController.HideoutCinematicAgentInfo(agent, type, initialFrame, targetFrame);
```

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**Purpose:** **Purpose:** Determines whether the this instance already holds reached target.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
var result = hideoutCinematicController.HasReachedTarget(0);
```

### StartCinematic
`public void StartCinematic(OnInitialFadeOutFinished initialFadeOutFinished, Action cinematicFinishedCallback, float transitionDuration = 0.4f, float stateDuration = 0.2f, float cinematicDuration = 8f, bool forceDismountAgents = false)`

**Purpose:** **Purpose:** Starts the cinematic flow or state machine.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.StartCinematic(initialFadeOutFinished, cinematicFinishedCallback, 0, 0, 0, false);
```

### GetBossStandingEyePosition
`public void GetBossStandingEyePosition(out Vec3 eyePosition)`

**Purpose:** **Purpose:** Reads and returns the boss standing eye position value held by the this instance.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.GetBossStandingEyePosition(eyePosition);
```

### GetPlayerStandingEyePosition
`public void GetPlayerStandingEyePosition(out Vec3 eyePosition)`

**Purpose:** **Purpose:** Reads and returns the player standing eye position value held by the this instance.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.GetPlayerStandingEyePosition(eyePosition);
```

### GetBanditsInitialFrame
`public MatrixFrame GetBanditsInitialFrame()`

**Purpose:** **Purpose:** Reads and returns the bandits initial frame value held by the this instance.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
var result = hideoutCinematicController.GetBanditsInitialFrame();
```

### GetScenePrefabParameters
`public void GetScenePrefabParameters(out float innerRadius, out float outerRadius, out float walkDistance)`

**Purpose:** **Purpose:** Reads and returns the scene prefab parameters value held by the this instance.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.GetScenePrefabParameters(innerRadius, outerRadius, walkDistance);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of HideoutCinematicController from the subsystem API first
HideoutCinematicController hideoutCinematicController = ...;
hideoutCinematicController.OnMissionTick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutCinematicController>();
```

## See Also

- [Area Index](../)