---
title: "AttackCollisionData"
description: "AttackCollisionData: a public struct in TaleWorlds.MountAndBlade; 45 exposed members (3 methods, 42 properties, 0 fields). Source: TaleWorlds.MountAndBlade/AttackCollisionData.cs."
---
# AttackCollisionData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AttackCollisionData`
**File:** `TaleWorlds.MountAndBlade/AttackCollisionData.cs`

## Overview

AttackCollisionData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AttackCollisionData.cs. It is a public struct; the inheritance chain is AttackCollisionData. It exposes 45 public/protected members: 3 methods, 42 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AttackCollisionData is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain AttackCollisionData. The surface is property-led (properties 42/45, methods 3/45), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AttackCollisionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AttackBlockedWithShield` | `public bool AttackBlockedWithShield` | property |
| `CorrectSideShieldBlock` | `public bool CorrectSideShieldBlock` | property |
| `IsAlternativeAttack` | `public bool IsAlternativeAttack` | property |
| `IsColliderAgent` | `public bool IsColliderAgent` | property |
| `CollidedWithShieldOnBack` | `public bool CollidedWithShieldOnBack` | property |
| `IsMissile` | `public bool IsMissile` | property |
| `MissileBlockedWithWeapon` | `public bool MissileBlockedWithWeapon` | property |
| `MissileHasPhysics` | `public bool MissileHasPhysics` | property |
| `EntityExists` | `public bool EntityExists` | property |
| `ThrustTipHit` | `public bool ThrustTipHit` | property |
| `MissileGoneUnderWater` | `public bool MissileGoneUnderWater` | property |
| `MissileGoneOutOfBorder` | `public bool MissileGoneOutOfBorder` | property |
| `CollidedWithLastBoneSegment` | `public bool CollidedWithLastBoneSegment` | property |
| `IsHorseCharge` | `public bool IsHorseCharge` | property |
| `IsFallDamage` | `public bool IsFallDamage` | property |
| `CollisionResult` | `public CombatCollisionResult CollisionResult` | property |
| `AffectorWeaponSlotOrMissileIndex` | `public int AffectorWeaponSlotOrMissileIndex` | property |
| `StrikeType` | `public int StrikeType` | property |
| `DamageType` | `public int DamageType` | property |
| `CollisionBoneIndex` | `public sbyte CollisionBoneIndex` | property |
| `VictimHitBodyPart` | `public BoneBodyPartType VictimHitBodyPart` | property |
| `AttackBoneIndex` | `public sbyte AttackBoneIndex` | property |
| `AttackDirection` | `public Agent.UsageDirection AttackDirection` | property |
| `PhysicsMaterialIndex` | `public int PhysicsMaterialIndex` | property |
| `CollisionHitResultFlags` | `public CombatHitResultFlags CollisionHitResultFlags` | property |
| `AttackProgress` | `public float AttackProgress` | property |
| `CollisionDistanceOnWeapon` | `public float CollisionDistanceOnWeapon` | property |
| `AttackerStunPeriod` | `public float AttackerStunPeriod` | property |
| `DefenderStunPeriod` | `public float DefenderStunPeriod` | property |
| `MissileTotalDamage` | `public float MissileTotalDamage` | property |
| `MissileStartingBaseSpeed` | `public float MissileStartingBaseSpeed` | property |
| `ChargeVelocity` | `public float ChargeVelocity` | property |
| `FallSpeed` | `public float FallSpeed` | property |
| `WeaponRotUp` | `public Vec3 WeaponRotUp` | property |
| `WeaponBlowDir` | `public Vec3 WeaponBlowDir` | property |
| `CollisionGlobalPosition` | `public Vec3 CollisionGlobalPosition` | property |
| `MissileVelocity` | `public Vec3 MissileVelocity` | property |
| `MissileStartingPosition` | `public Vec3 MissileStartingPosition` | property |
| `VictimAgentCurVelocity` | `public Vec3 VictimAgentCurVelocity` | property |
| `CollisionGlobalNormal` | `public Vec3 CollisionGlobalNormal` | property |
| `LastBoneSegmentRotUp` | `public Vec3 LastBoneSegmentRotUp` | property |
| `LastBoneSegmentSwingDir` | `public Vec3 LastBoneSegmentSwingDir` | property |
| `SetCollisionBoneIndexForAreaDamage` | `public void SetCollisionBoneIndexForAreaDamage(sbyte boneIndex)` | method |
| `UpdateCollisionPositionAndBoneForReflect` | `public void UpdateCollisionPositionAndBoneForReflect(int inflictedDamage, Vec3 position, sbyte boneIndex)` | method |
| `GetAttackCollisionDataForDebugPurpose` | `public static AttackCollisionData GetAttackCollisionDataForDebugPurpose(bool _attackBlockedWithShield, bool _correctSideShieldBlock, bool _isAlternativeAttack, bool _isColliderAgent, bool _collidedWithShieldOnBack, bool _isMissile, bool _isMissileBlockedWithWeapon, bool _missileHasPhysics, bool _entityExists, bool _thrustTipHit, bool _missileGoneUnderWater, bool _missileGoneOutOfBorder, CombatCollisionResult collisionResult, int affectorWeaponSlotOrMissileIndex, int StrikeType, int DamageType, sbyte CollisionBoneIndex, BoneBodyPartType VictimHitBodyPart, sbyte AttackBoneIndex, Agent.UsageDirection AttackDirection, int PhysicsMaterialIndex, CombatHitResultFlags CollisionHitResultFlags, float AttackProgress, float CollisionDistanceOnWeapon, float AttackerStunPeriod, float DefenderStunPeriod, float MissileTotalDamage, float MissileInitialSpeed, float ChargeVelocity, float FallSpeed, Vec3 WeaponRotUp, Vec3 _weaponBlowDir, Vec3 CollisionGlobalPosition, Vec3 MissileVelocity, Vec3 MissileStartingPosition, Vec3 VictimAgentCurVelocity, Vec3 GroundNormal)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
