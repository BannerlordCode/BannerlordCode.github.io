---
title: "MBAgentVisuals"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBAgentVisuals`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBAgentVisuals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MBAgentVisuals : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBAgentVisuals.cs`

## 概述

`MBAgentVisuals` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAgentVisuals
`public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)`

**用途 / Purpose:** 创建一个 `agent visuals` 实例或对象。

### Tick
`public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**用途 / Purpose:** 获取 `global frame` 的当前值。

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 获取 `frame` 的当前值。

### GetEntity
`public GameEntity GetEntity()`

**用途 / Purpose:** 获取 `entity` 的当前值。

### GetWeakEntity
`public WeakGameEntity GetWeakEntity()`

**用途 / Purpose:** 获取 `weak entity` 的当前值。

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**用途 / Purpose:** 获取 `global stable eye point` 的当前值。

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**用途 / Purpose:** 获取 `global stable neck point` 的当前值。

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte bone, bool useBoneMapping)`

**用途 / Purpose:** 获取 `bone entitial frame` 的当前值。

### SetAttachedPositionForMeshAfterAnimationPostIntegrate
`public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity, sbyte bone)`

**用途 / Purpose:** 设置 `attached position for mesh after animation post integrate` 的值或状态。

### GetCurrentHeadLookDirection
`public Vec3 GetCurrentHeadLookDirection()`

**用途 / Purpose:** 获取 `current head look direction` 的当前值。

### GetMovementMode
`public HumanWalkingMovementMode GetMovementMode()`

**用途 / Purpose:** 获取 `movement mode` 的当前值。

### GetVisualStrengthOfAgentVisual
`public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)`

**用途 / Purpose:** 获取 `visual strength of agent visual` 的当前值。

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**用途 / Purpose:** 获取 `current ragdoll state` 的当前值。

### GetRealBoneIndex
`public sbyte GetRealBoneIndex(HumanBone boneType)`

**用途 / Purpose:** 获取 `real bone index` 的当前值。

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**用途 / Purpose:** 向当前集合/状态中添加 `prefab to agent visual bone by bone type`。

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `prefab to agent visual bone by real bone index`。

### GetAttachedWeaponEntity
`public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex)`

**用途 / Purpose:** 获取 `attached weapon entity` 的当前值。

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**用途 / Purpose:** 设置 `frame` 的值或状态。

### SetEntity
`public void SetEntity(GameEntity value)`

**用途 / Purpose:** 设置 `entity` 的值或状态。

### FillEntityWithBodyMeshesWithoutAgentVisuals
`public static void FillEntityWithBodyMeshesWithoutAgentVisuals(GameEntity entity, SkinGenerationParams skinParams, BodyProperties bodyProperties, MetaMesh glovesMesh)`

**用途 / Purpose:** 处理 `fill entity with body meshes without agent visuals` 相关逻辑。

### GetBoneTypeData
`public BoneBodyTypeData GetBoneTypeData(sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone type data` 的当前值。

### GetSkeleton
`public Skeleton GetSkeleton()`

**用途 / Purpose:** 获取 `skeleton` 的当前值。

### SetSkeleton
`public void SetSkeleton(Skeleton newSkeleton)`

**用途 / Purpose:** 设置 `skeleton` 的值或状态。

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(string particleName, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)`

**用途 / Purpose:** 创建一个 `particle system attached to bone` 实例或对象。

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(int runtimeParticleindex, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)`

**用途 / Purpose:** 创建一个 `particle system attached to bone` 实例或对象。

### SetVisible
`public void SetVisible(bool value)`

**用途 / Purpose:** 设置 `visible` 的值或状态。

### GetVisible
`public bool GetVisible()`

**用途 / Purpose:** 获取 `visible` 的当前值。

### AddChildEntity
`public void AddChildEntity(GameEntity entity)`

**用途 / Purpose:** 向当前集合/状态中添加 `child entity`。

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 windVector, bool isLocal, EquipmentIndex weaponIndex)`

**用途 / Purpose:** 设置 `cloth wind to weapon at index` 的值或状态。

### RemoveChildEntity
`public void RemoveChildEntity(GameEntity entity, int removeReason)`

**用途 / Purpose:** 从当前集合/状态中移除 `child entity`。

### CheckResources
`public bool CheckResources(bool addToQueue)`

**用途 / Purpose:** 处理 `check resources` 相关逻辑。

### AddSkinMeshes
`public void AddSkinMeshes(SkinGenerationParams skinParams, BodyProperties bodyProperties, bool useGPUMorph, bool useFaceCache)`

**用途 / Purpose:** 向当前集合/状态中添加 `skin meshes`。

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 设置 `face generation params` 的值或状态。

### SetLodAtlasShadingIndex
`public void SetLodAtlasShadingIndex(int index, bool useTeamColor, uint teamColor1, uint teamColor2)`

**用途 / Purpose:** 设置 `lod atlas shading index` 的值或状态。

### ClearVisualComponents
`public void ClearVisualComponents(bool removeSkeleton, bool removeLabel = true)`

**用途 / Purpose:** 处理 `clear visual components` 相关逻辑。

### LazyUpdateAgentRendererData
`public void LazyUpdateAgentRendererData()`

**用途 / Purpose:** 处理 `lazy update agent renderer data` 相关逻辑。

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, BodyMeshTypes bodyMeshIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `multi mesh`。

### ApplySkeletonScale
`public void ApplySkeletonScale(Vec3 mountSitBoneScale, float mountRadiusAdder, sbyte boneIndices, Vec3 boneScales)`

**用途 / Purpose:** 将 `skeleton scale` 应用到当前对象。

### UpdateSkeletonScale
`public void UpdateSkeletonScale(int bodyDeformType)`

**用途 / Purpose:** 更新 `skeleton scale` 的状态或数据。

### AddHorseReinsClothMesh
`public void AddHorseReinsClothMesh(MetaMesh reinMesh, MetaMesh ropeMesh)`

**用途 / Purpose:** 向当前集合/状态中添加 `horse reins cloth mesh`。

### BatchLastLodMeshes
`public void BatchLastLodMeshes()`

**用途 / Purpose:** 处理 `batch last lod meshes` 相关逻辑。

### AddWeaponToAgentEntity
`public void AddWeaponToAgentEntity(int slotIndex, in WeaponData weaponData, WeaponStatsData weaponStatsData, in WeaponData ammoWeaponData, WeaponStatsData ammoWeaponStatsData, GameEntity cachedEntity)`

**用途 / Purpose:** 向当前集合/状态中添加 `weapon to agent entity`。

### UpdateQuiverMeshesWithoutAgent
`public void UpdateQuiverMeshesWithoutAgent(int weaponIndex, int ammoCount)`

**用途 / Purpose:** 更新 `quiver meshes without agent` 的状态或数据。

### SetWieldedWeaponIndices
`public void SetWieldedWeaponIndices(int slotIndexRightHand, int slotIndexLeftHand)`

**用途 / Purpose:** 设置 `wielded weapon indices` 的值或状态。

### ClearAllWeaponMeshes
`public void ClearAllWeaponMeshes()`

**用途 / Purpose:** 处理 `clear all weapon meshes` 相关逻辑。

### ClearWeaponMeshes
`public void ClearWeaponMeshes(EquipmentIndex index)`

**用途 / Purpose:** 处理 `clear weapon meshes` 相关逻辑。

### MakeVoice
`public void MakeVoice(int voiceId, Vec3 position)`

**用途 / Purpose:** 处理 `make voice` 相关逻辑。

### SetSetupMorphNode
`public void SetSetupMorphNode(bool value)`

**用途 / Purpose:** 设置 `setup morph node` 的值或状态。

### UseScaledWeapons
`public void UseScaledWeapons(bool value)`

**用途 / Purpose:** 处理 `use scaled weapons` 相关逻辑。

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool keepState)`

**用途 / Purpose:** 设置 `cloth component keep state of all meshes` 的值或状态。

### GetFacegenScalingMatrix
`public MatrixFrame GetFacegenScalingMatrix()`

**用途 / Purpose:** 获取 `facegen scaling matrix` 的当前值。

### ReplaceMeshWithMesh
`public void ReplaceMeshWithMesh(MetaMesh oldMetaMesh, MetaMesh newMetaMesh, BodyMeshTypes bodyMeshIndex)`

**用途 / Purpose:** 处理 `replace mesh with mesh` 相关逻辑。

### SetAgentActionChannel
`public void SetAgentActionChannel(int actionChannelNo, int actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)`

**用途 / Purpose:** 设置 `agent action channel` 的值或状态。

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)`

**用途 / Purpose:** 设置 `voice definition index` 的值或状态。

### StartRhubarbRecord
`public void StartRhubarbRecord(string path, int soundId)`

**用途 / Purpose:** 处理 `start rhubarb record` 相关逻辑。

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**用途 / Purpose:** 设置 `contour color` 的值或状态。

### SetEnableOcclusionCulling
`public void SetEnableOcclusionCulling(bool enable)`

**用途 / Purpose:** 设置 `enable occlusion culling` 的值或状态。

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool makeZero)`

**用途 / Purpose:** 设置 `agent lod zero or max` 的值或状态。

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

**用途 / Purpose:** 设置 `agent local speed` 的值或状态。

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

**用途 / Purpose:** 设置 `look direction` 的值或状态。

### GetBodyMeshIndex
`public static BodyMeshTypes GetBodyMeshIndex(EquipmentIndex equipmentIndex)`

**用途 / Purpose:** 获取 `body mesh index` 的当前值。

### GetBoneEntitialFrameAtAnimationProgress
`public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)`

**用途 / Purpose:** 获取 `bone entitial frame at animation progress` 的当前值。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### ResetNextFrame
`public void ResetNextFrame()`

**用途 / Purpose:** 将 `next frame` 重置为初始状态。

## 使用示例

```csharp
MBAgentVisuals.CreateAgentVisuals(scene, "example", eyeOffset);
```

## 参见

- [完整类目录](../catalog)