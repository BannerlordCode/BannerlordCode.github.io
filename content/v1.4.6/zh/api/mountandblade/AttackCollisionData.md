---
title: "AttackCollisionData"
description: "AttackCollisionData：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 45 个（方法 3、属性 42、字段 0）。源文件 TaleWorlds.MountAndBlade/AttackCollisionData.cs。"
---
# AttackCollisionData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AttackCollisionData`
**File:** `TaleWorlds.MountAndBlade/AttackCollisionData.cs`

## 概述

AttackCollisionData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AttackCollisionData.cs。它是一个 public 结构体，继承链为 AttackCollisionData。public/protected 成员共 45 个：3 方法、42 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AttackCollisionData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 AttackCollisionData。成员构成以属性为主（属性 42/45，方法 3/45），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AttackCollisionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AttackBlockedWithShield` | `public bool AttackBlockedWithShield` | 属性 |
| `CorrectSideShieldBlock` | `public bool CorrectSideShieldBlock` | 属性 |
| `IsAlternativeAttack` | `public bool IsAlternativeAttack` | 属性 |
| `IsColliderAgent` | `public bool IsColliderAgent` | 属性 |
| `CollidedWithShieldOnBack` | `public bool CollidedWithShieldOnBack` | 属性 |
| `IsMissile` | `public bool IsMissile` | 属性 |
| `MissileBlockedWithWeapon` | `public bool MissileBlockedWithWeapon` | 属性 |
| `MissileHasPhysics` | `public bool MissileHasPhysics` | 属性 |
| `EntityExists` | `public bool EntityExists` | 属性 |
| `ThrustTipHit` | `public bool ThrustTipHit` | 属性 |
| `MissileGoneUnderWater` | `public bool MissileGoneUnderWater` | 属性 |
| `MissileGoneOutOfBorder` | `public bool MissileGoneOutOfBorder` | 属性 |
| `CollidedWithLastBoneSegment` | `public bool CollidedWithLastBoneSegment` | 属性 |
| `IsHorseCharge` | `public bool IsHorseCharge` | 属性 |
| `IsFallDamage` | `public bool IsFallDamage` | 属性 |
| `CollisionResult` | `public CombatCollisionResult CollisionResult` | 属性 |
| `AffectorWeaponSlotOrMissileIndex` | `public int AffectorWeaponSlotOrMissileIndex` | 属性 |
| `StrikeType` | `public int StrikeType` | 属性 |
| `DamageType` | `public int DamageType` | 属性 |
| `CollisionBoneIndex` | `public sbyte CollisionBoneIndex` | 属性 |
| `VictimHitBodyPart` | `public BoneBodyPartType VictimHitBodyPart` | 属性 |
| `AttackBoneIndex` | `public sbyte AttackBoneIndex` | 属性 |
| `AttackDirection` | `public Agent.UsageDirection AttackDirection` | 属性 |
| `PhysicsMaterialIndex` | `public int PhysicsMaterialIndex` | 属性 |
| `CollisionHitResultFlags` | `public CombatHitResultFlags CollisionHitResultFlags` | 属性 |
| `AttackProgress` | `public float AttackProgress` | 属性 |
| `CollisionDistanceOnWeapon` | `public float CollisionDistanceOnWeapon` | 属性 |
| `AttackerStunPeriod` | `public float AttackerStunPeriod` | 属性 |
| `DefenderStunPeriod` | `public float DefenderStunPeriod` | 属性 |
| `MissileTotalDamage` | `public float MissileTotalDamage` | 属性 |
| `MissileStartingBaseSpeed` | `public float MissileStartingBaseSpeed` | 属性 |
| `ChargeVelocity` | `public float ChargeVelocity` | 属性 |
| `FallSpeed` | `public float FallSpeed` | 属性 |
| `WeaponRotUp` | `public Vec3 WeaponRotUp` | 属性 |
| `WeaponBlowDir` | `public Vec3 WeaponBlowDir` | 属性 |
| `CollisionGlobalPosition` | `public Vec3 CollisionGlobalPosition` | 属性 |
| `MissileVelocity` | `public Vec3 MissileVelocity` | 属性 |
| `MissileStartingPosition` | `public Vec3 MissileStartingPosition` | 属性 |
| `VictimAgentCurVelocity` | `public Vec3 VictimAgentCurVelocity` | 属性 |
| `CollisionGlobalNormal` | `public Vec3 CollisionGlobalNormal` | 属性 |
| `LastBoneSegmentRotUp` | `public Vec3 LastBoneSegmentRotUp` | 属性 |
| `LastBoneSegmentSwingDir` | `public Vec3 LastBoneSegmentSwingDir` | 属性 |
| `SetCollisionBoneIndexForAreaDamage` | `public void SetCollisionBoneIndexForAreaDamage(sbyte boneIndex)` | 方法 |
| `UpdateCollisionPositionAndBoneForReflect` | `public void UpdateCollisionPositionAndBoneForReflect(int inflictedDamage, Vec3 position, sbyte boneIndex)` | 方法 |
| `GetAttackCollisionDataForDebugPurpose` | `public static AttackCollisionData GetAttackCollisionDataForDebugPurpose(bool _attackBlockedWithShield, bool _correctSideShieldBlock, bool _isAlternativeAttack, bool _isColliderAgent, bool _collidedWithShieldOnBack, bool _isMissile, bool _isMissileBlockedWithWeapon, bool _missileHasPhysics, bool _entityExists, bool _thrustTipHit, bool _missileGoneUnderWater, bool _missileGoneOutOfBorder, CombatCollisionResult collisionResult, int affectorWeaponSlotOrMissileIndex, int StrikeType, int DamageType, sbyte CollisionBoneIndex, BoneBodyPartType VictimHitBodyPart, sbyte AttackBoneIndex, Agent.UsageDirection AttackDirection, int PhysicsMaterialIndex, CombatHitResultFlags CollisionHitResultFlags, float AttackProgress, float CollisionDistanceOnWeapon, float AttackerStunPeriod, float DefenderStunPeriod, float MissileTotalDamage, float MissileInitialSpeed, float ChargeVelocity, float FallSpeed, Vec3 WeaponRotUp, Vec3 _weaponBlowDir, Vec3 CollisionGlobalPosition, Vec3 MissileVelocity, Vec3 MissileStartingPosition, Vec3 VictimAgentCurVelocity, Vec3 GroundNormal)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
