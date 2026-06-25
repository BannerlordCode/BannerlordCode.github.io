---
title: "CustomAgentApplyDamageModel"
description: "Auto-generated class reference for CustomAgentApplyDamageModel."
---
# CustomAgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomAgentApplyDamageModel : AgentApplyDamageModel`
**Base:** `AgentApplyDamageModel`
**File:** `TaleWorlds.MountAndBlade/CustomAgentApplyDamageModel.cs`

## Overview

`CustomAgentApplyDamageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomAgentApplyDamageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsDamageIgnored
`public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**Purpose:** Determines whether the this instance is in the damage ignored state or condition.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData);
```

### ApplyDamageAmplifications
`public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage amplifications to the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, 0);
```

### ApplyDamageScaling
`public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage scaling to the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, 0);
```

### ApplyDamageReductions
`public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of damage reductions to the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, 0);
```

### ApplyGeneralDamageModifiers
`public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of general damage modifiers to the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, 0);
```

### DecideMissileWeaponFlags
`public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**Purpose:** Executes the DecideMissileWeaponFlags logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
customAgentApplyDamageModel.DecideMissileWeaponFlags(attackerAgent, missileWeapon, missileWeaponFlags);
```

### DecideCrushedThrough
`public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)`

**Purpose:** Executes the DecideCrushedThrough logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.DecideCrushedThrough(attackerAgent, defenderAgent, 0, attackDirection, strikeType, defendItem, false);
```

### CanWeaponDealSneakAttack
`public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon deal sneak attack.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CanWeaponDealSneakAttack(attackInformation, weapon);
```

### CanWeaponDismount
`public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon dismount.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CanWeaponDismount(attackerAgent, attackerWeapon, blow, collisionData);
```

### CalculateDefendedBlowStunMultipliers
`public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**Purpose:** Calculates the current value or result of defended blow stun multipliers.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
customAgentApplyDamageModel.CalculateDefendedBlowStunMultipliers(attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon, attackerStunPeriod, defenderStunPeriod);
```

### CanWeaponKnockback
`public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon knockback.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CanWeaponKnockback(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockDown
`public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon knock down.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CanWeaponKnockDown(attackerAgent, victimAgent, attackerWeapon, blow, collisionData);
```

### GetDismountPenetration
`public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the dismount penetration value held by the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.GetDismountPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetKnockBackPenetration
`public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the knock back penetration value held by the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.GetKnockBackPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetKnockDownPenetration
`public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the knock down penetration value held by the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.GetKnockDownPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetHorseChargePenetration
`public override float GetHorseChargePenetration()`

**Purpose:** Reads and returns the horse charge penetration value held by the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.GetHorseChargePenetration();
```

### CalculateStaggerThresholdDamage
`public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**Purpose:** Calculates the current value or result of stagger threshold damage.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CalculateStaggerThresholdDamage(defenderAgent, blow);
```

### CalculateAlternativeAttackDamage
`public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**Purpose:** Calculates the current value or result of alternative attack damage.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CalculateAlternativeAttackDamage(attackInformation, collisionData, weapon);
```

### CalculatePassiveAttackDamage
`public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Calculates the current value or result of passive attack damage.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CalculatePassiveAttackDamage(attackerCharacter, collisionData, 0);
```

### DecidePassiveAttackCollisionReaction
`public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**Purpose:** Executes the DecidePassiveAttackCollisionReaction logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.DecidePassiveAttackCollisionReaction(attacker, defender, false);
```

### CalculateShieldDamage
`public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**Purpose:** Calculates the current value or result of shield damage.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CalculateShieldDamage(attackInformation, 0);
```

### CalculateSailFireDamage
`public override float CalculateSailFireDamage(Agent attackerAgent, float baseDamage, bool damageFromShipMachine)`

**Purpose:** Calculates the current value or result of sail fire damage.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CalculateSailFireDamage(attackerAgent, 0, false);
```

### GetDamageMultiplierForBodyPart
`public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**Purpose:** Reads and returns the damage multiplier for body part value held by the this instance.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.GetDamageMultiplierForBodyPart(bodyPart, type, false, false);
```

### CanWeaponIgnoreFriendlyFireChecks
`public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**Purpose:** Checks whether the this instance meets the preconditions for weapon ignore friendly fire checks.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CanWeaponIgnoreFriendlyFireChecks(weapon);
```

### DecideAgentShrugOffBlow
`public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** Executes the DecideAgentShrugOffBlow logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentDismountedByBlow logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentKnockedBackByBlow logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideAgentKnockedDownByBlow logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Executes the DecideMountRearedByBlow logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideWeaponCollisionReaction
`public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Executes the DecideWeaponCollisionReaction logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
customAgentApplyDamageModel.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### ShouldMissilePassThroughAfterShieldBreak
`public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**Purpose:** Executes the ShouldMissilePassThroughAfterShieldBreak logic.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.ShouldMissilePassThroughAfterShieldBreak(attackerAgent, attackerWeapon);
```

### CalculateRemainingMomentum
`public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Calculates the current value or result of remaining momentum.

```csharp
// Obtain an instance of CustomAgentApplyDamageModel from the subsystem API first
CustomAgentApplyDamageModel customAgentApplyDamageModel = ...;
var result = customAgentApplyDamageModel.CalculateRemainingMomentum(0, b, collisionData, attacker, victim, attackerWeapon, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomAgentApplyDamageModel>(new MyCustomAgentApplyDamageModel());
```

## See Also

- [Area Index](../)