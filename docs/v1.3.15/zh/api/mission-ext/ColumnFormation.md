<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ColumnFormation`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ColumnFormation

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`ColumnFormation` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)