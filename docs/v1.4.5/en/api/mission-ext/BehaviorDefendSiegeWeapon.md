<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorDefendSiegeWeapon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BehaviorDefendSiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorDefendSiegeWeapon : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorDefendSiegeWeapon.cs`

## Overview

`BehaviorDefendSiegeWeapon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetDefensePositionFromTactic
`public void SetDefensePositionFromTactic(WorldPosition defensePosition)`

**Purpose:** Sets the value or state of `defense position from tactic`.

### SetDefendedSiegeWeaponFromTactic
`public void SetDefendedSiegeWeaponFromTactic(SiegeWeapon siegeWeapon)`

**Purpose:** Sets the value or state of `defended siege weapon from tactic`.

### GetBehaviorString
`public override TextObject GetBehaviorString()`

**Purpose:** Gets the current value of `behavior string`.

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

### ResetBehavior
`public override void ResetBehavior()`

**Purpose:** Resets `behavior` to its initial state.

## Usage Example

```csharp
var value = new BehaviorDefendSiegeWeapon();
value.SetDefensePositionFromTactic(defensePosition);
```

## See Also

- [Complete Class Catalog](../catalog)