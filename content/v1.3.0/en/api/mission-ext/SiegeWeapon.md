---
title: "SiegeWeapon"
description: "Auto-generated class reference for SiegeWeapon."
---
# SiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SiegeWeapon : UsableMachine, ITargetable`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/SiegeWeapon.cs`

## Overview

`SiegeWeapon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ForcedUse` | `public bool ForcedUse { get; }` |
| `IsUsed` | `public bool IsUsed { get; }` |
| `Side` | `public virtual BattleSideEnum Side { get; }` |
| `HitObjectName` | `public override TextObject HitObjectName { get; }` |
| `HasWaitFrame` | `public override bool HasWaitFrame { get; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |

## Key Methods

### SetForcedUse
`public void SetForcedUse(bool value)`

**Purpose:** Assigns a new value to `forced use` and updates the object's internal state.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
siegeWeapon.SetForcedUse(false);
```

### GetSiegeEngineType
`public abstract SiegeEngineType GetSiegeEngineType()`

**Purpose:** Reads and returns the `siege engine type` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetSiegeEngineType();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTickRequirement();
```

### TickAuxForInit
`public void TickAuxForInit()`

**Purpose:** Advances the `aux for init` state each frame or update cycle.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
siegeWeapon.TickAuxForInit();
```

### ShouldAutoLeaveDetachmentWhenDisabled
`public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.ShouldAutoLeaveDetachmentWhenDisabled(sideEnum);
```

### AutoAttachUserToFormation
`public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.AutoAttachUserToFormation(sideEnum);
```

### HasToBeDefendedByUser
`public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

**Purpose:** Determines whether the current object already holds `to be defended by user`.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.HasToBeDefendedByUser(sideEnum);
```

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

**Purpose:** Reads and returns the `target entity` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetEntity();
```

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

**Purpose:** Reads and returns the `targeting offset` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetingOffset();
```

### GetSide
`public BattleSideEnum GetSide()`

**Purpose:** Reads and returns the `side` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetSide();
```

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

**Purpose:** Reads and returns the `target global velocity` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetGlobalVelocity();
```

### IsDestructable
`public bool IsDestructable()`

**Purpose:** Determines whether the current object is in the `destructable` state or condition.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.IsDestructable();
```

### Entity
`public WeakGameEntity Entity()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.Entity();
```

### GetPhysicsGlobalBoxMax
`public Vec3 GetPhysicsGlobalBoxMax()`

**Purpose:** Reads and returns the `physics global box max` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetPhysicsGlobalBoxMax();
```

### GetPhysicsGlobalBoxMin
`public Vec3 GetPhysicsGlobalBoxMin()`

**Purpose:** Reads and returns the `physics global box min` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetPhysicsGlobalBoxMin();
```

### GetTargetFlags
`public abstract TargetFlags GetTargetFlags()`

**Purpose:** Reads and returns the `target flags` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetFlags();
```

### GetTargetValue
`public abstract float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Reads and returns the `target value` value held by the current object.

```csharp
// Obtain an instance of SiegeWeapon from the subsystem API first
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetValue(weaponPos);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SiegeWeapon instance = ...;
```

## See Also

- [Area Index](../)