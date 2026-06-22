<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircularFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircularFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CircularFormation` is a class in the `TaleWorlds.MountAndBlade` namespace.
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

### GetLocalDirectionOfUnitOrDefault

```csharp
public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)
```

### GetCircumferenceFromRankCount

```csharp
public float GetCircumferenceFromRankCount(int rankCount)
```

### FormFromCircumference

```csharp
public void FormFromCircumference(float circumference)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)