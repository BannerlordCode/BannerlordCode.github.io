<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCombatMechanicsHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionCombatMechanicsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionCombatMechanicsHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs`

## Overview

`MissionCombatMechanicsHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MissionCombatMechanicsHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DecideAgentShrugOffBlow
`public static bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**Purpose:** Handles logic related to `decide agent shrug off blow`.

### DecideAgentDismountedByBlow
`public static bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent dismounted by blow`.

### DecideAgentKnockedBackByBlow
`public static bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent knocked back by blow`.

### DecideAgentKnockedDownByBlow
`public static bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide agent knocked down by blow`.

### DecideMountRearedByBlow
`public static bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Handles logic related to `decide mount reared by blow`.

### DecideWeaponCollisionReaction
`public static void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Handles logic related to `decide weapon collision reaction`.

### IsCollisionBoneDifferentThanWeaponAttachBone
`public static bool IsCollisionBoneDifferentThanWeaponAttachBone(in AttackCollisionData collisionData, int weaponAttachBoneIndex)`

**Purpose:** Handles logic related to `is collision bone different than weapon attach bone`.

### DecideSweetSpotCollision
`public static bool DecideSweetSpotCollision(in AttackCollisionData collisionData)`

**Purpose:** Handles logic related to `decide sweet spot collision`.

### GetAttackCollisionResults
`public static void GetAttackCollisionResults(in AttackInformation attackInformation, bool crushedThrough, float momentumRemaining, bool cancelDamage, ref AttackCollisionData attackCollisionData, out CombatLogData combatLog, out int speedBonus)`

**Purpose:** Gets the current value of `attack collision results`.

### UpdateMomentumRemaining
`public static void UpdateMomentumRemaining(ref float momentumRemaining, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Updates the state or data of `momentum remaining`.

### HitWithAnotherBone
`public static bool HitWithAnotherBone(in AttackCollisionData collisionData, Agent attacker, in MissionWeapon attackerWeapon)`

**Purpose:** Handles logic related to `hit with another bone`.

### CalculateBaseMeleeBlowMagnitude
`public static float CalculateBaseMeleeBlowMagnitude(in AttackInformation attackInformation, in AttackCollisionData collisionData, StrikeType strikeType, float progressEffect, float impactPointAsPercent, float exraLinearSpeed)`

**Purpose:** Handles logic related to `calculate base melee blow magnitude`.

## Usage Example

```csharp
MissionCombatMechanicsHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)