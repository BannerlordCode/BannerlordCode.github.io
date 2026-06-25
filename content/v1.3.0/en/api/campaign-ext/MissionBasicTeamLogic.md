---
title: "MissionBasicTeamLogic"
description: "Auto-generated class reference for MissionBasicTeamLogic."
---
# MissionBasicTeamLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionBasicTeamLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionBasicTeamLogic.cs`

## Overview

`MissionBasicTeamLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionBasicTeamLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionBasicTeamLogic from the subsystem API first
MissionBasicTeamLogic missionBasicTeamLogic = ...;
missionBasicTeamLogic.EarlyStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionBasicTeamLogic>();
```

## See Also

- [Area Index](../)