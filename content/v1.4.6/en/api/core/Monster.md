---
title: "Monster"
description: "Monster: a public class in TaleWorlds.Core, inheriting MBObjectBase; 87 exposed members (2 methods, 85 properties, 0 fields). Source: TaleWorlds.Core/Monster.cs."
---
# Monster

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class Monster : MBObjectBase`
**File:** `TaleWorlds.Core/Monster.cs`

## Overview

Monster lives in the TaleWorlds.Core module, source file TaleWorlds.Core/Monster.cs. It is a public class (sealed), implementing/inheriting MBObjectBase; the inheritance chain is Monster → MBObjectBase. It exposes 87 public/protected members: 2 methods, 85 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Monster is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain Monster → MBObjectBase. The surface is property-led (properties 85/87, methods 2/87), so it mostly exposes state for reading. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/Monster.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BaseMonster` | `public string BaseMonster` | property |
| `BodyCapsuleRadius` | `public float BodyCapsuleRadius` | property |
| `BodyCapsulePoint1` | `public Vec3 BodyCapsulePoint1` | property |
| `BodyCapsulePoint2` | `public Vec3 BodyCapsulePoint2` | property |
| `CrouchedBodyCapsuleRadius` | `public float CrouchedBodyCapsuleRadius` | property |
| `CrouchedBodyCapsulePoint1` | `public Vec3 CrouchedBodyCapsulePoint1` | property |
| `CrouchedBodyCapsulePoint2` | `public Vec3 CrouchedBodyCapsulePoint2` | property |
| `Flags` | `public AgentFlag Flags` | property |
| `Weight` | `public int Weight` | property |
| `HitPoints` | `public int HitPoints` | property |
| `ActionSetCode` | `public string ActionSetCode` | property |
| `FemaleActionSetCode` | `public string FemaleActionSetCode` | property |
| `NumPaces` | `public int NumPaces` | property |
| `MonsterUsage` | `public string MonsterUsage` | property |
| `WalkingSpeedLimit` | `public float WalkingSpeedLimit` | property |
| `CrouchWalkingSpeedLimit` | `public float CrouchWalkingSpeedLimit` | property |
| `JumpAcceleration` | `public float JumpAcceleration` | property |
| `AbsorbedDamageRatio` | `public float AbsorbedDamageRatio` | property |
| `SoundAndCollisionInfoClassName` | `public string SoundAndCollisionInfoClassName` | property |
| `RiderCameraHeightAdder` | `public float RiderCameraHeightAdder` | property |
| `RiderBodyCapsuleHeightAdder` | `public float RiderBodyCapsuleHeightAdder` | property |
| `RiderBodyCapsuleForwardAdder` | `public float RiderBodyCapsuleForwardAdder` | property |
| `StandingChestHeight` | `public float StandingChestHeight` | property |
| `StandingPelvisHeight` | `public float StandingPelvisHeight` | property |
| `StandingEyeHeight` | `public float StandingEyeHeight` | property |
| `CrouchEyeHeight` | `public float CrouchEyeHeight` | property |
| `MountedEyeHeight` | `public float MountedEyeHeight` | property |
| `RiderEyeHeightAdder` | `public float RiderEyeHeightAdder` | property |
| `EyeOffsetWrtHead` | `public Vec3 EyeOffsetWrtHead` | property |
| `FirstPersonCameraOffsetWrtHead` | `public Vec3 FirstPersonCameraOffsetWrtHead` | property |
| `ArmLength` | `public float ArmLength` | property |
| `ArmWeight` | `public float ArmWeight` | property |
| `JumpSpeedLimit` | `public float JumpSpeedLimit` | property |
| `RelativeSpeedLimitForCharge` | `public float RelativeSpeedLimitForCharge` | property |
| `FamilyType` | `public int FamilyType` | property |
| `sbyte[]IndicesOfRagdollBonesToCheckForCorpses` | `public sbyte[]IndicesOfRagdollBonesToCheckForCorpses` | property |
| `sbyte[]RagdollFallSoundBoneIndices` | `public sbyte[]RagdollFallSoundBoneIndices` | property |
| `HeadLookDirectionBoneIndex` | `public sbyte HeadLookDirectionBoneIndex` | property |
| `SpineLowerBoneIndex` | `public sbyte SpineLowerBoneIndex` | property |
| `SpineUpperBoneIndex` | `public sbyte SpineUpperBoneIndex` | property |
| `ThoraxLookDirectionBoneIndex` | `public sbyte ThoraxLookDirectionBoneIndex` | property |
| `NeckRootBoneIndex` | `public sbyte NeckRootBoneIndex` | property |
| `PelvisBoneIndex` | `public sbyte PelvisBoneIndex` | property |
| `RightUpperArmBoneIndex` | `public sbyte RightUpperArmBoneIndex` | property |
| `LeftUpperArmBoneIndex` | `public sbyte LeftUpperArmBoneIndex` | property |
| `FallBlowDamageBoneIndex` | `public sbyte FallBlowDamageBoneIndex` | property |
| `TerrainDecalBone0Index` | `public sbyte TerrainDecalBone0Index` | property |
| `TerrainDecalBone1Index` | `public sbyte TerrainDecalBone1Index` | property |
| `sbyte[]RagdollStationaryCheckBoneIndices` | `public sbyte[]RagdollStationaryCheckBoneIndices` | property |
| `sbyte[]MoveAdderBoneIndices` | `public sbyte[]MoveAdderBoneIndices` | property |
| `sbyte[]SplashDecalBoneIndices` | `public sbyte[]SplashDecalBoneIndices` | property |
| `sbyte[]BloodBurstBoneIndices` | `public sbyte[]BloodBurstBoneIndices` | property |
| `MainHandBoneIndex` | `public sbyte MainHandBoneIndex` | property |
| `OffHandBoneIndex` | `public sbyte OffHandBoneIndex` | property |
| `MainHandItemBoneIndex` | `public sbyte MainHandItemBoneIndex` | property |
| `OffHandItemBoneIndex` | `public sbyte OffHandItemBoneIndex` | property |
| `MainHandItemSecondaryBoneIndex` | `public sbyte MainHandItemSecondaryBoneIndex` | property |
| `OffHandItemSecondaryBoneIndex` | `public sbyte OffHandItemSecondaryBoneIndex` | property |
| `OffHandShoulderBoneIndex` | `public sbyte OffHandShoulderBoneIndex` | property |
| `HandNumBonesForIk` | `public sbyte HandNumBonesForIk` | property |
| `PrimaryFootBoneIndex` | `public sbyte PrimaryFootBoneIndex` | property |
| `SecondaryFootBoneIndex` | `public sbyte SecondaryFootBoneIndex` | property |
| `RightFootIkEndEffectorBoneIndex` | `public sbyte RightFootIkEndEffectorBoneIndex` | property |
| `LeftFootIkEndEffectorBoneIndex` | `public sbyte LeftFootIkEndEffectorBoneIndex` | property |
| `RightFootIkTipBoneIndex` | `public sbyte RightFootIkTipBoneIndex` | property |
| `LeftFootIkTipBoneIndex` | `public sbyte LeftFootIkTipBoneIndex` | property |
| `FootNumBonesForIk` | `public sbyte FootNumBonesForIk` | property |
| `ReinHandleLeftLocalPosition` | `public Vec3 ReinHandleLeftLocalPosition` | property |
| `ReinHandleRightLocalPosition` | `public Vec3 ReinHandleRightLocalPosition` | property |
| `ReinSkeleton` | `public string ReinSkeleton` | property |
| `ReinCollisionBody` | `public string ReinCollisionBody` | property |
| `FrontBoneToDetectGroundSlopeIndex` | `public sbyte FrontBoneToDetectGroundSlopeIndex` | property |
| `BackBoneToDetectGroundSlopeIndex` | `public sbyte BackBoneToDetectGroundSlopeIndex` | property |
| `sbyte[]BoneIndicesToModifyOnSlopingGround` | `public sbyte[]BoneIndicesToModifyOnSlopingGround` | property |
| `BodyRotationReferenceBoneIndex` | `public sbyte BodyRotationReferenceBoneIndex` | property |
| `RiderSitBoneIndex` | `public sbyte RiderSitBoneIndex` | property |
| `ReinHandleBoneIndex` | `public sbyte ReinHandleBoneIndex` | property |
| `ReinCollision1BoneIndex` | `public sbyte ReinCollision1BoneIndex` | property |
| `ReinCollision2BoneIndex` | `public sbyte ReinCollision2BoneIndex` | property |
| `ReinHeadBoneIndex` | `public sbyte ReinHeadBoneIndex` | property |
| `ReinHeadRightAttachmentBoneIndex` | `public sbyte ReinHeadRightAttachmentBoneIndex` | property |
| `ReinHeadLeftAttachmentBoneIndex` | `public sbyte ReinHeadLeftAttachmentBoneIndex` | property |
| `ReinRightHandBoneIndex` | `public sbyte ReinRightHandBoneIndex` | property |
| `ReinLeftHandBoneIndex` | `public sbyte ReinLeftHandBoneIndex` | property |
| `MonsterMissionData` | `public IMonsterMissionData MonsterMissionData` | property |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |
| `GetBoneToAttachForItemFlags` | `public sbyte GetBoneToAttachForItemFlags(ItemFlags itemFlags)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
