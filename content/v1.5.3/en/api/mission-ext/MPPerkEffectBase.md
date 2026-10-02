---
title: "MPPerkEffectBase"
description: "Auto-generated class reference for MPPerkEffectBase."
---
# MPPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkEffectBase `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MPPerkEffectBase.cs

## Overview

Auto-generated stub for `MPPerkEffectBase`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnUpdate
`public virtual void OnUpdate(Agent agent,bool newState)`

### OnTick
`public virtual void OnTick(MissionPeer peer,int tickCount)`

### GetDamage
`public virtual float GetDamage(WeaponComponentData attackerWeapon,DamageTypes damageType,bool isAlternativeAttack)`

### GetMountDamage
`public virtual float GetMountDamage(WeaponComponentData attackerWeapon,DamageTypes damageType,bool isAlternativeAttack)`

### GetDamageTaken
`public virtual float GetDamageTaken(WeaponComponentData attackerWeapon,DamageTypes damageType)`

### GetMountDamageTaken
`public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon,DamageTypes damageType)`

### GetSpeedBonusEffectiveness
`public virtual float GetSpeedBonusEffectiveness(Agent attacker,WeaponComponentData attackerWeapon,DamageTypes damageType)`

### GetShieldDamage
`public virtual float GetShieldDamage(bool isCorrectSideBlock)`

### GetShieldDamageTaken
`public virtual float GetShieldDamageTaken(bool isCorrectSideBlock)`

### GetRangedAccuracy
`public virtual float GetRangedAccuracy()`

### GetThrowingWeaponSpeed
`public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

### GetDamageInterruptionThreshold
`public virtual float GetDamageInterruptionThreshold()`

### GetMountManeuver
`public virtual float GetMountManeuver()`

### GetMountSpeed
`public virtual float GetMountSpeed()`

### GetRangedHeadShotDamage
`public virtual float GetRangedHeadShotDamage()`

### GetGoldOnKill
`public virtual int GetGoldOnKill(float attackerValue,float victimValue)`

### GetGoldOnAssist
`public virtual int GetGoldOnAssist()`

### GetRewardedGoldOnAssist
`public virtual int GetRewardedGoldOnAssist()`

### GetIsTeamRewardedOnDeath
`public virtual bool GetIsTeamRewardedOnDeath()`

### CalculateRewardedGoldOnDeath
`public virtual void CalculateRewardedGoldOnDeath(Agent agent,List<ValueTuple<MissionPeer,int>> teamMembers)`

### GetDrivenPropertyBonus
`public virtual float GetDrivenPropertyBonus(DrivenProperty drivenProperty,float baseValue)`

### GetEncumbrance
`public virtual float GetEncumbrance(bool isOnBody)`

### Deserialize
`protected abstract void Deserialize(XmlNode node)`

## See Also

- [Section index](../)
