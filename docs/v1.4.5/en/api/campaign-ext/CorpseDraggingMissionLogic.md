<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CorpseDraggingMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CorpseDraggingMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CorpseDraggingMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CorpseDraggingMissionLogic.cs`

## Overview

`CorpseDraggingMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `CorpseDraggingMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnFixedMissionTick
`public override void OnFixedMissionTick(float fixedDt)`

**Purpose:** Called when the `fixed mission tick` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

### OnCollectPlayerEventControlFlags
`public EventControlFlag OnCollectPlayerEventControlFlags()`

**Purpose:** Called when the `collect player event control flags` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CorpseDraggingMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)