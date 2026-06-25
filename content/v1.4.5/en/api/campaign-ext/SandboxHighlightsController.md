---
title: "SandboxHighlightsController"
description: "Auto-generated class reference for SandboxHighlightsController."
---
# SandboxHighlightsController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandboxHighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandboxHighlightsController.cs`

## Overview

`SandboxHighlightsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SandboxHighlightsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of SandboxHighlightsController from the subsystem API first
SandboxHighlightsController sandboxHighlightsController = ...;
sandboxHighlightsController.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of SandboxHighlightsController from the subsystem API first
SandboxHighlightsController sandboxHighlightsController = ...;
sandboxHighlightsController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SandboxHighlightsController>();
```

## See Also

- [Area Index](../)