---
title: "BattleObserverMissionLogic"
description: "Auto-generated class reference for BattleObserverMissionLogic."
---
# BattleObserverMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

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

**Purpose:** **Purpose:** Assigns a new value to observer and updates the object's internal state.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.SetObserver(observer);
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.EarlyStart();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent team changed event is raised.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** **Purpose:** Invoked when the mission result ready event is raised.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnMissionResultReady(missionResult);
```

### GetDeathToBuiltAgentRatioForSide
`public float GetDeathToBuiltAgentRatioForSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the death to built agent ratio for side value held by the this instance.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
var result = battleObserverMissionLogic.GetDeathToBuiltAgentRatioForSide(side);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleObserverMissionLogic>();
```

## See Also

- [Area Index](../)