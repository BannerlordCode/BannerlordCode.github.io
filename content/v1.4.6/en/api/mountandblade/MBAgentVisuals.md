---
title: "MBAgentVisuals"
description: "MBAgentVisuals: a public class in TaleWorlds.MountAndBlade, inheriting NativeObject; 66 exposed members (66 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBAgentVisuals.cs."
---
# MBAgentVisuals

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class MBAgentVisuals : NativeObject`
**File:** `TaleWorlds.MountAndBlade/MBAgentVisuals.cs`

## Overview

MBAgentVisuals lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBAgentVisuals.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is MBAgentVisuals → NativeObject. It exposes 66 public/protected members: 66 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBAgentVisuals is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBAgentVisuals → NativeObject. The surface is method-led (methods 66/66, properties 0/66), so it mostly exposes operations. NativeObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBAgentVisuals.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateAgentVisuals` | `public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)` | method |
| `Tick` | `public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)` | method |
| `GetGlobalFrame` | `public MatrixFrame GetGlobalFrame()` | method |
| `GetFrame` | `public MatrixFrame GetFrame()` | method |
| `GetEntity` | `public GameEntity GetEntity()` | method |
| `GetWeakEntity` | `public WeakGameEntity GetWeakEntity()` | method |
| `IsValid` | `public bool IsValid()` | method |
| `GetGlobalStableEyePoint` | `public Vec3 GetGlobalStableEyePoint(bool isHumanoid)` | method |
| `GetGlobalStableNeckPoint` | `public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)` | method |
| `GetBoneEntitialFrame` | `public MatrixFrame GetBoneEntitialFrame(sbyte bone, bool useBoneMapping)` | method |
| `SetAttachedPositionForMeshAfterAnimationPostIntegrate` | `public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity, sbyte bone)` | method |
| `GetCurrentHeadLookDirection` | `public Vec3 GetCurrentHeadLookDirection()` | method |
| `GetMovementMode` | `public HumanWalkingMovementMode GetMovementMode()` | method |
| `GetVisualStrengthOfAgentVisual` | `public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)` | method |
| `GetCurrentRagdollState` | `public RagdollState GetCurrentRagdollState()` | method |
| `GetRealBoneIndex` | `public sbyte GetRealBoneIndex(HumanBone boneType)` | method |
| `AddPrefabToAgentVisualBoneByBoneType` | `public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)` | method |
| `AddPrefabToAgentVisualBoneByRealBoneIndex` | `public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)` | method |
| `GetAttachedWeaponEntity` | `public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex)` | method |
| `SetFrame` | `public void SetFrame(ref MatrixFrame frame)` | method |
| `SetEntity` | `public void SetEntity(GameEntity value)` | method |
| `FillEntityWithBodyMeshesWithoutAgentVisuals` | `public static void FillEntityWithBodyMeshesWithoutAgentVisuals(GameEntity entity, SkinGenerationParams skinParams, BodyProperties bodyProperties, MetaMesh glovesMesh)` | method |
| `GetBoneTypeData` | `public BoneBodyTypeData GetBoneTypeData(sbyte boneIndex)` | method |
| `GetSkeleton` | `public Skeleton GetSkeleton()` | method |
| `SetSkeleton` | `public void SetSkeleton(Skeleton newSkeleton)` | method |
| `CreateParticleSystemAttachedToBone` | `public void CreateParticleSystemAttachedToBone(string particleName, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)` | method |
| `CreateParticleSystemAttachedToBone` | `public void CreateParticleSystemAttachedToBone(int runtimeParticleindex, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)` | method |
| `SetVisible` | `public void SetVisible(bool value)` | method |
| `GetVisible` | `public bool GetVisible()` | method |
| `AddChildEntity` | `public void AddChildEntity(GameEntity entity)` | method |
| `SetClothWindToWeaponAtIndex` | `public void SetClothWindToWeaponAtIndex(Vec3 windVector, bool isLocal, EquipmentIndex weaponIndex)` | method |
| `RemoveChildEntity` | `public void RemoveChildEntity(GameEntity entity, int removeReason)` | method |
| `CheckResources` | `public bool CheckResources(bool addToQueue)` | method |
| `AddSkinMeshes` | `public void AddSkinMeshes(SkinGenerationParams skinParams, BodyProperties bodyProperties, bool useGPUMorph, bool useFaceCache)` | method |
| `SetFaceGenerationParams` | `public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)` | method |
| `SetLodAtlasShadingIndex` | `public void SetLodAtlasShadingIndex(int index, bool useTeamColor, uint teamColor1, uint teamColor2)` | method |
| `ClearVisualComponents` | `public void ClearVisualComponents(bool removeSkeleton, bool removeLabel = true)` | method |
| `LazyUpdateAgentRendererData` | `public void LazyUpdateAgentRendererData()` | method |
| `AddMultiMesh` | `public void AddMultiMesh(MetaMesh metaMesh, BodyMeshTypes bodyMeshIndex)` | method |
| `ApplySkeletonScale` | `public void ApplySkeletonScale(Vec3 mountSitBoneScale, float mountRadiusAdder, sbyte[]boneIndices, Vec3[]boneScales)` | method |
| `UpdateSkeletonScale` | `public void UpdateSkeletonScale(int bodyDeformType)` | method |
| `AddHorseReinsClothMesh` | `public void AddHorseReinsClothMesh(MetaMesh reinMesh, MetaMesh ropeMesh)` | method |
| `BatchLastLodMeshes` | `public void BatchLastLodMeshes()` | method |
| `AddWeaponToAgentEntity` | `public void AddWeaponToAgentEntity(int slotIndex, in WeaponData weaponData, WeaponStatsData[]weaponStatsData, in WeaponData ammoWeaponData, WeaponStatsData[]ammoWeaponStatsData, GameEntity cachedEntity)` | method |
| `UpdateQuiverMeshesWithoutAgent` | `public void UpdateQuiverMeshesWithoutAgent(int weaponIndex, int ammoCount)` | method |
| `SetWieldedWeaponIndices` | `public void SetWieldedWeaponIndices(int slotIndexRightHand, int slotIndexLeftHand)` | method |
| `ClearAllWeaponMeshes` | `public void ClearAllWeaponMeshes()` | method |
| `ClearWeaponMeshes` | `public void ClearWeaponMeshes(EquipmentIndex index)` | method |
| `MakeVoice` | `public void MakeVoice(int voiceId, Vec3 position)` | method |
| `SetSetupMorphNode` | `public void SetSetupMorphNode(bool value)` | method |
| `UseScaledWeapons` | `public void UseScaledWeapons(bool value)` | method |
| `SetClothComponentKeepStateOfAllMeshes` | `public void SetClothComponentKeepStateOfAllMeshes(bool keepState)` | method |
| `GetFacegenScalingMatrix` | `public MatrixFrame GetFacegenScalingMatrix()` | method |
| `ReplaceMeshWithMesh` | `public void ReplaceMeshWithMesh(MetaMesh oldMetaMesh, MetaMesh newMetaMesh, BodyMeshTypes bodyMeshIndex)` | method |
| `SetAgentActionChannel` | `public void SetAgentActionChannel(int actionChannelNo, int actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)` | method |
| `SetVoiceDefinitionIndex` | `public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)` | method |
| `StartRhubarbRecord` | `public void StartRhubarbRecord(string path, int soundId)` | method |
| `SetContourColor` | `public void SetContourColor(uint? color, bool alwaysVisible = true)` | method |
| `SetEnableOcclusionCulling` | `public void SetEnableOcclusionCulling(bool enable)` | method |
| `SetAgentLodZeroOrMax` | `public void SetAgentLodZeroOrMax(bool makeZero)` | method |
| `SetAgentLocalSpeed` | `public void SetAgentLocalSpeed(Vec2 speed)` | method |
| `SetLookDirection` | `public void SetLookDirection(Vec3 direction)` | method |
| `GetBodyMeshIndex` | `public static BodyMeshTypes GetBodyMeshIndex(EquipmentIndex equipmentIndex)` | method |
| `GetBoneEntitialFrameAtAnimationProgress` | `public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)` | method |
| `Reset` | `public void Reset()` | method |
| `ResetNextFrame` | `public void ResetNextFrame()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
