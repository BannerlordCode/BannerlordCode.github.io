---
title: "DebugAgentTeleporterMissionController"
description: "Auto-generated class reference for DebugAgentTeleporterMissionController."
---
# DebugAgentTeleporterMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DebugAgentTeleporterMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/DebugAgentTeleporterMissionController.cs`

## Overview

`DebugAgentTeleporterMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `DebugAgentTeleporterMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DebugAgentTeleporterMissionController from the subsystem API first
DebugAgentTeleporterMissionController debugAgentTeleporterMissionController = ...;
debugAgentTeleporterMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of DebugAgentTeleporterMissionController from the subsystem API first
DebugAgentTeleporterMissionController debugAgentTeleporterMissionController = ...;
debugAgentTeleporterMissionController.OnMissionTick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<DebugAgentTeleporterMissionController>();
```

## See Also

- [Area Index](../)