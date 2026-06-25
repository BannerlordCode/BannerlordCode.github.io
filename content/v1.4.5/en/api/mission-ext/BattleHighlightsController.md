---
title: "BattleHighlightsController"
description: "Auto-generated class reference for BattleHighlightsController."
---
# BattleHighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleHighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleHighlightsController.cs`

## Overview

`BattleHighlightsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `BattleHighlightsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleHighlightsController from the subsystem API first
BattleHighlightsController battleHighlightsController = ...;
battleHighlightsController.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BattleHighlightsController from the subsystem API first
BattleHighlightsController battleHighlightsController = ...;
battleHighlightsController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleHighlightsController>();
```

## See Also

- [Area Index](../)