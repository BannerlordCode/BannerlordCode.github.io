---
title: "MPPerkEffectBase"
description: "MPPerkEffectBase 的自动生成类参考。"
---
# MPPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkEffectBase `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MPPerkEffectBase.cs

## 概述

`MPPerkEffectBase` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MPPerkEffectBase.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnUpdate
`public virtual void OnUpdate(Agent agent,bool newState) `

### OnTick
`public virtual void OnTick(MissionPeer peer,int tickCount) `
`public virtual void OnTick(Agent agent,int tickCount) `

### GetDamage
`public virtual float GetDamage(WeaponComponentData attackerWeapon,DamageTypes damageType,bool isAlternativeAttack) `

### GetMountDamage
`public virtual float GetMountDamage(WeaponComponentData attackerWeapon,DamageTypes damageType,bool isAlternativeAttack) `

### GetDamageTaken
`public virtual float GetDamageTaken(WeaponComponentData attackerWeapon,DamageTypes damageType) `

### GetMountDamageTaken
`public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon,DamageTypes damageType) `

### GetSpeedBonusEffectiveness
`public virtual float GetSpeedBonusEffectiveness(Agent attacker,WeaponComponentData attackerWeapon,DamageTypes damageType) `

### GetShieldDamage
`public virtual float GetShieldDamage(bool isCorrectSideBlock) `

### GetShieldDamageTaken
`public virtual float GetShieldDamageTaken(bool isCorrectSideBlock) `

### GetRangedAccuracy
`public virtual float GetRangedAccuracy() `

### GetThrowingWeaponSpeed
`public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon) `

### GetDamageInterruptionThreshold
`public virtual float GetDamageInterruptionThreshold() `

### GetMountManeuver
`public virtual float GetMountManeuver() `

### GetMountSpeed
`public virtual float GetMountSpeed() `

### GetRangedHeadShotDamage
`public virtual float GetRangedHeadShotDamage() `

### GetGoldOnKill
`public virtual int GetGoldOnKill(float attackerValue,float victimValue) `

### GetGoldOnAssist
`public virtual int GetGoldOnAssist() `

### GetRewardedGoldOnAssist
`public virtual int GetRewardedGoldOnAssist() `

### GetIsTeamRewardedOnDeath
`public virtual bool GetIsTeamRewardedOnDeath() `

### CalculateRewardedGoldOnDeath
`public virtual void CalculateRewardedGoldOnDeath(Agent agent,List<ValueTuple<MissionPeer,int>> teamMembers) `

### GetDrivenPropertyBonus
`public virtual float GetDrivenPropertyBonus(DrivenProperty drivenProperty,float baseValue) `

### GetEncumbrance
`public virtual float GetEncumbrance(bool isOnBody) `

### Deserialize
`protected abstract void Deserialize(XmlNode node)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
