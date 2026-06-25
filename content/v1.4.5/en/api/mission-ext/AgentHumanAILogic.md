---
title: "AgentHumanAILogic"
description: "Auto-generated class reference for AgentHumanAILogic."
---
# AgentHumanAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## Overview

`AgentHumanAILogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AgentHumanAILogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** Invoked when the agent created event is raised.

```csharp
// Obtain an instance of AgentHumanAILogic from the subsystem API first
AgentHumanAILogic agentHumanAILogic = ...;
agentHumanAILogic.OnAgentCreated(agent);
```

### OnAgentMount
`public override void OnAgentMount(Agent agent)`

**Purpose:** Invoked when the agent mount event is raised.

```csharp
// Obtain an instance of AgentHumanAILogic from the subsystem API first
AgentHumanAILogic agentHumanAILogic = ...;
agentHumanAILogic.OnAgentMount(agent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentHumanAILogic>();
```

## See Also

- [Area Index](../)