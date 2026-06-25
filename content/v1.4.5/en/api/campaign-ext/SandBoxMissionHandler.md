---
title: "SandBoxMissionHandler"
description: "Auto-generated class reference for SandBoxMissionHandler."
---
# SandBoxMissionHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandBoxMissionHandler.cs`

## Overview

`SandBoxMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SandBoxMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of SandBoxMissionHandler from the subsystem API first
SandBoxMissionHandler sandBoxMissionHandler = ...;
sandBoxMissionHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SandBoxMissionHandler>();
```

## See Also

- [Area Index](../)