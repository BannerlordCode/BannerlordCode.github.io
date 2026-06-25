---
title: "Mangonel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mangonel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Mangonel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Mangonel : RangedSiegeWeapon, ISpawnable`
**Base:** `RangedSiegeWeapon`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mangonel.cs`

## Overview

`Mangonel` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Creates a new `a i behavior object` instance or object.

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Gets the current value of `siege engine type`.

### OnPilotAssignedDuringSpawn
`public override void OnPilotAssignedDuringSpawn()`

**Purpose:** Called when the `pilot assigned during spawn` event is raised.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Gets the current value of `target flags`.

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Gets the current value of `target value`.

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** Handles logic related to `process target value`.

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** Sets the value or state of `spawned from spawner`.

## Usage Example

```csharp
var value = new Mangonel();
value.CreateAIBehaviorObject();
```

## See Also

- [Complete Class Catalog](../catalog)