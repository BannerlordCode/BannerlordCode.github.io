---
title: "FormationQuerySystem"
description: "Auto-generated class reference for FormationQuerySystem."
---
# FormationQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationQuerySystem`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationQuerySystem.cs`

## Overview

`FormationQuerySystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClosestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormation { get; }` |
| `FastestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormation { get; }` |

## Key Methods

### EvaluateAllPreliminaryQueryData
`public void EvaluateAllPreliminaryQueryData()`

**Purpose:** Executes the EvaluateAllPreliminaryQueryData logic.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.EvaluateAllPreliminaryQueryData();
```

### ForceExpireCavalryUnitRatio
`public void ForceExpireCavalryUnitRatio()`

**Purpose:** Executes the ForceExpireCavalryUnitRatio logic.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.ForceExpireCavalryUnitRatio();
```

### Expire
`public void Expire()`

**Purpose:** Executes the Expire logic.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.Expire();
```

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**Purpose:** Executes the ExpireAfterUnitAddRemove logic.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.ExpireAfterUnitAddRemove();
```

### GetClassWeightedFactor
`public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)`

**Purpose:** Reads and returns the class weighted factor value held by the this instance.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
var result = formationQuerySystem.GetClassWeightedFactor(0, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.EvaluateAllPreliminaryQueryData();
```

## See Also

- [Area Index](../)