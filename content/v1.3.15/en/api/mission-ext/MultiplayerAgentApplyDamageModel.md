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

`MultiplayerAgentApplyDamageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerAgentApplyDamageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsDamageIgnored
`public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**Purpose:** Determines whether the current object is in the `damage ignored` state or condition.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData);
```

### ApplyDamageAmplifications
`public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of `damage amplifications` to the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, 0);
```

### ApplyDamageScaling
`public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of `damage scaling` to the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, 0);
```

### ApplyDamageReductions
`public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of `damage reductions` to the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, 0);
```

### ApplyGeneralDamageModifiers
`public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies the effect of `general damage modifiers` to the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, 0);
```

### DecideMissileWeaponFlags
`public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.DecideMissileWeaponFlags(attackerAgent, missileWeapon, missileWeaponFlags);
```

### DecideCrushedThrough
`public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideCrushedThrough(attackerAgent, defenderAgent, 0, attackDirection, strikeType, defendItem, false);
```

### CanWeaponDealSneakAttack
`public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**Purpose:** Checks whether the current object meets the preconditions for `weapon deal sneak attack`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponDealSneakAttack(attackInformation, weapon);
```

### CanWeaponDismount
`public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object meets the preconditions for `weapon dismount`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponDismount(attackerAgent, attackerWeapon, blow, collisionData);
```

### CalculateDefendedBlowStunMultipliers
`public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**Purpose:** Calculates the current value or result of `defended blow stun multipliers`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.CalculateDefendedBlowStunMultipliers(attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon, attackerStunPeriod, defenderStunPeriod);
```

### CanWeaponKnockback
`public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object meets the preconditions for `weapon knockback`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponKnockback(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockDown
`public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object meets the preconditions for `weapon knock down`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponKnockDown(attackerAgent, victimAgent, attackerWeapon, blow, collisionData);
```

### GetDismountPenetration
`public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the `dismount penetration` value held by the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetDismountPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetKnockBackPenetration
`public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the `knock back penetration` value held by the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetKnockBackPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetKnockDownPenetration
`public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Reads and returns the `knock down penetration` value held by the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetKnockDownPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetHorseChargePenetration
`public override float GetHorseChargePenetration()`

**Purpose:** Reads and returns the `horse charge penetration` value held by the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetHorseChargePenetration();
```

### CalculateStaggerThresholdDamage
`public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**Purpose:** Calculates the current value or result of `stagger threshold damage`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateStaggerThresholdDamage(defenderAgent, blow);
```

### CalculateAlternativeAttackDamage
`public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**Purpose:** Calculates the current value or result of `alternative attack damage`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateAlternativeAttackDamage(attackInformation, collisionData, weapon);
```

### CalculatePassiveAttackDamage
`public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Calculates the current value or result of `passive attack damage`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculatePassiveAttackDamage(attackerCharacter, collisionData, 0);
```

### DecidePassiveAttackCollisionReaction
`public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecidePassiveAttackCollisionReaction(attacker, defender, false);
```

### CalculateShieldDamage
`public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**Purpose:** Calculates the current value or result of `shield damage`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateShieldDamage(attackInformation, 0);
```

### CalculateSailFireDamage
`public override float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)`

**Purpose:** Calculates the current value or result of `sail fire damage`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateSailFireDamage(attackerAgent, shipOrigin, 0, false);
```

### CalculateHullFireDamage
`public override float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)`

**Purpose:** Calculates the current value or result of `hull fire damage`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateHullFireDamage(0, shipOrigin);
```

### GetDamageMultiplierForBodyPart
`public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**Purpose:** Reads and returns the `damage multiplier for body part` value held by the current object.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetDamageMultiplierForBodyPart(bodyPart, type, false, false);
```

### CanWeaponIgnoreFriendlyFireChecks
`public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**Purpose:** Checks whether the current object meets the preconditions for `weapon ignore friendly fire checks`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponIgnoreFriendlyFireChecks(weapon);
```

### DecideAgentShrugOffBlow
`public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideWeaponCollisionReaction
`public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### ShouldMissilePassThroughAfterShieldBreak
`public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ShouldMissilePassThroughAfterShieldBreak(attackerAgent, attackerWeapon);
```

### CalculateRemainingMomentum
`public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Calculates the current value or result of `remaining momentum`.

```csharp
// Obtain an instance of MultiplayerAgentApplyDamageModel from the subsystem API first
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateRemainingMomentum(0, b, collisionData, attacker, victim, attackerWeapon, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerAgentApplyDamageModel>(new MyMultiplayerAgentApplyDamageModel());
```

## See Also

- [Area Index](../)