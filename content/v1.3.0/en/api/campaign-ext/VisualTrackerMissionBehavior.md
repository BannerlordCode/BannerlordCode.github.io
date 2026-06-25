---
title: "VisualTrackerMissionBehavior"
description: "Auto-generated class reference for VisualTrackerMissionBehavior."
---
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

**Purpose:** **Purpose:** Invoked when the agent created event is raised.

```csharp
// Obtain an instance of VisualTrackerMissionBehavior from the subsystem API first
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnAgentCreated(agent);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of VisualTrackerMissionBehavior from the subsystem API first
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of VisualTrackerMissionBehavior from the subsystem API first
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnMissionTick(0);
```

### RegisterLocalOnlyObject
`public void RegisterLocalOnlyObject(ITrackableBase obj)`

**Purpose:** **Purpose:** Registers local only object with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of VisualTrackerMissionBehavior from the subsystem API first
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.RegisterLocalOnlyObject(obj);
```

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

**Purpose:** **Purpose:** Reads and returns the compass targets value held by the this instance.

```csharp
// Obtain an instance of VisualTrackerMissionBehavior from the subsystem API first
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
var result = visualTrackerMissionBehavior.GetCompassTargets();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of VisualTrackerMissionBehavior from the subsystem API first
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** **Purpose:** Invoked when the agent deleted event is raised.

```csharp
// Obtain an instance of VisualTrackerMissionBehavior from the subsystem API first
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnAgentDeleted(affectedAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnAgentCreated(agent);
```

## See Also

- [Area Index](../)