<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDamageParticleModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDamageParticleModel : DamageParticleModel`
**Base:** `DamageParticleModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultDamageParticleModel.cs`

## Overview

`DefaultDamageParticleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDamageParticleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMeleeAttackBloodParticles
`public override void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** Gets the current value of `melee attack blood particles`.

### GetMeleeAttackSweatParticles
`public override void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** Gets the current value of `melee attack sweat particles`.

### GetMissileAttackParticle
`public override int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Gets the current value of `missile attack particle`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDamageParticleModel>(new MyDefaultDamageParticleModel());
```

## See Also

- [Complete Class Catalog](../catalog)