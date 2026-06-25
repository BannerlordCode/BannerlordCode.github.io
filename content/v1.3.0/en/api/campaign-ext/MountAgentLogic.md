---
title: "MountAgentLogic"
description: "Auto-generated class reference for MountAgentLogic."
---
# MountAgentLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MountAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MountAgentLogic.cs`

## Overview

`MountAgentLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MountAgentLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MountAgentLogic from the subsystem API first
MountAgentLogic mountAgentLogic = ...;
mountAgentLogic.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MountAgentLogic from the subsystem API first
MountAgentLogic mountAgentLogic = ...;
mountAgentLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MountAgentLogic>();
```

## See Also

- [Area Index](../)