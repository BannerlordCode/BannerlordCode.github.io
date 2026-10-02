---
title: "MBAgentVisuals"
description: "MBAgentVisuals 的自动生成类参考。"
---
# MBAgentVisuals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MBAgentVisuals : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.MountAndBlade/MBAgentVisuals.cs

## 概述

`MBAgentVisuals` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBAgentVisuals.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateAgentVisuals
`public static MBAgentVisuals CreateAgentVisuals(Scene scene,string ownerName,Vec3 eyeOffset) `

### Tick
`public void Tick(MBAgentVisuals parentAgentVisuals,float dt,bool entityMoving,float speed) `

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame() `

### GetFrame
`public MatrixFrame GetFrame() `

### GetEntity
`public GameEntity GetEntity() `

### GetWeakEntity
`public WeakGameEntity GetWeakEntity() `

### IsValid
`public bool IsValid() `

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid) `

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid) `

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte bone,bool useBoneMapping) `

### SetAttachedPositionForMeshAfterAnimationPostIntegrate
`public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity,sbyte bone) `

### GetCurrentHeadLookDirection
`public Vec3 GetCurrentHeadLookDirection() `

### GetMovementMode
`public HumanWalkingMovementMode GetMovementMode() `

### GetVisualStrengthOfAgentVisual
`public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual,Mission mission,float ambientLightStrength,float sunMoonLightStrength,int agentIndexToIgnore) `

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState() `

### GetRealBoneIndex
`public sbyte GetRealBoneIndex(HumanBone boneType) `

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName,HumanBone boneType) `

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName,sbyte realBoneIndex) `

### GetAttachedWeaponEntity
`public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex) `

### SetFrame
`public void SetFrame(ref MatrixFrame frame) `

### SetEntity
`public void SetEntity(GameEntity value) `

### FillEntityWithBodyMeshesWithoutAgentVisuals
`public static void FillEntityWithBodyMeshesWithoutAgentVisuals(GameEntity entity,SkinGenerationParams skinParams,BodyProperties bodyProperties,MetaMesh glovesMesh) `

### GetBoneTypeData
`public BoneBodyTypeData GetBoneTypeData(sbyte boneIndex) `

### GetSkeleton
`public Skeleton GetSkeleton() `

### SetSkeleton
`public void SetSkeleton(Skeleton newSkeleton) `

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(string particleName,sbyte boneIndex,ref MatrixFrame boneLocalParticleFrame) `
`public void CreateParticleSystemAttachedToBone(int runtimeParticleindex,sbyte boneIndex,ref MatrixFrame boneLocalParticleFrame) `

### SetVisible
`public void SetVisible(bool value) `

### GetVisible
`public bool GetVisible() `

### AddChildEntity
`public void AddChildEntity(GameEntity entity) `

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 windVector,bool isLocal,EquipmentIndex weaponIndex) `

### RemoveChildEntity
`public void RemoveChildEntity(GameEntity entity,int removeReason) `

### CheckResources
`public bool CheckResources(bool addToQueue) `

### AddSkinMeshes
`public void AddSkinMeshes(SkinGenerationParams skinParams,BodyProperties bodyProperties,bool useGPUMorph,bool useFaceCache) `

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams) `

### SetLodAtlasShadingIndex
`public void SetLodAtlasShadingIndex(int index,bool useTeamColor,uint teamColor1,uint teamColor2) `

### ClearVisualComponents
`public void ClearVisualComponents(bool removeSkeleton,bool removeLabel = true) `

### LazyUpdateAgentRendererData
`public void LazyUpdateAgentRendererData() `

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh,BodyMeshTypes bodyMeshIndex) `

### ApplySkeletonScale
`public void ApplySkeletonScale(Vec3 mountSitBoneScale,float mountRadiusAdder,sbyte[] boneIndices,Vec3[] boneScales) `

### UpdateSkeletonScale
`public void UpdateSkeletonScale(int bodyDeformType) `

### AddHorseReinsClothMesh
`public void AddHorseReinsClothMesh(MetaMesh reinMesh,MetaMesh ropeMesh) `

### BatchLastLodMeshes
`public void BatchLastLodMeshes() `

### AddWeaponToAgentEntity
`public void AddWeaponToAgentEntity(int slotIndex,in WeaponData weaponData,WeaponStatsData[] weaponStatsData,in WeaponData ammoWeaponData,WeaponStatsData[] ammoWeaponStatsData,GameEntity cachedEntity) `

### UpdateQuiverMeshesWithoutAgent
`public void UpdateQuiverMeshesWithoutAgent(int weaponIndex,int ammoCount) `

### SetWieldedWeaponIndices
`public void SetWieldedWeaponIndices(int slotIndexRightHand,int slotIndexLeftHand) `

### ClearAllWeaponMeshes
`public void ClearAllWeaponMeshes() `

### ClearWeaponMeshes
`public void ClearWeaponMeshes(EquipmentIndex index) `

### MakeVoice
`public void MakeVoice(int voiceId,Vec3 position) `

### SetSetupMorphNode
`public void SetSetupMorphNode(bool value) `

### UseScaledWeapons
`public void UseScaledWeapons(bool value) `

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool keepState) `

### GetFacegenScalingMatrix
`public MatrixFrame GetFacegenScalingMatrix() `

### ReplaceMeshWithMesh
`public void ReplaceMeshWithMesh(MetaMesh oldMetaMesh,MetaMesh newMetaMesh,BodyMeshTypes bodyMeshIndex) `

### SetAgentActionChannel
`public void SetAgentActionChannel(int actionChannelNo,int actionIndex,float channelParameter = 0f,float blendPeriodOverride = -0.2f,bool forceFaceMorphRestart = true,float blendWithNextActionFactor = 0f) `

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex,float voicePitch) `

### StartRhubarbRecord
`public void StartRhubarbRecord(string path,int soundId) `

### SetContourColor
`public void SetContourColor(uint? color,bool alwaysVisible = true) `

### SetEnableOcclusionCulling
`public void SetEnableOcclusionCulling(bool enable) `

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool makeZero) `

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed) `

### SetLookDirection
`public void SetLookDirection(Vec3 direction) `

### GetBodyMeshIndex
`public static BodyMeshTypes GetBodyMeshIndex(EquipmentIndex equipmentIndex) `

### GetBoneEntitialFrameAtAnimationProgress
`public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex,int animationIndex,float progress) `

### Reset
`public void Reset() `

### ResetNextFrame
`public void ResetNextFrame() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
