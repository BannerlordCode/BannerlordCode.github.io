<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTeamDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTeamDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `DefaultTeamDeploymentPlan` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `DeploymentBoundaries` | `public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>> DeploymentBoundaries { get; }` |


## Key Methods

### SetSpawnWithHorses

```csharp
public void SetSpawnWithHorses(bool value)
```

### MakeDeploymentPlan

```csharp
public void MakeDeploymentPlan(FormationSceneSpawnEntry formationSceneSpawnEntries, bool isReinforcement = false, float spawnPathOffset = 0f, float targetOffset = 0f)
```

### UpdateReinforcementPlans

```csharp
public void UpdateReinforcementPlans()
```

### ClearPlan

```csharp
public void ClearPlan(bool isReinforcement = false)
```

### ClearAddedTroops

```csharp
public void ClearAddedTroops(bool isReinforcement = false)
```

### AddTroops

```csharp
public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount, bool isReinforcement = false)
```

### IsFirstPlan

```csharp
public bool IsFirstPlan(bool isReinforcement = false)
```

### IsPlanMade

```csharp
public bool IsPlanMade(bool isReinforcement = false)
```

### GetSpawnPathOffset

```csharp
public float GetSpawnPathOffset(bool isReinforcement = false)
```

### GetTargetOffset

```csharp
public float GetTargetOffset(bool isReinforcement = false)
```

### GetTroopCount

```csharp
public int GetTroopCount(bool isReinforcement = false)
```

### GetDeploymentFrame

```csharp
public MatrixFrame GetDeploymentFrame()
```

### HasDeploymentBoundaries

```csharp
public bool HasDeploymentBoundaries()
```

### GetFormationPlan

```csharp
public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass, bool isReinforcement = false)
```

### GetMeanPosition

```csharp
public Vec3 GetMeanPosition(bool isReinforcement = false)
```

### IsInitialPlanSuitableForFormations

```csharp
public bool IsInitialPlanSuitableForFormations(ValueTuple<int, int> troopDataPerFormationClass)
```

### IsPositionInsideDeploymentBoundaries

```csharp
public bool IsPositionInsideDeploymentBoundaries(in Vec2 position, { "id", "points" })
```

### GetClosestDeploymentBoundaryPosition

```csharp
public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position)
```

### GetPathDeploymentBoundaryIntersection

```csharp
public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)