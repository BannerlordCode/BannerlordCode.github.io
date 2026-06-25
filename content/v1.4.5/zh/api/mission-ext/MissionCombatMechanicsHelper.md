---
title: "MissionCombatMechanicsHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCombatMechanicsHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCombatMechanicsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionCombatMechanicsHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionCombatMechanicsHelper.cs`

## 概述

`MissionCombatMechanicsHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MissionCombatMechanicsHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DecideAgentShrugOffBlow
`public static bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**用途 / Purpose:** 处理 `decide agent shrug off blow` 相关逻辑。

### DecideAgentDismountedByBlow
`public static bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理 `decide agent dismounted by blow` 相关逻辑。

### DecideAgentKnockedBackByBlow
`public static bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理 `decide agent knocked back by blow` 相关逻辑。

### DecideAgentKnockedDownByBlow
`public static bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理 `decide agent knocked down by blow` 相关逻辑。

### DecideMountRearedByBlow
`public static bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理 `decide mount reared by blow` 相关逻辑。

### DecideWeaponCollisionReaction
`public static void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**用途 / Purpose:** 处理 `decide weapon collision reaction` 相关逻辑。

### IsCollisionBoneDifferentThanWeaponAttachBone
`public static bool IsCollisionBoneDifferentThanWeaponAttachBone(in AttackCollisionData collisionData, int weaponAttachBoneIndex)`

**用途 / Purpose:** 处理 `is collision bone different than weapon attach bone` 相关逻辑。

### DecideSweetSpotCollision
`public static bool DecideSweetSpotCollision(in AttackCollisionData collisionData)`

**用途 / Purpose:** 处理 `decide sweet spot collision` 相关逻辑。

### GetAttackCollisionResults
`public static void GetAttackCollisionResults(in AttackInformation attackInformation, bool crushedThrough, float momentumRemaining, bool cancelDamage, ref AttackCollisionData attackCollisionData, out CombatLogData combatLog, out int speedBonus)`

**用途 / Purpose:** 获取 `attack collision results` 的当前值。

### UpdateMomentumRemaining
`public static void UpdateMomentumRemaining(ref float momentumRemaining, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**用途 / Purpose:** 更新 `momentum remaining` 的状态或数据。

### HitWithAnotherBone
`public static bool HitWithAnotherBone(in AttackCollisionData collisionData, Agent attacker, in MissionWeapon attackerWeapon)`

**用途 / Purpose:** 处理 `hit with another bone` 相关逻辑。

### CalculateBaseMeleeBlowMagnitude
`public static float CalculateBaseMeleeBlowMagnitude(in AttackInformation attackInformation, in AttackCollisionData collisionData, StrikeType strikeType, float progressEffect, float impactPointAsPercent, float exraLinearSpeed)`

**用途 / Purpose:** 处理 `calculate base melee blow magnitude` 相关逻辑。

## 使用示例

```csharp
MissionCombatMechanicsHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)