---
title: "MissionAgentLookHandler"
description: "Auto-generated class reference for MissionAgentLookHandler."
---
# MissionAgentLookHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentLookHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAgentLookHandler.cs`

## Overview

`MissionAgentLookHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentLookHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnMissionTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### GetScore
`public float GetScore(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the score value held by the this instance.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetScore(agent);
```

### GetTargetPosition
`public Vec3 GetTargetPosition()`

**Purpose:** **Purpose:** Reads and returns the target position value held by the this instance.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetTargetPosition();
```

### GetBasicPosition
`public Vec3 GetBasicPosition()`

**Purpose:** **Purpose:** Reads and returns the basic position value held by the this instance.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetBasicPosition();
```

### IsVisibleFor
`public bool IsVisibleFor(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the visible for state or condition.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.IsVisibleFor(agent);
```

### IsRelevant
`public bool IsRelevant(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the relevant state or condition.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.IsRelevant(agent);
```

### Reset
`public void Reset(MissionAgentLookHandler.PointOfInterest pointOfInterest, float duration)`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.Reset(pointOfInterest, 0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentLookHandler>();
```

## See Also

- [Area Index](../)