---
title: "VisualTrackerMissionBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualTrackerMissionBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualTrackerMissionBehavior

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class VisualTrackerMissionBehavior : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/VisualTrackerMissionBehavior.cs`

## Overview

`VisualTrackerMissionBehavior` lives in `SandBox.Missions.MissionLogics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** Called when the `agent created` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### RegisterLocalOnlyObject
`public void RegisterLocalOnlyObject(ITrackableBase obj)`

**Purpose:** Handles logic related to `register local only object`.

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

**Purpose:** Gets the current value of `compass targets`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** Called when the `agent deleted` event is raised.

## Usage Example

```csharp
var value = new VisualTrackerMissionBehavior();
value.OnAgentCreated(agent);
```

## See Also

- [Complete Class Catalog](../catalog)