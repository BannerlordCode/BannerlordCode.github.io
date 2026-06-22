<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMissionDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMissionDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `DefaultMissionDeploymentPlan` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### Initialize

```csharp
public void Initialize()
```

### ClearDeploymentPlan

```csharp
public void ClearDeploymentPlan(Team team)
```

### ClearReinforcementPlan

```csharp
public void ClearReinforcementPlan(Team team)
```

### HasPlayerSpawnFrame

```csharp
public bool HasPlayerSpawnFrame(BattleSideEnum battleSide)
```

### GetPlayerSpawnFrame

```csharp
public bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)
```

### HasSignificantMountedTroops

```csharp
public static bool HasSignificantMountedTroops(int footTroopCount, int mountedTroopCount)
```

### ClearAddedTroops

```csharp
public void ClearAddedTroops(Team team, bool isReinforcement = false)
```

### ClearAll

```csharp
public void ClearAll()
```

### AddTroops

```csharp
public void AddTroops(Team team, FormationClass formationClass, int footTroopCount, int mountedTroopCount = 0, bool isReinforcement = false)
```

### SetSpawnWithHorses

```csharp
public void SetSpawnWithHorses(Team team, bool spawnWithHorses)
```

### MakeDefaultDeploymentPlans

```csharp
public void MakeDefaultDeploymentPlans()
```

### MakeDeploymentPlan

```csharp
public void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)
```

### MakeReinforcementDeploymentPlan

```csharp
public void MakeReinforcementDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)
```

### RemakeDeploymentPlan

```csharp
public bool RemakeDeploymentPlan(Team team)
```

### IsPositionInsideDeploymentBoundaries

```csharp
public bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)
```

### GetClosestDeploymentBoundaryPosition

```csharp
public Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)
```

### SupportsReinforcements

```csharp
public bool SupportsReinforcements()
```

### SupportsNavmesh

```csharp
public bool SupportsNavmesh()
```

### GetPathDeploymentBoundaryIntersection

```csharp
public bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)
```

### IsPositionInsideSiegeDeploymentBoundaries

```csharp
public bool IsPositionInsideSiegeDeploymentBoundaries(in Vec2 position)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)