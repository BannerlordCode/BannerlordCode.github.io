---
title: "MPPerkEffectBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerkEffectBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `update` 事件触发时调用此方法。

### OnTick
`public virtual void OnTick(MissionPeer peer, int tickCount)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnTick
`public virtual void OnTick(Agent agent, int tickCount)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### GetDamage
`public virtual float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**用途 / Purpose:** 获取 `damage` 的当前值。

### GetMountDamage
`public virtual float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**用途 / Purpose:** 获取 `mount damage` 的当前值。

### GetDamageTaken
`public virtual float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** 获取 `damage taken` 的当前值。

### GetMountDamageTaken
`public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** 获取 `mount damage taken` 的当前值。

### GetSpeedBonusEffectiveness
`public virtual float GetSpeedBonusEffectiveness(Agent attacker, WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** 获取 `speed bonus effectiveness` 的当前值。

### GetShieldDamage
`public virtual float GetShieldDamage(bool isCorrectSideBlock)`

**用途 / Purpose:** 获取 `shield damage` 的当前值。

### GetShieldDamageTaken
`public virtual float GetShieldDamageTaken(bool isCorrectSideBlock)`

**用途 / Purpose:** 获取 `shield damage taken` 的当前值。

### GetRangedAccuracy
`public virtual float GetRangedAccuracy()`

**用途 / Purpose:** 获取 `ranged accuracy` 的当前值。

### GetThrowingWeaponSpeed
`public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**用途 / Purpose:** 获取 `throwing weapon speed` 的当前值。

### GetDamageInterruptionThreshold
`public virtual float GetDamageInterruptionThreshold()`

**用途 / Purpose:** 获取 `damage interruption threshold` 的当前值。

### GetMountManeuver
`public virtual float GetMountManeuver()`

**用途 / Purpose:** 获取 `mount maneuver` 的当前值。

### GetMountSpeed
`public virtual float GetMountSpeed()`

**用途 / Purpose:** 获取 `mount speed` 的当前值。

### GetRangedHeadShotDamage
`public virtual float GetRangedHeadShotDamage()`

**用途 / Purpose:** 获取 `ranged head shot damage` 的当前值。

### GetGoldOnKill
`public virtual int GetGoldOnKill(float attackerValue, float victimValue)`

**用途 / Purpose:** 获取 `gold on kill` 的当前值。

### GetGoldOnAssist
`public virtual int GetGoldOnAssist()`

**用途 / Purpose:** 获取 `gold on assist` 的当前值。

### GetRewardedGoldOnAssist
`public virtual int GetRewardedGoldOnAssist()`

**用途 / Purpose:** 获取 `rewarded gold on assist` 的当前值。

### GetIsTeamRewardedOnDeath
`public virtual bool GetIsTeamRewardedOnDeath()`

**用途 / Purpose:** 获取 `is team rewarded on death` 的当前值。

### CalculateRewardedGoldOnDeath
`public virtual void CalculateRewardedGoldOnDeath(Agent agent, List<ValueTuple<MissionPeer, int>> teamMembers)`

**用途 / Purpose:** 处理 `calculate rewarded gold on death` 相关逻辑。

### GetDrivenPropertyBonus
`public virtual float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** 获取 `driven property bonus` 的当前值。

### GetEncumbrance
`public virtual float GetEncumbrance(bool isOnBody)`

**用途 / Purpose:** 获取 `encumbrance` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMPPerkEffectBase();
```

## 参见

- [完整类目录](../catalog)