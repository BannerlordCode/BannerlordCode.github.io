---
title: "MissionSettlementPrepareLogic"
description: "Auto-generated class reference for MissionSettlementPrepareLogic."
---
# MissionSettlementPrepareLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionSettlementPrepareLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionSettlementPrepareLogic.cs`

## Overview

`MissionSettlementPrepareLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionSettlementPrepareLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionSettlementPrepareLogic from the subsystem API first
MissionSettlementPrepareLogic missionSettlementPrepareLogic = ...;
missionSettlementPrepareLogic.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionSettlementPrepareLogic>();
```

## See Also

- [Area Index](../)