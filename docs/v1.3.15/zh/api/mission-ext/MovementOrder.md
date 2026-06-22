<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MovementOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MovementOrder

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MovementOrder` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `TargetFormation` | `public Formation TargetFormation { get; }` |
| `_targetAgent` | `public Agent _targetAgent { get; }` |
| `OrderType` | `public OrderType OrderType { get; }` |
| `MovementState` | `public MovementOrder.MovementStateEnum MovementState { get; }` |


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)