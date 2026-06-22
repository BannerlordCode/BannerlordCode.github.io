<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationIntegrityDataGroup`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationIntegrityDataGroup

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `FormationIntegrityDataGroup` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)