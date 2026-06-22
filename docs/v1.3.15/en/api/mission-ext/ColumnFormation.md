<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ColumnFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ColumnFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ColumnFormation` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Vanguard` | `public IFormationUnit Vanguard { get; }` |
| `ColumnCount` | `public int ColumnCount { get; set; }` |
| `RankCount` | `public int RankCount { get; }` |
| `VanguardFileIndex` | `public int VanguardFileIndex { get; }` |
| `DistanceMultiplier` | `public float DistanceMultiplier { get; }` |
| `IntervalMultiplier` | `public float IntervalMultiplier { get; }` |
| `Width` | `public float Width { get; set; }` |
| `FlankWidth` | `public float FlankWidth { get; set; }` |
| `UnitPositionsOnVanguardFileIndex` | `public List<Vec2> UnitPositionsOnVanguardFileIndex { get; }` |
| `Depth` | `public float Depth { get; }` |
| `RankDepth` | `public float RankDepth { get; }` |
| `MinimumWidth` | `public float MinimumWidth { get; }` |
| `MaximumWidth` | `public float MaximumWidth { get; }` |
| `MinimumFlankWidth` | `public float MinimumFlankWidth { get; }` |
| `IsLoose` | `public bool? IsLoose { get; }` |
| `UnitCount` | `public int UnitCount { get; }` |
| `PositionedUnitCount` | `public int PositionedUnitCount { get; }` |


## Key Methods

### Clone

```csharp
public IFormationArrangement Clone(IFormation formation)
```

### DeepCopyFrom

```csharp
public void DeepCopyFrom(IFormationArrangement arrangement)
```

### GetPlayerUnit

```csharp
public IFormationUnit GetPlayerUnit()
```

### GetAllUnits

```csharp
public MBReadOnlyList<IFormationUnit> GetAllUnits()
```

### GetAllUnits

```csharp
public void GetAllUnits(in MBList<IFormationUnit> allUnitsListToBeFilledIn)
```

### GetUnpositionedUnits

```csharp
public MBList<IFormationUnit> GetUnpositionedUnits()
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

### GetLocalPositionOfUnitOrDefault

```csharp
public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)
```

### GetLocalPositionOfUnitOrDefaultWithAdjustment

```csharp
public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)
```

### GetWorldPositionOfUnitOrDefault

```csharp
public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)
```

### GetLocalDirectionOfUnitOrDefault

```csharp
public Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)
```

### GetUnitsToPop

```csharp
public List<IFormationUnit> GetUnitsToPop(int count)
```

### GetUnitsToPop

```csharp
public List<IFormationUnit> GetUnitsToPop(int count, Vec3 targetPosition)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)