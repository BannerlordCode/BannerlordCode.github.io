---
title: "MPPerkEffectBase"
description: "MPPerkEffectBase: a public class in TaleWorlds.MountAndBlade; 26 exposed members (24 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MPPerkEffectBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPPerkEffectBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MPPerkEffectBase`
**File:** `TaleWorlds.MountAndBlade/MPPerkEffectBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MPPerkEffectBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MPPerkEffectBase.cs. It is a public class (abstract); the inheritance chain is MPPerkEffectBase. It exposes 26 public/protected members: 24 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPPerkEffectBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MPPerkEffectBase. The surface is method-led (methods 24/26, properties 2/26), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MPPerkEffectBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsTickRequired` | `public virtual bool IsTickRequired` | property |
| `IsDisabledInWarmup` | `public bool IsDisabledInWarmup` | property |
| `OnUpdate` | `public virtual void OnUpdate(Agent agent, bool newState)` | method |
| `OnTick` | `public virtual void OnTick(MissionPeer peer, int tickCount)` | method |
| `OnTick` | `public virtual void OnTick(Agent agent, int tickCount)` | method |
| `GetDamage` | `public virtual float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)` | method |
| `GetMountDamage` | `public virtual float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)` | method |
| `GetDamageTaken` | `public virtual float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)` | method |
| `GetMountDamageTaken` | `public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)` | method |
| `GetSpeedBonusEffectiveness` | `public virtual float GetSpeedBonusEffectiveness(Agent attacker, WeaponComponentData attackerWeapon, DamageTypes damageType)` | method |
| `GetShieldDamage` | `public virtual float GetShieldDamage(bool isCorrectSideBlock)` | method |
| `GetShieldDamageTaken` | `public virtual float GetShieldDamageTaken(bool isCorrectSideBlock)` | method |
| `GetRangedAccuracy` | `public virtual float GetRangedAccuracy()` | method |
| `GetThrowingWeaponSpeed` | `public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)` | method |
| `GetDamageInterruptionThreshold` | `public virtual float GetDamageInterruptionThreshold()` | method |
| `GetMountManeuver` | `public virtual float GetMountManeuver()` | method |
| `GetMountSpeed` | `public virtual float GetMountSpeed()` | method |
| `GetRangedHeadShotDamage` | `public virtual float GetRangedHeadShotDamage()` | method |
| `GetGoldOnKill` | `public virtual int GetGoldOnKill(float attackerValue, float victimValue)` | method |
| `GetGoldOnAssist` | `public virtual int GetGoldOnAssist()` | method |
| `GetRewardedGoldOnAssist` | `public virtual int GetRewardedGoldOnAssist()` | method |
| `GetIsTeamRewardedOnDeath` | `public virtual bool GetIsTeamRewardedOnDeath()` | method |
| `CalculateRewardedGoldOnDeath` | `public virtual void CalculateRewardedGoldOnDeath(Agent agent, List<ValueTuple<MissionPeer, int>>teamMembers)` | method |
| `GetDrivenPropertyBonus` | `public virtual float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)` | method |
| `GetEncumbrance` | `public virtual float GetEncumbrance(bool isOnBody)` | method |
| `Deserialize` | `protected abstract void Deserialize(XmlNode node);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
