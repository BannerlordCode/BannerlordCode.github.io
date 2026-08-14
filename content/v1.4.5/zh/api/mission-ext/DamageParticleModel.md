---
title: "DamageParticleModel"
description: "DamageParticleModel 的自动生成类参考。"
---
# DamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DamageParticleModel : MBGameModel<DamageParticleModel>`
**Base:** `MBGameModel<DamageParticleModel>`
**File:** `TaleWorlds.MountAndBlade/DamageParticleModel.cs`

## 概述

`DamageParticleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DamageParticleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMeleeAttackBloodParticles
`public abstract void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**用途 / Purpose:** 读取并返回当前对象中 melee attack blood particles 的结果。

```csharp
// 先通过子系统 API 拿到 DamageParticleModel 实例
DamageParticleModel damageParticleModel = ...;
damageParticleModel.GetMeleeAttackBloodParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMeleeAttackSweatParticles
`public abstract void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**用途 / Purpose:** 读取并返回当前对象中 melee attack sweat particles 的结果。

```csharp
// 先通过子系统 API 拿到 DamageParticleModel 实例
DamageParticleModel damageParticleModel = ...;
damageParticleModel.GetMeleeAttackSweatParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMissileAttackParticle
`public abstract int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 读取并返回当前对象中 missile attack particle 的结果。

```csharp
// 先通过子系统 API 拿到 DamageParticleModel 实例
DamageParticleModel damageParticleModel = ...;
var result = damageParticleModel.GetMissileAttackParticle(attacker, victim, blow, collisionData);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DamageParticleModel instance = ...;
```

## 参见

- [本区域目录](../)