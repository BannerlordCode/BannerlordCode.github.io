---
title: "MissionAgentLookHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentLookHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentLookHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentLookHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAgentLookHandler.cs`

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

**Purpose:** Gets the current value of `score`.

### GetTargetPosition
`public Vec3 GetTargetPosition()`

**Purpose:** Gets the current value of `target position`.

### GetBasicPosition
`public Vec3 GetBasicPosition()`

**Purpose:** Gets the current value of `basic position`.

### IsVisibleFor
`public bool IsVisibleFor(Agent agent)`

**Purpose:** Handles logic related to `is visible for`.

### IsRelevant
`public bool IsRelevant(Agent agent)`

**Purpose:** Handles logic related to `is relevant`.

### Reset
`public void Reset(PointOfInterest pointOfInterest, float duration)`

**Purpose:** Resets `reset` to its initial state.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionAgentLookHandler());
```

## See Also

- [Complete Class Catalog](../catalog)