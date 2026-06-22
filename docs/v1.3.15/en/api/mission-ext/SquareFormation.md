<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SquareFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SquareFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SquareFormation` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Width` | `public override float Width { get; set; }` |
| `Depth` | `public override float Depth { get; }` |
| `MinimumWidth` | `public override float MinimumWidth { get; }` |
| `MaximumWidth` | `public override float MaximumWidth { get; }` |


## Key Methods

### Clone

```csharp
public override IFormationArrangement Clone(IFormation formation)
```

### DeepCopyFrom

```csharp
public override void DeepCopyFrom(IFormationArrangement arrangement)
```

### FormFromBorderSideWidth

```csharp
public void FormFromBorderSideWidth(float borderSideWidth)
```

### FormFromBorderUnitCountPerSide

```csharp
public void FormFromBorderUnitCountPerSide(int unitCountPerSide)
```

### GetUnitsPerSideFromRankCount

```csharp
public int GetUnitsPerSideFromRankCount(int rankCount)
```

### FormFromRankCount

```csharp
public void FormFromRankCount(int rankCount)
```

### GetLocalDirectionOfUnitOrDefault

```csharp
public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)
```

### TurnBackwards

```csharp
public override void TurnBackwards()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)