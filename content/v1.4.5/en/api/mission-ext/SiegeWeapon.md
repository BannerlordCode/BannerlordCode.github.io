---
title: "SiegeWeapon"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeWeapon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SiegeWeapon : UsableMachine, ITargetable`
**Base:** `UsableMachine`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeWeapon.cs`

## Overview

`SiegeWeapon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ForcedUse` | `public bool ForcedUse { get; }` |
| `IsUsed` | `public bool IsUsed { get; }` |
| `HasWaitFrame` | `public override bool HasWaitFrame { get; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |

## Key Methods

### SetForcedUse
`public void SetForcedUse(bool value)`

**Purpose:** Sets the value or state of `forced use`.

### GetSiegeEngineType
`public abstract SiegeEngineType GetSiegeEngineType()`

**Purpose:** Gets the current value of `siege engine type`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### TickAuxForInit
`public void TickAuxForInit()`

**Purpose:** Handles logic related to `tick aux for init`.

### ShouldAutoLeaveDetachmentWhenDisabled
`public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

**Purpose:** Handles logic related to `should auto leave detachment when disabled`.

### AutoAttachUserToFormation
`public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

**Purpose:** Handles logic related to `auto attach user to formation`.

### HasToBeDefendedByUser
`public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

**Purpose:** Checks whether the current object has/contains `to be defended by user`.

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

**Purpose:** Gets the current value of `target entity`.

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

**Purpose:** Gets the current value of `targeting offset`.

### GetSide
`public BattleSideEnum GetSide()`

**Purpose:** Gets the current value of `side`.

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

**Purpose:** Gets the current value of `target global velocity`.

### IsDestructable
`public bool IsDestructable()`

**Purpose:** Handles logic related to `is destructable`.

### Entity
`public WeakGameEntity Entity()`

**Purpose:** Handles logic related to `entity`.

### OnShipCaptured
`public virtual void OnShipCaptured(BattleSideEnum newDefaultSide)`

**Purpose:** Called when the `ship captured` event is raised.

### GetTargetFlags
`public abstract TargetFlags GetTargetFlags()`

**Purpose:** Gets the current value of `target flags`.

### GetTargetValue
`public abstract float GetTargetValue(List<Vec3> weaponPos)`

**Purpose:** Gets the current value of `target value`.

## Usage Example

```csharp
var implementation = new CustomSiegeWeapon();
```

## See Also

- [Complete Class Catalog](../catalog)