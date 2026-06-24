<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationQuerySystem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationQuerySystem`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationQuerySystem.cs`

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

**Purpose:** Handles logic related to `evaluate all preliminary query data`.

### ForceExpireCavalryUnitRatio
`public void ForceExpireCavalryUnitRatio()`

**Purpose:** Handles logic related to `force expire cavalry unit ratio`.

### Expire
`public void Expire()`

**Purpose:** Handles logic related to `expire`.

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**Purpose:** Handles logic related to `expire after unit add remove`.

### GetClassWeightedFactor
`public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)`

**Purpose:** Gets the current value of `class weighted factor`.

## Usage Example

```csharp
var value = new FormationQuerySystem();
value.EvaluateAllPreliminaryQueryData();
```

## See Also

- [Complete Class Catalog](../catalog)