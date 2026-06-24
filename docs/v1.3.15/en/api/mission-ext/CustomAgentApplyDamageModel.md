<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomAgentApplyDamageModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `is damage ignored`.

### ApplyDamageAmplifications
`public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies `damage amplifications` to the current object.

### ApplyDamageScaling
`public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies `damage scaling` to the current object.

### ApplyDamageReductions
`public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies `damage reductions` to the current object.

### ApplyGeneralDamageModifiers
`public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Applies `general damage modifiers` to the current object.

### DecideMissileWeaponFlags
`public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**Purpose:** Handles logic related to `decide missile weapon flags`.

### DecideCrushedThrough
`public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)`

**Purpose:** Handles logic related to `decide crushed through`.

### CanWeaponDealSneakAttack
`public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**Purpose:** Checks whether the current object can `weapon deal sneak attack`.

### CanWeaponDismount
`public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object can `weapon dismount`.

### CalculateDefendedBlowStunMultipliers
`public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**Purpose:** Handles logic related to `calculate defended blow stun multipliers`.

### CanWeaponKnockback
`public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object can `weapon knockback`.

### CanWeaponKnockDown
`public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Checks whether the current object can `weapon knock down`.

### GetDismountPenetration
`public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Gets the current value of `dismount penetration`.

### GetKnockBackPenetration
`public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Gets the current value of `knock back penetration`.

### GetKnockDownPenetration
`public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Gets the current value of `knock down penetration`.

### GetHorseChargePenetration
`public override float GetHorseChargePenetration()`

**Purpose:** Gets the current value of `horse charge penetration`.

### CalculateStaggerThresholdDamage
`public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**Purpose:** Handles logic related to `calculate stagger threshold damage`.

### CalculateAlternativeAttackDamage
`public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**Purpose:** Handles logic related to `calculate alternative attack damage`.

### CalculatePassiveAttackDamage
`public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**Purpose:** Handles logic related to `calculate passive attack damage`.

### DecidePassiveAttackCollisionReaction
`public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**Purpose:** Handles logic related to `decide passive attack collision reaction`.

### CalculateShieldDamage
`public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**Purpose:** Handles logic related to `calculate shield damage`.

### CalculateSailFireDamage
`public override float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)`

**Purpose:** Handles logic related to `calculate sail fire damage`.

### CalculateHullFireDamage
`public override float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)`

**Purpose:** Handles logic related to `calculate hull fire damage`.

### GetDamageMultiplierForBodyPart
`public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**Purpose:** Gets the current value of `damage multiplier for body part`.

### CanWeaponIgnoreFriendlyFireChecks
`public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**Purpose:** Checks whether the current object can `weapon ignore friendly fire checks`.

### DecideAgentShrugOffBlow
`public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** Handles logic related to `decide agent shrug off blow`.

### DecideAgentDismountedByBlow
`public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent dismounted by blow`.

### DecideAgentKnockedBackByBlow
`public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent knocked back by blow`.

### DecideAgentKnockedDownByBlow
`public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent knocked down by blow`.

### DecideMountRearedByBlow
`public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide mount reared by blow`.

### DecideWeaponCollisionReaction
`public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Handles logic related to `decide weapon collision reaction`.

### ShouldMissilePassThroughAfterShieldBreak
`public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**Purpose:** Handles logic related to `should missile pass through after shield break`.

### CalculateRemainingMomentum
`public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Handles logic related to `calculate remaining momentum`.

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomAgentApplyDamageModel>(new MyCustomAgentApplyDamageModel());
```

## See Also

- [Complete Class Catalog](../catalog)