---
title: "SandboxAgentApplyDamageModel"
description: "Auto-generated class reference for SandboxAgentApplyDamageModel."
---
# SandboxAgentApplyDamageModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentApplyDamageModel : AgentApplyDamageModel`
**Base:** `AgentApplyDamageModel`
**File:** `SandBox/GameComponents/SandboxAgentApplyDamageModel.cs`

## Overview

`SandboxAgentApplyDamageModel` is the melee damage rulebook. Every number the engine turns a blow into — how much damage, whether the blow is shrugged off, whether the victim is knocked down, dismounted or crushed through — is asked of this one object, and the stock answers are mostly hard numbers a mod will want to argue with: `GetHorseChargePenetration` returns a flat `0.4f` (`SandBox/GameComponents/SandboxAgentApplyDamageModel.cs:715`), `DecideCrushedThrough` puts the energy threshold at `58f` and raises it to `69.6f` when the defender is holding a shield (`:546`), and `CalculateAlternativeAttackDamage` maps weapon classes to `2f`/`1f` and returns `2f` for a null weapon (`:781`). The stock method is not symmetric: it also grants armour-scaled body-part multipliers, raises sally-out damage ×4.5 against siege weapons (`:367`), and rolls the Pavise perk to decide a crossbow bolt that struck a shield on the victim's back does no damage at all (`:16`).

## Mental Model

Read it as the melee arbiter rather than a passive table: `Mission` calls into it mid-collision, not at load time — `Mission.cs:5173` asks `DecideWeaponCollisionReaction`, and `Mission.cs:5449` asks `DecideAgentShrugOffBlow` before damage is applied. A mod swaps it out wholesale at `AddModel` time because the alternatives are all live-calculation hooks with no cache and no setter. The practical consequence of the swap is total: the model returns multipliers and booleans, so returning `1f` from an amplification hook means "leave this damage untouched" and returning `false` from `DecideCrushedThrough` silently removes shield-crushing from the game. Because it is an `MBGameModel<AgentApplyDamageModel>`, subclassing means overriding the sandbox class and calling `base` for the ~20 overrides you have no opinion about, rather than reimplementing `AgentApplyDamageModel`.

## Key Methods

### IsDamageIgnored
`public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**Purpose:** Determines whether this instance is in the damage ignored state or condition.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData);
```

### ApplyDamageAmplifications
`public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage amplifications to this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, 0);
```

### ApplyDamageScaling
`public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage scaling to this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, 0);
```

### ApplyDamageReductions
`public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage reductions to this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, 0);
```

### ApplyGeneralDamageModifiers
`public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of general damage modifiers to this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, 0);
```

### DecideCrushedThrough
`public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)`

**Purpose:** Executes the DecideCrushedThrough logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideCrushedThrough(attackerAgent, defenderAgent, 0, attackDirection, strikeType, defendItem, false);
```

### DecideMissileWeaponFlags
`public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**Purpose:** Executes the DecideMissileWeaponFlags logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
sandboxAgentApplyDamageModel.DecideMissileWeaponFlags(attackerAgent, missileWeapon, missileWeaponFlags);
```

### CanWeaponIgnoreFriendlyFireChecks
`public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**Purpose:** Checks whether this instance meets the preconditions for weapon ignore friendly fire checks.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponIgnoreFriendlyFireChecks(weapon);
```

### CanWeaponDealSneakAttack
`public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**Purpose:** Checks whether this instance meets the preconditions for weapon deal sneak attack.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponDealSneakAttack(attackInformation, weapon);
```

### CanWeaponDismount
`public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether this instance meets the preconditions for weapon dismount.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponDismount(attackerAgent, attackerWeapon, blow, collisionData);
```

### CalculateDefendedBlowStunMultipliers
`public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**Purpose:** Calculates the current value or result of defended blow stun multipliers.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
sandboxAgentApplyDamageModel.CalculateDefendedBlowStunMultipliers(attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon, attackerStunPeriod, defenderStunPeriod);
```

### CanWeaponKnockback
`public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether this instance meets the preconditions for weapon knockback.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponKnockback(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockDown
`public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether this instance meets the preconditions for weapon knock down.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponKnockDown(attackerAgent, victimAgent, attackerWeapon, blow, collisionData);
```

### GetDismountPenetration
`public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Reads and returns the dismount penetration value held by this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetDismountPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetKnockBackPenetration
`public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Reads and returns the knock back penetration value held by this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetKnockBackPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetKnockDownPenetration
`public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Reads and returns the knock down penetration value held by this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetKnockDownPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetHorseChargePenetration
`public override float GetHorseChargePenetration()`

**Purpose:** Reads and returns the horse charge penetration value held by this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetHorseChargePenetration();
```

### CalculateStaggerThresholdDamage
`public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**Purpose:** Calculates the current value or result of stagger threshold damage.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateStaggerThresholdDamage(defenderAgent, blow);
```

### CalculateAlternativeAttackDamage
`public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**Purpose:** Calculates the current value or result of alternative attack damage.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateAlternativeAttackDamage(attackInformation, collisionData, weapon);
```

### CalculatePassiveAttackDamage
`public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Calculates the current value or result of passive attack damage.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculatePassiveAttackDamage(attackerCharacter, collisionData, 0);
```

### DecidePassiveAttackCollisionReaction
`public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**Purpose:** Executes the DecidePassiveAttackCollisionReaction logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecidePassiveAttackCollisionReaction(attacker, defender, false);
```

### CalculateShieldDamage
`public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**Purpose:** Calculates the current value or result of shield damage.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateShieldDamage(attackInformation, 0);
```

### CalculateSailFireDamage
`public override float CalculateSailFireDamage(Agent attackerAgent, float baseDamage, bool damageFromShipMachine)`

**Purpose:** Calculates the current value or result of sail fire damage.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateSailFireDamage(attackerAgent, 0, false);
```

### GetDamageMultiplierForBodyPart
`public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**Purpose:** Reads and returns the damage multiplier for body part value held by this instance.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetDamageMultiplierForBodyPart(bodyPart, type, false, false);
```

### DecideAgentShrugOffBlow
`public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** Executes the DecideAgentShrugOffBlow logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentDismountedByBlow logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentKnockedBackByBlow logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentKnockedDownByBlow logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideMountRearedByBlow logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideWeaponCollisionReaction
`public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Executes the DecideWeaponCollisionReaction logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
sandboxAgentApplyDamageModel.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### ShouldMissilePassThroughAfterShieldBreak
`public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**Purpose:** Executes the ShouldMissilePassThroughAfterShieldBreak logic.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ShouldMissilePassThroughAfterShieldBreak(attackerAgent, attackerWeapon);
```

### CalculateRemainingMomentum
`public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Calculates the current value or result of remaining momentum.

```csharp
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateRemainingMomentum(0, b, collisionData, attacker, victim, attackerWeapon, false);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<AgentApplyDamageModel>(new SandboxAgentApplyDamageModel());
}
```

`AgentApplyDamageModel` is declared as `MBGameModel<AgentApplyDamageModel>` (`AgentApplyDamageModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:34`.

## See Also

- [Area Index](../)