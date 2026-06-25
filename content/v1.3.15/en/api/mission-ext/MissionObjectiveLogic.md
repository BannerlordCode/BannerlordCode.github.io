---
title: "MissionObjectiveLogic"
description: "Auto-generated class reference for MissionObjectiveLogic."
---
# MissionObjectiveLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs`

## Overview

`MissionObjectiveLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionObjectiveLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentObjective` | `public MissionObjective CurrentObjective { get; }` |

## Key Methods

### StartObjective
`public void StartObjective(MissionObjective objective)`

**Purpose:** **Purpose:** Starts the objective flow or state machine.

```csharp
// Obtain an instance of MissionObjectiveLogic from the subsystem API first
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.StartObjective(objective);
```

### CompleteCurrentObjective
`public void CompleteCurrentObjective()`

**Purpose:** **Purpose:** Executes the CompleteCurrentObjective logic.

```csharp
// Obtain an instance of MissionObjectiveLogic from the subsystem API first
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.CompleteCurrentObjective();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionObjectiveLogic from the subsystem API first
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionObjectiveLogic>();
```

## See Also

- [Area Index](../)