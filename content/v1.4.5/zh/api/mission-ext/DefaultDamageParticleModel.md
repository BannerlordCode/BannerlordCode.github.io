---
title: "DefaultDamageParticleModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDamageParticleModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDamageParticleModel : DamageParticleModel`
**Base:** `DamageParticleModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultDamageParticleModel.cs`

## 概述

`DefaultDamageParticleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDamageParticleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMeleeAttackBloodParticles
`public override void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**用途 / Purpose:** 获取 `melee attack blood particles` 的当前值。

### GetMeleeAttackSweatParticles
`public override void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**用途 / Purpose:** 获取 `melee attack sweat particles` 的当前值。

### GetMissileAttackParticle
`public override int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 获取 `missile attack particle` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDamageParticleModel>(new MyDefaultDamageParticleModel());
```

## 参见

- [完整类目录](../catalog)