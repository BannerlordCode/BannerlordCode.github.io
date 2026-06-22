<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDeploymentPlan`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDeploymentPlan

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`DefaultDeploymentPlan` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)