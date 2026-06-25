---
title: "AgentVictoryLogic"
description: "Auto-generated class reference for AgentVictoryLogic."
---
# AgentVictoryLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVictoryLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## Overview

`AgentVictoryLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AgentVictoryLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GotOrderRecently` | `public bool GotOrderRecently { get; }` |
| `IsCheeringPaused` | `public bool IsCheeringPaused { get; }` |

## Key Methods

### CheerReactionTimeSettings
`public struct CheerReactionTimeSettings(float minDuration, float maxDuration)`

**Purpose:** **Purpose:** Executes the CheerReactionTimeSettings logic.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
var result = agentVictoryLogic.CheerReactionTimeSettings(0, 0);
```

### OrderReceived
`public void OrderReceived()`

**Purpose:** **Purpose:** Executes the OrderReceived logic.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OrderReceived();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.AfterStart();
```

### SetCheerActionGroup
`public void SetCheerActionGroup(CheerActionGroupEnum cheerActionGroup = CheerActionGroupEnum.None)`

**Purpose:** **Purpose:** Assigns a new value to cheer action group and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetCheerActionGroup(cheerActionGroupEnum.None);
```

### SetCheerReactionTimerSettings
`public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)`

**Purpose:** **Purpose:** Assigns a new value to cheer reaction timer settings and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetCheerReactionTimerSettings(0, 0);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** **Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnClearScene();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnMissionTick(0);
```

### SetTimersOfVictoryReactionsOnBattleEnd
`public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)`

**Purpose:** **Purpose:** Assigns a new value to timers of victory reactions on battle end and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnBattleEnd(side);
```

### SetTimersOfVictoryReactionsOnRetreat
`public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)`

**Purpose:** **Purpose:** Assigns a new value to timers of victory reactions on retreat and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnRetreat(side);
```

### SetTimersOfVictoryReactionsOnTournamentVictoryForAgent
`public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)`

**Purpose:** **Purpose:** Assigns a new value to timers of victory reactions on tournament victory for agent and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(agent, 0, 0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentVictoryLogic>();
```

## See Also

- [Area Index](../)