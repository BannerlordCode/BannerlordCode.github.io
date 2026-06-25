---
title: "AttackCollisionData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AttackCollisionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AttackCollisionData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AttackCollisionData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AttackCollisionData.cs`

## Overview

`AttackCollisionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AttackCollisionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Key Methods

### SetCollisionBoneIndexForAreaDamage
`public void SetCollisionBoneIndexForAreaDamage(sbyte boneIndex)`

**Purpose:** Sets the value or state of `collision bone index for area damage`.

### UpdateCollisionPositionAndBoneForReflect
`public void UpdateCollisionPositionAndBoneForReflect(int inflictedDamage, Vec3 position, sbyte boneIndex)`

**Purpose:** Updates the state or data of `collision position and bone for reflect`.

### GetAttackCollisionDataForDebugPurpose
`public static AttackCollisionData GetAttackCollisionDataForDebugPurpose(bool _attackBlockedWithShield, bool _correctSideShieldBlock, bool _isAlternativeAttack, bool _isColliderAgent, bool _collidedWithShieldOnBack, bool _isMissile, bool _isMissileBlockedWithWeapon, bool _missileHasPhysics, bool _entityExists, bool _thrustTipHit, bool _missileGoneUnderWater, bool _missileGoneOutOfBorder, CombatCollisionResult collisionResult, int affectorWeaponSlotOrMissileIndex, int StrikeType, int DamageType, sbyte CollisionBoneIndex, BoneBodyPartType VictimHitBodyPart, sbyte AttackBoneIndex, Agent.UsageDirection AttackDirection, int PhysicsMaterialIndex, CombatHitResultFlags CollisionHitResultFlags, float AttackProgress, float CollisionDistanceOnWeapon, float AttackerStunPeriod, float DefenderStunPeriod, float MissileTotalDamage, float MissileInitialSpeed, float ChargeVelocity, float FallSpeed, Vec3 WeaponRotUp, Vec3 _weaponBlowDir, Vec3 CollisionGlobalPosition, Vec3 MissileVelocity, Vec3 MissileStartingPosition, Vec3 VictimAgentCurVelocity, Vec3 GroundNormal)`

**Purpose:** Gets the current value of `attack collision data for debug purpose`.

## Usage Example

```csharp
var value = new AttackCollisionData();
```

## See Also

- [Complete Class Catalog](../catalog)