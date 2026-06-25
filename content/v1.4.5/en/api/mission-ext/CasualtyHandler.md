---
title: "CasualtyHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CasualtyHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CasualtyHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CasualtyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CasualtyHandler.cs`

## Overview

`CasualtyHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CasualtyHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** Called when the `agent fleeing` event is raised.

### GetCasualtyCountOfFormation
`public int GetCasualtyCountOfFormation(Formation formation)`

**Purpose:** Gets the current value of `casualty count of formation`.

### GetCasualtyPowerLossOfFormation
`public float GetCasualtyPowerLossOfFormation(Formation formation)`

**Purpose:** Gets the current value of `casualty power loss of formation`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CasualtyHandler());
```

## See Also

- [Complete Class Catalog](../catalog)