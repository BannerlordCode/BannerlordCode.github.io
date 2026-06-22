<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DamageParticleModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DamageParticleModel : MBGameModel<DamageParticleModel>`
**Base:** `MBGameModel<DamageParticleModel>`
**File:** `TaleWorlds.MountAndBlade/DamageParticleModel.cs`

## Overview

`DamageParticleModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DamageParticleModel>(new MyDamageParticleModel())` to change how it computes.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of DamageParticleModel (Model)
Game.Current.ReplaceModel<DamageParticleModel>(new MyDamageParticleModel());
```

## See Also

- [Complete Class Catalog](../catalog)