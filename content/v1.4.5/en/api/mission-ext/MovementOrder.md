---
title: "MovementOrder"
description: "Auto-generated class reference for MovementOrder."
---
# MovementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MovementOrder`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MovementOrder.cs`

## Overview

`MovementOrder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetFormation` | `public Formation TargetFormation { get; }` |
| `_targetAgent` | `public Agent _targetAgent { get; }` |
| `OrderType` | `public OrderType OrderType { get; }` |
| `MovementState` | `public MovementStateEnum MovementState { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.GetHashCode();
```

### MovementOrderChargeToTarget
`public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation)`

**Purpose:** Moves `ment order charge to target` to a new position or state.

```csharp
// Static call; no instance required
MovementOrder.MovementOrderChargeToTarget(targetFormation);
```

### MovementOrderFollow
`public static MovementOrder MovementOrderFollow(Agent targetAgent)`

**Purpose:** Moves `ment order follow` to a new position or state.

```csharp
// Static call; no instance required
MovementOrder.MovementOrderFollow(targetAgent);
```

### MovementOrderFollowEntity
`public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity)`

**Purpose:** Moves `ment order follow entity` to a new position or state.

```csharp
// Static call; no instance required
MovementOrder.MovementOrderFollowEntity(targetEntity);
```

### MovementOrderMove
`public static MovementOrder MovementOrderMove(WorldPosition position)`

**Purpose:** Moves `ment order move` to a new position or state.

```csharp
// Static call; no instance required
MovementOrder.MovementOrderMove(position);
```

### MovementOrderAttackEntity
`public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity, bool surroundEntity)`

**Purpose:** Moves `ment order attack entity` to a new position or state.

```csharp
// Static call; no instance required
MovementOrder.MovementOrderAttackEntity(targetEntity, false);
```

### GetMovementOrderDefensiveness
`public static int GetMovementOrderDefensiveness(MovementOrderEnum orderEnum)`

**Purpose:** Reads and returns the `movement order defensiveness` value held by the current object.

```csharp
// Static call; no instance required
MovementOrder.GetMovementOrderDefensiveness(orderEnum);
```

### GetMovementOrderDefensivenessChange
`public static int GetMovementOrderDefensivenessChange(MovementOrderEnum previousOrderEnum, MovementOrderEnum nextOrderEnum)`

**Purpose:** Reads and returns the `movement order defensiveness change` value held by the current object.

```csharp
// Static call; no instance required
MovementOrder.GetMovementOrderDefensivenessChange(previousOrderEnum, nextOrderEnum);
```

### GetPosition
`public Vec2 GetPosition(Formation f)`

**Purpose:** Reads and returns the `position` value held by the current object.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.GetPosition(f);
```

### GetTargetVelocity
`public Vec2 GetTargetVelocity()`

**Purpose:** Reads and returns the `target velocity` value held by the current object.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.GetTargetVelocity();
```

### CreateNewOrderWorldPositionMT
`public WorldPosition CreateNewOrderWorldPositionMT(Formation f, WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**Purpose:** Constructs a new `new order world position m t` entity and returns it to the caller.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.CreateNewOrderWorldPositionMT(f, worldPositionEnforcedCache);
```

### ResetPositionCache
`public void ResetPositionCache()`

**Purpose:** Returns `position cache` to its default or initial condition.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
movementOrder.ResetPositionCache();
```

### AreOrdersPracticallySame
`public bool AreOrdersPracticallySame(MovementOrder m1, MovementOrder m2, bool isAIControlled)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.AreOrdersPracticallySame(m1, m2, false);
```

### OnApply
`public void OnApply(Formation formation)`

**Purpose:** Invoked when the `apply` event is raised.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
movementOrder.OnApply(formation);
```

### OnCancel
`public void OnCancel(Formation formation)`

**Purpose:** Invoked when the `cancel` event is raised.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
movementOrder.OnCancel(formation);
```

### OnUnitJoinOrLeave
`public void OnUnitJoinOrLeave(Formation formation, Agent unit, bool isJoining)`

**Purpose:** Invoked when the `unit join or leave` event is raised.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
movementOrder.OnUnitJoinOrLeave(formation, unit, false);
```

### IsApplicable
`public bool IsApplicable(Formation formation)`

**Purpose:** Determines whether the current object is in the `applicable` state or condition.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.IsApplicable(formation);
```

### Tick
`public bool Tick(Formation formation)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.Tick(formation);
```

### OnArrangementChanged
`public void OnArrangementChanged(Formation formation)`

**Purpose:** Invoked when the `arrangement changed` event is raised.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
movementOrder.OnArrangementChanged(formation);
```

### Advance
`public void Advance(Formation formation, float distance)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
movementOrder.Advance(formation, 0);
```

### FallBack
`public void FallBack(Formation formation, float distance)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
movementOrder.FallBack(formation, 0);
```

### GetSubstituteOrder
`public MovementOrder GetSubstituteOrder(Formation formation)`

**Purpose:** Reads and returns the `substitute order` value held by the current object.

```csharp
// Obtain an instance of MovementOrder from the subsystem API first
MovementOrder movementOrder = ...;
var result = movementOrder.GetSubstituteOrder(formation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MovementOrder movementOrder = ...;
movementOrder.Equals(obj);
```

## See Also

- [Area Index](../)