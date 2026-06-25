---
title: "AttackCollisionData"
description: "Auto-generated class reference for AttackCollisionData."
---
# AttackCollisionData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AttackCollisionData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AttackCollisionData.cs`

## Overview

`AttackCollisionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AttackCollisionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttackBlockedWithShield` | `public bool AttackBlockedWithShield { get; }` |
| `CorrectSideShieldBlock` | `public bool CorrectSideShieldBlock { get; }` |
| `IsAlternativeAttack` | `public bool IsAlternativeAttack { get; }` |
| `IsColliderAgent` | `public bool IsColliderAgent { get; }` |
| `CollidedWithShieldOnBack` | `public bool CollidedWithShieldOnBack { get; }` |
| `IsMissile` | `public bool IsMissile { get; }` |
| `MissileBlockedWithWeapon` | `public bool MissileBlockedWithWeapon { get; }` |
| `MissileHasPhysics` | `public bool MissileHasPhysics { get; }` |
| `EntityExists` | `public bool EntityExists { get; }` |
| `ThrustTipHit` | `public bool ThrustTipHit { get; }` |
| `MissileGoneUnderWater` | `public bool MissileGoneUnderWater { get; }` |
| `MissileGoneOutOfBorder` | `public bool MissileGoneOutOfBorder { get; }` |
| `CollidedWithLastBoneSegment` | `public bool CollidedWithLastBoneSegment { get; }` |
| `IsHorseCharge` | `public bool IsHorseCharge { get; }` |
| `IsFallDamage` | `public bool IsFallDamage { get; }` |
| `CollisionResult` | `public CombatCollisionResult CollisionResult { get; }` |
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
| `WeaponBlowDir` | `public Vec3 WeaponBlowDir { get; }` |
| `CollisionGlobalPosition` | `public Vec3 CollisionGlobalPosition { get; }` |
| `MissileVelocity` | `public Vec3 MissileVelocity { get; }` |
| `MissileStartingPosition` | `public Vec3 MissileStartingPosition { get; }` |
| `VictimAgentCurVelocity` | `public Vec3 VictimAgentCurVelocity { get; }` |
| `CollisionGlobalNormal` | `public Vec3 CollisionGlobalNormal { get; }` |
| `LastBoneSegmentRotUp` | `public Vec3 LastBoneSegmentRotUp { get; }` |
| `LastBoneSegmentSwingDir` | `public Vec3 LastBoneSegmentSwingDir { get; }` |

## Key Methods

### SetCollisionBoneIndexForAreaDamage
`public void SetCollisionBoneIndexForAreaDamage(sbyte boneIndex)`

**Purpose:** Assigns a new value to `collision bone index for area damage` and updates the object's internal state.

```csharp
// Obtain an instance of AttackCollisionData from the subsystem API first
AttackCollisionData attackCollisionData = ...;
attackCollisionData.SetCollisionBoneIndexForAreaDamage(0);
```

### UpdateCollisionPositionAndBoneForReflect
`public void UpdateCollisionPositionAndBoneForReflect(int inflictedDamage, Vec3 position, sbyte boneIndex)`

**Purpose:** Recalculates and stores the latest representation of `collision position and bone for reflect`.

```csharp
// Obtain an instance of AttackCollisionData from the subsystem API first
AttackCollisionData attackCollisionData = ...;
attackCollisionData.UpdateCollisionPositionAndBoneForReflect(0, position, 0);
```

### GetAttackCollisionDataForDebugPurpose
`public static AttackCollisionData GetAttackCollisionDataForDebugPurpose(bool _attackBlockedWithShield, bool _correctSideShieldBlock, bool _isAlternativeAttack, bool _isColliderAgent, bool _collidedWithShieldOnBack, bool _isMissile, bool _isMissileBlockedWithWeapon, bool _missileHasPhysics, bool _entityExists, bool _thrustTipHit, bool _missileGoneUnderWater, bool _missileGoneOutOfBorder, CombatCollisionResult collisionResult, int affectorWeaponSlotOrMissileIndex, int StrikeType, int DamageType, sbyte CollisionBoneIndex, BoneBodyPartType VictimHitBodyPart, sbyte AttackBoneIndex, Agent.UsageDirection AttackDirection, int PhysicsMaterialIndex, CombatHitResultFlags CollisionHitResultFlags, float AttackProgress, float CollisionDistanceOnWeapon, float AttackerStunPeriod, float DefenderStunPeriod, float MissileTotalDamage, float MissileInitialSpeed, float ChargeVelocity, float FallSpeed, Vec3 WeaponRotUp, Vec3 _weaponBlowDir, Vec3 CollisionGlobalPosition, Vec3 MissileVelocity, Vec3 MissileStartingPosition, Vec3 VictimAgentCurVelocity, Vec3 GroundNormal)`

**Purpose:** Reads and returns the `attack collision data for debug purpose` value held by the current object.

```csharp
// Static call; no instance required
AttackCollisionData.GetAttackCollisionDataForDebugPurpose(false, false, false, false, false, false, false, false, false, false, false, false, collisionResult, 0, 0, 0, 0, victimHitBodyPart, 0, attackDirection, 0, collisionHitResultFlags, 0, 0, 0, 0, 0, 0, 0, 0, weaponRotUp, _weaponBlowDir, collisionGlobalPosition, missileVelocity, missileStartingPosition, victimAgentCurVelocity, groundNormal);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AttackCollisionData entry = ...;
```

## See Also

- [Area Index](../)