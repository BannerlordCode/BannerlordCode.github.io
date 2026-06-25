---
title: "LeaveMissionLogic"
description: "Auto-generated class reference for LeaveMissionLogic."
---
# LeaveMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/LeaveMissionLogic.cs`

## Overview

`LeaveMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `LeaveMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** **Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of LeaveMissionLogic from the subsystem API first
LeaveMissionLogic leaveMissionLogic = ...;
var result = leaveMissionLogic.MissionEnded(missionResult);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of LeaveMissionLogic from the subsystem API first
LeaveMissionLogic leaveMissionLogic = ...;
leaveMissionLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<LeaveMissionLogic>();
```

## See Also

- [Area Index](../)