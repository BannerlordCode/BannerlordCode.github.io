<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDamageParticleModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDamageParticleModel : DamageParticleModel`
**Base:** `DamageParticleModel`
**File:** `TaleWorlds.MountAndBlade/DefaultDamageParticleModel.cs`

## Overview

`DefaultDamageParticleModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultDamageParticleModel>(new MyDefaultDamageParticleModel())` to change how it computes.

## Key Methods

### GetMeleeAttackBloodParticles
```csharp
public override void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)
```

### GetMeleeAttackSweatParticles
```csharp
public override void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)
```

### GetMissileAttackParticle
```csharp
public override int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)
```

## Usage Example

```csharp
// Typical usage of DefaultDamageParticleModel (Model)
Game.Current.ReplaceModel<DefaultDamageParticleModel>(new MyDefaultDamageParticleModel());
```

## See Also

- [Complete Class Catalog](../catalog)