<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DamageParticleModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DamageParticleModel : MBGameModel<DamageParticleModel>`
**Base:** `MBGameModel<DamageParticleModel>`
**File:** `TaleWorlds.MountAndBlade/DamageParticleModel.cs`

## 概述

`DamageParticleModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DamageParticleModel>(new MyDamageParticleModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetMeleeAttackBloodParticles
```csharp
public abstract void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)
```

### GetMeleeAttackSweatParticles
```csharp
public abstract void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)
```

### GetMissileAttackParticle
```csharp
public abstract int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)
```

## 使用示例

```csharp
// DamageParticleModel (Model) 的典型用法
Game.Current.ReplaceModel<DamageParticleModel>(new MyDamageParticleModel());
```

## 参见

- [完整类目录](../catalog)