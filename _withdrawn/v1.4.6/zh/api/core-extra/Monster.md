---
title: "Monster"
description: "Monster：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 87 个（方法 2、属性 85、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/Monster.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Monster

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class Monster : MBObjectBase`
**File:** `TaleWorlds.Core/Monster.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

Monster 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/Monster.cs。它是一个 public 类（sealed），实现/继承 MBObjectBase，继承链为 Monster → MBObjectBase。public/protected 成员共 87 个：2 方法、85 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Monster 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 Monster → MBObjectBase。成员构成以属性为主（属性 85/87，方法 2/87），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/Monster.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BaseMonster` | `public string BaseMonster` | 属性 |
| `BodyCapsuleRadius` | `public float BodyCapsuleRadius` | 属性 |
| `BodyCapsulePoint1` | `public Vec3 BodyCapsulePoint1` | 属性 |
| `BodyCapsulePoint2` | `public Vec3 BodyCapsulePoint2` | 属性 |
| `CrouchedBodyCapsuleRadius` | `public float CrouchedBodyCapsuleRadius` | 属性 |
| `CrouchedBodyCapsulePoint1` | `public Vec3 CrouchedBodyCapsulePoint1` | 属性 |
| `CrouchedBodyCapsulePoint2` | `public Vec3 CrouchedBodyCapsulePoint2` | 属性 |
| `Flags` | `public AgentFlag Flags` | 属性 |
| `Weight` | `public int Weight` | 属性 |
| `HitPoints` | `public int HitPoints` | 属性 |
| `ActionSetCode` | `public string ActionSetCode` | 属性 |
| `FemaleActionSetCode` | `public string FemaleActionSetCode` | 属性 |
| `NumPaces` | `public int NumPaces` | 属性 |
| `MonsterUsage` | `public string MonsterUsage` | 属性 |
| `WalkingSpeedLimit` | `public float WalkingSpeedLimit` | 属性 |
| `CrouchWalkingSpeedLimit` | `public float CrouchWalkingSpeedLimit` | 属性 |
| `JumpAcceleration` | `public float JumpAcceleration` | 属性 |
| `AbsorbedDamageRatio` | `public float AbsorbedDamageRatio` | 属性 |
| `SoundAndCollisionInfoClassName` | `public string SoundAndCollisionInfoClassName` | 属性 |
| `RiderCameraHeightAdder` | `public float RiderCameraHeightAdder` | 属性 |
| `RiderBodyCapsuleHeightAdder` | `public float RiderBodyCapsuleHeightAdder` | 属性 |
| `RiderBodyCapsuleForwardAdder` | `public float RiderBodyCapsuleForwardAdder` | 属性 |
| `StandingChestHeight` | `public float StandingChestHeight` | 属性 |
| `StandingPelvisHeight` | `public float StandingPelvisHeight` | 属性 |
| `StandingEyeHeight` | `public float StandingEyeHeight` | 属性 |
| `CrouchEyeHeight` | `public float CrouchEyeHeight` | 属性 |
| `MountedEyeHeight` | `public float MountedEyeHeight` | 属性 |
| `RiderEyeHeightAdder` | `public float RiderEyeHeightAdder` | 属性 |
| `EyeOffsetWrtHead` | `public Vec3 EyeOffsetWrtHead` | 属性 |
| `FirstPersonCameraOffsetWrtHead` | `public Vec3 FirstPersonCameraOffsetWrtHead` | 属性 |
| `ArmLength` | `public float ArmLength` | 属性 |
| `ArmWeight` | `public float ArmWeight` | 属性 |
| `JumpSpeedLimit` | `public float JumpSpeedLimit` | 属性 |
| `RelativeSpeedLimitForCharge` | `public float RelativeSpeedLimitForCharge` | 属性 |
| `FamilyType` | `public int FamilyType` | 属性 |
| `sbyte[]IndicesOfRagdollBonesToCheckForCorpses` | `public sbyte[]IndicesOfRagdollBonesToCheckForCorpses` | 属性 |
| `sbyte[]RagdollFallSoundBoneIndices` | `public sbyte[]RagdollFallSoundBoneIndices` | 属性 |
| `HeadLookDirectionBoneIndex` | `public sbyte HeadLookDirectionBoneIndex` | 属性 |
| `SpineLowerBoneIndex` | `public sbyte SpineLowerBoneIndex` | 属性 |
| `SpineUpperBoneIndex` | `public sbyte SpineUpperBoneIndex` | 属性 |
| `ThoraxLookDirectionBoneIndex` | `public sbyte ThoraxLookDirectionBoneIndex` | 属性 |
| `NeckRootBoneIndex` | `public sbyte NeckRootBoneIndex` | 属性 |
| `PelvisBoneIndex` | `public sbyte PelvisBoneIndex` | 属性 |
| `RightUpperArmBoneIndex` | `public sbyte RightUpperArmBoneIndex` | 属性 |
| `LeftUpperArmBoneIndex` | `public sbyte LeftUpperArmBoneIndex` | 属性 |
| `FallBlowDamageBoneIndex` | `public sbyte FallBlowDamageBoneIndex` | 属性 |
| `TerrainDecalBone0Index` | `public sbyte TerrainDecalBone0Index` | 属性 |
| `TerrainDecalBone1Index` | `public sbyte TerrainDecalBone1Index` | 属性 |
| `sbyte[]RagdollStationaryCheckBoneIndices` | `public sbyte[]RagdollStationaryCheckBoneIndices` | 属性 |
| `sbyte[]MoveAdderBoneIndices` | `public sbyte[]MoveAdderBoneIndices` | 属性 |
| `sbyte[]SplashDecalBoneIndices` | `public sbyte[]SplashDecalBoneIndices` | 属性 |
| `sbyte[]BloodBurstBoneIndices` | `public sbyte[]BloodBurstBoneIndices` | 属性 |
| `MainHandBoneIndex` | `public sbyte MainHandBoneIndex` | 属性 |
| `OffHandBoneIndex` | `public sbyte OffHandBoneIndex` | 属性 |
| `MainHandItemBoneIndex` | `public sbyte MainHandItemBoneIndex` | 属性 |
| `OffHandItemBoneIndex` | `public sbyte OffHandItemBoneIndex` | 属性 |
| `MainHandItemSecondaryBoneIndex` | `public sbyte MainHandItemSecondaryBoneIndex` | 属性 |
| `OffHandItemSecondaryBoneIndex` | `public sbyte OffHandItemSecondaryBoneIndex` | 属性 |
| `OffHandShoulderBoneIndex` | `public sbyte OffHandShoulderBoneIndex` | 属性 |
| `HandNumBonesForIk` | `public sbyte HandNumBonesForIk` | 属性 |
| `PrimaryFootBoneIndex` | `public sbyte PrimaryFootBoneIndex` | 属性 |
| `SecondaryFootBoneIndex` | `public sbyte SecondaryFootBoneIndex` | 属性 |
| `RightFootIkEndEffectorBoneIndex` | `public sbyte RightFootIkEndEffectorBoneIndex` | 属性 |
| `LeftFootIkEndEffectorBoneIndex` | `public sbyte LeftFootIkEndEffectorBoneIndex` | 属性 |
| `RightFootIkTipBoneIndex` | `public sbyte RightFootIkTipBoneIndex` | 属性 |
| `LeftFootIkTipBoneIndex` | `public sbyte LeftFootIkTipBoneIndex` | 属性 |
| `FootNumBonesForIk` | `public sbyte FootNumBonesForIk` | 属性 |
| `ReinHandleLeftLocalPosition` | `public Vec3 ReinHandleLeftLocalPosition` | 属性 |
| `ReinHandleRightLocalPosition` | `public Vec3 ReinHandleRightLocalPosition` | 属性 |
| `ReinSkeleton` | `public string ReinSkeleton` | 属性 |
| `ReinCollisionBody` | `public string ReinCollisionBody` | 属性 |
| `FrontBoneToDetectGroundSlopeIndex` | `public sbyte FrontBoneToDetectGroundSlopeIndex` | 属性 |
| `BackBoneToDetectGroundSlopeIndex` | `public sbyte BackBoneToDetectGroundSlopeIndex` | 属性 |
| `sbyte[]BoneIndicesToModifyOnSlopingGround` | `public sbyte[]BoneIndicesToModifyOnSlopingGround` | 属性 |
| `BodyRotationReferenceBoneIndex` | `public sbyte BodyRotationReferenceBoneIndex` | 属性 |
| `RiderSitBoneIndex` | `public sbyte RiderSitBoneIndex` | 属性 |
| `ReinHandleBoneIndex` | `public sbyte ReinHandleBoneIndex` | 属性 |
| `ReinCollision1BoneIndex` | `public sbyte ReinCollision1BoneIndex` | 属性 |
| `ReinCollision2BoneIndex` | `public sbyte ReinCollision2BoneIndex` | 属性 |
| `ReinHeadBoneIndex` | `public sbyte ReinHeadBoneIndex` | 属性 |
| `ReinHeadRightAttachmentBoneIndex` | `public sbyte ReinHeadRightAttachmentBoneIndex` | 属性 |
| `ReinHeadLeftAttachmentBoneIndex` | `public sbyte ReinHeadLeftAttachmentBoneIndex` | 属性 |
| `ReinRightHandBoneIndex` | `public sbyte ReinRightHandBoneIndex` | 属性 |
| `ReinLeftHandBoneIndex` | `public sbyte ReinLeftHandBoneIndex` | 属性 |
| `MonsterMissionData` | `public IMonsterMissionData MonsterMissionData` | 属性 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |
| `GetBoneToAttachForItemFlags` | `public sbyte GetBoneToAttachForItemFlags(ItemFlags itemFlags)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
