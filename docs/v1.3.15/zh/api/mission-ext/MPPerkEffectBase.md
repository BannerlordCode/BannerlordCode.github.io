<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerkEffectBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerkEffectBase

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MPPerkEffectBase` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsTickRequired` | `public virtual bool IsTickRequired { get; set; }` |
| `IsDisabledInWarmup` | `public bool IsDisabledInWarmup { get; set; }` |


## 主要方法

### OnUpdate

```csharp
public virtual void OnUpdate(Agent agent, bool newState)
```

### OnTick

```csharp
public virtual void OnTick(MissionPeer peer, int tickCount)
```

### OnTick

```csharp
public virtual void OnTick(Agent agent, int tickCount)
```

### GetDamage

```csharp
public virtual float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)
```

### GetMountDamage

```csharp
public virtual float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)
```

### GetDamageTaken

```csharp
public virtual float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)
```

### GetMountDamageTaken

```csharp
public virtual float GetMountDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)
```

### GetSpeedBonusEffectiveness

```csharp
public virtual float GetSpeedBonusEffectiveness(Agent attacker, WeaponComponentData attackerWeapon, DamageTypes damageType)
```

### GetShieldDamage

```csharp
public virtual float GetShieldDamage(bool isCorrectSideBlock)
```

### GetShieldDamageTaken

```csharp
public virtual float GetShieldDamageTaken(bool isCorrectSideBlock)
```

### GetRangedAccuracy

```csharp
public virtual float GetRangedAccuracy()
```

### GetThrowingWeaponSpeed

```csharp
public virtual float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)
```

### GetDamageInterruptionThreshold

```csharp
public virtual float GetDamageInterruptionThreshold()
```

### GetMountManeuver

```csharp
public virtual float GetMountManeuver()
```

### GetMountSpeed

```csharp
public virtual float GetMountSpeed()
```

### GetRangedHeadShotDamage

```csharp
public virtual float GetRangedHeadShotDamage()
```

### GetGoldOnKill

```csharp
public virtual int GetGoldOnKill(float attackerValue, float victimValue)
```

### GetGoldOnAssist

```csharp
public virtual int GetGoldOnAssist()
```

### GetRewardedGoldOnAssist

```csharp
public virtual int GetRewardedGoldOnAssist()
```

### GetIsTeamRewardedOnDeath

```csharp
public virtual bool GetIsTeamRewardedOnDeath()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)