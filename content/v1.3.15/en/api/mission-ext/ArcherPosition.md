---
title: "ArcherPosition"
description: "Auto-generated class reference for ArcherPosition."
---
# ArcherPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArcherPosition`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ArcherPosition.cs`

## Overview

`ArcherPosition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `TacticalArcherPosition` | `public TacticalPosition TacticalArcherPosition { get; }` |
| `ConnectedSides` | `public int ConnectedSides { get; }` |

## Key Methods

### GetLastAssignedFormation
`public Formation GetLastAssignedFormation(int teamIndex)`

**Purpose:** Reads and returns the last assigned formation value held by the this instance.

```csharp
// Obtain an instance of ArcherPosition from the subsystem API first
ArcherPosition archerPosition = ...;
var result = archerPosition.GetLastAssignedFormation(0);
```

### IsArcherPositionRelatedToSide
`public bool IsArcherPositionRelatedToSide(FormationAI.BehaviorSide side)`

**Purpose:** Determines whether the this instance is in the archer position related to side state or condition.

```csharp
// Obtain an instance of ArcherPosition from the subsystem API first
ArcherPosition archerPosition = ...;
var result = archerPosition.IsArcherPositionRelatedToSide(side);
```

### GetArcherPositionClosestSide
`public FormationAI.BehaviorSide GetArcherPositionClosestSide()`

**Purpose:** Reads and returns the archer position closest side value held by the this instance.

```csharp
// Obtain an instance of ArcherPosition from the subsystem API first
ArcherPosition archerPosition = ...;
var result = archerPosition.GetArcherPositionClosestSide();
```

### OnDeploymentFinished
`public void OnDeploymentFinished(SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of ArcherPosition from the subsystem API first
ArcherPosition archerPosition = ...;
archerPosition.OnDeploymentFinished(siegeQuerySystem, battleSide);
```

### SetLastAssignedFormation
`public void SetLastAssignedFormation(int teamIndex, Formation formation)`

**Purpose:** Assigns a new value to last assigned formation and updates the object's internal state.

```csharp
// Obtain an instance of ArcherPosition from the subsystem API first
ArcherPosition archerPosition = ...;
archerPosition.SetLastAssignedFormation(0, formation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArcherPosition archerPosition = ...;
archerPosition.GetLastAssignedFormation(0);
```

## See Also

- [Area Index](../)