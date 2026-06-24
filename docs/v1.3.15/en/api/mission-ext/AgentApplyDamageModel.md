<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentApplyDamageModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate damage`.

### IsDamageIgnored
`public abstract bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**Purpose:** Handles logic related to `is damage ignored`.

### ApplyDamageAmplifications
`public abstract float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies `damage amplifications` to the current object.

### ApplyDamageScaling
`public abstract float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies `damage scaling` to the current object.

### ApplyDamageReductions
`public abstract float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies `damage reductions` to the current object.

### ApplyGeneralDamageModifiers
`public abstract float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies `general damage modifiers` to the current object.

### DecideMissileWeaponFlags
`public abstract void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**Purpose:** Handles logic related to `decide missile weapon flags`.

### CalculateDefendedBlowStunMultipliers
`public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**Purpose:** Handles logic related to `calculate defended blow stun multipliers`.

### CalculateStaggerThresholdDamage
`public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**Purpose:** Handles logic related to `calculate stagger threshold damage`.

### CalculateAlternativeAttackDamage
`public abstract float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**Purpose:** Handles logic related to `calculate alternative attack damage`.

### CalculatePassiveAttackDamage
`public abstract float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Handles logic related to `calculate passive attack damage`.

### DecidePassiveAttackCollisionReaction
`public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**Purpose:** Handles logic related to `decide passive attack collision reaction`.

### DecideWeaponCollisionReaction
`public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Handles logic related to `decide weapon collision reaction`.

### CalculateShieldDamage
`public abstract float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**Purpose:** Handles logic related to `calculate shield damage`.

### CalculateSailFireDamage
`public abstract float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)`

**Purpose:** Handles logic related to `calculate sail fire damage`.

### CalculateHullFireDamage
`public abstract float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)`

**Purpose:** Handles logic related to `calculate hull fire damage`.

### GetDamageMultiplierForBodyPart
`public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**Purpose:** Gets the current value of `damage multiplier for body part`.

### CanWeaponIgnoreFriendlyFireChecks
`public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**Purpose:** Checks whether the current object can `weapon ignore friendly fire checks`.

### CanWeaponDealSneakAttack
`public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**Purpose:** Checks whether the current object can `weapon deal sneak attack`.

### CanWeaponDismount
`public abstract bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object can `weapon dismount`.

### CanWeaponKnockback
`public abstract bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object can `weapon knockback`.

### CanWeaponKnockDown
`public abstract bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object can `weapon knock down`.

### DecideCrushedThrough
`public abstract bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsageHit)`

**Purpose:** Handles logic related to `decide crushed through`.

### CalculateRemainingMomentum
`public abstract float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Handles logic related to `calculate remaining momentum`.

### DecideAgentShrugOffBlow
`public abstract bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** Handles logic related to `decide agent shrug off blow`.

### DecideAgentDismountedByBlow
`public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent dismounted by blow`.

### DecideAgentKnockedBackByBlow
`public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent knocked back by blow`.

### DecideAgentKnockedDownByBlow
`public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent knocked down by blow`.

### DecideMountRearedByBlow
`public abstract bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide mount reared by blow`.

### ShouldMissilePassThroughAfterShieldBreak
`public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**Purpose:** Handles logic related to `should missile pass through after shield break`.

### GetDismountPenetration
`public abstract float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Gets the current value of `dismount penetration`.

### GetKnockBackPenetration
`public abstract float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Gets the current value of `knock back penetration`.

### GetKnockDownPenetration
`public abstract float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Gets the current value of `knock down penetration`.

### GetHorseChargePenetration
`public abstract float GetHorseChargePenetration()`

**Purpose:** Gets the current value of `horse charge penetration`.

## Usage Example

```csharp
var implementation = new CustomAgentApplyDamageModel();
```

## See Also

- [Complete Class Catalog](../catalog)