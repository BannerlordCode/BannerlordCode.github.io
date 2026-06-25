---
title: "SiegeWeapon"
description: "SiegeWeapon 的自动生成类参考。"
---
# SiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SiegeWeapon : UsableMachine, ITargetable`
**Base:** `UsableMachine`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeWeapon.cs`

## 概述

`SiegeWeapon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ForcedUse` | `public bool ForcedUse { get; }` |
| `IsUsed` | `public bool IsUsed { get; }` |
| `HasWaitFrame` | `public override bool HasWaitFrame { get; }` |
| `IsDeactivated` | `public override bool IsDeactivated { get; }` |

## 主要方法

### SetForcedUse
`public void SetForcedUse(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 forced use 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
siegeWeapon.SetForcedUse(false);
```

### GetSiegeEngineType
`public abstract SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege engine type 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetSiegeEngineType();
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTickRequirement();
```

### TickAuxForInit
`public void TickAuxForInit()`

**用途 / Purpose:** **用途 / Purpose:** 在每一帧或每个更新周期内推进aux for init的状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
siegeWeapon.TickAuxForInit();
```

### ShouldAutoLeaveDetachmentWhenDisabled
`public override bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldAutoLeaveDetachmentWhenDisabled 对应的操作。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.ShouldAutoLeaveDetachmentWhenDisabled(sideEnum);
```

### AutoAttachUserToFormation
`public override bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AutoAttachUserToFormation 对应的操作。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.AutoAttachUserToFormation(sideEnum);
```

### HasToBeDefendedByUser
`public override bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 to be defended by user。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.HasToBeDefendedByUser(sideEnum);
```

### GetTargetEntity
`public WeakGameEntity GetTargetEntity()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target entity 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetEntity();
```

### GetTargetingOffset
`public Vec3 GetTargetingOffset()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 targeting offset 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetingOffset();
```

### GetSide
`public BattleSideEnum GetSide()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 side 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetSide();
```

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target global velocity 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetGlobalVelocity();
```

### IsDestructable
`public bool IsDestructable()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 destructable 状态或条件。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.IsDestructable();
```

### Entity
`public WeakGameEntity Entity()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Entity 对应的操作。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.Entity();
```

### OnShipCaptured
`public virtual void OnShipCaptured(BattleSideEnum newDefaultSide)`

**用途 / Purpose:** **用途 / Purpose:** 在 ship captured 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
siegeWeapon.OnShipCaptured(newDefaultSide);
```

### GetTargetFlags
`public abstract TargetFlags GetTargetFlags()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target flags 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetFlags();
```

### GetTargetValue
`public abstract float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target value 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeapon 实例
SiegeWeapon siegeWeapon = ...;
var result = siegeWeapon.GetTargetValue(weaponPos);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SiegeWeapon instance = ...;
```

## 参见

- [本区域目录](../)