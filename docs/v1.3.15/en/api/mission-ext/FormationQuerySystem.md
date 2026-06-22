<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationQuerySystem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `FormationQuerySystem` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Team` | `public TeamQuerySystem Team { get; }` |
| `FormationPower` | `public float FormationPower { get; }` |
| `FormationPowerReadOnly` | `public float FormationPowerReadOnly { get; }` |
| `FormationMeleeFightingPower` | `public float FormationMeleeFightingPower { get; }` |
| `FormationMeleeFightingPowerReadOnly` | `public float FormationMeleeFightingPowerReadOnly { get; }` |
| `EstimatedDirection` | `public Vec2 EstimatedDirection { get; }` |
| `EstimatedDirectionReadOnly` | `public Vec2 EstimatedDirectionReadOnly { get; }` |
| `EstimatedInterval` | `public float EstimatedInterval { get; }` |
| `EstimatedIntervalReadOnly` | `public float EstimatedIntervalReadOnly { get; }` |
| `AverageAllyPosition` | `public Vec2 AverageAllyPosition { get; }` |
| `AverageAllyPositionReadOnly` | `public Vec2 AverageAllyPositionReadOnly { get; }` |
| `IdealAverageDisplacement` | `public float IdealAverageDisplacement { get; }` |
| `IdealAverageDisplacementReadOnly` | `public float IdealAverageDisplacementReadOnly { get; }` |
| `LocalAllyUnits` | `public MBList<Agent> LocalAllyUnits { get; }` |
| `LocalAllyUnitsReadOnly` | `public MBList<Agent> LocalAllyUnitsReadOnly { get; }` |
| `LocalEnemyUnits` | `public MBList<Agent> LocalEnemyUnits { get; }` |
| `LocalEnemyUnitsReadOnly` | `public MBList<Agent> LocalEnemyUnitsReadOnly { get; }` |
| `MainClass` | `public FormationClass MainClass { get; }` |
| `MainClassReadOnly` | `public FormationClass MainClassReadOnly { get; }` |
| `InfantryUnitRatio` | `public float InfantryUnitRatio { get; }` |


## Key Methods

### EvaluateAllPreliminaryQueryData

```csharp
public void EvaluateAllPreliminaryQueryData()
```

### ForceExpireCavalryUnitRatio

```csharp
public void ForceExpireCavalryUnitRatio()
```

### Expire

```csharp
public void Expire()
```

### ExpireAfterUnitAddRemove

```csharp
public void ExpireAfterUnitAddRemove()
```

### GetClassWeightedFactor

```csharp
public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)