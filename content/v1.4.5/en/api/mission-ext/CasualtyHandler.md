---
title: "CasualtyHandler"
description: "Auto-generated class reference for CasualtyHandler."
---
# CasualtyHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CasualtyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CasualtyHandler.cs`

## Overview

`CasualtyHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CasualtyHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of CasualtyHandler from the subsystem API first
CasualtyHandler casualtyHandler = ...;
casualtyHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** Invoked when the `agent fleeing` event is raised.

```csharp
// Obtain an instance of CasualtyHandler from the subsystem API first
CasualtyHandler casualtyHandler = ...;
casualtyHandler.OnAgentFleeing(affectedAgent);
```

### GetCasualtyCountOfFormation
`public int GetCasualtyCountOfFormation(Formation formation)`

**Purpose:** Reads and returns the `casualty count of formation` value held by the current object.

```csharp
// Obtain an instance of CasualtyHandler from the subsystem API first
CasualtyHandler casualtyHandler = ...;
var result = casualtyHandler.GetCasualtyCountOfFormation(formation);
```

### GetCasualtyPowerLossOfFormation
`public float GetCasualtyPowerLossOfFormation(Formation formation)`

**Purpose:** Reads and returns the `casualty power loss of formation` value held by the current object.

```csharp
// Obtain an instance of CasualtyHandler from the subsystem API first
CasualtyHandler casualtyHandler = ...;
var result = casualtyHandler.GetCasualtyPowerLossOfFormation(formation);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CasualtyHandler>();
```

## See Also

- [Area Index](../)