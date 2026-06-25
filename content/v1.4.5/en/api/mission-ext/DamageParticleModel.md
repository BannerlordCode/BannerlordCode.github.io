---
title: "DamageParticleModel"
description: "Auto-generated class reference for DamageParticleModel."
---
# DamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DamageParticleModel : MBGameModel<DamageParticleModel>`
**Base:** `MBGameModel<DamageParticleModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DamageParticleModel.cs`

## Overview

`DamageParticleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DamageParticleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMeleeAttackBloodParticles
`public abstract void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** **Purpose:** Reads and returns the melee attack blood particles value held by the this instance.

```csharp
// Obtain an instance of DamageParticleModel from the subsystem API first
DamageParticleModel damageParticleModel = ...;
damageParticleModel.GetMeleeAttackBloodParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMeleeAttackSweatParticles
`public abstract void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** **Purpose:** Reads and returns the melee attack sweat particles value held by the this instance.

```csharp
// Obtain an instance of DamageParticleModel from the subsystem API first
DamageParticleModel damageParticleModel = ...;
damageParticleModel.GetMeleeAttackSweatParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMissileAttackParticle
`public abstract int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Reads and returns the missile attack particle value held by the this instance.

```csharp
// Obtain an instance of DamageParticleModel from the subsystem API first
DamageParticleModel damageParticleModel = ...;
var result = damageParticleModel.GetMissileAttackParticle(attacker, victim, blow, collisionData);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DamageParticleModel instance = ...;
```

## See Also

- [Area Index](../)