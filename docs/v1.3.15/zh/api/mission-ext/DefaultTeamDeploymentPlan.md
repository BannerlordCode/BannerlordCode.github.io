<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTeamDeploymentPlan`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTeamDeploymentPlan

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`DefaultTeamDeploymentPlan` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `DeploymentBoundaries` | `public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>> DeploymentBoundaries { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)