<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamQuerySystem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamQuerySystem

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`TeamQuerySystem` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)