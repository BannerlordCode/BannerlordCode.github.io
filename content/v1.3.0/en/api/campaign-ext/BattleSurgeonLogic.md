---
title: "BattleSurgeonLogic"
description: "Auto-generated class reference for BattleSurgeonLogic."
---
# BattleSurgeonLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class BattleSurgeonLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/BattleSurgeonLogic.cs`

## Overview

`BattleSurgeonLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleSurgeonLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent created event is raised.

```csharp
// Obtain an instance of BattleSurgeonLogic from the subsystem API first
BattleSurgeonLogic battleSurgeonLogic = ...;
battleSurgeonLogic.OnAgentCreated(agent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleSurgeonLogic>();
```

## See Also

- [Area Index](../)