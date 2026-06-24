<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLocationLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLocationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionLocationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionLocationLogic.cs`

## Overview

`MissionLocationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionLocationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### SpawnCharactersAccompanyingPlayer
`public void SpawnCharactersAccompanyingPlayer(bool noHorse)`

**Purpose:** Handles logic related to `spawn characters accompanying player`.

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**Purpose:** Gets the current value of `spawn frame of passage`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionLocationLogic());
```

## See Also

- [Complete Class Catalog](../catalog)