<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeWeapon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeapon

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SiegeWeapon` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ForcedUse` | `public bool ForcedUse { get; }` |
| `IsUsed` | `public bool IsUsed { get; }` |
| `Side` | `public virtual BattleSideEnum Side { get; }` |
| `HitObjectName` | `public override TextObject HitObjectName { get; }` |
| `HasWaitFrame` | `public override bool HasWaitFrame { get; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |


## 主要方法

### SetForcedUse

```csharp
public void SetForcedUse(bool value)
```

### GetSiegeEngineType

```csharp
public abstract SiegeEngineType GetSiegeEngineType()
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### TickAuxForInit

```csharp
public void TickAuxForInit()
```

### ShouldAutoLeaveDetachmentWhenDisabled

```csharp
public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)
```

### AutoAttachUserToFormation

```csharp
public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)
```

### HasToBeDefendedByUser

```csharp
public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)
```

### GetTargetEntity

```csharp
public WeakGameEntity GetTargetEntity()
```

### GetTargetingOffset

```csharp
public Vec3 GetTargetingOffset()
```

### GetSide

```csharp
public BattleSideEnum GetSide()
```

### GetTargetGlobalVelocity

```csharp
public Vec3 GetTargetGlobalVelocity()
```

### IsDestructable

```csharp
public bool IsDestructable()
```

### Entity

```csharp
public WeakGameEntity Entity()
```

### ComputeGlobalPhysicsBoundingBoxMinMax

```csharp
public ValueTuple<Vec3, Vec3> ComputeGlobalPhysicsBoundingBoxMinMax()
```

### OnShipCaptured

```csharp
public virtual void OnShipCaptured(BattleSideEnum newDefaultSide)
```

### GetTargetFlags

```csharp
public abstract TargetFlags GetTargetFlags()
```

### GetTargetValue

```csharp
public abstract float GetTargetValue(List<Vec3> weaponPos)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)