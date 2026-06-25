---
title: "MissionAgentLookHandler"
description: "Auto-generated class reference for MissionAgentLookHandler."
---
# MissionAgentLookHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentLookHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAgentLookHandler.cs`

## Overview

`MissionAgentLookHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentLookHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### GetScore
`public float GetScore(Agent agent)`

**Purpose:** Reads and returns the `score` value held by the current object.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetScore(agent);
```

### GetTargetPosition
`public Vec3 GetTargetPosition()`

**Purpose:** Reads and returns the `target position` value held by the current object.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetTargetPosition();
```

### GetBasicPosition
`public Vec3 GetBasicPosition()`

**Purpose:** Reads and returns the `basic position` value held by the current object.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetBasicPosition();
```

### IsVisibleFor
`public bool IsVisibleFor(Agent agent)`

**Purpose:** Determines whether the current object is in the `visible for` state or condition.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.IsVisibleFor(agent);
```

### IsRelevant
`public bool IsRelevant(Agent agent)`

**Purpose:** Determines whether the current object is in the `relevant` state or condition.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.IsRelevant(agent);
```

### Reset
`public void Reset(PointOfInterest pointOfInterest, float duration)`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.Reset(pointOfInterest, 0);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnMissionTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the `agent build` event is raised.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionAgentLookHandler from the subsystem API first
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentLookHandler>();
```

## See Also

- [Area Index](../)