---
title: "StealthAreaMissionLogic"
description: "Auto-generated class reference for StealthAreaMissionLogic."
---
# StealthAreaMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthAreaMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/StealthAreaMissionLogic.cs`

## Overview

`StealthAreaMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `StealthAreaMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllReinforcementsCalled` | `public bool AllReinforcementsCalled { get; }` |

## Key Methods

### SpawnReinforcementAllyTroopsDelegate
`public delegate MBList<Agent> SpawnReinforcementAllyTroopsDelegate(StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker)`

**Purpose:** Executes the SpawnReinforcementAllyTroopsDelegate logic.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
var result = stealthAreaMissionLogic.SpawnReinforcementAllyTroopsDelegate(triggeredStealthAreaData, stealthAreaMarker);
```

### IsSentry
`public bool IsSentry(Agent agent)`

**Purpose:** Determines whether the this instance is in the sentry state or condition.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
var result = stealthAreaMissionLogic.IsSentry(agent);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnBehaviorInitialize();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnAgentBuild(agent, banner);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Invoked when the agent team changed event is raised.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the object used event is raised.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnObjectUsed(userAgent, usedObject);
```

### CheckIfAllStealthAreasAreTriggered
`public bool CheckIfAllStealthAreasAreTriggered()`

**Purpose:** Verifies whether if all stealth areas are triggered holds true for the this instance.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
var result = stealthAreaMissionLogic.CheckIfAllStealthAreasAreTriggered();
```

### CheckIfAllStealthAreasReinforcementsAreCalled
`public bool CheckIfAllStealthAreasReinforcementsAreCalled()`

**Purpose:** Verifies whether if all stealth areas reinforcements are called holds true for the this instance.

```csharp
// Obtain an instance of StealthAreaMissionLogic from the subsystem API first
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
var result = stealthAreaMissionLogic.CheckIfAllStealthAreasReinforcementsAreCalled();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<StealthAreaMissionLogic>();
```

## See Also

- [Area Index](../)