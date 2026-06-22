<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentApplyDamageModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`
**Base:** `MBGameModel<AgentApplyDamageModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`

## Overview

`AgentApplyDamageModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<AgentApplyDamageModel>(new MyAgentApplyDamageModel())` to change how it computes.

## Key Methods

### CalculateDamage
```csharp
public float CalculateDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### IsDamageIgnored
```csharp
public abstract bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)
```

### ApplyDamageAmplifications
```csharp
public abstract float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### ApplyDamageScaling
```csharp
public abstract float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### ApplyDamageReductions
```csharp
public abstract float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### ApplyGeneralDamageModifiers
```csharp
public abstract float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### DecideMissileWeaponFlags
```csharp
public abstract void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)
```

### CalculateDefendedBlowStunMultipliers
```csharp
public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)
```

### CalculateStaggerThresholdDamage
```csharp
public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)
```

### CalculateAlternativeAttackDamage
```csharp
public abstract float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)
```

### CalculatePassiveAttackDamage
```csharp
public abstract float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)
```

### DecidePassiveAttackCollisionReaction
```csharp
public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)
```

### DecideWeaponCollisionReaction
```csharp
public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)
```

### CalculateShieldDamage
```csharp
public abstract float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)
```

### CalculateSailFireDamage
```csharp
public abstract float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)
```

### CalculateHullFireDamage
```csharp
public abstract float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)
```

### GetDamageMultiplierForBodyPart
```csharp
public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)
```

### CanWeaponIgnoreFriendlyFireChecks
```csharp
public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)
```

### CanWeaponDealSneakAttack
```csharp
public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)
```

### CanWeaponDismount
```csharp
public abstract bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)
```

### CanWeaponKnockback
```csharp
public abstract bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)
```

### CanWeaponKnockDown
```csharp
public abstract bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)
```

### DecideCrushedThrough
```csharp
public abstract bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsageHit)
```

### CalculateRemainingMomentum
```csharp
public abstract float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)
```

### DecideAgentShrugOffBlow
```csharp
public abstract bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)
```

### DecideAgentDismountedByBlow
```csharp
public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideAgentKnockedBackByBlow
```csharp
public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideAgentKnockedDownByBlow
```csharp
public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideMountRearedByBlow
```csharp
public abstract bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### ShouldMissilePassThroughAfterShieldBreak
```csharp
public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)
```

## Usage Example

```csharp
// Typical usage of AgentApplyDamageModel (Model)
Game.Current.ReplaceModel<AgentApplyDamageModel>(new MyAgentApplyDamageModel());
```

## See Also

- [Complete Class Catalog](../catalog)