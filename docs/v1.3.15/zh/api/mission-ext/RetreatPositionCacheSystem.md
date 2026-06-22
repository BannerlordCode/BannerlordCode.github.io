<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RetreatPositionCacheSystem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RetreatPositionCacheSystem

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`RetreatPositionCacheSystem` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `RetreatPositionCache` | `public Formation.RetreatPositionCacheSystem RetreatPositionCache { get; }` |
| `RepresentativeClass` | `public FormationClass RepresentativeClass { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `UnitSpacing` | `public int UnitSpacing { get; }` |
| `OrderPositionLock` | `public object OrderPositionLock { get; }` |
| `CountOfUnits` | `public int CountOfUnits { get; }` |
| `CountOfDetachedUnits` | `public int CountOfDetachedUnits { get; }` |
| `CountOfUndetachableNonPlayerUnits` | `public int CountOfUndetachableNonPlayerUnits { get; }` |
| `CountOfUnitsWithoutDetachedOnes` | `public int CountOfUnitsWithoutDetachedOnes { get; }` |
| `UnitsWithoutLooseDetachedOnes` | `public MBReadOnlyList<IFormationUnit> UnitsWithoutLooseDetachedOnes { get; }` |
| `CountOfUnitsWithoutLooseDetachedOnes` | `public int CountOfUnitsWithoutLooseDetachedOnes { get; }` |
| `CountOfDetachableNonPlayerUnits` | `public int CountOfDetachableNonPlayerUnits { get; }` |
| `OrderPosition` | `public Vec2 OrderPosition { get; }` |
| `OrderGroundPosition` | `public Vec3 OrderGroundPosition { get; }` |
| `OrderPositionIsValid` | `public bool OrderPositionIsValid { get; }` |
| `Depth` | `public float Depth { get; }` |
| `MinimumWidth` | `public float MinimumWidth { get; }` |
| `MaximumWidth` | `public float MaximumWidth { get; }` |
| `UnitDiameter` | `public float UnitDiameter { get; }` |


## 主要方法

### CreateNewOrderWorldPosition

```csharp
public WorldPosition CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)
```

### SetMovementOrder

```csharp
public void SetMovementOrder(MovementOrder input)
```

### SetFacingOrder

```csharp
public void SetFacingOrder(FacingOrder order)
```

### SetArrangementOrder

```csharp
public void SetArrangementOrder(ArrangementOrder order)
```

### SetFormOrder

```csharp
public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)
```

### SetRidingOrder

```csharp
public void SetRidingOrder(RidingOrder order)
```

### SetFiringOrder

```csharp
public void SetFiringOrder(FiringOrder order)
```

### SetControlledByAI

```csharp
public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)
```

### SetTargetFormation

```csharp
public void SetTargetFormation(Formation targetFormation)
```

### OnDeploymentFinished

```csharp
public void OnDeploymentFinished()
```

### ResetArrangementOrderTickTimer

```csharp
public void ResetArrangementOrderTickTimer()
```

### SetPositioning

```csharp
public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)
```

### GetCountOfUnitsWithCondition

```csharp
public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)
```

### GetReadonlyMovementOrderReference

```csharp
public readonly ref MovementOrder GetReadonlyMovementOrderReference()
```

### GetFirstUnit

```csharp
public Agent GetFirstUnit()
```

### GetCountOfUnitsBelongingToLogicalClass

```csharp
public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass)
```

### GetCountOfUnitsBelongingToPhysicalClass

```csharp
public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)
```

### SetSpawnIndex

```csharp
public void SetSpawnIndex(int value = 0)
```

### GetNextSpawnIndex

```csharp
public int GetNextSpawnIndex()
```

### GetUnitWithIndex

```csharp
public Agent GetUnitWithIndex(int unitIndex)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)