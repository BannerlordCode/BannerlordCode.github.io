---
title: "MissionCombatMechanicsHelper"
description: "Auto-generated class reference for MissionCombatMechanicsHelper."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public static bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public static bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public static bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public static bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideWeaponCollisionReaction
`public static void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### IsCollisionBoneDifferentThanWeaponAttachBone
`public static bool IsCollisionBoneDifferentThanWeaponAttachBone(in AttackCollisionData collisionData, int weaponAttachBoneIndex)`

**Purpose:** Determines whether the current object is in the `collision bone different than weapon attach bone` state or condition.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.IsCollisionBoneDifferentThanWeaponAttachBone(collisionData, 0);
```

### DecideSweetSpotCollision
`public static bool DecideSweetSpotCollision(in AttackCollisionData collisionData)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.DecideSweetSpotCollision(collisionData);
```

### GetAttackCollisionResults
`public static void GetAttackCollisionResults(in AttackInformation attackInformation, bool crushedThrough, float momentumRemaining, bool cancelDamage, ref AttackCollisionData attackCollisionData, out CombatLogData combatLog, out int speedBonus)`

**Purpose:** Reads and returns the `attack collision results` value held by the current object.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.GetAttackCollisionResults(attackInformation, false, 0, false, attackCollisionData, combatLog, speedBonus);
```

### UpdateMomentumRemaining
`public static void UpdateMomentumRemaining(ref float momentumRemaining, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**Purpose:** Recalculates and stores the latest representation of `momentum remaining`.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.UpdateMomentumRemaining(momentumRemaining, b, collisionData, attacker, victim, attackerWeapon, false);
```

### HitWithAnotherBone
`public static bool HitWithAnotherBone(in AttackCollisionData collisionData, Agent attacker, in MissionWeapon attackerWeapon)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.HitWithAnotherBone(collisionData, attacker, attackerWeapon);
```

### CalculateBaseMeleeBlowMagnitude
`public static float CalculateBaseMeleeBlowMagnitude(in AttackInformation attackInformation, in AttackCollisionData collisionData, StrikeType strikeType, float progressEffect, float impactPointAsPercent, float exraLinearSpeed)`

**Purpose:** Calculates the current value or result of `base melee blow magnitude`.

```csharp
// Static call; no instance required
MissionCombatMechanicsHelper.CalculateBaseMeleeBlowMagnitude(attackInformation, collisionData, strikeType, 0, 0, 0);
```

## Usage Example

```csharp
MissionCombatMechanicsHelper.Initialize();
```

## See Also

- [Area Index](../)