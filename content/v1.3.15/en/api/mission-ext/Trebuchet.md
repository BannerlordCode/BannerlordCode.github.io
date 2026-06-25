---
title: "Trebuchet"
description: "Auto-generated class reference for Trebuchet."
---
# Trebuchet

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Trebuchet : RangedSiegeWeapon, ISpawnable`
**Base:** `RangedSiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/Trebuchet.cs`

## Overview

`Trebuchet` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DirectionRestriction` | `public override float DirectionRestriction { get; }` |

## Key Methods

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
var result = trebuchet.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
var result = trebuchet.GetDescriptionText(gameEntity);
```

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Reads and returns the siege engine type value held by the this instance.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
var result = trebuchet.GetSiegeEngineType();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new a i behavior object entity and returns it to the caller.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
var result = trebuchet.CreateAIBehaviorObject();
```

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
trebuchet.AfterMissionStart();
```

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** Executes the ProcessTargetValue logic.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
var result = trebuchet.ProcessTargetValue(0, flags);
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Reads and returns the target flags value held by the this instance.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
var result = trebuchet.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Reads and returns the target value value held by the this instance.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
var result = trebuchet.GetTargetValue(weaponPos);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
var result = trebuchet.GetTickRequirement();
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** Assigns a new value to spawned from spawner and updates the object's internal state.

```csharp
// Obtain an instance of Trebuchet from the subsystem API first
Trebuchet trebuchet = ...;
trebuchet.SetSpawnedFromSpawner();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Trebuchet trebuchet = ...;
trebuchet.GetActionTextForStandingPoint(usableGameObject);
```

## See Also

- [Area Index](../)