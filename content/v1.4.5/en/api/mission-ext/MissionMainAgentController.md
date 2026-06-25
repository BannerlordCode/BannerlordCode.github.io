---
title: "MissionMainAgentController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentController

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentController : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionMainAgentController.cs`

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

**Purpose:** Called when the `locked agent changed delegate` event is raised.

### OnPotentialLockedAgentChangedDelegate
`public delegate void OnPotentialLockedAgentChangedDelegate(Agent newPotentialAgent)`

**Purpose:** Called when the `potential locked agent changed delegate` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### IsReady
`public override bool IsReady()`

**Purpose:** Handles logic related to `is ready`.

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** Called when the `agent deleted` event is raised.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### BreakAgentVisualsInvulnerability
`public void BreakAgentVisualsInvulnerability()`

**Purpose:** Handles logic related to `break agent visuals invulnerability`.

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

### Disable
`public void Disable()`

**Purpose:** Handles logic related to `disable`.

### Enable
`public void Enable()`

**Purpose:** Handles logic related to `enable`.

### OnWeaponUsageToggleRequested
`public void OnWeaponUsageToggleRequested()`

**Purpose:** Called when the `weapon usage toggle requested` event is raised.

### AddOverrideControlsForFrame
`public void AddOverrideControlsForFrame(OverrideMainAgentControlFlag overrideFlag)`

**Purpose:** Adds `override controls for frame` to the current collection or state.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MissionMainAgentController>();
```

## See Also

- [Complete Class Catalog](../catalog)