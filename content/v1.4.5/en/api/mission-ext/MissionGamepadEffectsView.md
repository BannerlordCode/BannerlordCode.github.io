---
title: "MissionGamepadEffectsView"
description: "Auto-generated class reference for MissionGamepadEffectsView."
---
# MissionGamepadEffectsView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGamepadEffectsView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionGamepadEffectsView.cs`

## Overview

`MissionGamepadEffectsView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGamepadEffectsView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**Purpose:** Invoked when the `mission state activated` event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnMissionStateActivated();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Invoked when the `mission state deactivated` event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnMissionStateDeactivated();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnPreMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the `agent hit` event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGamepadEffectsView view = ...;
```

## See Also

- [Area Index](../)