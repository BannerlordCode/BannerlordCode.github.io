---
title: "StonePile"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StonePile`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StonePile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePile : UsableMachine, IDetachment`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/StonePile.cs`

## Overview

`StonePile` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new StonePile();
value.SetAmmo(0);
```

## See Also

- [Complete Class Catalog](../catalog)