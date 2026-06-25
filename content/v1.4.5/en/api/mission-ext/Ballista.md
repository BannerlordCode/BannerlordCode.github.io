---
title: "Ballista"
description: "Auto-generated class reference for Ballista."
---
# Ballista

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Ballista : RangedSiegeWeapon, ISpawnable`
**Base:** `RangedSiegeWeapon`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Ballista.cs`

## Overview

`Ballista` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Reads and returns the `siege engine type` value held by the current object.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
var result = ballista.GetSiegeEngineType();
```

### OnPilotAssignedDuringSpawn
`public override void OnPilotAssignedDuringSpawn()`

**Purpose:** Invoked when the `pilot assigned during spawn` event is raised.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
ballista.OnPilotAssignedDuringSpawn();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new `a i behavior object` entity and returns it to the caller.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
var result = ballista.CreateAIBehaviorObject();
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
var result = ballista.GetTickRequirement();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the `action text for standing point` value held by the current object.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
var result = ballista.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
var result = ballista.GetDescriptionText(gameEntity);
```

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
var result = ballista.ProcessTargetValue(0, flags);
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**Purpose:** Reads and returns the `target flags` value held by the current object.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
var result = ballista.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Reads and returns the `target value` value held by the current object.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
var result = ballista.GetTargetValue(weaponPos);
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**Purpose:** Assigns a new value to `spawned from spawner` and updates the object's internal state.

```csharp
// Obtain an instance of Ballista from the subsystem API first
Ballista ballista = ...;
ballista.SetSpawnedFromSpawner();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Ballista ballista = ...;
ballista.GetSiegeEngineType();
```

## See Also

- [Area Index](../)