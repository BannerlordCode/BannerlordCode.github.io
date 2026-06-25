---
title: "BattleMissionAgentInteractionLogic"
description: "Auto-generated class reference for BattleMissionAgentInteractionLogic."
---
# BattleMissionAgentInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionAgentInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic/BattleMissionAgentInteractionLogic.cs`

## Overview

`BattleMissionAgentInteractionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleMissionAgentInteractionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of BattleMissionAgentInteractionLogic from the subsystem API first
BattleMissionAgentInteractionLogic battleMissionAgentInteractionLogic = ...;
var result = battleMissionAgentInteractionLogic.IsThereAgentAction(userAgent, otherAgent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleMissionAgentInteractionLogic>();
```

## See Also

- [Area Index](../)