<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthAreaMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthAreaMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthAreaMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs`

## Overview

`StealthAreaMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `StealthAreaMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllyTroops` | `public MBReadOnlyList<Agent> AllyTroops { get; }` |
| `AllReinforcementsCalled` | `public bool AllReinforcementsCalled { get; }` |

## Key Methods

### IsSentry
`public bool IsSentry(Agent agent)`

**Purpose:** Handles logic related to `is sentry`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AddAgentSpawnType
`public void AddAgentSpawnType(string spawnGroupId, Dictionary<string, int> spawnDictionary)`

**Purpose:** Adds `agent spawn type` to the current collection or state.

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

### GetReinforcementAllyTroopsDelegate
`public delegate List<IAgentOriginBase> GetReinforcementAllyTroopsDelegate(StealthAreaMissionLogic.StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker)`

**Purpose:** Gets the current value of `reinforcement ally troops delegate`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new StealthAreaMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)