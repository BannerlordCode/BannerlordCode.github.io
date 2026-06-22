<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCombatMechanicsHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionCombatMechanicsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionCombatMechanicsHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs`

## 概述

`MissionCombatMechanicsHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

### DecideAgentShrugOffBlow
```csharp
public static bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)
```

### DecideAgentDismountedByBlow
```csharp
public static bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideAgentKnockedBackByBlow
```csharp
public static bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideAgentKnockedDownByBlow
```csharp
public static bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideMountRearedByBlow
```csharp
public static bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)
```

### DecideWeaponCollisionReaction
```csharp
public static void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)
```

### IsCollisionBoneDifferentThanWeaponAttachBone
```csharp
public static bool IsCollisionBoneDifferentThanWeaponAttachBone(in AttackCollisionData collisionData, int weaponAttachBoneIndex)
```

### DecideSweetSpotCollision
```csharp
public static bool DecideSweetSpotCollision(in AttackCollisionData collisionData)
```

### GetAttackCollisionResults
```csharp
public static void GetAttackCollisionResults(in AttackInformation attackInformation, bool crushedThrough, float momentumRemaining, bool cancelDamage, ref AttackCollisionData attackCollisionData, out CombatLogData combatLog, out int speedBonus)
```

### UpdateMomentumRemaining
```csharp
public static void UpdateMomentumRemaining(ref float momentumRemaining, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)
```

### HitWithAnotherBone
```csharp
public static bool HitWithAnotherBone(in AttackCollisionData collisionData, Agent attacker, in MissionWeapon attackerWeapon)
```

### CalculateBaseMeleeBlowMagnitude
```csharp
public static float CalculateBaseMeleeBlowMagnitude(in AttackInformation attackInformation, in AttackCollisionData collisionData, StrikeType strikeType, float progressEffect, float impactPointAsPercent, float exraLinearSpeed)
```

## 使用示例

```csharp
// MissionCombatMechanicsHelper (Helper) 的典型用法
MissionCombatMechanicsHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)