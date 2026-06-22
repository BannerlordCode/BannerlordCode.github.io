<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkEffectBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MPPerkEffectBase` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsTickRequired` | `public virtual bool IsTickRequired { get; set; }` |
| `IsDisabledInWarmup` | `public bool IsDisabledInWarmup { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)