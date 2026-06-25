---
title: "AttackCollisionData"
description: "AttackCollisionData 的自动生成类参考。"
---
# AttackCollisionData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AttackCollisionData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AttackCollisionData.cs`

## 概述

`AttackCollisionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AttackCollisionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AffectorWeaponSlotOrMissileIndex` | `public int AffectorWeaponSlotOrMissileIndex { get; }` |
| `StrikeType` | `public int StrikeType { get; }` |
| `DamageType` | `public int DamageType { get; }` |
| `CollisionBoneIndex` | `public sbyte CollisionBoneIndex { get; }` |
| `VictimHitBodyPart` | `public BoneBodyPartType VictimHitBodyPart { get; }` |
| `AttackBoneIndex` | `public sbyte AttackBoneIndex { get; }` |
| `AttackDirection` | `public Agent.UsageDirection AttackDirection { get; }` |
| `PhysicsMaterialIndex` | `public int PhysicsMaterialIndex { get; }` |
| `CollisionHitResultFlags` | `public CombatHitResultFlags CollisionHitResultFlags { get; }` |
| `AttackProgress` | `public float AttackProgress { get; set; }` |
| `CollisionDistanceOnWeapon` | `public float CollisionDistanceOnWeapon { get; set; }` |
| `AttackerStunPeriod` | `public float AttackerStunPeriod { get; set; }` |
| `DefenderStunPeriod` | `public float DefenderStunPeriod { get; set; }` |
| `MissileTotalDamage` | `public float MissileTotalDamage { get; }` |
| `MissileStartingBaseSpeed` | `public float MissileStartingBaseSpeed { get; }` |
| `ChargeVelocity` | `public float ChargeVelocity { get; }` |
| `FallSpeed` | `public float FallSpeed { get; }` |
| `WeaponRotUp` | `public Vec3 WeaponRotUp { get; }` |
| `CollisionGlobalPosition` | `public Vec3 CollisionGlobalPosition { get; }` |
| `MissileVelocity` | `public Vec3 MissileVelocity { get; }` |
| `MissileStartingPosition` | `public Vec3 MissileStartingPosition { get; }` |
| `VictimAgentCurVelocity` | `public Vec3 VictimAgentCurVelocity { get; }` |
| `CollisionGlobalNormal` | `public Vec3 CollisionGlobalNormal { get; }` |
| `LastBoneSegmentRotUp` | `public Vec3 LastBoneSegmentRotUp { get; }` |
| `LastBoneSegmentSwingDir` | `public Vec3 LastBoneSegmentSwingDir { get; }` |

## 主要方法

### SetCollisionBoneIndexForAreaDamage
`public void SetCollisionBoneIndexForAreaDamage(sbyte boneIndex)`

**用途 / Purpose:** **用途 / Purpose:** 为 collision bone index for area damage 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AttackCollisionData 实例
AttackCollisionData attackCollisionData = ...;
attackCollisionData.SetCollisionBoneIndexForAreaDamage(0);
```

### UpdateCollisionPositionAndBoneForReflect
`public void UpdateCollisionPositionAndBoneForReflect(int inflictedDamage, Vec3 position, sbyte boneIndex)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 collision position and bone for reflect 的最新表示。

```csharp
// 先通过子系统 API 拿到 AttackCollisionData 实例
AttackCollisionData attackCollisionData = ...;
attackCollisionData.UpdateCollisionPositionAndBoneForReflect(0, position, 0);
```

### GetAttackCollisionDataForDebugPurpose
`public static AttackCollisionData GetAttackCollisionDataForDebugPurpose(bool _attackBlockedWithShield, bool _correctSideShieldBlock, bool _isAlternativeAttack, bool _isColliderAgent, bool _collidedWithShieldOnBack, bool _isMissile, bool _isMissileBlockedWithWeapon, bool _missileHasPhysics, bool _entityExists, bool _thrustTipHit, bool _missileGoneUnderWater, bool _missileGoneOutOfBorder, CombatCollisionResult collisionResult, int affectorWeaponSlotOrMissileIndex, int StrikeType, int DamageType, sbyte CollisionBoneIndex, BoneBodyPartType VictimHitBodyPart, sbyte AttackBoneIndex, Agent.UsageDirection AttackDirection, int PhysicsMaterialIndex, CombatHitResultFlags CollisionHitResultFlags, float AttackProgress, float CollisionDistanceOnWeapon, float AttackerStunPeriod, float DefenderStunPeriod, float MissileTotalDamage, float MissileInitialSpeed, float ChargeVelocity, float FallSpeed, Vec3 WeaponRotUp, Vec3 _weaponBlowDir, Vec3 CollisionGlobalPosition, Vec3 MissileVelocity, Vec3 MissileStartingPosition, Vec3 VictimAgentCurVelocity, Vec3 GroundNormal)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 attack collision data for debug purpose 的结果。

```csharp
// 静态调用，不需要实例
AttackCollisionData.GetAttackCollisionDataForDebugPurpose(false, false, false, false, false, false, false, false, false, false, false, false, collisionResult, 0, 0, 0, 0, victimHitBodyPart, 0, attackDirection, 0, collisionHitResultFlags, 0, 0, 0, 0, 0, 0, 0, 0, weaponRotUp, _weaponBlowDir, collisionGlobalPosition, missileVelocity, missileStartingPosition, victimAgentCurVelocity, groundNormal);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AttackCollisionData entry = ...;
```

## 参见

- [本区域目录](../)