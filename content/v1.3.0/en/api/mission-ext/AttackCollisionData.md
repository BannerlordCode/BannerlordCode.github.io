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

`AttackCollisionData` is the engine's record of one weapon collision — the fact that a swing or a missile connected, where it connected, and what the swing looked like at that instant. It is a value type, declared as `public struct AttackCollisionData` (`AttackCollisionData.cs:10`) and stamped `[EngineStruct("Attack_collision_data", false, null)]` (`AttackCollisionData.cs:9`), which is how the native physics layer and the managed layer agree on one blittable layout.

It is not something you create in gameplay. The only constructor in the type is `private` (`AttackCollisionData.cs:305`); the native side produces the populated value and hands it to managed code as an `in AttackCollisionData` parameter on every `AgentApplyDamageModel` hook (`AgentApplyDamageModel.cs:26`). Your code receives one for the duration of a single damage calculation and then it is gone — `AgentApplyDamageModel.CalculateDamage` passes the same readonly value down through `IsDamageIgnored`, `ApplyDamageAmplifications`, `ApplyDamageScaling`, `ApplyDamageReductions` and `ApplyGeneralDamageModifiers` before clamping the result at zero (`AgentApplyDamageModel.cs:11`).

The struct has two distinct halves, and telling them apart is the whole story. The first half is read-only *fact*: private `[MarshalAs(UnmanagedType.U1)]` fields such as `_attackBlockedWithShield` (`AttackCollisionData.cs:364`) surfaced through get-only properties, describing what the physics engine measured. The second half is managed scratch: seven **public fields** carrying `[CustomEngineStructMemberData(true)]`, from `BaseMagnitude` (`AttackCollisionData.cs:422`) through `IsSneakAttack` (`AttackCollisionData.cs:448`), which the damage pipeline writes into as it works.

## Mental Model

Read it as a frozen measurement with a small writable scratchpad attached. Almost every property is `{ get; }` or `{ get; private set; }`; the only two publicly settable properties in the entire type are `AttackerStunPeriod` (`AttackCollisionData.cs:223`) and `DefenderStunPeriod` (`AttackCollisionData.cs:228`). If you find yourself wanting to correct a field that describes the collision itself, you cannot — and you should not: the engine owns that history, and there are exactly two sanctioned escape hatches, `SetCollisionBoneIndexForAreaDamage(sbyte)` (`AttackCollisionData.cs:291`) and `UpdateCollisionPositionAndBoneForReflect(int inflictedDamage, Vec3 position, sbyte boneIndex)` (`AttackCollisionData.cs:297`), which is the only member that writes `InflictedDamage` (`AttackCollisionData.cs:299`) plus the position and the attack bone index together.

Two boundaries bite in practice. First, every parameter that carries this struct is declared `in` (`AgentApplyDamageModel.cs:26`), so the value is readonly inside your override — you cannot assign to a property through it, and any write you want requires taking a local copy first, which is exactly why the shipped override writes `AttackCollisionData attackCollisionData = collisionData;` before reading `CollidedWithShieldOnBack` (`SandboxAgentApplyDamageModel.cs:24`).

Second, a struct means copy-on-assign. Assigning it, or passing it anywhere without `in`, duplicates the whole payload; mutating the copy leaves the engine's original untouched and your change silently vanishes at the end of scope. There is no reference identity to observe and no null to check — a `default(AttackCollisionData)` is a perfectly valid-looking instance with every bool `false` and every float `0f`, and reading it produces answers rather than throwing.

## How to use

**Getting one.** You never construct it in a mission. The type's only constructor is private (`AttackCollisionData.cs:305`) and the only public factory is `GetAttackCollisionDataForDebugPurpose`, a 39-argument method explicitly named for debugging (`AttackCollisionData.cs:357`). In real gameplay the value arrives as the `collisionData` argument of an `AgentApplyDamageModel` override. Install your own model by subclassing `CustomAgentApplyDamageModel` and assigning it to `MissionGameModels.Current.AgentApplyDamageModel` before the mission starts.

A typical use — reading the collision inside one damage hook:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyModApplyDamageModel : CustomAgentApplyDamageModel
{
    public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)
    {
        // `in` means readonly: take a copy before you write to anything.
        AttackCollisionData collision = collisionData;

        // Read-only facts straight off the struct.
        if (collision.AttackBlockedWithShield && collision.CorrectSideShieldBlock)
            return true;

        if (collision.CollidedWithShieldOnBack)
            return MyModSettings.BlockShieldBackHits;

        return base.IsDamageIgnored(attackInformation, collisionData);
    }

    public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
    {
        // `collisionData` is readonly (it is an `in` parameter), so copy before writing.
        AttackCollisionData collision = collisionData;

        // The managed scratch half is public and writable.
        collision.InflictedDamage = 0;
        collision.IsSneakAttack = collision.AttackProgress > 0.9f;

        // The two publicly settable properties.
        collision.AttackerStunPeriod = 0.4f;
        collision.DefenderStunPeriod = 0.2f;

        // Pass the modified copy onward; the engine's original is untouched.
        return base.ApplyDamageScaling(attackInformation, collision, baseDamage);
    }
}
```

**The most common mistake** is treating `GetAttackCollisionDataForDebugPurpose` as a way to construct a usable value. It cannot produce one. Its private constructor unconditionally zeroes the seven scratch fields — `BaseMagnitude`, `MovementSpeedDamageModifier`, `AbsorbedByArmor`, `InflictedDamage`, `SelfInflictedDamage`, `IsShieldBroken`, `IsSneakAttack` (`AttackCollisionData.cs:347`) — so a "debug" value always reports zero damage and no sneak attack no matter how much `MissileTotalDamage` you pass in. The factory also hard-codes the thirteenth constructor argument to `false` and appends `Vec3.Zero, Vec3.Zero` for the two last-bone-segment vectors (`AttackCollisionData.cs:359`), which the private constructor takes but the public signature does not expose at all. So a collision built through the debug factory reports "did not collide with the last bone segment" permanently, and any damage model you write that branches on those fields will be exercised in tests and never in a real battle.

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
- [AgentApplyDamageModel](../AgentApplyDamageModel) — the abstract model whose every hook receives this struct by `in`
- [AttackInformation](../AttackInformation) — the companion argument carrying attacker, victim and weapon
- [CombatCollisionResult](../CombatCollisionResult) — the enum the `collisionResult` slot is stored as
- [CombatHitResultFlags](../CombatHitResultFlags) — the flag set describing how the hit resolved