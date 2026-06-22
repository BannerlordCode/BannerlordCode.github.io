<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMissionDeploymentPlan`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMissionDeploymentPlan

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`DefaultMissionDeploymentPlan` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)