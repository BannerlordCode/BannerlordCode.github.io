<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DamageParticleModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DamageParticleModel : MBGameModel<DamageParticleModel>`
**Base:** `MBGameModel<DamageParticleModel>`
**File:** `TaleWorlds.MountAndBlade/DamageParticleModel.cs`

## Overview

`DamageParticleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DamageParticleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMeleeAttackBloodParticles
`public abstract void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** Gets the current value of `melee attack blood particles`.

### GetMeleeAttackSweatParticles
`public abstract void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** Gets the current value of `melee attack sweat particles`.

### GetMissileAttackParticle
`public abstract int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Gets the current value of `missile attack particle`.

## Usage Example

```csharp
var implementation = new CustomDamageParticleModel();
```

## See Also

- [Complete Class Catalog](../catalog)