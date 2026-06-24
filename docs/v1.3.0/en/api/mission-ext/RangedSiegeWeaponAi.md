<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RangedSiegeWeaponAi`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `find next target`.

### PrepareTargetFromTask
`public Threat PrepareTargetFromTask()`

**Purpose:** Handles logic related to `prepare target from task`.

### UpdateThreatSeekerTask
`public bool UpdateThreatSeekerTask()`

**Purpose:** Updates the state or data of `threat seeker task`.

### PrepareThreatSeekerTask
`public void PrepareThreatSeekerTask(Action lastAction)`

**Purpose:** Handles logic related to `prepare threat seeker task`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### GetAllThreats
`public List<Threat> GetAllThreats()`

**Purpose:** Gets the current value of `all threats`.

### GetTargetFlagsOfFormation
`public static TargetFlags GetTargetFlagsOfFormation()`

**Purpose:** Gets the current value of `target flags of formation`.

### GetMaxThreat
`public static Threat GetMaxThreat(List<ICastleKeyPosition> castleKeyPositions)`

**Purpose:** Gets the current value of `max threat`.

## Usage Example

```csharp
var implementation = new CustomRangedSiegeWeaponAi();
```

## See Also

- [Complete Class Catalog](../catalog)