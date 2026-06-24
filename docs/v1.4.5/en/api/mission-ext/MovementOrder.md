<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MovementOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MovementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MovementOrder`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MovementOrder.cs`

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

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### MovementOrderChargeToTarget
`public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation)`

**Purpose:** Handles logic related to `movement order charge to target`.

### MovementOrderFollow
`public static MovementOrder MovementOrderFollow(Agent targetAgent)`

**Purpose:** Handles logic related to `movement order follow`.

### MovementOrderFollowEntity
`public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity)`

**Purpose:** Handles logic related to `movement order follow entity`.

### MovementOrderMove
`public static MovementOrder MovementOrderMove(WorldPosition position)`

**Purpose:** Handles logic related to `movement order move`.

### MovementOrderAttackEntity
`public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity, bool surroundEntity)`

**Purpose:** Handles logic related to `movement order attack entity`.

### GetMovementOrderDefensiveness
`public static int GetMovementOrderDefensiveness(MovementOrderEnum orderEnum)`

**Purpose:** Gets the current value of `movement order defensiveness`.

### GetMovementOrderDefensivenessChange
`public static int GetMovementOrderDefensivenessChange(MovementOrderEnum previousOrderEnum, MovementOrderEnum nextOrderEnum)`

**Purpose:** Gets the current value of `movement order defensiveness change`.

### GetPosition
`public Vec2 GetPosition(Formation f)`

**Purpose:** Gets the current value of `position`.

### GetTargetVelocity
`public Vec2 GetTargetVelocity()`

**Purpose:** Gets the current value of `target velocity`.

### CreateNewOrderWorldPositionMT
`public WorldPosition CreateNewOrderWorldPositionMT(Formation f, WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**Purpose:** Creates a new `new order world position m t` instance or object.

### ResetPositionCache
`public void ResetPositionCache()`

**Purpose:** Resets `position cache` to its initial state.

### AreOrdersPracticallySame
`public bool AreOrdersPracticallySame(MovementOrder m1, MovementOrder m2, bool isAIControlled)`

**Purpose:** Handles logic related to `are orders practically same`.

### OnApply
`public void OnApply(Formation formation)`

**Purpose:** Called when the `apply` event is raised.

### OnCancel
`public void OnCancel(Formation formation)`

**Purpose:** Called when the `cancel` event is raised.

### OnUnitJoinOrLeave
`public void OnUnitJoinOrLeave(Formation formation, Agent unit, bool isJoining)`

**Purpose:** Called when the `unit join or leave` event is raised.

### IsApplicable
`public bool IsApplicable(Formation formation)`

**Purpose:** Handles logic related to `is applicable`.

### Tick
`public bool Tick(Formation formation)`

**Purpose:** Handles logic related to `tick`.

### OnArrangementChanged
`public void OnArrangementChanged(Formation formation)`

**Purpose:** Called when the `arrangement changed` event is raised.

### Advance
`public void Advance(Formation formation, float distance)`

**Purpose:** Handles logic related to `advance`.

### FallBack
`public void FallBack(Formation formation, float distance)`

**Purpose:** Handles logic related to `fall back`.

### GetSubstituteOrder
`public MovementOrder GetSubstituteOrder(Formation formation)`

**Purpose:** Gets the current value of `substitute order`.

## Usage Example

```csharp
var value = new MovementOrder();
value.Equals(obj);
```

## See Also

- [Complete Class Catalog](../catalog)