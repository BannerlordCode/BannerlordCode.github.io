---
title: "MissionHintLogic"
description: "Auto-generated class reference for MissionHintLogic."
---
# MissionHintLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHintLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`

## Overview

`MissionHintLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionHintLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveHint` | `public MissionHint ActiveHint { get; }` |

## Key Methods

### SetActiveHint
`public void SetActiveHint(MissionHint hint)`

**Purpose:** **Purpose:** Assigns a new value to active hint and updates the object's internal state.

```csharp
// Obtain an instance of MissionHintLogic from the subsystem API first
MissionHintLogic missionHintLogic = ...;
missionHintLogic.SetActiveHint(hint);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MissionHintLogic from the subsystem API first
MissionHintLogic missionHintLogic = ...;
missionHintLogic.Clear();
```

### MissionHintChangedDelegate
`public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint)`

**Purpose:** **Purpose:** Executes the MissionHintChangedDelegate logic.

```csharp
// Obtain an instance of MissionHintLogic from the subsystem API first
MissionHintLogic missionHintLogic = ...;
missionHintLogic.MissionHintChangedDelegate(previousHint, newHint);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionHintLogic>();
```

## See Also

- [Area Index](../)