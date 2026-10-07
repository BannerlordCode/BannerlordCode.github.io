---
title: "MissionCombatMechanicsHelper"
description: "Auto-generated class reference for MissionCombatMechanicsHelper."
---
# MissionCombatMechanicsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionCombatMechanicsHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs`

## Overview

`MissionCombatMechanicsHelper` is a `public static class` (`MissionCombatMechanicsHelper.cs:9`) of pure predicates and out-parameter maths: given an attack's collision data, decide whether the victim shrugs it off, is dismounted, knocked back, knocked down, whether the mount rears, and what the final damage magnitude is. It owns no state and is never instantiated; the models call *into* it, not the other way round.

The direction of dependency is the thing to internalise. `DecideAgentDismountedByBlow` does not compute dismount resistance itself — it asks `MissionGameModels.Current.AgentApplyDamageModel` whether the weapon *can* dismount (`MissionCombatMechanicsHelper.cs:33`) and what its penetration is (`MissionCombatMechanicsHelper.cs:35`), then asks `MissionGameModels.Current.AgentStatCalculateModel.GetDismountResistance(victimAgent)` (`MissionCombatMechanicsHelper.cs:36`), and only then applies its own comparison. So the *rule* lives in the models and the *decision* lives here. Replacing a damage or stat model changes what this helper concludes, without touching a line of it.

Callers are few and specific: `DecideSweetSpotCollision` has three call sites — `SandboxAgentApplyDamageModel.cs:635`, `CustomAgentApplyDamageModel.cs:188` and `MultiplayerAgentApplyDamageModel.cs:166` — while `GetAttackCollisionResults` has exactly one. That asymmetry tells you which members are on the hot path.

## Mental Model

Four of the `Decide*` predicates share the same **precondition triad** and it is not optional: the victim must survive (`Health - InflictedDamage >= 1f`), the blow must not already be flagged `ShrugOff`, and the attacker weapon must be non-null. `DecideAgentShrugOffBlow` uses only the first (`MissionCombatMechanicsHelper.cs:15`) and adds a threshold comparison against `AgentApplyDamageModel.CalculateStaggerThresholdDamage` (`MissionCombatMechanicsHelper.cs:17`, `MissionCombatMechanicsHelper.cs:18`); `DecideAgentDismountedByBlow` uses all three (`MissionCombatMechanicsHelper.cs:28`, `MissionCombatMechanicsHelper.cs:29`, `MissionCombatMechanicsHelper.cs:30`). A blow that would kill is therefore *never* a dismount, a knockback or a knockdown — those effects resolve only on surviving hits.

`DecideAgentDismountedByBlow` has a **fallthrough**: if the dismount comparison fails, it retries as a knockdown through `DecideWeaponKnockDown` (`MissionCombatMechanicsHelper.cs:41`). The method name therefore lies slightly — a `true` return means "dismounted **or** knocked down". Anything that needs to distinguish the two has to ask again.

The two "is this a real hit" predicates are **false-negative by design**, and both return `false` when their inputs are unset. `IsCollisionBoneDifferentThanWeaponAttachBone` returns `false` unless *both* indices are non-`-1` (`MissionCombatMechanicsHelper.cs:289`), so an unattached or unindexed collision is reported as "same bone" and treated as a clean hit. `DecideSweetSpotCollision` requires `AttackProgress` to sit in the band `0.22f..0.55f` (`MissionCombatMechanicsHelper.cs:301`, `MissionCombatMechanicsHelper.cs:304`) — outside it, no sweet spot, which is what stops every glancing contact from knocking an enemy down.

`GetAttackCollisionResults` is the one wide method: it takes the collision data **by `ref`** and produces a `CombatLogData`, an `out int speedBonus` and a rewritten `BaseMagnitude` / `MovementSpeedDamageModifier` (`MissionCombatMechanicsHelper.cs:310`, `MissionCombatMechanicsHelper.cs:327`). It builds the log from a seventeen-argument `CombatLogData` constructor (`MissionCombatMechanicsHelper.cs:317`) and computes a missile hit distance from the start position when the attack is a missile (`MissionCombatMechanicsHelper.cs:313`, `MissionCombatMechanicsHelper.cs:315`).

The damage-type downgrade at the end is the subtle one. `DamageTypes` is rewritten to the literal `2` whenever the weapon is empty, the bone does not match, the attack is an alternative, it is fall damage, or it is a horse charge (`MissionCombatMechanicsHelper.cs:329`) — otherwise the collision's own type survives. That `2` is the blunt-damage slot written inline rather than named, so reading it as "2" tells you nothing about intent, and the same rewrite applies to every hit that fails any one of those five checks.

## How to use

**Getting it.** Call the static members; there is nothing to obtain and nothing to construct. The `Initialize()` call the previous example on this page showed does not exist — the type has no lifecycle.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// Is this a sweet-spot hit? Both melee damage models gate knock-down on exactly this.
bool sweetSpot = MissionCombatMechanicsHelper.DecideSweetSpotCollision(collisionData);

// Ask the same dismount question the engine will ask.
bool dismounted = MissionCombatMechanicsHelper.DecideAgentDismountedByBlow(
    attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
// NB: true means dismounted OR knocked down (MissionCombatMechanicsHelper.cs:41).

bool shruggedOff = MissionCombatMechanicsHelper.DecideAgentShrugOffBlow(
    victimAgent, collisionData, blow);
```

If you are overriding a damage model, prefer asking the models over duplicating this logic — that is the pattern the shipped models use:

```csharp
public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent,
                                       WeaponComponentData w, in Blow blow,
                                       in AttackCollisionData c)
{
    return w.IsMeleeWeapon && blow.StrikeType == StrikeType.Swing
        && MissionCombatMechanicsHelper.DecideSweetSpotCollision(c);
}
```

**The mistake that makes every glancing hit a knockdown.** Widening `DecideSweetSpotCollision`'s band — or, more commonly, reimplementing it as "any hit that connects". The band `0.22f..0.55f` is the *middle* of the attack animation (`MissionCombatMechanicsHelper.cs:301`), and both shipped melee models gate knockdown on it (`CustomAgentApplyDamageModel.cs:188`, `MultiplayerAgentApplyDamageModel.cs:166`). A predicate that returns true for any collision turns the first contact of every swing into a knockdown, so enemies collapse before they can react — and because the same predicate is consulted for every attacker, the effect scales with troop count rather than looking like a single unlucky hit.

## Key Methods

### DecideAgentShrugOffBlow
`public static bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** Executes the DecideAgentShrugOffBlow logic.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public static bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentDismountedByBlow logic.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public static bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentKnockedBackByBlow logic.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public static bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentKnockedDownByBlow logic.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public static bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideMountRearedByBlow logic.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideWeaponCollisionReaction
`public static void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Executes the DecideWeaponCollisionReaction logic.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### IsCollisionBoneDifferentThanWeaponAttachBone
`public static bool IsCollisionBoneDifferentThanWeaponAttachBone(in AttackCollisionData collisionData, int weaponAttachBoneIndex)`

**Purpose:** Determines whether the this instance is in the collision bone different than weapon attach bone state or condition.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.IsCollisionBoneDifferentThanWeaponAttachBone(collisionData, 0);
```

### DecideSweetSpotCollision
`public static bool DecideSweetSpotCollision(in AttackCollisionData collisionData)`

**Purpose:** Executes the DecideSweetSpotCollision logic.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideSweetSpotCollision(collisionData);
```

### GetAttackCollisionResults
`public static void GetAttackCollisionResults(in AttackInformation attackInformation, bool crushedThrough, float momentumRemaining, bool cancelDamage, ref AttackCollisionData attackCollisionData, out CombatLogData combatLog, out int speedBonus)`

**Purpose:** Reads and returns the attack collision results value held by the this instance.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.GetAttackCollisionResults(attackInformation, false, 0, false, attackCollisionData, combatLog, speedBonus);
```

### UpdateMomentumRemaining
`public static void UpdateMomentumRemaining(ref float momentumRemaining, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Recalculates and stores the latest representation of momentum remaining.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.UpdateMomentumRemaining(momentumRemaining, b, collisionData, attacker, victim, attackerWeapon, false);
```

### HitWithAnotherBone
`public static bool HitWithAnotherBone(in AttackCollisionData collisionData, Agent attacker, in MissionWeapon attackerWeapon)`

**Purpose:** Executes the HitWithAnotherBone logic.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.HitWithAnotherBone(collisionData, attacker, attackerWeapon);
```

### CalculateBaseMeleeBlowMagnitude
`public static float CalculateBaseMeleeBlowMagnitude(in AttackInformation attackInformation, in AttackCollisionData collisionData, StrikeType strikeType, float progressEffect, float impactPointAsPercent, float exraLinearSpeed)`

**Purpose:** Calculates the current value or result of base melee blow magnitude.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.CalculateBaseMeleeBlowMagnitude(attackInformation, collisionData, strikeType, 0, 0, 0);
```

## Usage Example

```csharp
MissionCombatMechanicsHelper.Initialize();
```

## See Also

- [MultiplayerAgentApplyDamageModel — the model that consults this helper for knockdown](../MultiplayerAgentApplyDamageModel)
- [CustomBattleAgentStatCalculateModel — supplies the resistance values these decisions compare against](../CustomBattleAgentStatCalculateModel)
- [MissionDifficultyModel — the damage multiplier applied alongside these decisions](../MissionDifficultyModel)
- [Area Index](../)