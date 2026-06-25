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

### EnqueueObjective
`public void EnqueueObjective(MissionObjective objective)`

**Purpose:** **Purpose:** Executes the EnqueueObjective logic.

```csharp
// Obtain an instance of MissionObjectiveLogic from the subsystem API first
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.EnqueueObjective(objective);
```

### RemoveObjectiveFromQueue
`public void RemoveObjectiveFromQueue(string objectiveId)`

**Purpose:** **Purpose:** Removes objective from queue from the current collection or state.

```csharp
// Obtain an instance of MissionObjectiveLogic from the subsystem API first
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.RemoveObjectiveFromQueue("example");
```

### RemoveObjectiveFromQueue
`public void RemoveObjectiveFromQueue(MissionObjective objective)`

**Purpose:** **Purpose:** Removes objective from queue from the current collection or state.

```csharp
// Obtain an instance of MissionObjectiveLogic from the subsystem API first
MissionObjectiveLogic missionObjectiveLogic = ...;
missionObjectiveLogic.RemoveObjectiveFromQueue(objective);
```

### GetCurrentObjective
`public MissionObjective GetCurrentObjective()`

**Purpose:** **Purpose:** Reads and returns the current objective value held by the this instance.

```csharp
// Obtain an instance of MissionObjectiveLogic from the subsystem API first
MissionObjectiveLogic missionObjectiveLogic = ...;
var result = missionObjectiveLogic.GetCurrentObjective();
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