---
title: "DefaultDamageParticleModel"
description: "DefaultDamageParticleModel 的自动生成类参考。"
---
# DefaultDamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDamageParticleModel : DamageParticleModel`
**Base:** `DamageParticleModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultDamageParticleModel.cs`

## 概述

`DefaultDamageParticleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDamageParticleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMeleeAttackBloodParticles
`public override void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**用途 / Purpose:** 读取并返回当前对象中 melee attack blood particles 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDamageParticleModel 实例
DefaultDamageParticleModel defaultDamageParticleModel = ...;
defaultDamageParticleModel.GetMeleeAttackBloodParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMeleeAttackSweatParticles
`public override void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**用途 / Purpose:** 读取并返回当前对象中 melee attack sweat particles 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDamageParticleModel 实例
DefaultDamageParticleModel defaultDamageParticleModel = ...;
defaultDamageParticleModel.GetMeleeAttackSweatParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMissileAttackParticle
`public override int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 读取并返回当前对象中 missile attack particle 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDamageParticleModel 实例
DefaultDamageParticleModel defaultDamageParticleModel = ...;
var result = defaultDamageParticleModel.GetMissileAttackParticle(attacker, victim, blow, collisionData);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDamageParticleModel>(new MyDefaultDamageParticleModel());
```

## 参见

- [本区域目录](../)