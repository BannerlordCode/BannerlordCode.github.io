---
title: "AgentCommonAILogic"
description: "Auto-generated class reference for AgentCommonAILogic."
---
# AgentCommonAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentCommonAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentCommonAILogic.cs`

## Overview

`AgentCommonAILogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AgentCommonAILogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent created event is raised.

```csharp
// Obtain an instance of AgentCommonAILogic from the subsystem API first
AgentCommonAILogic agentCommonAILogic = ...;
agentCommonAILogic.OnAgentCreated(agent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentCommonAILogic>();
```

## See Also

- [Area Index](../)