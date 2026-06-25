---
title: "AgentMoraleInteractionLogic"
description: "Auto-generated class reference for AgentMoraleInteractionLogic."
---
# AgentMoraleInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentMoraleInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs`

## Overview

`AgentMoraleInteractionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AgentMoraleInteractionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AgentMoraleInteractionLogic from the subsystem API first
AgentMoraleInteractionLogic agentMoraleInteractionLogic = ...;
agentMoraleInteractionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** **Purpose:** Invoked when the agent fleeing event is raised.

```csharp
// Obtain an instance of AgentMoraleInteractionLogic from the subsystem API first
AgentMoraleInteractionLogic agentMoraleInteractionLogic = ...;
agentMoraleInteractionLogic.OnAgentFleeing(affectedAgent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentMoraleInteractionLogic>();
```

## See Also

- [Area Index](../)