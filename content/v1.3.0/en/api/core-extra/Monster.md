---
title: "Monster"
description: "Auto-generated class reference for Monster."
---
# Monster

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Monster : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/Monster.cs`

## Overview

`Monster` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseMonster` | `public string BaseMonster { get; }` |
| `BodyCapsuleRadius` | `public float BodyCapsuleRadius { get; }` |
| `BodyCapsulePoint1` | `public Vec3 BodyCapsulePoint1 { get; }` |
| `BodyCapsulePoint2` | `public Vec3 BodyCapsulePoint2 { get; }` |
| `CrouchedBodyCapsuleRadius` | `public float CrouchedBodyCapsuleRadius { get; }` |
| `CrouchedBodyCapsulePoint1` | `public Vec3 CrouchedBodyCapsulePoint1 { get; }` |
| `CrouchedBodyCapsulePoint2` | `public Vec3 CrouchedBodyCapsulePoint2 { get; }` |
| `Flags` | `public AgentFlag Flags { get; }` |
| `Weight` | `public int Weight { get; }` |
| `HitPoints` | `public int HitPoints { get; }` |
| `ActionSetCode` | `public string ActionSetCode { get; }` |
| `FemaleActionSetCode` | `public string FemaleActionSetCode { get; }` |
| `NumPaces` | `public int NumPaces { get; }` |
| `MonsterUsage` | `public string MonsterUsage { get; }` |
| `WalkingSpeedLimit` | `public float WalkingSpeedLimit { get; }` |
| `CrouchWalkingSpeedLimit` | `public float CrouchWalkingSpeedLimit { get; }` |
| `JumpAcceleration` | `public float JumpAcceleration { get; }` |
| `AbsorbedDamageRatio` | `public float AbsorbedDamageRatio { get; }` |
| `SoundAndCollisionInfoClassName` | `public string SoundAndCollisionInfoClassName { get; }` |
| `RiderCameraHeightAdder` | `public float RiderCameraHeightAdder { get; }` |
| `RiderBodyCapsuleHeightAdder` | `public float RiderBodyCapsuleHeightAdder { get; }` |
| `RiderBodyCapsuleForwardAdder` | `public float RiderBodyCapsuleForwardAdder { get; }` |
| `StandingChestHeight` | `public float StandingChestHeight { get; }` |
| `StandingPelvisHeight` | `public float StandingPelvisHeight { get; }` |
| `StandingEyeHeight` | `public float StandingEyeHeight { get; }` |
| `CrouchEyeHeight` | `public float CrouchEyeHeight { get; }` |
| `MountedEyeHeight` | `public float MountedEyeHeight { get; }` |
| `RiderEyeHeightAdder` | `public float RiderEyeHeightAdder { get; }` |
| `EyeOffsetWrtHead` | `public Vec3 EyeOffsetWrtHead { get; }` |
| `FirstPersonCameraOffsetWrtHead` | `public Vec3 FirstPersonCameraOffsetWrtHead { get; }` |
| `ArmLength` | `public float ArmLength { get; }` |
| `ArmWeight` | `public float ArmWeight { get; }` |
| `JumpSpeedLimit` | `public float JumpSpeedLimit { get; }` |
| `RelativeSpeedLimitForCharge` | `public float RelativeSpeedLimitForCharge { get; }` |
| `FamilyType` | `public int FamilyType { get; }` |
| `IndicesOfRagdollBonesToCheckForCorpses` | `public sbyte IndicesOfRagdollBonesToCheckForCorpses { get; }` |
| `RagdollFallSoundBoneIndices` | `public sbyte RagdollFallSoundBoneIndices { get; }` |
| `HeadLookDirectionBoneIndex` | `public sbyte HeadLookDirectionBoneIndex { get; }` |
| `SpineLowerBoneIndex` | `public sbyte SpineLowerBoneIndex { get; }` |
| `SpineUpperBoneIndex` | `public sbyte SpineUpperBoneIndex { get; }` |
| `ThoraxLookDirectionBoneIndex` | `public sbyte ThoraxLookDirectionBoneIndex { get; }` |
| `NeckRootBoneIndex` | `public sbyte NeckRootBoneIndex { get; }` |
| `PelvisBoneIndex` | `public sbyte PelvisBoneIndex { get; }` |
| `RightUpperArmBoneIndex` | `public sbyte RightUpperArmBoneIndex { get; }` |
| `LeftUpperArmBoneIndex` | `public sbyte LeftUpperArmBoneIndex { get; }` |
| `FallBlowDamageBoneIndex` | `public sbyte FallBlowDamageBoneIndex { get; }` |
| `TerrainDecalBone0Index` | `public sbyte TerrainDecalBone0Index { get; }` |
| `TerrainDecalBone1Index` | `public sbyte TerrainDecalBone1Index { get; }` |
| `RagdollStationaryCheckBoneIndices` | `public sbyte RagdollStationaryCheckBoneIndices { get; }` |
| `MoveAdderBoneIndices` | `public sbyte MoveAdderBoneIndices { get; }` |
| `SplashDecalBoneIndices` | `public sbyte SplashDecalBoneIndices { get; }` |
| `BloodBurstBoneIndices` | `public sbyte BloodBurstBoneIndices { get; }` |
| `MainHandBoneIndex` | `public sbyte MainHandBoneIndex { get; }` |
| `OffHandBoneIndex` | `public sbyte OffHandBoneIndex { get; }` |
| `MainHandItemBoneIndex` | `public sbyte MainHandItemBoneIndex { get; }` |
| `OffHandItemBoneIndex` | `public sbyte OffHandItemBoneIndex { get; }` |
| `MainHandItemSecondaryBoneIndex` | `public sbyte MainHandItemSecondaryBoneIndex { get; }` |
| `OffHandItemSecondaryBoneIndex` | `public sbyte OffHandItemSecondaryBoneIndex { get; }` |
| `OffHandShoulderBoneIndex` | `public sbyte OffHandShoulderBoneIndex { get; }` |
| `HandNumBonesForIk` | `public sbyte HandNumBonesForIk { get; }` |
| `PrimaryFootBoneIndex` | `public sbyte PrimaryFootBoneIndex { get; }` |
| `SecondaryFootBoneIndex` | `public sbyte SecondaryFootBoneIndex { get; }` |
| `RightFootIkEndEffectorBoneIndex` | `public sbyte RightFootIkEndEffectorBoneIndex { get; }` |
| `LeftFootIkEndEffectorBoneIndex` | `public sbyte LeftFootIkEndEffectorBoneIndex { get; }` |
| `RightFootIkTipBoneIndex` | `public sbyte RightFootIkTipBoneIndex { get; }` |
| `LeftFootIkTipBoneIndex` | `public sbyte LeftFootIkTipBoneIndex { get; }` |
| `FootNumBonesForIk` | `public sbyte FootNumBonesForIk { get; }` |
| `ReinHandleLeftLocalPosition` | `public Vec3 ReinHandleLeftLocalPosition { get; }` |
| `ReinHandleRightLocalPosition` | `public Vec3 ReinHandleRightLocalPosition { get; }` |
| `ReinSkeleton` | `public string ReinSkeleton { get; }` |
| `ReinCollisionBody` | `public string ReinCollisionBody { get; }` |
| `FrontBoneToDetectGroundSlopeIndex` | `public sbyte FrontBoneToDetectGroundSlopeIndex { get; }` |
| `BackBoneToDetectGroundSlopeIndex` | `public sbyte BackBoneToDetectGroundSlopeIndex { get; }` |
| `BoneIndicesToModifyOnSlopingGround` | `public sbyte BoneIndicesToModifyOnSlopingGround { get; }` |
| `BodyRotationReferenceBoneIndex` | `public sbyte BodyRotationReferenceBoneIndex { get; }` |
| `RiderSitBoneIndex` | `public sbyte RiderSitBoneIndex { get; }` |
| `ReinHandleBoneIndex` | `public sbyte ReinHandleBoneIndex { get; }` |
| `ReinCollision1BoneIndex` | `public sbyte ReinCollision1BoneIndex { get; }` |
| `ReinCollision2BoneIndex` | `public sbyte ReinCollision2BoneIndex { get; }` |
| `ReinHeadBoneIndex` | `public sbyte ReinHeadBoneIndex { get; }` |
| `ReinHeadRightAttachmentBoneIndex` | `public sbyte ReinHeadRightAttachmentBoneIndex { get; }` |
| `ReinHeadLeftAttachmentBoneIndex` | `public sbyte ReinHeadLeftAttachmentBoneIndex { get; }` |
| `ReinRightHandBoneIndex` | `public sbyte ReinRightHandBoneIndex { get; }` |
| `ReinLeftHandBoneIndex` | `public sbyte ReinLeftHandBoneIndex { get; }` |
| `MonsterMissionData` | `public IMonsterMissionData MonsterMissionData { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of Monster from the subsystem API first
Monster monster = ...;
monster.Deserialize(objectManager, node);
```

### GetBoneToAttachForItemFlags
`public sbyte GetBoneToAttachForItemFlags(ItemFlags itemFlags)`

**Purpose:** Reads and returns the `bone to attach for item flags` value held by the current object.

```csharp
// Obtain an instance of Monster from the subsystem API first
Monster monster = ...;
var result = monster.GetBoneToAttachForItemFlags(itemFlags);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Monster monster = ...;
monster.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)