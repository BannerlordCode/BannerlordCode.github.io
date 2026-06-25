---
title: "ArenaAgentStateDeciderLogic"
description: "Auto-generated class reference for ArenaAgentStateDeciderLogic."
---
# ArenaAgentStateDeciderLogic

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaAgentStateDeciderLogic : MissionLogic, IAgentStateDecider, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Arena/ArenaAgentStateDeciderLogic.cs`

## Overview

`ArenaAgentStateDeciderLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ArenaAgentStateDeciderLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgentState
`public AgentState GetAgentState(Agent effectedAgent, float deathProbability, out bool usedSurgery)`

**Purpose:** Reads and returns the `agent state` value held by the current object.

```csharp
// Obtain an instance of ArenaAgentStateDeciderLogic from the subsystem API first
ArenaAgentStateDeciderLogic arenaAgentStateDeciderLogic = ...;
var result = arenaAgentStateDeciderLogic.GetAgentState(effectedAgent, 0, usedSurgery);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<ArenaAgentStateDeciderLogic>();
```

## See Also

- [Area Index](../)