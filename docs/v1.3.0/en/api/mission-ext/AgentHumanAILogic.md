<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentHumanAILogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentHumanAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## Overview

`AgentHumanAILogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AgentHumanAILogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** Called when the `agent created` event is raised.

### OnAgentMount
`public override void OnAgentMount(Agent agent)`

**Purpose:** Called when the `agent mount` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new AgentHumanAILogic());
```

## See Also

- [Complete Class Catalog](../catalog)