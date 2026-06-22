<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultFormationDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFormationDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `DefaultFormationDeploymentPlan` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Class` | `public FormationClass Class { get; }` |
| `SpawnClass` | `public FormationClass SpawnClass { get; }` |
| `PlannedWidth` | `public float PlannedWidth { get; }` |
| `PlannedDepth` | `public float PlannedDepth { get; }` |
| `PlannedTroopCount` | `public int PlannedTroopCount { get; }` |
| `PlannedFootTroopCount` | `public int PlannedFootTroopCount { get; }` |
| `PlannedMountedTroopCount` | `public int PlannedMountedTroopCount { get; }` |
| `HasDimensions` | `public bool HasDimensions { get; }` |
| `HasSignificantMountedTroops` | `public bool HasSignificantMountedTroops { get; }` |


## Key Methods

### HasFrame

```csharp
public bool HasFrame()
```

### GetDefaultFlank

```csharp
public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount, int infantryCount, bool spawnWithHorses = false)
```

### GetFlankDeploymentOrder

```csharp
public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0)
```

### GetFrame

```csharp
public MatrixFrame GetFrame()
```

### GetPosition

```csharp
public Vec3 GetPosition()
```

### GetDirection

```csharp
public Vec2 GetDirection()
```

### CreateNewDeploymentWorldPosition

```csharp
public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)
```

### Clear

```csharp
public void Clear()
```

### SetPlannedTroopCount

```csharp
public void SetPlannedTroopCount(int footTroopCount, int mountedTroopCount)
```

### SetPlannedDimensions

```csharp
public void SetPlannedDimensions(float width, float depth)
```

### SetFrame

```csharp
public void SetFrame(in WorldFrame frame)
```

### SetSpawnClass

```csharp
public void SetSpawnClass(FormationClass spawnClass)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)