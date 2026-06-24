<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleObserverMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleObserverMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

## Overview

`BattleObserverMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleObserverMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |

## Key Methods

### SetObserver
`public void SetObserver(IBattleObserver observer)`

**Purpose:** Sets the value or state of `observer`.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Called when the `agent team changed` event is raised.

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** Called when the `mission result ready` event is raised.

### GetDeathToBuiltAgentRatioForSide
`public float GetDeathToBuiltAgentRatioForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `death to built agent ratio for side`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BattleObserverMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)