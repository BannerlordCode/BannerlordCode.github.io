---
title: "ArenaAgentStateDeciderLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArenaAgentStateDeciderLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArenaAgentStateDeciderLogic

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaAgentStateDeciderLogic : MissionLogic, IAgentStateDecider, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Arena/ArenaAgentStateDeciderLogic.cs`

## Overview

`ArenaAgentStateDeciderLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ArenaAgentStateDeciderLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgentState
`public AgentState GetAgentState(Agent effectedAgent, float deathProbability, out bool usedSurgery)`

**Purpose:** Gets the current value of `agent state`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new ArenaAgentStateDeciderLogic());
```

## See Also

- [Complete Class Catalog](../catalog)