---
title: "MPPerkEffectBase"
description: "MPPerkEffectBase 的自动生成类参考。"
---
# MPPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkEffectBase`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MPPerkEffectBase.cs`

## 概述

`MPPerkEffectBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTickRequired` | `public virtual bool IsTickRequired { get; set; }` |
| `IsDisabledInWarmup` | `public bool IsDisabledInWarmup { get; set; }` |

## 主要方法

### OnUpdate
`public virtual void OnUpdate(Agent agent, bool newState)`

**用途 / Purpose:** 在 「update」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
mPPerkEffectBase.OnUpdate(agent, false);
```

### OnTick
`public virtual void OnTick(MissionPeer peer, int tickCount)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
mPPerkEffectBase.OnTick(peer, 0);
```

### OnTick
`public virtual void OnTick(Agent agent, int tickCount)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
mPPerkEffectBase.OnTick(agent, 0);
```

### GetDamage
`public virtual float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**用途 / Purpose:** 读取并返回当前对象中 「damage」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetDamage(attackerWeapon, damageType, false);
```

### GetMountDamage
`public virtual float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**用途 / Purpose:** 读取并返回当前对象中 「mount damage」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetMountDamage(attackerWeapon, damageType, false);
```

### GetDamageTaken
`public virtual float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** 读取并返回当前对象中 「damage taken」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetDamageTaken(attackerWeapon, damageType);
```

### GetMountDamageTaken
`public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** 读取并返回当前对象中 「mount damage taken」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetMountDamageTaken(attackerWeapon, damageType);
```

### GetSpeedBonusEffectiveness
`public virtual float GetSpeedBonusEffectiveness(Agent attacker, WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** 读取并返回当前对象中 「speed bonus effectiveness」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetSpeedBonusEffectiveness(attacker, attackerWeapon, damageType);
```

### GetShieldDamage
`public virtual float GetShieldDamage(bool isCorrectSideBlock)`

**用途 / Purpose:** 读取并返回当前对象中 「shield damage」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetShieldDamage(false);
```

### GetShieldDamageTaken
`public virtual float GetShieldDamageTaken(bool isCorrectSideBlock)`

**用途 / Purpose:** 读取并返回当前对象中 「shield damage taken」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetShieldDamageTaken(false);
```

### GetRangedAccuracy
`public virtual float GetRangedAccuracy()`

**用途 / Purpose:** 读取并返回当前对象中 「ranged accuracy」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetRangedAccuracy();
```

### GetThrowingWeaponSpeed
`public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**用途 / Purpose:** 读取并返回当前对象中 「throwing weapon speed」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetThrowingWeaponSpeed(attackerWeapon);
```

### GetDamageInterruptionThreshold
`public virtual float GetDamageInterruptionThreshold()`

**用途 / Purpose:** 读取并返回当前对象中 「damage interruption threshold」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetDamageInterruptionThreshold();
```

### GetMountManeuver
`public virtual float GetMountManeuver()`

**用途 / Purpose:** 读取并返回当前对象中 「mount maneuver」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetMountManeuver();
```

### GetMountSpeed
`public virtual float GetMountSpeed()`

**用途 / Purpose:** 读取并返回当前对象中 「mount speed」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetMountSpeed();
```

### GetRangedHeadShotDamage
`public virtual float GetRangedHeadShotDamage()`

**用途 / Purpose:** 读取并返回当前对象中 「ranged head shot damage」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetRangedHeadShotDamage();
```

### GetGoldOnKill
`public virtual int GetGoldOnKill(float attackerValue, float victimValue)`

**用途 / Purpose:** 读取并返回当前对象中 「gold on kill」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetGoldOnKill(0, 0);
```

### GetGoldOnAssist
`public virtual int GetGoldOnAssist()`

**用途 / Purpose:** 读取并返回当前对象中 「gold on assist」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetGoldOnAssist();
```

### GetRewardedGoldOnAssist
`public virtual int GetRewardedGoldOnAssist()`

**用途 / Purpose:** 读取并返回当前对象中 「rewarded gold on assist」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetRewardedGoldOnAssist();
```

### GetIsTeamRewardedOnDeath
`public virtual bool GetIsTeamRewardedOnDeath()`

**用途 / Purpose:** 读取并返回当前对象中 「is team rewarded on death」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetIsTeamRewardedOnDeath();
```

### CalculateRewardedGoldOnDeath
`public virtual void CalculateRewardedGoldOnDeath(Agent agent, List<ValueTuple<MissionPeer, int>> teamMembers)`

**用途 / Purpose:** 计算「rewarded gold on death」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
mPPerkEffectBase.CalculateRewardedGoldOnDeath(agent, list<ValueTuple<MissionPeer, 0);
```

### GetDrivenPropertyBonus
`public virtual float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** 读取并返回当前对象中 「driven property bonus」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetDrivenPropertyBonus(drivenProperty, 0);
```

### GetEncumbrance
`public virtual float GetEncumbrance(bool isOnBody)`

**用途 / Purpose:** 读取并返回当前对象中 「encumbrance」 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkEffectBase 实例
MPPerkEffectBase mPPerkEffectBase = ...;
var result = mPPerkEffectBase.GetEncumbrance(false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MPPerkEffectBase instance = ...;
```

## 参见

- [本区域目录](../)