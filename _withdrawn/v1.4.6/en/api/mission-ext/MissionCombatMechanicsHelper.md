---
title: "MissionCombatMechanicsHelper"
description: "MissionCombatMechanicsHelper: a public class in TaleWorlds.MountAndBlade; 12 exposed members (12 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionCombatMechanicsHelper

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MissionCombatMechanicsHelper`
**File:** `TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionCombatMechanicsHelper lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs. It is a public class; the inheritance chain is MissionCombatMechanicsHelper. It exposes 12 public/protected members: 12 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionCombatMechanicsHelper lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionCombatMechanicsHelper. The surface is method-led (methods 12/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DecideAgentShrugOffBlow` | `public static bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)` | method |
| `DecideAgentDismountedByBlow` | `public static bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideAgentKnockedBackByBlow` | `public static bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideAgentKnockedDownByBlow` | `public static bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideMountRearedByBlow` | `public static bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideWeaponCollisionReaction` | `public static void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)` | method |
| `IsCollisionBoneDifferentThanWeaponAttachBone` | `public static bool IsCollisionBoneDifferentThanWeaponAttachBone(in AttackCollisionData collisionData, int weaponAttachBoneIndex)` | method |
| `DecideSweetSpotCollision` | `public static bool DecideSweetSpotCollision(in AttackCollisionData collisionData)` | method |
| `GetAttackCollisionResults` | `public static void GetAttackCollisionResults(in AttackInformation attackInformation, bool crushedThrough, float momentumRemaining, bool cancelDamage, ref AttackCollisionData attackCollisionData, out CombatLogData combatLog, out int speedBonus)` | method |
| `UpdateMomentumRemaining` | `public static void UpdateMomentumRemaining(ref float momentumRemaining, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)` | method |
| `HitWithAnotherBone` | `public static bool HitWithAnotherBone(in AttackCollisionData collisionData, Agent attacker, in MissionWeapon attackerWeapon)` | method |
| `CalculateBaseMeleeBlowMagnitude` | `public static float CalculateBaseMeleeBlowMagnitude(in AttackInformation attackInformation, in AttackCollisionData collisionData, StrikeType strikeType, float progressEffect, float impactPointAsPercent, float exraLinearSpeed)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
