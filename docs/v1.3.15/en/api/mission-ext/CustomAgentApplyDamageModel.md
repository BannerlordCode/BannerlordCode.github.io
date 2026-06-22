<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomAgentApplyDamageModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomAgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomAgentApplyDamageModel : AgentApplyDamageModel`
**Base:** `AgentApplyDamageModel`
**File:** `TaleWorlds.MountAndBlade/CustomAgentApplyDamageModel.cs`

## Overview

`CustomAgentApplyDamageModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CustomAgentApplyDamageModel>(new MyCustomAgentApplyDamageModel())` to change how it computes.

## Key Methods

### IsDamageIgnored
```csharp
public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)
```

### ApplyDamageAmplifications
```csharp
public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### ApplyDamageScaling
```csharp
public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### ApplyDamageReductions
```csharp
public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### ApplyGeneralDamageModifiers
```csharp
public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
```

### DecideMissileWeaponFlags
```csharp
public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)
```

### DecideCrushedThrough
```csharp
public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)
```

### CanWeaponDealSneakAttack
```csharp
public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)
```

### CanWeaponDismount
```csharp
public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)
```

### CalculateDefendedBlowStunMultipliers
```csharp
public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)
```

### CanWeaponKnockback
```csharp
public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)
```

### CanWeaponKnockDown
```csharp
public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)
```

### GetDismountPenetration
```csharp
public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
```

### GetKnockBackPenetration
```csharp
public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
```

### GetKnockDownPenetration
```csharp
public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
```

### GetHorseChargePenetration
```csharp
public override float GetHorseChargePenetration()
```

### CalculateStaggerThresholdDamage
```csharp
public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)
```

### CalculateAlternativeAttackDamage
```csharp
public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)
```

### CalculatePassiveAttackDamage
```csharp
public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)
```

### DecidePassiveAttackCollisionReaction
```csharp
public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)
```

### CalculateShieldDamage
```csharp
public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)
```

### CalculateSailFireDamage
```csharp
public override float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)
```

### CalculateHullFireDamage
```csharp
public override float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)
```

### GetDamageMultiplierForBodyPart
```csharp
public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)
```

### CanWeaponIgnoreFriendlyFireChecks
```csharp
public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)
```

### DecideAgentShrugOffBlow
```csharp
public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)
```

### DecideAgentDismountedByBlow
```csharp
public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideAgentKnockedBackByBlow
```csharp
public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideAgentKnockedDownByBlow
```csharp
public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideMountRearedByBlow
```csharp
public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

## Usage Example

```csharp
// Typical usage of CustomAgentApplyDamageModel (Model)
Game.Current.ReplaceModel<CustomAgentApplyDamageModel>(new MyCustomAgentApplyDamageModel());
```

## See Also

- [Complete Class Catalog](../catalog)