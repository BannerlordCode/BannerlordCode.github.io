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

`AttackCollisionData` is the record the native collision layer hands back when a blow lands. It is a
`struct` decorated `[EngineStruct("Attack_collision_data", false, null)]`
(`AttackCollisionData.cs:9`) whose private `bool` fields are individually `[MarshalAs(UnmanagedType.U1)]`
(`AttackCollisionData.cs:363`) — i.e. the layout exists to match the C++ side, not for managed ergonomics.

Almost all of its forty-plus members are get-only projections of what the engine detected:
`AttackBlockedWithShield`, `CorrectSideShieldBlock`, `IsAlternativeAttack`, `IsMissile`,
`CollisionResult`, `VictimHitBodyPart`, `CollisionGlobalPosition`, `MissileVelocity` and so on. It is
consumed, never constructed, by the damage pipeline: `AgentComponent.OnHit` takes it as `in`
(`AgentComponent.cs:79`), `AgentApplyDamageModel.CalculateDamage` does the same, and `CommonAIComponent`
reads it on every hit.

But it is not read-only. Alongside the get-only properties the struct carries seven **public mutable
fields** — `BaseMagnitude`, `MovementSpeedDamageModifier`, `AbsorbedByArmor`, `InflictedDamage`,
`SelfInflictedDamage`, `IsShieldBroken`, `IsSneakAttack` (`AttackCollisionData.cs:422`) — which the managed
damage pipeline writes into, and two mutators, `SetCollisionBoneIndexForAreaDamage`
(`AttackCollisionData.cs:291`) and `UpdateCollisionPositionAndBoneForReflect`
(`AttackCollisionData.cs:297`).

## Mental Model

Read it as "engine verdict plus managed scratch space", not as an immutable event. The boundaries:

- **Two different mutability regimes in one type.** The `bool`/`Vec3`/enum-shaped properties are
  effectively frozen at construction, because the private constructor is the only writer. The seven public
  fields and the two mutator methods are the managed side's channel, and the constructor deliberately
  zeroes and defaults all of them (`AttackCollisionData.cs:347`). Anything you read there is a *result* of
  the damage pipeline, not an input.
- **It is a `struct` passed by `in` everywhere.** Mutating a parameter you received as `in
  AttackCollisionData` changes your local copy only. `UpdateCollisionPositionAndBoneForReflect` is
  meaningful when called on a value you own (or on a `ref` copy you then return), not on the `in`
  parameter of `OnHit`.
- **Two members are typed more loosely than their meaning.** `StrikeType` and `DamageType` are plain
  `int` (`AttackCollisionData.cs:178`, `AttackCollisionData.cs:182`), so casting to `StrikeType` /
  `DamageTypes` is on you. And `CollisionResult` is stored as an `int` backing field and cast back on
  read (`AttackCollisionData.cs:164`).
- **The debug factory cannot build every state.** `GetAttackCollisionDataForDebugPurpose`
  (`AttackCollisionData.cs:357`) hard-codes `collidedWithLastBoneSegment: false` and passes `Vec3.Zero`
  for both `LastBoneSegmentRotUp` and `LastBoneSegmentSwingDir` (`AttackCollisionData.cs:359`). Anything you
  test through that helper sees `CollidedWithLastBoneSegment` permanently `false` and zero last-bone-segment
  vectors.
- Flag combinations are meaningful rather than independent: `CorrectSideShieldBlock` and
  `CollidedWithShieldOnBack` only mean anything when `AttackBlockedWithShield` is also set, and the
  `IsMissile` family (`MissileBlockedWithWeapon`, `MissileHasPhysics`, `MissileGoneUnderWater`,
  `MissileGoneOutOfBorder`) is meaningless on a melee blow.

## How to use

**Getting one.** Never construct one in gameplay code — the private constructor (`AttackCollisionData.cs:305`)
is not callable outside the type. Receive it where the engine hands it out, by overriding an `AgentComponent`
hook, and use `GetAttackCollisionDataForDebugPurpose` only when building a test fixture.

**Typical use** — a component that records clean shield blocks:

```csharp
public class ShieldBlockRecorder : AgentComponent
{
    public ShieldBlockRecorder(Agent agent) : base(agent) { }   // AgentComponent.cs:11

    public int CleanBlocks { get; private set; }

    public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon,
        in Blow blow, in AttackCollisionData collisionData)       // AgentComponent.cs:79
    {
        if (collisionData.CollisionResult == CombatCollisionResult.Blocked
            && collisionData.AttackBlockedWithShield              // AttackCollisionData.cs:14
            && collisionData.CorrectSideShieldBlock)              // AttackCollisionData.cs:24
        {
            CleanBlocks++;
            Debug.Print("clean block at " + collisionData.CollisionGlobalPosition);
        }
    }
}

// attach it once, from a MissionLogic:
agent.AddComponent(new ShieldBlockRecorder(agent));              // Agent.cs:4650
```

**The mistake that bites.** Treating it as an immutable snapshot and calling
`SetCollisionBoneIndexForAreaDamage` or `UpdateCollisionPositionAndBoneForReflect` on the `in` parameter
inside `OnHit`. Because the parameter is a readonly reference to the caller's copy, the retargeted bone and
position are written into your stack frame and discarded when the method returns — area damage keeps using
the original bone and reflected blows keep the original contact point, with no error to indicate the write
was lost.



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

**Purpose:** Assigns a new value to collision bone index for area damage and updates the object's internal state.

```csharp
// Obtain an instance of AttackCollisionData from the subsystem API first
AttackCollisionData attackCollisionData = ...;
attackCollisionData.SetCollisionBoneIndexForAreaDamage(0);
```

### UpdateCollisionPositionAndBoneForReflect
`public void UpdateCollisionPositionAndBoneForReflect(int inflictedDamage, Vec3 position, sbyte boneIndex)`

**Purpose:** Recalculates and stores the latest representation of collision position and bone for reflect.

```csharp
// Obtain an instance of AttackCollisionData from the subsystem API first
AttackCollisionData attackCollisionData = ...;
attackCollisionData.UpdateCollisionPositionAndBoneForReflect(0, position, 0);
```

### GetAttackCollisionDataForDebugPurpose
`public static AttackCollisionData GetAttackCollisionDataForDebugPurpose(bool _attackBlockedWithShield, bool _correctSideShieldBlock, bool _isAlternativeAttack, bool _isColliderAgent, bool _collidedWithShieldOnBack, bool _isMissile, bool _isMissileBlockedWithWeapon, bool _missileHasPhysics, bool _entityExists, bool _thrustTipHit, bool _missileGoneUnderWater, bool _missileGoneOutOfBorder, CombatCollisionResult collisionResult, int affectorWeaponSlotOrMissileIndex, int StrikeType, int DamageType, sbyte CollisionBoneIndex, BoneBodyPartType VictimHitBodyPart, sbyte AttackBoneIndex, Agent.UsageDirection AttackDirection, int PhysicsMaterialIndex, CombatHitResultFlags CollisionHitResultFlags, float AttackProgress, float CollisionDistanceOnWeapon, float AttackerStunPeriod, float DefenderStunPeriod, float MissileTotalDamage, float MissileInitialSpeed, float ChargeVelocity, float FallSpeed, Vec3 WeaponRotUp, Vec3 _weaponBlowDir, Vec3 CollisionGlobalPosition, Vec3 MissileVelocity, Vec3 MissileStartingPosition, Vec3 VictimAgentCurVelocity, Vec3 GroundNormal)`

**Purpose:** Reads and returns the attack collision data for debug purpose value held by the this instance.

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
- [AgentApplyDamageModel](../AgentApplyDamageModel)
- [AgentComponent](../AgentComponent)
- [Blow](../Blow)
- [中文页面](../../../../zh/api/mission-ext/AttackCollisionData)