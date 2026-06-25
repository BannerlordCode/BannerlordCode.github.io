---
title: "StealthAreaData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthAreaData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthAreaData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthAreaData`
**Area:** campaign-ext

## Overview

`StealthAreaData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `StealthAreaData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllReinforcementsCalled` | `public bool AllReinforcementsCalled { get; }` |

## Key Methods

### SpawnReinforcementAllyTroopsDelegate
`public delegate MBList<Agent> SpawnReinforcementAllyTroopsDelegate(StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker)`

**Purpose:** Handles logic related to `spawn reinforcement ally troops delegate`.

### IsSentry
`public bool IsSentry(Agent agent)`

**Purpose:** Handles logic related to `is sentry`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Called when the `agent team changed` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

### CheckIfAllStealthAreasAreTriggered
`public bool CheckIfAllStealthAreasAreTriggered()`

**Purpose:** Handles logic related to `check if all stealth areas are triggered`.

### CheckIfAllStealthAreasReinforcementsAreCalled
`public bool CheckIfAllStealthAreasReinforcementsAreCalled()`

**Purpose:** Handles logic related to `check if all stealth areas reinforcements are called`.

## Usage Example

```csharp
var value = new StealthAreaData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
