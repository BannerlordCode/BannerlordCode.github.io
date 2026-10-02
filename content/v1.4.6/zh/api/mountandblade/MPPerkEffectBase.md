---
title: "MPPerkEffectBase"
description: "MPPerkEffectBase：TaleWorlds.MountAndBlade 的 public 类；公开成员 26 个（方法 24、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade/MPPerkEffectBase.cs。"
---
# MPPerkEffectBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MPPerkEffectBase`
**File:** `TaleWorlds.MountAndBlade/MPPerkEffectBase.cs`

## 概述

MPPerkEffectBase 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MPPerkEffectBase.cs。它是一个 public 类（abstract），继承链为 MPPerkEffectBase。public/protected 成员共 26 个：24 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MPPerkEffectBase 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MPPerkEffectBase。成员构成以方法为主（方法 24/26，属性 2/26），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MPPerkEffectBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsTickRequired` | `public virtual bool IsTickRequired` | 属性 |
| `IsDisabledInWarmup` | `public bool IsDisabledInWarmup` | 属性 |
| `OnUpdate` | `public virtual void OnUpdate(Agent agent, bool newState)` | 方法 |
| `OnTick` | `public virtual void OnTick(MissionPeer peer, int tickCount)` | 方法 |
| `OnTick` | `public virtual void OnTick(Agent agent, int tickCount)` | 方法 |
| `GetDamage` | `public virtual float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)` | 方法 |
| `GetMountDamage` | `public virtual float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)` | 方法 |
| `GetDamageTaken` | `public virtual float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)` | 方法 |
| `GetMountDamageTaken` | `public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)` | 方法 |
| `GetSpeedBonusEffectiveness` | `public virtual float GetSpeedBonusEffectiveness(Agent attacker, WeaponComponentData attackerWeapon, DamageTypes damageType)` | 方法 |
| `GetShieldDamage` | `public virtual float GetShieldDamage(bool isCorrectSideBlock)` | 方法 |
| `GetShieldDamageTaken` | `public virtual float GetShieldDamageTaken(bool isCorrectSideBlock)` | 方法 |
| `GetRangedAccuracy` | `public virtual float GetRangedAccuracy()` | 方法 |
| `GetThrowingWeaponSpeed` | `public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)` | 方法 |
| `GetDamageInterruptionThreshold` | `public virtual float GetDamageInterruptionThreshold()` | 方法 |
| `GetMountManeuver` | `public virtual float GetMountManeuver()` | 方法 |
| `GetMountSpeed` | `public virtual float GetMountSpeed()` | 方法 |
| `GetRangedHeadShotDamage` | `public virtual float GetRangedHeadShotDamage()` | 方法 |
| `GetGoldOnKill` | `public virtual int GetGoldOnKill(float attackerValue, float victimValue)` | 方法 |
| `GetGoldOnAssist` | `public virtual int GetGoldOnAssist()` | 方法 |
| `GetRewardedGoldOnAssist` | `public virtual int GetRewardedGoldOnAssist()` | 方法 |
| `GetIsTeamRewardedOnDeath` | `public virtual bool GetIsTeamRewardedOnDeath()` | 方法 |
| `CalculateRewardedGoldOnDeath` | `public virtual void CalculateRewardedGoldOnDeath(Agent agent, List<ValueTuple<MissionPeer, int>>teamMembers)` | 方法 |
| `GetDrivenPropertyBonus` | `public virtual float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)` | 方法 |
| `GetEncumbrance` | `public virtual float GetEncumbrance(bool isOnBody)` | 方法 |
| `Deserialize` | `protected abstract void Deserialize(XmlNode node);` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
