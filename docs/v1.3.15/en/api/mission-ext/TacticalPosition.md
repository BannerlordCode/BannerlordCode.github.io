<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticalPosition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticalPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `TacticalPosition` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public WorldPosition Position { get; set; }` |
| `Direction` | `public Vec2 Direction { get; set; }` |
| `Width` | `public float Width { get; }` |
| `Slope` | `public float Slope { get; }` |
| `IsInsurmountable` | `public bool IsInsurmountable { get; }` |
| `IsOuterEdge` | `public bool IsOuterEdge { get; set; }` |
| `LinkedTacticalPositions` | `public List<TacticalPosition> LinkedTacticalPositions { get; set; }` |
| `TacticalPositionType` | `public TacticalPosition.TacticalPositionTypeEnum TacticalPositionType { get; }` |
| `TacticalRegionMembership` | `public TacticalRegion.TacticalRegionTypeEnum TacticalRegionMembership { get; }` |
| `TacticalPositionSide` | `public FormationAI.BehaviorSide TacticalPositionSide { get; }` |


## Key Methods

### AfterMissionStart

```csharp
public override void AfterMissionStart()
```

### SetWidth

```csharp
public void SetWidth(float width)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)