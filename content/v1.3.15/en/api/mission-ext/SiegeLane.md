---
title: "SiegeLane"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeLane`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeLane

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeLane`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SiegeLane.cs`

## Overview

`SiegeLane` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LaneState` | `public SiegeLane.LaneStateEnum LaneState { get; }` |
| `LaneSide` | `public FormationAI.BehaviorSide LaneSide { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `IsOpen` | `public bool IsOpen { get; }` |
| `IsBreach` | `public bool IsBreach { get; }` |
| `HasGate` | `public bool HasGate { get; }` |
| `DefensePoints` | `public List<ICastleKeyPosition> DefensePoints { get; }` |
| `DefenderOrigin` | `public WorldPosition DefenderOrigin { get; }` |
| `AttackerOrigin` | `public WorldPosition AttackerOrigin { get; }` |

## Key Methods

### CalculateIsLaneUnusable
`public bool CalculateIsLaneUnusable()`

**Purpose:** Handles logic related to `calculate is lane unusable`.

### GetLastAssignedFormation
`public Formation GetLastAssignedFormation(int teamIndex)`

**Purpose:** Gets the current value of `last assigned formation`.

### SetLaneState
`public void SetLaneState(SiegeLane.LaneStateEnum newLaneState)`

**Purpose:** Sets the value or state of `lane state`.

### SetLastAssignedFormation
`public void SetLastAssignedFormation(int teamIndex, Formation formation)`

**Purpose:** Sets the value or state of `last assigned formation`.

### SetSiegeQuerySystem
`public void SetSiegeQuerySystem(SiegeQuerySystem siegeQuerySystem)`

**Purpose:** Sets the value or state of `siege query system`.

### CalculateLaneCapacity
`public float CalculateLaneCapacity()`

**Purpose:** Handles logic related to `calculate lane capacity`.

### GetDefenseState
`public SiegeLane.LaneDefenseStates GetDefenseState()`

**Purpose:** Gets the current value of `defense state`.

### IsUnderAttack
`public bool IsUnderAttack()`

**Purpose:** Handles logic related to `is under attack`.

### IsDefended
`public bool IsDefended()`

**Purpose:** Handles logic related to `is defended`.

### DetermineLaneState
`public void DetermineLaneState()`

**Purpose:** Handles logic related to `determine lane state`.

### GetCurrentAttackerPosition
`public WorldPosition GetCurrentAttackerPosition()`

**Purpose:** Gets the current value of `current attacker position`.

### DetermineOrigins
`public void DetermineOrigins()`

**Purpose:** Handles logic related to `determine origins`.

### RefreshLane
`public void RefreshLane()`

**Purpose:** Refreshes the display or cache of `lane`.

### SetPrimarySiegeWeapons
`public void SetPrimarySiegeWeapons(List<IPrimarySiegeWeapon> primarySiegeWeapons)`

**Purpose:** Sets the value or state of `primary siege weapons`.

### SetDefensePoints
`public void SetDefensePoints(List<ICastleKeyPosition> defensePoints)`

**Purpose:** Sets the value or state of `defense points`.

## Usage Example

```csharp
var value = new SiegeLane();
value.CalculateIsLaneUnusable();
```

## See Also

- [Complete Class Catalog](../catalog)