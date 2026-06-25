---
title: "MissionMainAgentController"
description: "Auto-generated class reference for MissionMainAgentController."
---
# MissionMainAgentController

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentController : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionMainAgentController.cs`

## Overview

`MissionMainAgentController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `MissionMainAgentController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `CustomLookDir` | `public Vec3 CustomLookDir { get; set; }` |
| `IsPlayerAiming` | `public bool IsPlayerAiming { get; }` |
| `LockedAgent` | `public Agent LockedAgent { get; }` |
| `PotentialLockTargetAgent` | `public Agent PotentialLockTargetAgent { get; }` |

## Key Methods

### OnLockedAgentChangedDelegate
`public delegate void OnLockedAgentChangedDelegate(Agent newAgent)`

**Purpose:** Invoked when the `locked agent changed delegate` event is raised.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnLockedAgentChangedDelegate(newAgent);
```

### OnPotentialLockedAgentChangedDelegate
`public delegate void OnPotentialLockedAgentChangedDelegate(Agent newPotentialAgent)`

**Purpose:** Invoked when the `potential locked agent changed delegate` event is raised.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnPotentialLockedAgentChangedDelegate(newPotentialAgent);
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.EarlyStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnMissionScreenFinalize();
```

### IsReady
`public override bool IsReady()`

**Purpose:** Determines whether the current object is in the `ready` state or condition.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
var result = missionMainAgentController.IsReady();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnPreMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** Invoked when the `agent deleted` event is raised.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnAgentDeleted(affectedAgent);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the `clear scene` event is raised.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnClearScene();
```

### BreakAgentVisualsInvulnerability
`public void BreakAgentVisualsInvulnerability()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.BreakAgentVisualsInvulnerability();
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Determines whether the current object is in the `there agent action` state or condition.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
var result = missionMainAgentController.IsThereAgentAction(userAgent, otherAgent);
```

### Disable
`public void Disable()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.Disable();
```

### Enable
`public void Enable()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.Enable();
```

### OnWeaponUsageToggleRequested
`public void OnWeaponUsageToggleRequested()`

**Purpose:** Invoked when the `weapon usage toggle requested` event is raised.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnWeaponUsageToggleRequested();
```

### AddOverrideControlsForFrame
`public void AddOverrideControlsForFrame(OverrideMainAgentControlFlag overrideFlag)`

**Purpose:** Adds `override controls for frame` to the current collection or state.

```csharp
// Obtain an instance of MissionMainAgentController from the subsystem API first
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.AddOverrideControlsForFrame(overrideFlag);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MissionMainAgentController>();
```

## See Also

- [Area Index](../)