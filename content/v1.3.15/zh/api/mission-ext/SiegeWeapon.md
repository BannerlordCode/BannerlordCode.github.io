---
title: "SiegeWeapon"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeWeapon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SiegeWeapon : UsableMachine, ITargetable`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/SiegeWeapon.cs`

## 概述

`SiegeWeapon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void SetForcedUse(bool value)`

**用途 / Purpose:** 设置 `forced use` 的值或状态。

### GetSiegeEngineType
`public abstract SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 获取 `siege engine type` 的当前值。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### TickAuxForInit
`public void TickAuxForInit()`

**用途 / Purpose:** 处理 `tick aux for init` 相关逻辑。

### ShouldAutoLeaveDetachmentWhenDisabled
`public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

**用途 / Purpose:** 处理 `should auto leave detachment when disabled` 相关逻辑。

### AutoAttachUserToFormation
`public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

**用途 / Purpose:** 处理 `auto attach user to formation` 相关逻辑。

### HasToBeDefendedByUser
`public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `to be defended by user`。

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

**用途 / Purpose:** 获取 `target entity` 的当前值。

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

**用途 / Purpose:** 获取 `targeting offset` 的当前值。

### GetSide
`public BattleSideEnum GetSide()`

**用途 / Purpose:** 获取 `side` 的当前值。

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

**用途 / Purpose:** 获取 `target global velocity` 的当前值。

### IsDestructable
`public bool IsDestructable()`

**用途 / Purpose:** 处理 `is destructable` 相关逻辑。

### Entity
`public WeakGameEntity Entity()`

**用途 / Purpose:** 处理 `entity` 相关逻辑。

### ComputeGlobalPhysicsBoundingBoxMinMax
`public ValueTuple<Vec3, Vec3> ComputeGlobalPhysicsBoundingBoxMinMax()`

**用途 / Purpose:** 处理 `compute global physics bounding box min max` 相关逻辑。

### OnShipCaptured
`public virtual void OnShipCaptured(BattleSideEnum newDefaultSide)`

**用途 / Purpose:** 当 `ship captured` 事件触发时调用此方法。

### GetTargetFlags
`public abstract TargetFlags GetTargetFlags()`

**用途 / Purpose:** 获取 `target flags` 的当前值。

### GetTargetValue
`public abstract float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 获取 `target value` 的当前值。

## 使用示例

```csharp
var implementation = new CustomSiegeWeapon();
```

## 参见

- [完整类目录](../catalog)