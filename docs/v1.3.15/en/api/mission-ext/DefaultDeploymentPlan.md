<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `DefaultDeploymentPlan` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `PlanCount` | `public int PlanCount { get; }` |
| `IsPlanMade` | `public bool IsPlanMade { get; }` |
| `SpawnPathOffset` | `public float SpawnPathOffset { get; }` |
| `TargetOffset` | `public float TargetOffset { get; }` |
| `IsSafeToDeploy` | `public bool IsSafeToDeploy { get; }` |
| `SafetyScore` | `public float SafetyScore { get; }` |
| `FootTroopCount` | `public int FootTroopCount { get; }` |
| `MountedTroopCount` | `public int MountedTroopCount { get; }` |
| `TroopCount` | `public int TroopCount { get; }` |
| `MeanPosition` | `public Vec3 MeanPosition { get; }` |


## Key Methods

### CreateInitialPlan

```csharp
public static DefaultDeploymentPlan CreateInitialPlan(Mission mission, Team team)
```

### CreateReinforcementPlan

```csharp
public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission, Team team)
```

### CreateReinforcementPlanWithSpawnPath

```csharp
public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission, Team team, SpawnPathData spawnPathData)
```

### SetSpawnWithHorses

```csharp
public void SetSpawnWithHorses(bool value)
```

### ClearAddedTroops

```csharp
public void ClearAddedTroops()
```

### ClearPlan

```csharp
public void ClearPlan()
```

### AddTroops

```csharp
public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount)
```

### PlanBattleDeployment

```csharp
public void PlanBattleDeployment(FormationSceneSpawnEntry formationSceneSpawnEntries, float spawnPathOffset = 0f, float targetOffset = 0f)
```

### GetFormationPlan

```csharp
public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass)
```

### GetFormationDeploymentFrame

```csharp
public bool GetFormationDeploymentFrame(FormationClass fClass, out MatrixFrame frame)
```

### IsPlanSuitableForFormations

```csharp
public bool IsPlanSuitableForFormations(ValueTuple<int, int> troopDataPerFormationClass)
```

### UpdateSafetyScore

```csharp
public void UpdateSafetyScore()
```

### GetFrameFromFormationSpawnEntity

```csharp
public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity, float depthOffset = 0f)
```

### GetFormationSpawnWidthAndDepth

```csharp
public ValueTuple<float, float> GetFormationSpawnWidthAndDepth(FormationClass formationNo, int troopCount, bool hasMountedTroops, bool considerCavalryAsInfantry = false)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)