<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheckpointMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CheckpointMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CheckpointMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/CheckpointMissionLogic.cs`

## Overview

`CheckpointMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `CheckpointMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Called when the `rendering started` event is raised.

### OnEarlyAgentRemoved
`public override void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `early agent removed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnCheckpointUsed
`public void OnCheckpointUsed(int checkpointUniqueId)`

**Purpose:** Called when the `checkpoint used` event is raised.

### RegisterAgent
`public void RegisterAgent(Agent agent)`

**Purpose:** Handles logic related to `register agent`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CheckpointMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)