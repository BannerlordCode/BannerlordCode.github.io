---
title: "Monster"
description: "Monster 的自动生成类参考。"
---
# Monster

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Monster : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/Monster.cs`

## 概述

`Monster` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Monster 实例
Monster monster = ...;
monster.Deserialize(objectManager, node);
```

### GetBoneToAttachForItemFlags
`public sbyte GetBoneToAttachForItemFlags(ItemFlags itemFlags)`

**用途 / Purpose:** 读取并返回当前对象中 「bone to attach for item flags」 的结果。

```csharp
// 先通过子系统 API 拿到 Monster 实例
Monster monster = ...;
var result = monster.GetBoneToAttachForItemFlags(itemFlags);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Monster monster = ...;
monster.Deserialize(objectManager, node);
```

## 参见

- [本区域目录](../)