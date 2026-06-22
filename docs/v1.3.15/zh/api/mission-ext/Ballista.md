<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Ballista`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Ballista

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`Ballista` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DirectionRestriction` | `public override float DirectionRestriction { get; }` |
| `CanShootAtPointCheckingOffset` | `public override Vec3 CanShootAtPointCheckingOffset { get; }` |
| `MultipleProjectileId` | `public override string MultipleProjectileId { get; }` |
| `MultipleProjectileFlyingId` | `public override string MultipleProjectileFlyingId { get; }` |


## 主要方法

### GetSiegeEngineType

```csharp
public override SiegeEngineType GetSiegeEngineType()
```

### OnPilotAssignedDuringSpawn

```csharp
public override void OnPilotAssignedDuringSpawn()
```

### CreateAIBehaviorObject

```csharp
public override UsableMachineAIBase CreateAIBehaviorObject()
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### GetActionTextForStandingPoint

```csharp
public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)
```

### GetDescriptionText

```csharp
public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### ProcessTargetValue

```csharp
public override float ProcessTargetValue(float baseValue, TargetFlags flags)
```

### GetTargetFlags

```csharp
public override TargetFlags GetTargetFlags()
```

### GetTargetValue

```csharp
public override float GetTargetValue(List<Vec3> weaponPos)
```

### SetSpawnedFromSpawner

```csharp
public void SetSpawnedFromSpawner()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)