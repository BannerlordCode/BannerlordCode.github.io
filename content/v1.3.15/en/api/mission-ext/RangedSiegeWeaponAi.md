---
title: "RangedSiegeWeaponAi"
description: "Auto-generated class reference for RangedSiegeWeaponAi."
---
# RangedSiegeWeaponAi

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class RangedSiegeWeaponAi : UsableMachineAIBase`
**Base:** `UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeaponAi.cs`

## Overview

`RangedSiegeWeaponAi` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FindNextTarget
`public void FindNextTarget()`

**Purpose:** Looks up the matching next target in the current collection or scope.

```csharp
// Obtain an instance of RangedSiegeWeaponAi from the subsystem API first
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
rangedSiegeWeaponAi.FindNextTarget();
```

### PrepareTargetFromTask
`public Threat PrepareTargetFromTask()`

**Purpose:** Finishes prerequisite setup for the upcoming target from task operation.

```csharp
// Obtain an instance of RangedSiegeWeaponAi from the subsystem API first
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
var result = rangedSiegeWeaponAi.PrepareTargetFromTask();
```

### UpdateThreatSeekerTask
`public bool UpdateThreatSeekerTask()`

**Purpose:** Recalculates and stores the latest representation of threat seeker task.

```csharp
// Obtain an instance of RangedSiegeWeaponAi from the subsystem API first
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
var result = rangedSiegeWeaponAi.UpdateThreatSeekerTask();
```

### PrepareThreatSeekerTask
`public void PrepareThreatSeekerTask(Action lastAction)`

**Purpose:** Finishes prerequisite setup for the upcoming threat seeker task operation.

```csharp
// Obtain an instance of RangedSiegeWeaponAi from the subsystem API first
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
rangedSiegeWeaponAi.PrepareThreatSeekerTask(lastAction);
```

### Release
`public void Release()`

**Purpose:** Executes the Release logic.

```csharp
// Obtain an instance of RangedSiegeWeaponAi from the subsystem API first
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
rangedSiegeWeaponAi.Release();
```

### GetAllThreats
`public List<Threat> GetAllThreats()`

**Purpose:** Reads and returns the all threats value held by the this instance.

```csharp
// Obtain an instance of RangedSiegeWeaponAi from the subsystem API first
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
var result = rangedSiegeWeaponAi.GetAllThreats();
```

### GetTargetFlagsOfFormation
`public static TargetFlags GetTargetFlagsOfFormation()`

**Purpose:** Reads and returns the target flags of formation value held by the this instance.

```csharp
// Static call; no instance required
RangedSiegeWeaponAi.GetTargetFlagsOfFormation();
```

### GetMaxThreat
`public static Threat GetMaxThreat(List<ICastleKeyPosition> castleKeyPositions)`

**Purpose:** Reads and returns the max threat value held by the this instance.

```csharp
// Static call; no instance required
RangedSiegeWeaponAi.GetMaxThreat(castleKeyPositions);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RangedSiegeWeaponAi instance = ...;
```

## See Also

- [Area Index](../)