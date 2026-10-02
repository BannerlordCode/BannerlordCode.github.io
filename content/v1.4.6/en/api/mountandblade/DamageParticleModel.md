---
title: "DamageParticleModel"
description: "DamageParticleModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<DamageParticleModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DamageParticleModel.cs."
---
# DamageParticleModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class DamageParticleModel : MBGameModel<DamageParticleModel>`
**File:** `TaleWorlds.MountAndBlade/DamageParticleModel.cs`

## Overview

DamageParticleModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DamageParticleModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<DamageParticleModel>; the inheritance chain is DamageParticleModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DamageParticleModel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DamageParticleModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DamageParticleModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMeleeAttackBloodParticles` | `public abstract void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData);` | method |
| `GetMeleeAttackSweatParticles` | `public abstract void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData);` | method |
| `GetMissileAttackParticle` | `public abstract int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
