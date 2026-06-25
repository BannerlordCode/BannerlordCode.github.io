---
title: "MBAgentVisuals"
description: "Auto-generated class reference for MBAgentVisuals."
---
# MBAgentVisuals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MBAgentVisuals : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.MountAndBlade/MBAgentVisuals.cs`

## Overview

`MBAgentVisuals` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAgentVisuals
`public static MBAgentVisuals CreateAgentVisuals(Scene scene, string ownerName, Vec3 eyeOffset)`

**Purpose:** Constructs a new agent visuals entity and returns it to the caller.

```csharp
// Static call; no instance required
MBAgentVisuals.CreateAgentVisuals(scene, "example", eyeOffset);
```

### Tick
`public void Tick(MBAgentVisuals parentAgentVisuals, float dt, bool entityMoving, float speed)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.Tick(parentAgentVisuals, 0, false, 0);
```

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

**Purpose:** Reads and returns the global frame value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetGlobalFrame();
```

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Reads and returns the frame value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetFrame();
```

### GetEntity
`public GameEntity GetEntity()`

**Purpose:** Reads and returns the entity value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetEntity();
```

### IsValid
`public bool IsValid()`

**Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.IsValid();
```

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

**Purpose:** Reads and returns the global stable eye point value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetGlobalStableEyePoint(false);
```

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

**Purpose:** Reads and returns the global stable neck point value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetGlobalStableNeckPoint(false);
```

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte bone, bool useBoneMapping)`

**Purpose:** Reads and returns the bone entitial frame value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetBoneEntitialFrame(0, false);
```

### SetAttachedPositionForMeshAfterAnimationPostIntegrate
`public void SetAttachedPositionForMeshAfterAnimationPostIntegrate(WeakGameEntity ropeEntity, sbyte bone)`

**Purpose:** Assigns a new value to attached position for mesh after animation post integrate and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetAttachedPositionForMeshAfterAnimationPostIntegrate(ropeEntity, 0);
```

### GetCurrentHeadLookDirection
`public Vec3 GetCurrentHeadLookDirection()`

**Purpose:** Reads and returns the current head look direction value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetCurrentHeadLookDirection();
```

### GetMovementMode
`public HumanWalkingMovementMode GetMovementMode()`

**Purpose:** Reads and returns the movement mode value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetMovementMode();
```

### GetVisualStrengthOfAgentVisual
`public float GetVisualStrengthOfAgentVisual(MBAgentVisuals targetAgentVisual, Mission mission, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)`

**Purpose:** Reads and returns the visual strength of agent visual value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetVisualStrengthOfAgentVisual(targetAgentVisual, mission, 0, 0, 0);
```

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**Purpose:** Reads and returns the current ragdoll state value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetCurrentRagdollState();
```

### GetRealBoneIndex
`public sbyte GetRealBoneIndex(HumanBone boneType)`

**Purpose:** Reads and returns the real bone index value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetRealBoneIndex(boneType);
```

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)`

**Purpose:** Adds prefab to agent visual bone by bone type to the current collection or state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.AddPrefabToAgentVisualBoneByBoneType("example", boneType);
```

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)`

**Purpose:** Adds prefab to agent visual bone by real bone index to the current collection or state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.AddPrefabToAgentVisualBoneByRealBoneIndex("example", 0);
```

### GetAttachedWeaponEntity
`public GameEntity GetAttachedWeaponEntity(int attachedWeaponIndex)`

**Purpose:** Reads and returns the attached weapon entity value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetAttachedWeaponEntity(0);
```

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**Purpose:** Assigns a new value to frame and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetFrame(frame);
```

### SetEntity
`public void SetEntity(GameEntity value)`

**Purpose:** Assigns a new value to entity and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetEntity(value);
```

### FillEntityWithBodyMeshesWithoutAgentVisuals
`public static void FillEntityWithBodyMeshesWithoutAgentVisuals(GameEntity entity, SkinGenerationParams skinParams, BodyProperties bodyProperties, MetaMesh glovesMesh)`

**Purpose:** Executes the FillEntityWithBodyMeshesWithoutAgentVisuals logic.

```csharp
// Static call; no instance required
MBAgentVisuals.FillEntityWithBodyMeshesWithoutAgentVisuals(entity, skinParams, bodyProperties, glovesMesh);
```

### GetBoneTypeData
`public BoneBodyTypeData GetBoneTypeData(sbyte boneIndex)`

**Purpose:** Reads and returns the bone type data value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetBoneTypeData(0);
```

### GetSkeleton
`public Skeleton GetSkeleton()`

**Purpose:** Reads and returns the skeleton value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetSkeleton();
```

### SetSkeleton
`public void SetSkeleton(Skeleton newSkeleton)`

**Purpose:** Assigns a new value to skeleton and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetSkeleton(newSkeleton);
```

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(string particleName, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)`

**Purpose:** Constructs a new particle system attached to bone entity and returns it to the caller.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.CreateParticleSystemAttachedToBone("example", 0, boneLocalParticleFrame);
```

### CreateParticleSystemAttachedToBone
`public void CreateParticleSystemAttachedToBone(int runtimeParticleindex, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)`

**Purpose:** Constructs a new particle system attached to bone entity and returns it to the caller.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.CreateParticleSystemAttachedToBone(0, 0, boneLocalParticleFrame);
```

### SetVisible
`public void SetVisible(bool value)`

**Purpose:** Assigns a new value to visible and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetVisible(false);
```

### GetVisible
`public bool GetVisible()`

**Purpose:** Reads and returns the visible value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetVisible();
```

### AddChildEntity
`public void AddChildEntity(GameEntity entity)`

**Purpose:** Adds child entity to the current collection or state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddChildEntity(entity);
```

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 windVector, bool isLocal, EquipmentIndex weaponIndex)`

**Purpose:** Assigns a new value to cloth wind to weapon at index and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetClothWindToWeaponAtIndex(windVector, false, weaponIndex);
```

### RemoveChildEntity
`public void RemoveChildEntity(GameEntity entity, int removeReason)`

**Purpose:** Removes child entity from the current collection or state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.RemoveChildEntity(entity, 0);
```

### CheckResources
`public bool CheckResources(bool addToQueue)`

**Purpose:** Verifies whether resources holds true for the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.CheckResources(false);
```

### AddSkinMeshes
`public void AddSkinMeshes(SkinGenerationParams skinParams, BodyProperties bodyProperties, bool useGPUMorph, bool useFaceCache)`

**Purpose:** Adds skin meshes to the current collection or state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddSkinMeshes(skinParams, bodyProperties, false, false);
```

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**Purpose:** Assigns a new value to face generation params and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetFaceGenerationParams(faceGenerationParams);
```

### SetLodAtlasShadingIndex
`public void SetLodAtlasShadingIndex(int index, bool useTeamColor, uint teamColor1, uint teamColor2)`

**Purpose:** Assigns a new value to lod atlas shading index and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetLodAtlasShadingIndex(0, false, 0, 0);
```

### ClearVisualComponents
`public void ClearVisualComponents(bool removeSkeleton)`

**Purpose:** Removes all visual components from the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ClearVisualComponents(false);
```

### LazyUpdateAgentRendererData
`public void LazyUpdateAgentRendererData()`

**Purpose:** Executes the LazyUpdateAgentRendererData logic.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.LazyUpdateAgentRendererData();
```

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh, BodyMeshTypes bodyMeshIndex)`

**Purpose:** Adds multi mesh to the current collection or state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddMultiMesh(metaMesh, bodyMeshIndex);
```

### ApplySkeletonScale
`public void ApplySkeletonScale(Vec3 mountSitBoneScale, float mountRadiusAdder, sbyte boneIndices, Vec3 boneScales)`

**Purpose:** Applies the effect of skeleton scale to the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ApplySkeletonScale(mountSitBoneScale, 0, 0, boneScales);
```

### UpdateSkeletonScale
`public void UpdateSkeletonScale(int bodyDeformType)`

**Purpose:** Recalculates and stores the latest representation of skeleton scale.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.UpdateSkeletonScale(0);
```

### AddHorseReinsClothMesh
`public void AddHorseReinsClothMesh(MetaMesh reinMesh, MetaMesh ropeMesh)`

**Purpose:** Adds horse reins cloth mesh to the current collection or state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddHorseReinsClothMesh(reinMesh, ropeMesh);
```

### BatchLastLodMeshes
`public void BatchLastLodMeshes()`

**Purpose:** Executes the BatchLastLodMeshes logic.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.BatchLastLodMeshes();
```

### AddWeaponToAgentEntity
`public void AddWeaponToAgentEntity(int slotIndex, in WeaponData weaponData, WeaponStatsData weaponStatsData, in WeaponData ammoWeaponData, WeaponStatsData ammoWeaponStatsData, GameEntity cachedEntity)`

**Purpose:** Adds weapon to agent entity to the current collection or state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.AddWeaponToAgentEntity(0, weaponData, weaponStatsData, ammoWeaponData, ammoWeaponStatsData, cachedEntity);
```

### UpdateQuiverMeshesWithoutAgent
`public void UpdateQuiverMeshesWithoutAgent(int weaponIndex, int ammoCount)`

**Purpose:** Recalculates and stores the latest representation of quiver meshes without agent.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.UpdateQuiverMeshesWithoutAgent(0, 0);
```

### SetWieldedWeaponIndices
`public void SetWieldedWeaponIndices(int slotIndexRightHand, int slotIndexLeftHand)`

**Purpose:** Assigns a new value to wielded weapon indices and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetWieldedWeaponIndices(0, 0);
```

### ClearAllWeaponMeshes
`public void ClearAllWeaponMeshes()`

**Purpose:** Removes all all weapon meshes from the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ClearAllWeaponMeshes();
```

### ClearWeaponMeshes
`public void ClearWeaponMeshes(EquipmentIndex index)`

**Purpose:** Removes all weapon meshes from the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ClearWeaponMeshes(index);
```

### MakeVoice
`public void MakeVoice(int voiceId, Vec3 position)`

**Purpose:** Executes the MakeVoice logic.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.MakeVoice(0, position);
```

### SetSetupMorphNode
`public void SetSetupMorphNode(bool value)`

**Purpose:** Assigns a new value to setup morph node and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetSetupMorphNode(false);
```

### UseScaledWeapons
`public void UseScaledWeapons(bool value)`

**Purpose:** Executes the UseScaledWeapons logic.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.UseScaledWeapons(false);
```

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool keepState)`

**Purpose:** Assigns a new value to cloth component keep state of all meshes and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetClothComponentKeepStateOfAllMeshes(false);
```

### GetFacegenScalingMatrix
`public MatrixFrame GetFacegenScalingMatrix()`

**Purpose:** Reads and returns the facegen scaling matrix value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetFacegenScalingMatrix();
```

### ReplaceMeshWithMesh
`public void ReplaceMeshWithMesh(MetaMesh oldMetaMesh, MetaMesh newMetaMesh, BodyMeshTypes bodyMeshIndex)`

**Purpose:** Executes the ReplaceMeshWithMesh logic.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ReplaceMeshWithMesh(oldMetaMesh, newMetaMesh, bodyMeshIndex);
```

### SetAgentActionChannel
`public void SetAgentActionChannel(int actionChannelNo, int actionIndex, float channelParameter = 0f, float blendPeriodOverride = -0.2f, bool forceFaceMorphRestart = true, float blendWithNextActionFactor = 0f)`

**Purpose:** Assigns a new value to agent action channel and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetAgentActionChannel(0, 0, 0, 0, false, 0);
```

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)`

**Purpose:** Assigns a new value to voice definition index and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetVoiceDefinitionIndex(0, 0);
```

### StartRhubarbRecord
`public void StartRhubarbRecord(string path, int soundId)`

**Purpose:** Starts the rhubarb record flow or state machine.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.StartRhubarbRecord("example", 0);
```

### SetContourColor
`public void SetContourColor(uint? color, bool alwaysVisible = true)`

**Purpose:** Assigns a new value to contour color and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetContourColor(0, false);
```

### SetEnableOcclusionCulling
`public void SetEnableOcclusionCulling(bool enable)`

**Purpose:** Assigns a new value to enable occlusion culling and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetEnableOcclusionCulling(false);
```

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool makeZero)`

**Purpose:** Assigns a new value to agent lod zero or max and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetAgentLodZeroOrMax(false);
```

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

**Purpose:** Assigns a new value to agent local speed and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetAgentLocalSpeed(speed);
```

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

**Purpose:** Assigns a new value to look direction and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.SetLookDirection(direction);
```

### GetBodyMeshIndex
`public static BodyMeshTypes GetBodyMeshIndex(EquipmentIndex equipmentIndex)`

**Purpose:** Reads and returns the body mesh index value held by the this instance.

```csharp
// Static call; no instance required
MBAgentVisuals.GetBodyMeshIndex(equipmentIndex);
```

### GetBoneEntitialFrameAtAnimationProgress
`public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)`

**Purpose:** Reads and returns the bone entitial frame at animation progress value held by the this instance.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
var result = mBAgentVisuals.GetBoneEntitialFrameAtAnimationProgress(0, 0, 0);
```

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.Reset();
```

### ResetNextFrame
`public void ResetNextFrame()`

**Purpose:** Returns next frame to its default or initial condition.

```csharp
// Obtain an instance of MBAgentVisuals from the subsystem API first
MBAgentVisuals mBAgentVisuals = ...;
mBAgentVisuals.ResetNextFrame();
```

## Usage Example

```csharp
MBAgentVisuals.CreateAgentVisuals(scene, "example", eyeOffset);
```

## See Also

- [Area Index](../)