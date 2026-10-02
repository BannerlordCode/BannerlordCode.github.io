---
title: "MissionCombatMechanicsHelper"
description: "MissionCombatMechanicsHelper 的自动生成类参考。"
---
# MissionCombatMechanicsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionCombatMechanicsHelper `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs

## 概述

`MissionCombatMechanicsHelper` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### DecideAgentShrugOffBlow
`public static bool DecideAgentShrugOffBlow(Agent victimAgent,in AttackCollisionData collisionData,in Blow blow) `

### DecideAgentDismountedByBlow
`public static bool DecideAgentDismountedByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow) `

### DecideAgentKnockedBackByBlow
`public static bool DecideAgentKnockedBackByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow) `

### DecideAgentKnockedDownByBlow
`public static bool DecideAgentKnockedDownByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow) `

### DecideMountRearedByBlow
`public static bool DecideMountRearedByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow) `

### DecideWeaponCollisionReaction
`public static void DecideWeaponCollisionReaction(in Blow registeredBlow,in AttackCollisionData collisionData,Agent attacker,Agent defender,in MissionWeapon attackerWeapon,bool isFatalHit,bool isShruggedOff,float momentumRemaining,out MeleeCollisionReaction colReaction) `

### IsCollisionBoneDifferentThanWeaponAttachBone
`public static bool IsCollisionBoneDifferentThanWeaponAttachBone(in AttackCollisionData collisionData,int weaponAttachBoneIndex) `

### DecideSweetSpotCollision
`public static bool DecideSweetSpotCollision(in AttackCollisionData collisionData) `

### GetAttackCollisionResults
`public static void GetAttackCollisionResults(in AttackInformation attackInformation,bool crushedThrough,float momentumRemaining,bool cancelDamage,ref AttackCollisionData attackCollisionData,out CombatLogData combatLog,out int speedBonus) `

### UpdateMomentumRemaining
`public static void UpdateMomentumRemaining(ref float momentumRemaining,in Blow b,in AttackCollisionData collisionData,Agent attacker,Agent victim,in MissionWeapon attackerWeapon,bool isCrushThrough) `

### HitWithAnotherBone
`public static bool HitWithAnotherBone(in AttackCollisionData collisionData,Agent attacker,in MissionWeapon attackerWeapon) `

### CalculateBaseMeleeBlowMagnitude
`public static float CalculateBaseMeleeBlowMagnitude(in AttackInformation attackInformation,in AttackCollisionData collisionData,StrikeType strikeType,float progressEffect,float impactPointAsPercent,float exraLinearSpeed) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
