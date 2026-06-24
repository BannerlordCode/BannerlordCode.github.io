<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentMoraleInteractionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentMoraleInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentMoraleInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic/AgentMoraleInteractionLogic.cs`

## Overview

`AgentMoraleInteractionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AgentMoraleInteractionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** Called when the `agent fleeing` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new AgentMoraleInteractionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)