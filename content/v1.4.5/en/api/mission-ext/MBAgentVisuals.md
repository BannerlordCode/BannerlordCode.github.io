---
title: "MBAgentVisuals"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBAgentVisuals`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBAgentVisuals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MBAgentVisuals : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBAgentVisuals.cs`

## Overview

`MBAgentVisuals` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAgentVisuals
`public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)`

**Purpose:** Creates a new `agent visuals` instance or object.

### Tick
`public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)`

**Purpose:** Handles logic related to `tick`.

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**Purpose:** Gets the current value of `global frame`.

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Gets the current value of `frame`.

### GetEntity
`public GameEntity GetEntity()`

**Purpose:** Gets the current value of `entity`.

### GetWeakEntity
`public WeakGameEntity GetWeakEntity()`

**Purpose:** Gets the current value of `weak entity`.

### IsValid
`public bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**Purpose:** Gets the current value of `global stable eye point`.

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**Purpose:** Gets the current value of `global stable neck point`.

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte bone, bool useBoneMapping)`

**Purpose:** Gets the current value of `bone entitial frame`.

### SetAttachedPositionForMeshAfterAnimationPostIntegrate
`public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity, sbyte bone)`

**Purpose:** Sets the value or state of `attached position for mesh after animation post integrate`.

### GetCurrentHeadLookDirection
`public Vec3 GetCurrentHeadLookDirection()`

**Purpose:** Gets the current value of `current head look direction`.

### GetMovementMode
`public HumanWalkingMovementMode GetMovementMode()`

**Purpose:** Gets the current value of `movement mode`.

### GetVisualStrengthOfAgentVisual
`public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)`

**Purpose:** Gets the current value of `visual strength of agent visual`.

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**Purpose:** Gets the current value of `current ragdoll state`.

### GetRealBoneIndex
`public sbyte GetRealBoneIndex(HumanBone boneType)`

**Purpose:** Gets the current value of `real bone index`.

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**Purpose:** Adds `prefab to agent visual bone by bone type` to the current collection or state.

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**Purpose:** Adds `prefab to agent visual bone by real bone index` to the current collection or state.

### GetAttachedWeaponEntity
`public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex)`

**Purpose:** Gets the current value of `attached weapon entity`.

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**Purpose:** Sets the value or state of `frame`.

### SetEntity
`public void SetEntity(GameEntity value)`

**Purpose:** Sets the value or state of `entity`.

### FillEntityWithBodyMeshesWithoutAgentVisuals
`public static void FillEntityWithBodyMeshesWithoutAgentVisuals(GameEntity entity, SkinGenerationParams skinParams, BodyProperties bodyProperties, MetaMesh glovesMesh)`

**Purpose:** Handles logic related to `fill entity with body meshes without agent visuals`.

### GetBoneTypeData
`public BoneBodyTypeData GetBoneTypeData(sbyte boneIndex)`

**Purpose:** Gets the current value of `bone type data`.

### GetSkeleton
`public Skeleton GetSkeleton()`

**Purpose:** Gets the current value of `skeleton`.

### SetSkeleton
`public void SetSkeleton(Skeleton newSkeleton)`

**Purpose:** Sets the value or state of `skeleton`.

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(string particleName, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)`

**Purpose:** Creates a new `particle system attached to bone` instance or object.

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(int runtimeParticleindex, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)`

**Purpose:** Creates a new `particle system attached to bone` instance or object.

### SetVisible
`public void SetVisible(bool value)`

**Purpose:** Sets the value or state of `visible`.

### GetVisible
`public bool GetVisible()`

**Purpose:** Gets the current value of `visible`.

### AddChildEntity
`public void AddChildEntity(GameEntity entity)`

**Purpose:** Adds `child entity` to the current collection or state.

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 windVector, bool isLocal, EquipmentIndex weaponIndex)`

**Purpose:** Sets the value or state of `cloth wind to weapon at index`.

### RemoveChildEntity
`public void RemoveChildEntity(GameEntity entity, int removeReason)`

**Purpose:** Removes `child entity` from the current collection or state.

### CheckResources
`public bool CheckResources(bool addToQueue)`

**Purpose:** Handles logic related to `check resources`.

### AddSkinMeshes
`public void AddSkinMeshes(SkinGenerationParams skinParams, BodyProperties bodyProperties, bool useGPUMorph, bool useFaceCache)`

**Purpose:** Adds `skin meshes` to the current collection or state.

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**Purpose:** Sets the value or state of `face generation params`.

### SetLodAtlasShadingIndex
`public void SetLodAtlasShadingIndex(int index, bool useTeamColor, uint teamColor1, uint teamColor2)`

**Purpose:** Sets the value or state of `lod atlas shading index`.

### ClearVisualComponents
`public void ClearVisualComponents(bool removeSkeleton, bool removeLabel = true)`

**Purpose:** Handles logic related to `clear visual components`.

### LazyUpdateAgentRendererData
`public void LazyUpdateAgentRendererData()`

**Purpose:** Handles logic related to `lazy update agent renderer data`.

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, BodyMeshTypes bodyMeshIndex)`

**Purpose:** Adds `multi mesh` to the current collection or state.

### ApplySkeletonScale
`public void ApplySkeletonScale(Vec3 mountSitBoneScale, float mountRadiusAdder, sbyte boneIndices, Vec3 boneScales)`

**Purpose:** Applies `skeleton scale` to the current object.

### UpdateSkeletonScale
`public void UpdateSkeletonScale(int bodyDeformType)`

**Purpose:** Updates the state or data of `skeleton scale`.

### AddHorseReinsClothMesh
`public void AddHorseReinsClothMesh(MetaMesh reinMesh, MetaMesh ropeMesh)`

**Purpose:** Adds `horse reins cloth mesh` to the current collection or state.

### BatchLastLodMeshes
`public void BatchLastLodMeshes()`

**Purpose:** Handles logic related to `batch last lod meshes`.

### AddWeaponToAgentEntity
`public void AddWeaponToAgentEntity(int slotIndex, in WeaponData weaponData, WeaponStatsData weaponStatsData, in WeaponData ammoWeaponData, WeaponStatsData ammoWeaponStatsData, GameEntity cachedEntity)`

**Purpose:** Adds `weapon to agent entity` to the current collection or state.

### UpdateQuiverMeshesWithoutAgent
`public void UpdateQuiverMeshesWithoutAgent(int weaponIndex, int ammoCount)`

**Purpose:** Updates the state or data of `quiver meshes without agent`.

### SetWieldedWeaponIndices
`public void SetWieldedWeaponIndices(int slotIndexRightHand, int slotIndexLeftHand)`

**Purpose:** Sets the value or state of `wielded weapon indices`.

### ClearAllWeaponMeshes
`public void ClearAllWeaponMeshes()`

**Purpose:** Handles logic related to `clear all weapon meshes`.

### ClearWeaponMeshes
`public void ClearWeaponMeshes(EquipmentIndex index)`

**Purpose:** Handles logic related to `clear weapon meshes`.

### MakeVoice
`public void MakeVoice(int voiceId, Vec3 position)`

**Purpose:** Handles logic related to `make voice`.

### SetSetupMorphNode
`public void SetSetupMorphNode(bool value)`

**Purpose:** Sets the value or state of `setup morph node`.

### UseScaledWeapons
`public void UseScaledWeapons(bool value)`

**Purpose:** Handles logic related to `use scaled weapons`.

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool keepState)`

**Purpose:** Sets the value or state of `cloth component keep state of all meshes`.

### GetFacegenScalingMatrix
`public MatrixFrame GetFacegenScalingMatrix()`

**Purpose:** Gets the current value of `facegen scaling matrix`.

### ReplaceMeshWithMesh
`public void ReplaceMeshWithMesh(MetaMesh oldMetaMesh, MetaMesh newMetaMesh, BodyMeshTypes bodyMeshIndex)`

**Purpose:** Handles logic related to `replace mesh with mesh`.

### SetAgentActionChannel
`public void SetAgentActionChannel(int actionChannelNo, int actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)`

**Purpose:** Sets the value or state of `agent action channel`.

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)`

**Purpose:** Sets the value or state of `voice definition index`.

### StartRhubarbRecord
`public void StartRhubarbRecord(string path, int soundId)`

**Purpose:** Handles logic related to `start rhubarb record`.

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**Purpose:** Sets the value or state of `contour color`.

### SetEnableOcclusionCulling
`public void SetEnableOcclusionCulling(bool enable)`

**Purpose:** Sets the value or state of `enable occlusion culling`.

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool makeZero)`

**Purpose:** Sets the value or state of `agent lod zero or max`.

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

**Purpose:** Sets the value or state of `agent local speed`.

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

**Purpose:** Sets the value or state of `look direction`.

### GetBodyMeshIndex
`public static BodyMeshTypes GetBodyMeshIndex(EquipmentIndex equipmentIndex)`

**Purpose:** Gets the current value of `body mesh index`.

### GetBoneEntitialFrameAtAnimationProgress
`public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)`

**Purpose:** Gets the current value of `bone entitial frame at animation progress`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### ResetNextFrame
`public void ResetNextFrame()`

**Purpose:** Resets `next frame` to its initial state.

## Usage Example

```csharp
MBAgentVisuals.CreateAgentVisuals(scene, "example", eyeOffset);
```

## See Also

- [Complete Class Catalog](../catalog)