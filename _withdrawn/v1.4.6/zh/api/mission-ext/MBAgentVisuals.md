---
title: "MBAgentVisuals"
description: "MBAgentVisuals：TaleWorlds.MountAndBlade 的 public 类，继承 NativeObject；公开成员 66 个（方法 66、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MBAgentVisuals.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBAgentVisuals

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class MBAgentVisuals : NativeObject`
**File:** `TaleWorlds.MountAndBlade/MBAgentVisuals.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MBAgentVisuals 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBAgentVisuals.cs。它是一个 public 类（sealed），实现/继承 NativeObject，继承链为 MBAgentVisuals → NativeObject。public/protected 成员共 66 个：66 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBAgentVisuals 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MBAgentVisuals → NativeObject。成员构成以方法为主（方法 66/66，属性 0/66），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBAgentVisuals.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateAgentVisuals` | `public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)` | 方法 |
| `Tick` | `public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)` | 方法 |
| `GetGlobalFrame` | `public MatrixFrame GetGlobalFrame()` | 方法 |
| `GetFrame` | `public MatrixFrame GetFrame()` | 方法 |
| `GetEntity` | `public GameEntity GetEntity()` | 方法 |
| `GetWeakEntity` | `public WeakGameEntity GetWeakEntity()` | 方法 |
| `IsValid` | `public bool IsValid()` | 方法 |
| `GetGlobalStableEyePoint` | `public Vec3 GetGlobalStableEyePoint(bool isHumanoid)` | 方法 |
| `GetGlobalStableNeckPoint` | `public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)` | 方法 |
| `GetBoneEntitialFrame` | `public MatrixFrame GetBoneEntitialFrame(sbyte bone, bool useBoneMapping)` | 方法 |
| `SetAttachedPositionForMeshAfterAnimationPostIntegrate` | `public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity, sbyte bone)` | 方法 |
| `GetCurrentHeadLookDirection` | `public Vec3 GetCurrentHeadLookDirection()` | 方法 |
| `GetMovementMode` | `public HumanWalkingMovementMode GetMovementMode()` | 方法 |
| `GetVisualStrengthOfAgentVisual` | `public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)` | 方法 |
| `GetCurrentRagdollState` | `public RagdollState GetCurrentRagdollState()` | 方法 |
| `GetRealBoneIndex` | `public sbyte GetRealBoneIndex(HumanBone boneType)` | 方法 |
| `AddPrefabToAgentVisualBoneByBoneType` | `public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)` | 方法 |
| `AddPrefabToAgentVisualBoneByRealBoneIndex` | `public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)` | 方法 |
| `GetAttachedWeaponEntity` | `public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex)` | 方法 |
| `SetFrame` | `public void SetFrame(ref MatrixFrame frame)` | 方法 |
| `SetEntity` | `public void SetEntity(GameEntity value)` | 方法 |
| `FillEntityWithBodyMeshesWithoutAgentVisuals` | `public static void FillEntityWithBodyMeshesWithoutAgentVisuals(GameEntity entity, SkinGenerationParams skinParams, BodyProperties bodyProperties, MetaMesh glovesMesh)` | 方法 |
| `GetBoneTypeData` | `public BoneBodyTypeData GetBoneTypeData(sbyte boneIndex)` | 方法 |
| `GetSkeleton` | `public Skeleton GetSkeleton()` | 方法 |
| `SetSkeleton` | `public void SetSkeleton(Skeleton newSkeleton)` | 方法 |
| `CreateParticleSystemAttachedToBone` | `public void CreateParticleSystemAttachedToBone(string particleName, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)` | 方法 |
| `CreateParticleSystemAttachedToBone` | `public void CreateParticleSystemAttachedToBone(int runtimeParticleindex, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)` | 方法 |
| `SetVisible` | `public void SetVisible(bool value)` | 方法 |
| `GetVisible` | `public bool GetVisible()` | 方法 |
| `AddChildEntity` | `public void AddChildEntity(GameEntity entity)` | 方法 |
| `SetClothWindToWeaponAtIndex` | `public void SetClothWindToWeaponAtIndex(Vec3 windVector, bool isLocal, EquipmentIndex weaponIndex)` | 方法 |
| `RemoveChildEntity` | `public void RemoveChildEntity(GameEntity entity, int removeReason)` | 方法 |
| `CheckResources` | `public bool CheckResources(bool addToQueue)` | 方法 |
| `AddSkinMeshes` | `public void AddSkinMeshes(SkinGenerationParams skinParams, BodyProperties bodyProperties, bool useGPUMorph, bool useFaceCache)` | 方法 |
| `SetFaceGenerationParams` | `public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)` | 方法 |
| `SetLodAtlasShadingIndex` | `public void SetLodAtlasShadingIndex(int index, bool useTeamColor, uint teamColor1, uint teamColor2)` | 方法 |
| `ClearVisualComponents` | `public void ClearVisualComponents(bool removeSkeleton, bool removeLabel = true)` | 方法 |
| `LazyUpdateAgentRendererData` | `public void LazyUpdateAgentRendererData()` | 方法 |
| `AddMultiMesh` | `public void AddMultiMesh(MetaMesh metaMesh, BodyMeshTypes bodyMeshIndex)` | 方法 |
| `ApplySkeletonScale` | `public void ApplySkeletonScale(Vec3 mountSitBoneScale, float mountRadiusAdder, sbyte[]boneIndices, Vec3[]boneScales)` | 方法 |
| `UpdateSkeletonScale` | `public void UpdateSkeletonScale(int bodyDeformType)` | 方法 |
| `AddHorseReinsClothMesh` | `public void AddHorseReinsClothMesh(MetaMesh reinMesh, MetaMesh ropeMesh)` | 方法 |
| `BatchLastLodMeshes` | `public void BatchLastLodMeshes()` | 方法 |
| `AddWeaponToAgentEntity` | `public void AddWeaponToAgentEntity(int slotIndex, in WeaponData weaponData, WeaponStatsData[]weaponStatsData, in WeaponData ammoWeaponData, WeaponStatsData[]ammoWeaponStatsData, GameEntity cachedEntity)` | 方法 |
| `UpdateQuiverMeshesWithoutAgent` | `public void UpdateQuiverMeshesWithoutAgent(int weaponIndex, int ammoCount)` | 方法 |
| `SetWieldedWeaponIndices` | `public void SetWieldedWeaponIndices(int slotIndexRightHand, int slotIndexLeftHand)` | 方法 |
| `ClearAllWeaponMeshes` | `public void ClearAllWeaponMeshes()` | 方法 |
| `ClearWeaponMeshes` | `public void ClearWeaponMeshes(EquipmentIndex index)` | 方法 |
| `MakeVoice` | `public void MakeVoice(int voiceId, Vec3 position)` | 方法 |
| `SetSetupMorphNode` | `public void SetSetupMorphNode(bool value)` | 方法 |
| `UseScaledWeapons` | `public void UseScaledWeapons(bool value)` | 方法 |
| `SetClothComponentKeepStateOfAllMeshes` | `public void SetClothComponentKeepStateOfAllMeshes(bool keepState)` | 方法 |
| `GetFacegenScalingMatrix` | `public MatrixFrame GetFacegenScalingMatrix()` | 方法 |
| `ReplaceMeshWithMesh` | `public void ReplaceMeshWithMesh(MetaMesh oldMetaMesh, MetaMesh newMetaMesh, BodyMeshTypes bodyMeshIndex)` | 方法 |
| `SetAgentActionChannel` | `public void SetAgentActionChannel(int actionChannelNo, int actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)` | 方法 |
| `SetVoiceDefinitionIndex` | `public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)` | 方法 |
| `StartRhubarbRecord` | `public void StartRhubarbRecord(string path, int soundId)` | 方法 |
| `SetContourColor` | `public void SetContourColor(uint? color, bool alwaysVisible = true)` | 方法 |
| `SetEnableOcclusionCulling` | `public void SetEnableOcclusionCulling(bool enable)` | 方法 |
| `SetAgentLodZeroOrMax` | `public void SetAgentLodZeroOrMax(bool makeZero)` | 方法 |
| `SetAgentLocalSpeed` | `public void SetAgentLocalSpeed(Vec2 speed)` | 方法 |
| `SetLookDirection` | `public void SetLookDirection(Vec3 direction)` | 方法 |
| `GetBodyMeshIndex` | `public static BodyMeshTypes GetBodyMeshIndex(EquipmentIndex equipmentIndex)` | 方法 |
| `GetBoneEntitialFrameAtAnimationProgress` | `public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `ResetNextFrame` | `public void ResetNextFrame()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NativeObject](../../core-extra/NativeObject/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
