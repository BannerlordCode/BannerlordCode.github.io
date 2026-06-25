---
title: "AgentApplyDamageModel"
description: "Auto-generated class reference for AgentApplyDamageModel."
---
# AgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`
**Base:** `MBGameModel<AgentApplyDamageModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`

## Overview

`AgentApplyDamageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AgentApplyDamageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDamage
`public float CalculateDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** **Purpose:** Calculates the current value or result of damage.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateDamage(attackInformation, collisionData, 0);
```

### IsDamageIgnored
`public abstract bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Determines whether the this instance is in the damage ignored state or condition.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData);
```

### ApplyDamageAmplifications
`public abstract float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** **Purpose:** Applies the effect of damage amplifications to the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, 0);
```

### ApplyDamageScaling
`public abstract float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** **Purpose:** Applies the effect of damage scaling to the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, 0);
```

### ApplyDamageReductions
`public abstract float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** **Purpose:** Applies the effect of damage reductions to the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, 0);
```

### ApplyGeneralDamageModifiers
`public abstract float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** **Purpose:** Applies the effect of general damage modifiers to the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, 0);
```

### DecideMissileWeaponFlags
`public abstract void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**Purpose:** **Purpose:** Executes the DecideMissileWeaponFlags logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
agentApplyDamageModel.DecideMissileWeaponFlags(attackerAgent, missileWeapon, missileWeaponFlags);
```

### CalculateDefendedBlowStunMultipliers
`public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**Purpose:** **Purpose:** Calculates the current value or result of defended blow stun multipliers.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
agentApplyDamageModel.CalculateDefendedBlowStunMultipliers(attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon, attackerStunPeriod, defenderStunPeriod);
```

### CalculateStaggerThresholdDamage
`public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**Purpose:** **Purpose:** Calculates the current value or result of stagger threshold damage.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateStaggerThresholdDamage(defenderAgent, blow);
```

### CalculateAlternativeAttackDamage
`public abstract float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**Purpose:** **Purpose:** Calculates the current value or result of alternative attack damage.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateAlternativeAttackDamage(attackInformation, collisionData, weapon);
```

### CalculatePassiveAttackDamage
`public abstract float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** **Purpose:** Calculates the current value or result of passive attack damage.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculatePassiveAttackDamage(attackerCharacter, collisionData, 0);
```

### DecidePassiveAttackCollisionReaction
`public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**Purpose:** **Purpose:** Executes the DecidePassiveAttackCollisionReaction logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecidePassiveAttackCollisionReaction(attacker, defender, false);
```

### DecideWeaponCollisionReaction
`public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** **Purpose:** Executes the DecideWeaponCollisionReaction logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
agentApplyDamageModel.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### CalculateShieldDamage
`public abstract float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**Purpose:** **Purpose:** Calculates the current value or result of shield damage.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateShieldDamage(attackInformation, 0);
```

### CalculateSailFireDamage
`public abstract float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)`

**Purpose:** **Purpose:** Calculates the current value or result of sail fire damage.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateSailFireDamage(attackerAgent, shipOrigin, 0, false);
```

### CalculateHullFireDamage
`public abstract float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)`

**Purpose:** **Purpose:** Calculates the current value or result of hull fire damage.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateHullFireDamage(0, shipOrigin);
```

### GetDamageMultiplierForBodyPart
`public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**Purpose:** **Purpose:** Reads and returns the damage multiplier for body part value held by the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetDamageMultiplierForBodyPart(bodyPart, type, false, false);
```

### CanWeaponIgnoreFriendlyFireChecks
`public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for weapon ignore friendly fire checks.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponIgnoreFriendlyFireChecks(weapon);
```

### CanWeaponDealSneakAttack
`public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for weapon deal sneak attack.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponDealSneakAttack(attackInformation, weapon);
```

### CanWeaponDismount
`public abstract bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for weapon dismount.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponDismount(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockback
`public abstract bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for weapon knockback.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponKnockback(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockDown
`public abstract bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for weapon knock down.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponKnockDown(attackerAgent, victimAgent, attackerWeapon, blow, collisionData);
```

### DecideCrushedThrough
`public abstract bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsageHit)`

**Purpose:** **Purpose:** Executes the DecideCrushedThrough logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideCrushedThrough(attackerAgent, defenderAgent, 0, attackDirection, strikeType, defendItem, false);
```

### CalculateRemainingMomentum
`public abstract float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** **Purpose:** Calculates the current value or result of remaining momentum.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateRemainingMomentum(0, b, collisionData, attacker, victim, attackerWeapon, false);
```

### DecideAgentShrugOffBlow
`public abstract bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** **Purpose:** Executes the DecideAgentShrugOffBlow logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** **Purpose:** Executes the DecideAgentDismountedByBlow logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** **Purpose:** Executes the DecideAgentKnockedBackByBlow logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** **Purpose:** Executes the DecideAgentKnockedDownByBlow logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public abstract bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** **Purpose:** Executes the DecideMountRearedByBlow logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### ShouldMissilePassThroughAfterShieldBreak
`public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**Purpose:** **Purpose:** Executes the ShouldMissilePassThroughAfterShieldBreak logic.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ShouldMissilePassThroughAfterShieldBreak(attackerAgent, attackerWeapon);
```

### GetDismountPenetration
`public abstract float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Reads and returns the dismount penetration value held by the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetDismountPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetKnockBackPenetration
`public abstract float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Reads and returns the knock back penetration value held by the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetKnockBackPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetKnockDownPenetration
`public abstract float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Reads and returns the knock down penetration value held by the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetKnockDownPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetHorseChargePenetration
`public abstract float GetHorseChargePenetration()`

**Purpose:** **Purpose:** Reads and returns the horse charge penetration value held by the this instance.

```csharp
// Obtain an instance of AgentApplyDamageModel from the subsystem API first
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetHorseChargePenetration();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AgentApplyDamageModel instance = ...;
```

## See Also

- [Area Index](../)