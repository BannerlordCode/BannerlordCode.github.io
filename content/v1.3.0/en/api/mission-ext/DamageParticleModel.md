---
title: "DamageParticleModel"
description: "Auto-generated class reference for DamageParticleModel."
---
# DamageParticleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DamageParticleModel : MBGameModel<DamageParticleModel>`
**Base:** `MBGameModel<DamageParticleModel>`
**File:** `TaleWorlds.MountAndBlade/DamageParticleModel.cs`

## Overview

`DamageParticleModel` is an `abstract class DamageParticleModel : MBGameModel<DamageParticleModel>` (`DamageParticleModel.cs:7`) with exactly three abstract members and no concrete ones. It is the seam between "a blow connected" and "what the renderer spawns", and in a shipped game it has no default — you must supply a concrete implementation and register it, or nothing happens.

All three methods take the same middle two arguments: the `Agent attacker`, the `Agent victim`, an `in Blow blow`, and an `in AttackCollisionData collisionData`. That shared shape is deliberate — the engine knows the context and hands it to whichever of the three the weapon category selects.

The return convention is inconsistent between them, and that is the thing to internalise before you write an implementation. The two melee methods are `void` and hand their result back through an `out HitParticleResultData particleResultData` (`DamageParticleModel.cs:10`). The missile method returns an `int`.

## Mental Model

Treat blood and sweat as the same call site with a different answer, not as two different questions. Both melee methods receive identical parameters, including the same `Blow` and the same `AttackCollisionData`; what differs is only which one the engine invokes for the hit. That is why they can be implemented as one private routine with a flag — and why a bug in one is usually a bug in both.

The `out` parameter is a hard obligation on every path. Because it is `out` rather than `ref`, the compiler requires each implementation to assign it before returning, which guarantees a caller never sees an unassigned struct — but it does *not* guarantee the values inside it are meaningful. A method that assigns a default-constructed `HitParticleResultData` on its early-return path compiles cleanly and yields no particles with no diagnostic.

The `in` modifiers on `Blow` and `AttackCollisionData` are a performance contract: they promise you will not mutate them and (by convention here) will not stash a reference that outlives the call. `AttackCollisionData` in particular is a large per-collision record; copying it into a field "for later" costs memory on every hit in the battle.

The `int` return on `GetMissileAttackParticle` is a different protocol entirely — a particle identifier rather than a result struct. A modder replacing this model must satisfy two incompatible contracts at once, and the natural first mistake is to return an index for the melee methods by analogy, or to forget that the melee methods have no return value to inspect at all.

## How to use

**Getting it.** There is no instance — register a concrete implementation on the model container, as part of module game-model registration, before any battle:

```csharp
public class MyDamageParticleModel : DamageParticleModel
{
    public override void GetMeleeAttackBloodParticles(
        Agent attacker, Agent victim, in Blow blow,
        in AttackCollisionData collisionData, out HitParticleResultData particleResultData)
    {
        particleResultData = BuildParticles(collisionData, blood: true);
    }

    public override void GetMeleeAttackSweatParticles(
        Agent attacker, Agent victim, in Blow blow,
        in AttackCollisionData collisionData, out HitParticleResultData particleResultData)
    {
        particleResultData = BuildParticles(collisionData, blood: false);
    }

    public override int GetMissileAttackParticle(
        Agent attacker, Agent victim, in Blow blow,
        in AttackCollisionData collisionData)
    {
        return MyParticleIds.ImpactDust;
    }
}
```

**Typical use** — routing both melee paths through one shared implementation so they cannot drift:

```csharp
private HitParticleResultData BuildParticles(in AttackCollisionData data, bool blood)
{
    var result = new HitParticleResultData();
    result.ParticleSystemId = blood ? MyParticleIds.Blood : MyParticleIds.Sweat;
    result.Amount = (int)(data.InflictedDamage * 0.1f);
    return result;
}
```

**Most common mistake, and what it costs.** Treating the two melee methods as independent and implementing only the one your test weapon happens to trigger. Both are `abstract`, so a partial implementation does not compile — but a *stub* does. Implement `GetMeleeAttackSweatParticles` as `particleResultData = default; return;` to get it building, and every unarmed hit in the game silently produces no sweat effect. The failure is invisible by construction: a default `HitParticleResultData` is a perfectly valid value that simply means "no particles", so nothing asserts, nothing logs, and the missing effect reads as a cosmetic bug in one weapon rather than a missing override.

## Key Methods

### GetMeleeAttackBloodParticles
`public abstract void GetMeleeAttackBloodParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** Reads and returns the melee attack blood particles value held by the this instance.

```csharp
// Obtain an instance of DamageParticleModel from the subsystem API first
DamageParticleModel damageParticleModel = ...;
damageParticleModel.GetMeleeAttackBloodParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMeleeAttackSweatParticles
`public abstract void GetMeleeAttackSweatParticles(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData, out HitParticleResultData particleResultData)`

**Purpose:** Reads and returns the melee attack sweat particles value held by the this instance.

```csharp
// Obtain an instance of DamageParticleModel from the subsystem API first
DamageParticleModel damageParticleModel = ...;
damageParticleModel.GetMeleeAttackSweatParticles(attacker, victim, blow, collisionData, particleResultData);
```

### GetMissileAttackParticle
`public abstract int GetMissileAttackParticle(Agent attacker, Agent victim, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Reads and returns the missile attack particle value held by the this instance.

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
- [AttackCollisionData](../AttackCollisionData)
- [HitParticleResultData](../HitParticleResultData)
- [MBGameManager](../MBGameManager)
- [DamageParticleModel (中文页面)](../../../../zh/api/mission-ext/DamageParticleModel)