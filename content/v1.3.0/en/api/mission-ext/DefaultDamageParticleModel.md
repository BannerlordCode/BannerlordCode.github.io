---
title: "DefaultDamageParticleModel"
description: "Auto-generated class reference for DefaultDamageParticleModel."
---
# DefaultDamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDamageParticleModel : DamageParticleModel`
**Base:** `DamageParticleModel`
**File:** `TaleWorlds.MountAndBlade/DefaultDamageParticleModel.cs`

## Overview

`DefaultDamageParticleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDamageParticleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMeleeAttackBloodParticles
`public override void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** Reads and returns the melee attack blood particles value held by the this instance.

```csharp
// Obtain an instance of DefaultDamageParticleModel from the subsystem API first
DefaultDamageParticleModel defaultDamageParticleModel = ...;
defaultDamageParticleModel.GetMeleeAttackBloodParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMeleeAttackSweatParticles
`public override void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** Reads and returns the melee attack sweat particles value held by the this instance.

```csharp
// Obtain an instance of DefaultDamageParticleModel from the subsystem API first
DefaultDamageParticleModel defaultDamageParticleModel = ...;
defaultDamageParticleModel.GetMeleeAttackSweatParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMissileAttackParticle
`public override int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Reads and returns the missile attack particle value held by the this instance.

```csharp
// Obtain an instance of DefaultDamageParticleModel from the subsystem API first
DefaultDamageParticleModel defaultDamageParticleModel = ...;
var result = defaultDamageParticleModel.GetMissileAttackParticle(attacker, victim, blow, collisionData);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDamageParticleModel>(new MyDefaultDamageParticleModel());
```

## See Also

- [Area Index](../)