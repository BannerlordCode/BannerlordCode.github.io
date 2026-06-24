<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Ballista`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Ballista

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Ballista : RangedSiegeWeapon, ISpawnable`
**Base:** `RangedSiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/Ballista.cs`

## Overview

`Ballista` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DirectionRestriction` | `public override float DirectionRestriction { get; }` |
| `CanShootAtPointCheckingOffset` | `public override Vec3 CanShootAtPointCheckingOffset { get; }` |

## Key Methods

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Gets the current value of `siege engine type`.

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Creates a new `a i behavior object` instance or object.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** Handles logic related to `process target value`.

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Gets the current value of `target flags`.

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Gets the current value of `target value`.

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** Sets the value or state of `spawned from spawner`.

## Usage Example

```csharp
var value = new Ballista();
value.GetSiegeEngineType();
```

## See Also

- [Complete Class Catalog](../catalog)