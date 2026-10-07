---
title: "MultiplayerAgentApplyDamageModel"
description: "Auto-generated class reference for MultiplayerAgentApplyDamageModel."
---
# MultiplayerAgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAgentApplyDamageModel : AgentApplyDamageModel`
**Base:** `AgentApplyDamageModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerAgentApplyDamageModel.cs`

## Overview

`MultiplayerAgentApplyDamageModel` is a concrete `AgentApplyDamageModel` — the multiplayer combat ruleset: which blows count as blocked, what scales damage, what can dismount or knock down. It has no fields and no state, only `override`s (`MultiplayerAgentApplyDamageModel.cs:9`).

In 1.3.0 it has **no instance anywhere**. A tree-wide search for the type name returns exactly one hit — its own declaration. The only two `AddModel<AgentApplyDamageModel>` registrations are `CustomAgentApplyDamageModel` in the editor build (`EditorGame.cs:49`) and `SandboxAgentApplyDamageModel` in the campaign module (`SandBoxSubModule.cs:34`), so `MissionGameModels.Current.AgentApplyDamageModel` never resolves to this type in a shipped game. It is a complete but unused ruleset: everything a server would need for MP damage, present and never switched on.

## Mental Model

Most of the class is **pass-through**, and that is the important thing to notice before you subclass it. `IsDamageIgnored` returns `false` (`MultiplayerAgentApplyDamageModel.cs:14`), `ApplyDamageAmplifications`, `ApplyDamageScaling` and `ApplyDamageReductions` each return `baseDamage` unchanged (`MultiplayerAgentApplyDamageModel.cs:20`, `MultiplayerAgentApplyDamageModel.cs:26`, `MultiplayerAgentApplyDamageModel.cs:32`), `GetDismountPenetration` and `GetKnockBackPenetration` return `0f` (`MultiplayerAgentApplyDamageModel.cs:172`, `MultiplayerAgentApplyDamageModel.cs:178`), `CanWeaponDealSneakAttack` returns `false` (`MultiplayerAgentApplyDamageModel.cs:131`), `DecideMissileWeaponFlags` is empty (`MultiplayerAgentApplyDamageModel.cs:103`) and `CalculateDefendedBlowStunMultipliers` is empty (`MultiplayerAgentApplyDamageModel.cs:141`). There is **no armour, no damage-type modifier and no sneak-attack rule in this class at all** — it inherits whatever its base class does for those, because it deliberately opts out.

Four members carry real rules.

`ApplyGeneralDamageModifiers` is the only place damage is actually changed. It resolves a combat perk handler through `MPPerkObject.GetCombatPerkHandler(attackerAgent, victimAgent)` (`MultiplayerAgentApplyDamageModel.cs:41`) and skips that whole block when none exists (`MultiplayerAgentApplyDamageModel.cs:42`), returns the input early when the hit was shield-blocked (`MultiplayerAgentApplyDamageModel.cs:45`), applies an alternative-attack branch that excludes fall damage (`MultiplayerAgentApplyDamageModel.cs:62`, `MultiplayerAgentApplyDamageModel.cs:65`), and adds a head-shot bonus for consumables and ranged weapons (`MultiplayerAgentApplyDamageModel.cs:93`). Note the bonus condition is *either* consumable **or** ranged, not both — a thrown consumable still gets it through the first half.

`CanWeaponDismount` opens with `MBMath.IsBetween((int)blow.VictimBodyPart, 0, 6)` (`MultiplayerAgentApplyDamageModel.cs:137`), and `IsBetween` is **half-open**: the `int` overload is `value >= minValue && value < maxValue` (`MBMath.cs:303`). So indices 0 through 5 qualify and index 6 does not. `CanWeaponKnockback` uses the identical `0, 6` test (`MultiplayerAgentApplyDamageModel.cs:149`) and the helper for an inclusive range is a different name, `IsBetweenInclusive` (`MBMath.cs:307`). If you widen either body-part window, remember you are editing a half-open range.

`CanWeaponKnockDown` hard-codes `WeaponClass.Boulder` as an unconditional knock-down (`MultiplayerAgentApplyDamageModel.cs:155`, `MultiplayerAgentApplyDamageModel.cs:157`), then handles legs on an unmounted victim (`MultiplayerAgentApplyDamageModel.cs:162`) and finishes with a flag-and-strike-type test that calls into `MissionCombatMechanicsHelper.DecideSweetSpotCollision` (`MultiplayerAgentApplyDamageModel.cs:166`). So this class depends on the combat-mechanics helper rather than duplicating its collision maths.

`GetHorseChargePenetration` is the only constant that is not a pass-through: a fixed `0.4f` (`MultiplayerAgentApplyDamageModel.cs:211`), with no argument at all.

The three `Get*Penetration` methods are mutually exclusive by design. Dismount and knock-back return `0f` — meaning "never penetrate" — while `GetKnockDownPenetration` does real work, branching on boulder, then melee legs, then a head case (`MultiplayerAgentApplyDamageModel.cs:185`, `MultiplayerAgentApplyDamageModel.cs:189`, `MultiplayerAgentApplyDamageModel.cs:192`, `MultiplayerAgentApplyDamageModel.cs:199`). Reading "0f means infinite resistance" rather than "no resistance" is the trap; returning `0f` from a penetration method is how a weapon fails to push anyone.

## How to use

**Getting it.** Nothing in 1.3.0 constructs it. To use it, register it yourself against the **abstract** base type — registering `MultiplayerAgentApplyDamageModel` as the concrete key would satisfy the compiler and change nothing, because the registry resolves `AgentApplyDamageModel`.

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IModDependencyResolver resolver)
    {
        base.OnGameStart(game, resolver);
        // Register the ABSTRACT type (BasicGameStarter.AddModel<T>, :47).
        gameStarter.AddModel<AgentApplyDamageModel>(new MultiplayerAgentApplyDamageModel());
    }
}
```

Read the live instance from a mission — never `Game.Current.GetModel<T>()`, which does not exist in this tree:

```csharp
AgentApplyDamageModel model = MissionGameModels.Current.AgentApplyDamageModel;
if (model != null)
{
    float scaled = model.ApplyGeneralDamageModifiers(attackInformation, collisionData, baseDamage);
    bool canDismount = model.CanWeaponDismount(attacker, attackerWeapon, blow, collisionData);
    Debug.Print("scaled=" + scaled + " dismount=" + canDismount, false);
}
```

To change one rule and keep the rest of the MP behaviour, subclass it and override only that member — every un-overridden member still returns the pass-through value:

```csharp
public class MyMpDamage : MultiplayerAgentApplyDamageModel
{
    // The base returns baseDamage unchanged (MultiplayerAgentApplyDamageModel.cs:32).
    public override float ApplyDamageReductions(in AttackInformation info,
                                                in AttackCollisionData data, float baseDamage)
    {
        return info.DefenderAgent.IsMount ? baseDamage * 0.5f : baseDamage;
    }

    // Return a NON-zero penetration; 0f means the blow never penetrates.
    public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData w,
                                                  in Blow blow, in AttackCollisionData c) => 0.2f;
}
```

**The mistake that makes every hit a push.** Returning `0f` from a `Get*Penetration` method thinking it means "no extra force". `0f` is the pass-through value here because the MP model opts out of those rules entirely (`MultiplayerAgentApplyDamageModel.cs:178`); the engine reads it as *zero penetration* rather than *unlimited*, so your weapon shoves nothing at all and never causes a stagger or knockdown. Override the method with a positive value instead.

## Key Methods

### IsDamageIgnored
`public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**Purpose:** Determines whether the this instance is in the damage ignored state or condition.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData);
```

### ApplyDamageAmplifications
`public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage amplifications to the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, 0);
```

### ApplyDamageScaling
`public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage scaling to the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, 0);
```

### ApplyDamageReductions
`public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage reductions to the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, 0);
```

### ApplyGeneralDamageModifiers
`public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of general damage modifiers to the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, 0);
```

### DecideMissileWeaponFlags
`public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**Purpose:** Executes the DecideMissileWeaponFlags logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.DecideMissileWeaponFlags(attackerAgent, missileWeapon, missileWeaponFlags);
```

### DecideCrushedThrough
`public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)`

**Purpose:** Executes the DecideCrushedThrough logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideCrushedThrough(attackerAgent, defenderAgent, 0, attackDirection, strikeType, defendItem, false);
```

### CanWeaponDealSneakAttack
`public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon deal sneak attack.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponDealSneakAttack(attackInformation, weapon);
```

### CanWeaponDismount
`public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon dismount.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponDismount(attackerAgent, attackerWeapon, blow, collisionData);
```

### CalculateDefendedBlowStunMultipliers
`public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**Purpose:** Calculates the current value or result of defended blow stun multipliers.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.CalculateDefendedBlowStunMultipliers(attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon, attackerStunPeriod, defenderStunPeriod);
```

### CanWeaponKnockback
`public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon knockback.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponKnockback(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockDown
`public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon knock down.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponKnockDown(attackerAgent, victimAgent, attackerWeapon, blow, collisionData);
```

### GetDismountPenetration
`public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the dismount penetration value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetDismountPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetKnockBackPenetration
`public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the knock back penetration value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetKnockBackPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetKnockDownPenetration
`public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the knock down penetration value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetKnockDownPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetHorseChargePenetration
`public override float GetHorseChargePenetration()`

**Purpose:** Reads and returns the horse charge penetration value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetHorseChargePenetration();
```

### CalculateStaggerThresholdDamage
`public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**Purpose:** Calculates the current value or result of stagger threshold damage.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateStaggerThresholdDamage(defenderAgent, blow);
```

### CalculateAlternativeAttackDamage
`public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**Purpose:** Calculates the current value or result of alternative attack damage.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateAlternativeAttackDamage(attackInformation, collisionData, weapon);
```

### CalculatePassiveAttackDamage
`public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Calculates the current value or result of passive attack damage.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculatePassiveAttackDamage(attackerCharacter, collisionData, 0);
```

### DecidePassiveAttackCollisionReaction
`public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**Purpose:** Executes the DecidePassiveAttackCollisionReaction logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecidePassiveAttackCollisionReaction(attacker, defender, false);
```

### CalculateShieldDamage
`public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**Purpose:** Calculates the current value or result of shield damage.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateShieldDamage(attackInformation, 0);
```

### CalculateSailFireDamage
`public override float CalculateSailFireDamage(Agent attackerAgent, float baseDamage, bool damageFromShipMachine)`

**Purpose:** Calculates the current value or result of sail fire damage.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateSailFireDamage(attackerAgent, 0, false);
```

### GetDamageMultiplierForBodyPart
`public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**Purpose:** Reads and returns the damage multiplier for body part value held by the this instance.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetDamageMultiplierForBodyPart(bodyPart, type, false, false);
```

### CanWeaponIgnoreFriendlyFireChecks
`public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon ignore friendly fire checks.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponIgnoreFriendlyFireChecks(weapon);
```

### DecideAgentShrugOffBlow
`public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** Executes the DecideAgentShrugOffBlow logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentDismountedByBlow logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentKnockedBackByBlow logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentKnockedDownByBlow logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideMountRearedByBlow logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideWeaponCollisionReaction
`public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Executes the DecideWeaponCollisionReaction logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### ShouldMissilePassThroughAfterShieldBreak
`public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**Purpose:** Executes the ShouldMissilePassThroughAfterShieldBreak logic.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ShouldMissilePassThroughAfterShieldBreak(attackerAgent, attackerWeapon);
```

### CalculateRemainingMomentum
`public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Calculates the current value or result of remaining momentum.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateRemainingMomentum(0, b, collisionData, attacker, victim, attackerWeapon, false);
```

## Usage Example

```csharp
The `Game.Current.ReplaceModel<MultiplayerAgentApplyDamageModel>(...)` line previously on this page used a 1.4+ API that does not exist in `bannerlord-1.3.0` — `ReplaceModel` appears nowhere in this tree. The 1.3.0 registration API is `BasicGameStarter.AddModel<AgentApplyDamageModel>`:

```csharp
gameStarter.AddModel<AgentApplyDamageModel>(new MultiplayerAgentApplyDamageModel());
```
```

## See Also

- [MissionCombatMechanicsHelper — the collision maths this model calls into](../MissionCombatMechanicsHelper)
- [MissionDifficultyModel — the other single-purpose combat model in this area](../MissionDifficultyModel)
- [MPPerkHandler — owns MPCombatPerkHandler, which ApplyGeneralDamageModifiers resolves](../MPPerkHandler)
- [Area Index](../)