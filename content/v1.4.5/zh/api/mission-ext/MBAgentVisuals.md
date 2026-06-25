---
title: "MBAgentVisuals"
description: "MBAgentVisuals 的自动生成类参考。"
---
# MBAgentVisuals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MBAgentVisuals : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBAgentVisuals.cs`

## 概述

`MBAgentVisuals` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAgentVisuals
`public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)`

**用途 / Purpose:** 构建一个新的 「agent visuals」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MBAgentVisuals.CreateAgentVisuals(scene, "example", eyeOffset);
```

### Tick
`public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.Tick(parentAgentVisuals, 0, false, 0);
```

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「global frame」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetGlobalFrame();
```

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「frame」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetFrame();
```

### GetEntity
`public GameEntity GetEntity()`

**用途 / Purpose:** 读取并返回当前对象中 「entity」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetEntity();
```

### GetWeakEntity
`public WeakGameEntity GetWeakEntity()`

**用途 / Purpose:** 读取并返回当前对象中 「weak entity」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetWeakEntity();
```

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 判断当前对象是否处于 「valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.IsValid();
```

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**用途 / Purpose:** 读取并返回当前对象中 「global stable eye point」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetGlobalStableEyePoint(false);
```

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**用途 / Purpose:** 读取并返回当前对象中 「global stable neck point」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetGlobalStableNeckPoint(false);
```

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte bone, bool useBoneMapping)`

**用途 / Purpose:** 读取并返回当前对象中 「bone entitial frame」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetBoneEntitialFrame(0, false);
```

### SetAttachedPositionForMeshAfterAnimationPostIntegrate
`public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity, sbyte bone)`

**用途 / Purpose:** 为 「attached position for mesh after animation post integrate」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetAttachedPositionForMeshAfterAnimationPostIntegrate(ropeEntity, 0);
```

### GetCurrentHeadLookDirection
`public Vec3 GetCurrentHeadLookDirection()`

**用途 / Purpose:** 读取并返回当前对象中 「current head look direction」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetCurrentHeadLookDirection();
```

### GetMovementMode
`public HumanWalkingMovementMode GetMovementMode()`

**用途 / Purpose:** 读取并返回当前对象中 「movement mode」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetMovementMode();
```

### GetVisualStrengthOfAgentVisual
`public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)`

**用途 / Purpose:** 读取并返回当前对象中 「visual strength of agent visual」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetVisualStrengthOfAgentVisual(targetAgentVisual, mission, 0, 0, 0);
```

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**用途 / Purpose:** 读取并返回当前对象中 「current ragdoll state」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetCurrentRagdollState();
```

### GetRealBoneIndex
`public sbyte GetRealBoneIndex(HumanBone boneType)`

**用途 / Purpose:** 读取并返回当前对象中 「real bone index」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetRealBoneIndex(boneType);
```

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**用途 / Purpose:** 将 「prefab to agent visual bone by bone type」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.AddPrefabToAgentVisualBoneByBoneType("example", boneType);
```

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**用途 / Purpose:** 将 「prefab to agent visual bone by real bone index」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.AddPrefabToAgentVisualBoneByRealBoneIndex("example", 0);
```

### GetAttachedWeaponEntity
`public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「attached weapon entity」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetAttachedWeaponEntity(0);
```

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**用途 / Purpose:** 为 「frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetFrame(frame);
```

### SetEntity
`public void SetEntity(GameEntity value)`

**用途 / Purpose:** 为 「entity」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetEntity(value);
```

### FillEntityWithBodyMeshesWithoutAgentVisuals
`public static void FillEntityWithBodyMeshesWithoutAgentVisuals(GameEntity entity, SkinGenerationParams skinParams, BodyProperties bodyProperties, MetaMesh glovesMesh)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MBAgentVisuals.FillEntityWithBodyMeshesWithoutAgentVisuals(entity, skinParams, bodyProperties, glovesMesh);
```

### GetBoneTypeData
`public BoneBodyTypeData GetBoneTypeData(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「bone type data」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetBoneTypeData(0);
```

### GetSkeleton
`public Skeleton GetSkeleton()`

**用途 / Purpose:** 读取并返回当前对象中 「skeleton」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetSkeleton();
```

### SetSkeleton
`public void SetSkeleton(Skeleton newSkeleton)`

**用途 / Purpose:** 为 「skeleton」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetSkeleton(newSkeleton);
```

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(string particleName, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)`

**用途 / Purpose:** 构建一个新的 「particle system attached to bone」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.CreateParticleSystemAttachedToBone("example", 0, boneLocalParticleFrame);
```

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(int runtimeParticleindex, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)`

**用途 / Purpose:** 构建一个新的 「particle system attached to bone」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.CreateParticleSystemAttachedToBone(0, 0, boneLocalParticleFrame);
```

### SetVisible
`public void SetVisible(bool value)`

**用途 / Purpose:** 为 「visible」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetVisible(false);
```

### GetVisible
`public bool GetVisible()`

**用途 / Purpose:** 读取并返回当前对象中 「visible」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetVisible();
```

### AddChildEntity
`public void AddChildEntity(GameEntity entity)`

**用途 / Purpose:** 将 「child entity」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddChildEntity(entity);
```

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 windVector, bool isLocal, EquipmentIndex weaponIndex)`

**用途 / Purpose:** 为 「cloth wind to weapon at index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetClothWindToWeaponAtIndex(windVector, false, weaponIndex);
```

### RemoveChildEntity
`public void RemoveChildEntity(GameEntity entity, int removeReason)`

**用途 / Purpose:** 从当前容器或状态中移除 「child entity」。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.RemoveChildEntity(entity, 0);
```

### CheckResources
`public bool CheckResources(bool addToQueue)`

**用途 / Purpose:** 检查「resources」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.CheckResources(false);
```

### AddSkinMeshes
`public void AddSkinMeshes(SkinGenerationParams skinParams, BodyProperties bodyProperties, bool useGPUMorph, bool useFaceCache)`

**用途 / Purpose:** 将 「skin meshes」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddSkinMeshes(skinParams, bodyProperties, false, false);
```

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 为 「face generation params」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetFaceGenerationParams(faceGenerationParams);
```

### SetLodAtlasShadingIndex
`public void SetLodAtlasShadingIndex(int index, bool useTeamColor, uint teamColor1, uint teamColor2)`

**用途 / Purpose:** 为 「lod atlas shading index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetLodAtlasShadingIndex(0, false, 0, 0);
```

### ClearVisualComponents
`public void ClearVisualComponents(bool removeSkeleton, bool removeLabel = true)`

**用途 / Purpose:** 清空当前对象中的「visual components」。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ClearVisualComponents(false, false);
```

### LazyUpdateAgentRendererData
`public void LazyUpdateAgentRendererData()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.LazyUpdateAgentRendererData();
```

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, BodyMeshTypes bodyMeshIndex)`

**用途 / Purpose:** 将 「multi mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddMultiMesh(metaMesh, bodyMeshIndex);
```

### ApplySkeletonScale
`public void ApplySkeletonScale(Vec3 mountSitBoneScale, float mountRadiusAdder, sbyte boneIndices, Vec3 boneScales)`

**用途 / Purpose:** 将 「skeleton scale」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ApplySkeletonScale(mountSitBoneScale, 0, 0, boneScales);
```

### UpdateSkeletonScale
`public void UpdateSkeletonScale(int bodyDeformType)`

**用途 / Purpose:** 重新计算并更新 「skeleton scale」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.UpdateSkeletonScale(0);
```

### AddHorseReinsClothMesh
`public void AddHorseReinsClothMesh(MetaMesh reinMesh, MetaMesh ropeMesh)`

**用途 / Purpose:** 将 「horse reins cloth mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddHorseReinsClothMesh(reinMesh, ropeMesh);
```

### BatchLastLodMeshes
`public void BatchLastLodMeshes()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.BatchLastLodMeshes();
```

### AddWeaponToAgentEntity
`public void AddWeaponToAgentEntity(int slotIndex, in WeaponData weaponData, WeaponStatsData weaponStatsData, in WeaponData ammoWeaponData, WeaponStatsData ammoWeaponStatsData, GameEntity cachedEntity)`

**用途 / Purpose:** 将 「weapon to agent entity」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddWeaponToAgentEntity(0, weaponData, weaponStatsData, ammoWeaponData, ammoWeaponStatsData, cachedEntity);
```

### UpdateQuiverMeshesWithoutAgent
`public void UpdateQuiverMeshesWithoutAgent(int weaponIndex, int ammoCount)`

**用途 / Purpose:** 重新计算并更新 「quiver meshes without agent」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.UpdateQuiverMeshesWithoutAgent(0, 0);
```

### SetWieldedWeaponIndices
`public void SetWieldedWeaponIndices(int slotIndexRightHand, int slotIndexLeftHand)`

**用途 / Purpose:** 为 「wielded weapon indices」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetWieldedWeaponIndices(0, 0);
```

### ClearAllWeaponMeshes
`public void ClearAllWeaponMeshes()`

**用途 / Purpose:** 清空当前对象中的「all weapon meshes」。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ClearAllWeaponMeshes();
```

### ClearWeaponMeshes
`public void ClearWeaponMeshes(EquipmentIndex index)`

**用途 / Purpose:** 清空当前对象中的「weapon meshes」。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ClearWeaponMeshes(index);
```

### MakeVoice
`public void MakeVoice(int voiceId, Vec3 position)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.MakeVoice(0, position);
```

### SetSetupMorphNode
`public void SetSetupMorphNode(bool value)`

**用途 / Purpose:** 为 「setup morph node」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetSetupMorphNode(false);
```

### UseScaledWeapons
`public void UseScaledWeapons(bool value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.UseScaledWeapons(false);
```

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool keepState)`

**用途 / Purpose:** 为 「cloth component keep state of all meshes」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetClothComponentKeepStateOfAllMeshes(false);
```

### GetFacegenScalingMatrix
`public MatrixFrame GetFacegenScalingMatrix()`

**用途 / Purpose:** 读取并返回当前对象中 「facegen scaling matrix」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetFacegenScalingMatrix();
```

### ReplaceMeshWithMesh
`public void ReplaceMeshWithMesh(MetaMesh oldMetaMesh, MetaMesh newMetaMesh, BodyMeshTypes bodyMeshIndex)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ReplaceMeshWithMesh(oldMetaMesh, newMetaMesh, bodyMeshIndex);
```

### SetAgentActionChannel
`public void SetAgentActionChannel(int actionChannelNo, int actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)`

**用途 / Purpose:** 为 「agent action channel」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetAgentActionChannel(0, 0, 0, 0, false, 0);
```

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)`

**用途 / Purpose:** 为 「voice definition index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetVoiceDefinitionIndex(0, 0);
```

### StartRhubarbRecord
`public void StartRhubarbRecord(string path, int soundId)`

**用途 / Purpose:** 启动「rhubarb record」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.StartRhubarbRecord("example", 0);
```

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**用途 / Purpose:** 为 「contour color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetContourColor(0, false);
```

### SetEnableOcclusionCulling
`public void SetEnableOcclusionCulling(bool enable)`

**用途 / Purpose:** 为 「enable occlusion culling」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetEnableOcclusionCulling(false);
```

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool makeZero)`

**用途 / Purpose:** 为 「agent lod zero or max」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetAgentLodZeroOrMax(false);
```

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

**用途 / Purpose:** 为 「agent local speed」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetAgentLocalSpeed(speed);
```

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

**用途 / Purpose:** 为 「look direction」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetLookDirection(direction);
```

### GetBodyMeshIndex
`public static BodyMeshTypes GetBodyMeshIndex(EquipmentIndex equipmentIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「body mesh index」 的结果。

```csharp
// 静态调用，不需要实例
MBAgentVisuals.GetBodyMeshIndex(equipmentIndex);
```

### GetBoneEntitialFrameAtAnimationProgress
`public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)`

**用途 / Purpose:** 读取并返回当前对象中 「bone entitial frame at animation progress」 的结果。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetBoneEntitialFrameAtAnimationProgress(0, 0, 0);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.Reset();
```

### ResetNextFrame
`public void ResetNextFrame()`

**用途 / Purpose:** 将 「next frame」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MBAgentVisuals 实例
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ResetNextFrame();
```

## 使用示例

```csharp
MBAgentVisuals.CreateAgentVisuals(scene, "example", eyeOffset);
```

## 参见

- [本区域目录](../)