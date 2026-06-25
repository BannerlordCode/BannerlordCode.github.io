---
title: "BehaviorDefendSiegeWeapon"
description: "Auto-generated class reference for BehaviorDefendSiegeWeapon."
---
# BehaviorDefendSiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorDefendSiegeWeapon : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorDefendSiegeWeapon.cs`

## Overview

`BehaviorDefendSiegeWeapon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetDefensePositionFromTactic
`public void SetDefensePositionFromTactic(WorldPosition defensePosition)`

**Purpose:** **Purpose:** Assigns a new value to defense position from tactic and updates the object's internal state.

```csharp
// Obtain an instance of BehaviorDefendSiegeWeapon from the subsystem API first
BehaviorDefendSiegeWeapon behaviorDefendSiegeWeapon = ...;
behaviorDefendSiegeWeapon.SetDefensePositionFromTactic(defensePosition);
```

### SetDefendedSiegeWeaponFromTactic
`public void SetDefendedSiegeWeaponFromTactic(SiegeWeapon siegeWeapon)`

**Purpose:** **Purpose:** Assigns a new value to defended siege weapon from tactic and updates the object's internal state.

```csharp
// Obtain an instance of BehaviorDefendSiegeWeapon from the subsystem API first
BehaviorDefendSiegeWeapon behaviorDefendSiegeWeapon = ...;
behaviorDefendSiegeWeapon.SetDefendedSiegeWeaponFromTactic(siegeWeapon);
```

### GetBehaviorString
`public override TextObject GetBehaviorString()`

**Purpose:** **Purpose:** Reads and returns the behavior string value held by the this instance.

```csharp
// Obtain an instance of BehaviorDefendSiegeWeapon from the subsystem API first
BehaviorDefendSiegeWeapon behaviorDefendSiegeWeapon = ...;
var result = behaviorDefendSiegeWeapon.GetBehaviorString();
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** **Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorDefendSiegeWeapon from the subsystem API first
BehaviorDefendSiegeWeapon behaviorDefendSiegeWeapon = ...;
behaviorDefendSiegeWeapon.TickOccasionally();
```

### ResetBehavior
`public override void ResetBehavior()`

**Purpose:** **Purpose:** Returns behavior to its default or initial condition.

```csharp
// Obtain an instance of BehaviorDefendSiegeWeapon from the subsystem API first
BehaviorDefendSiegeWeapon behaviorDefendSiegeWeapon = ...;
behaviorDefendSiegeWeapon.ResetBehavior();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorDefendSiegeWeapon behaviorDefendSiegeWeapon = ...;
behaviorDefendSiegeWeapon.SetDefensePositionFromTactic(defensePosition);
```

## See Also

- [Area Index](../)