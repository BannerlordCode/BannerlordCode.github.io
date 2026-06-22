<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationQuerySystem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationQuerySystem

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`FormationQuerySystem` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)