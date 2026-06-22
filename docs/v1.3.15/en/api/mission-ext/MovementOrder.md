<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MovementOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MovementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MovementOrder` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TargetFormation` | `public Formation TargetFormation { get; }` |
| `_targetAgent` | `public Agent _targetAgent { get; }` |
| `OrderType` | `public OrderType OrderType { get; }` |
| `MovementState` | `public MovementOrder.MovementStateEnum MovementState { get; }` |


## Key Methods

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### MovementOrderChargeToTarget

```csharp
public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation)
```

### MovementOrderFollow

```csharp
public static MovementOrder MovementOrderFollow(Agent targetAgent)
```

### MovementOrderFollowEntity

```csharp
public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity)
```

### MovementOrderMove

```csharp
public static MovementOrder MovementOrderMove(WorldPosition position)
```

### MovementOrderAttackEntity

```csharp
public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity, bool surroundEntity)
```

### GetMovementOrderDefensiveness

```csharp
public static int GetMovementOrderDefensiveness(MovementOrder.MovementOrderEnum orderEnum)
```

### GetMovementOrderDefensivenessChange

```csharp
public static int GetMovementOrderDefensivenessChange(MovementOrder.MovementOrderEnum previousOrderEnum, MovementOrder.MovementOrderEnum nextOrderEnum)
```

### GetPosition

```csharp
public Vec2 GetPosition(Formation f)
```

### GetTargetVelocity

```csharp
public Vec2 GetTargetVelocity()
```

### CreateNewOrderWorldPositionMT

```csharp
public WorldPosition CreateNewOrderWorldPositionMT(Formation f, WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)
```

### ResetPositionCache

```csharp
public void ResetPositionCache()
```

### AreOrdersPracticallySame

```csharp
public bool AreOrdersPracticallySame(MovementOrder m1, MovementOrder m2, bool isAIControlled)
```

### OnApply

```csharp
public void OnApply(Formation formation)
```

### OnCancel

```csharp
public void OnCancel(Formation formation)
```

### OnUnitJoinOrLeave

```csharp
public void OnUnitJoinOrLeave(Formation formation, Agent unit, bool isJoining)
```

### IsApplicable

```csharp
public bool IsApplicable(Formation formation)
```

### Tick

```csharp
public bool Tick(Formation formation)
```

### OnArrangementChanged

```csharp
public void OnArrangementChanged(Formation formation)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)