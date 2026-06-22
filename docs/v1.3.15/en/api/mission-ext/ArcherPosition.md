<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArcherPosition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArcherPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ArcherPosition` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `TacticalArcherPosition` | `public TacticalPosition TacticalArcherPosition { get; }` |
| `ConnectedSides` | `public int ConnectedSides { get; }` |


## Key Methods

### GetLastAssignedFormation

```csharp
public Formation GetLastAssignedFormation(int teamIndex)
```

### IsArcherPositionRelatedToSide

```csharp
public bool IsArcherPositionRelatedToSide(FormationAI.BehaviorSide side)
```

### GetArcherPositionClosestSide

```csharp
public FormationAI.BehaviorSide GetArcherPositionClosestSide()
```

### OnDeploymentFinished

```csharp
public void OnDeploymentFinished(SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)
```

### SetLastAssignedFormation

```csharp
public void SetLastAssignedFormation(int teamIndex, Formation formation)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)