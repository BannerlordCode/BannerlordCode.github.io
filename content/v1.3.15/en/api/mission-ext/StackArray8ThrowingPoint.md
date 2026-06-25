---
title: "StackArray8ThrowingPoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray8ThrowingPoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8ThrowingPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct StackArray8ThrowingPoint`
**Area:** mission-ext

## Overview

`StackArray8ThrowingPoint` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AmmoCount` | `public int AmmoCount { get; set; }` |
| `HasThrowingPointUsed` | `public bool HasThrowingPointUsed { get; }` |
| `Side` | `public virtual BattleSideEnum Side { get; }` |
| `MaxUserCount` | `public override int MaxUserCount { get; }` |
| `ReadAmmoCount` | `public int ReadAmmoCount { get; }` |
| `this` | `public StonePile.ThrowingPoint this { get; }` |

## Key Methods

### SetAmmo
`public void SetAmmo(int ammoLeft)`

**Purpose:** Sets the value or state of `ammo`.

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Creates a new `a i behavior object` instance or object.

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

**Purpose:** Handles logic related to `is in range to check alternative points`.

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**Purpose:** Gets the current value of `best point alternative to`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Handles logic related to `write to network`.

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

### CanUseAttackEntity
`public bool CanUseAttackEntity()`

**Purpose:** Checks whether the current object can `use attack entity`.

## Usage Example

```csharp
// First obtain a StackArray8ThrowingPoint instance from game state, then call one of its public methods
var value = new StackArray8ThrowingPoint();
value.SetAmmo(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
