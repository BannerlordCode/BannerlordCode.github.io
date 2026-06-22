<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamQuerySystem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `TeamQuerySystem` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MemberCount` | `public int MemberCount { get; }` |
| `MedianPosition` | `public WorldPosition MedianPosition { get; }` |
| `AveragePosition` | `public Vec2 AveragePosition { get; }` |
| `AverageEnemyPosition` | `public Vec2 AverageEnemyPosition { get; }` |
| `MedianTargetFormation` | `public FormationQuerySystem MedianTargetFormation { get; }` |
| `MedianTargetFormationPosition` | `public WorldPosition MedianTargetFormationPosition { get; }` |
| `LeftFlankEdgePosition` | `public WorldPosition LeftFlankEdgePosition { get; }` |
| `RightFlankEdgePosition` | `public WorldPosition RightFlankEdgePosition { get; }` |
| `InfantryRatio` | `public float InfantryRatio { get; }` |
| `RangedRatio` | `public float RangedRatio { get; }` |
| `CavalryRatio` | `public float CavalryRatio { get; }` |
| `RangedCavalryRatio` | `public float RangedCavalryRatio { get; }` |
| `AllyUnitCount` | `public int AllyUnitCount { get; }` |
| `EnemyUnitCount` | `public int EnemyUnitCount { get; }` |
| `AllyInfantryRatio` | `public float AllyInfantryRatio { get; }` |
| `AllyRangedRatio` | `public float AllyRangedRatio { get; }` |
| `AllyCavalryRatio` | `public float AllyCavalryRatio { get; }` |
| `AllyRangedCavalryRatio` | `public float AllyRangedCavalryRatio { get; }` |
| `EnemyInfantryRatio` | `public float EnemyInfantryRatio { get; }` |
| `EnemyRangedRatio` | `public float EnemyRangedRatio { get; }` |


## Key Methods

### Expire

```csharp
public void Expire()
```

### ExpireAfterUnitAddRemove

```csharp
public void ExpireAfterUnitAddRemove()
```

### RegisterDeath

```csharp
public void RegisterDeath()
```

### RegisterDeathByRanged

```csharp
public void RegisterDeathByRanged()
```

### GetLocalAllyPower

```csharp
public float GetLocalAllyPower(Vec2 target)
```

### GetLocalEnemyPower

```csharp
public float GetLocalEnemyPower(Vec2 target)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)