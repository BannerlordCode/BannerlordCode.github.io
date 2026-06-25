---
title: "StealthFailCounterMissionLogic"
description: "Auto-generated class reference for StealthFailCounterMissionLogic."
---
# StealthFailCounterMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class StealthFailCounterMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/StealthFailCounterMissionLogic.cs`

## Overview

`StealthFailCounterMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `StealthFailCounterMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**Purpose:** **Purpose:** Invoked when the agent alarmed state changed event is raised.

```csharp
// Obtain an instance of StealthFailCounterMissionLogic from the subsystem API first
StealthFailCounterMissionLogic stealthFailCounterMissionLogic = ...;
stealthFailCounterMissionLogic.OnAgentAlarmedStateChanged(agent, flag);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of StealthFailCounterMissionLogic from the subsystem API first
StealthFailCounterMissionLogic stealthFailCounterMissionLogic = ...;
stealthFailCounterMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of StealthFailCounterMissionLogic from the subsystem API first
StealthFailCounterMissionLogic stealthFailCounterMissionLogic = ...;
stealthFailCounterMissionLogic.OnMissionTick(0);
```

### SetFailTexts
`public void SetFailTexts(TextObject title, TextObject description)`

**Purpose:** **Purpose:** Assigns a new value to fail texts and updates the object's internal state.

```csharp
// Obtain an instance of StealthFailCounterMissionLogic from the subsystem API first
StealthFailCounterMissionLogic stealthFailCounterMissionLogic = ...;
stealthFailCounterMissionLogic.SetFailTexts(title, description);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<StealthFailCounterMissionLogic>();
```

## See Also

- [Area Index](../)