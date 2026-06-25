---
title: "SiegeLane"
description: "Auto-generated class reference for SiegeLane."
---
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

**Purpose:** Calculates the current value or result of `is lane unusable`.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
var result = siegeLane.CalculateIsLaneUnusable();
```

### GetLastAssignedFormation
`public Formation GetLastAssignedFormation(int teamIndex)`

**Purpose:** Reads and returns the `last assigned formation` value held by the current object.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
var result = siegeLane.GetLastAssignedFormation(0);
```

### SetLaneState
`public void SetLaneState(SiegeLane.LaneStateEnum newLaneState)`

**Purpose:** Assigns a new value to `lane state` and updates the object's internal state.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
siegeLane.SetLaneState(newLaneState);
```

### SetLastAssignedFormation
`public void SetLastAssignedFormation(int teamIndex, Formation formation)`

**Purpose:** Assigns a new value to `last assigned formation` and updates the object's internal state.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
siegeLane.SetLastAssignedFormation(0, formation);
```

### SetSiegeQuerySystem
`public void SetSiegeQuerySystem(SiegeQuerySystem siegeQuerySystem)`

**Purpose:** Assigns a new value to `siege query system` and updates the object's internal state.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
siegeLane.SetSiegeQuerySystem(siegeQuerySystem);
```

### CalculateLaneCapacity
`public float CalculateLaneCapacity()`

**Purpose:** Calculates the current value or result of `lane capacity`.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
var result = siegeLane.CalculateLaneCapacity();
```

### GetDefenseState
`public SiegeLane.LaneDefenseStates GetDefenseState()`

**Purpose:** Reads and returns the `defense state` value held by the current object.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
var result = siegeLane.GetDefenseState();
```

### IsUnderAttack
`public bool IsUnderAttack()`

**Purpose:** Determines whether the current object is in the `under attack` state or condition.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
var result = siegeLane.IsUnderAttack();
```

### IsDefended
`public bool IsDefended()`

**Purpose:** Determines whether the current object is in the `defended` state or condition.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
var result = siegeLane.IsDefended();
```

### DetermineLaneState
`public void DetermineLaneState()`

**Purpose:** Determines the result of `lane state` based on the current state.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
siegeLane.DetermineLaneState();
```

### GetCurrentAttackerPosition
`public WorldPosition GetCurrentAttackerPosition()`

**Purpose:** Reads and returns the `current attacker position` value held by the current object.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
var result = siegeLane.GetCurrentAttackerPosition();
```

### DetermineOrigins
`public void DetermineOrigins()`

**Purpose:** Determines the result of `origins` based on the current state.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
siegeLane.DetermineOrigins();
```

### RefreshLane
`public void RefreshLane()`

**Purpose:** Keeps the display or cache of `lane` in sync with the underlying state.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
siegeLane.RefreshLane();
```

### SetPrimarySiegeWeapons
`public void SetPrimarySiegeWeapons(List<IPrimarySiegeWeapon> primarySiegeWeapons)`

**Purpose:** Assigns a new value to `primary siege weapons` and updates the object's internal state.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
siegeLane.SetPrimarySiegeWeapons(primarySiegeWeapons);
```

### SetDefensePoints
`public void SetDefensePoints(List<ICastleKeyPosition> defensePoints)`

**Purpose:** Assigns a new value to `defense points` and updates the object's internal state.

```csharp
// Obtain an instance of SiegeLane from the subsystem API first
SiegeLane siegeLane = ...;
siegeLane.SetDefensePoints(defensePoints);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeLane siegeLane = ...;
siegeLane.CalculateIsLaneUnusable();
```

## See Also

- [Area Index](../)