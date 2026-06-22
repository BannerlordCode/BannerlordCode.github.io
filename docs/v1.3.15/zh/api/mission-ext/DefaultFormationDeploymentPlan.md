<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultFormationDeploymentPlan`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFormationDeploymentPlan

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`DefaultFormationDeploymentPlan` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)