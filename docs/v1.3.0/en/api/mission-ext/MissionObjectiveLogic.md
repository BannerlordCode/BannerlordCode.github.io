<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionObjectiveLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `enqueue objective`.

### RemoveObjectiveFromQueue
`public void RemoveObjectiveFromQueue(string objectiveId)`

**Purpose:** Removes `objective from queue` from the current collection or state.

### RemoveObjectiveFromQueue
`public void RemoveObjectiveFromQueue(MissionObjective objective)`

**Purpose:** Removes `objective from queue` from the current collection or state.

### GetCurrentObjective
`public MissionObjective GetCurrentObjective()`

**Purpose:** Gets the current value of `current objective`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionObjectiveLogic());
```

## See Also

- [Complete Class Catalog](../catalog)