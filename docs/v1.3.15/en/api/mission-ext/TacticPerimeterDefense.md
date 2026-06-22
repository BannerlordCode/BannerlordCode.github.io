<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticPerimeterDefense`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticPerimeterDefense

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `TacticPerimeterDefense` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `AggregatePosition` | `public Vec2 AggregatePosition { get; }` |
| `MedianAggregatePosition` | `public WorldPosition MedianAggregatePosition { get; }` |
| `EnemyFormations` | `public MBReadOnlyList<Formation> EnemyFormations { get; }` |


## Key Methods

### TickOccasionally

```csharp
public override void TickOccasionally()
```

### UpdateClusterData

```csharp
public void UpdateClusterData()
```

### AddToCluster

```csharp
public void AddToCluster(Formation formation)
```

### RemoveFromCluster

```csharp
public void RemoveFromCluster(Formation formation)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)