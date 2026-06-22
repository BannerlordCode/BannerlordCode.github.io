<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomAgentApplyDamageModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomAgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomAgentApplyDamageModel : AgentApplyDamageModel`
**Base:** `AgentApplyDamageModel`
**File:** `TaleWorlds.MountAndBlade/CustomAgentApplyDamageModel.cs`

## 概述

`CustomAgentApplyDamageModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CustomAgentApplyDamageModel>(new MyCustomAgentApplyDamageModel())` 注册，以改变其计算逻辑。

## 主要方法

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

## 使用示例

```csharp
// CustomAgentApplyDamageModel (Model) 的典型用法
Game.Current.ReplaceModel<CustomAgentApplyDamageModel>(new MyCustomAgentApplyDamageModel());
```

## 参见

- [完整类目录](../catalog)