<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LineFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LineFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `LineFormation` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `RankCount` | `public int RankCount { get; set; }` |
| `AreLocalPositionsDirty` | `public bool AreLocalPositionsDirty { get; set; }` |
| `IntervalMultiplier` | `public virtual float IntervalMultiplier { get; }` |
| `DistanceMultiplier` | `public virtual float DistanceMultiplier { get; }` |
| `Width` | `public virtual float Width { get; set; }` |
| `Depth` | `public virtual float Depth { get; set; }` |
| `FlankWidth` | `public float FlankWidth { get; set; }` |
| `RankDepth` | `public float RankDepth { get; }` |
| `MinimumFlankWidth` | `public float MinimumFlankWidth { get; }` |
| `MinimumWidth` | `public virtual float MinimumWidth { get; }` |
| `MaximumWidth` | `public virtual float MaximumWidth { get; }` |
| `IsStaggered` | `public bool IsStaggered { get; set; }` |
| `IsLoose` | `public virtual bool? IsLoose { get; set; }` |
| `PostponeReconstructUnitsFromUnits2D` | `public bool PostponeReconstructUnitsFromUnits2D { get; set; }` |
| `UnitCount` | `public int UnitCount { get; }` |
| `PositionedUnitCount` | `public int PositionedUnitCount { get; }` |


## Key Methods

### GetFileCountFromWidth

```csharp
public int GetFileCountFromWidth(float width)
```

### Clone

```csharp
public virtual IFormationArrangement Clone(IFormation formation)
```

### DeepCopyFrom

```csharp
public virtual void DeepCopyFrom(IFormationArrangement arrangement)
```

### Reset

```csharp
public void Reset()
```

### IsUnitPositionAvailable

```csharp
public bool IsUnitPositionAvailable(int fileIndex, int rankIndex)
```

### GetLocalPositionOfUnitOrDefault

```csharp
public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)
```

### GetLocalDirectionOfUnitOrDefault

```csharp
public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)
```

### GetWorldPositionOfUnitOrDefault

```csharp
public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)
```

### GetUnavailableUnitPositions

```csharp
public IEnumerable<Vec2> GetUnavailableUnitPositions()
```

### AddUnit

```csharp
public bool AddUnit(IFormationUnit unit)
```

### RemoveUnit

```csharp
public void RemoveUnit(IFormationUnit unit)
```

### GetUnit

```csharp
public IFormationUnit GetUnit(int fileIndex, int rankIndex)
```

### OnBatchRemoveStart

```csharp
public void OnBatchRemoveStart()
```

### OnBatchRemoveEnd

```csharp
public void OnBatchRemoveEnd()
```

### GetUnitsToPop

```csharp
public List<IFormationUnit> GetUnitsToPop(int count)
```

### GetUnitsToPopWithCondition

```csharp
public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool> currentCondition)
```

### GetUnitsToPop

```csharp
public List<IFormationUnit> GetUnitsToPop(int count, Vec3 targetPosition)
```

### GetLocalPositionOfUnitOrDefault

```csharp
public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)
```

### GetLocalPositionOfUnitOrDefaultWithAdjustment

```csharp
public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)
```

### GetLocalDirectionOfUnitOrDefault

```csharp
public virtual Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)