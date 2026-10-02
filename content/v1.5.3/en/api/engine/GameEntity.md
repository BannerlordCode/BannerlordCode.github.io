---
title: "GameEntity"
description: "Auto-generated class reference for GameEntity."
---
# GameEntity

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class GameEntity : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/GameEntity.cs

## Overview

Auto-generated stub for `GameEntity`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateFromWeakEntity
`public static GameEntity CreateFromWeakEntity(WeakGameEntity weakEntity)`

### GetScenePointer
`public UIntPtr GetScenePointer()`

### ToString
`public override string ToString()`

### ClearEntityComponents
`public void ClearEntityComponents(bool resetAll,bool removeScripts,bool deleteChildEntities)`

### ClearComponents
`public void ClearComponents()`

### ClearOnlyOwnComponents
`public void ClearOnlyOwnComponents()`

### CheckResources
`public bool CheckResources(bool addToQueue,bool checkFaceResources)`

### SetMobility
`public void SetMobility(GameEntity.Mobility mobility)`

### GetMobility
`public GameEntity.Mobility GetMobility()`

### AddMesh
`public void AddMesh(Mesh mesh,bool recomputeBoundingBox = true)`

### AddMultiMeshToSkeleton
`public void AddMultiMeshToSkeleton(MetaMesh metaMesh)`

### AddMultiMeshToSkeletonBone
`public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh,sbyte boneIndex)`

### SetColorToAllMeshesWithTagRecursive
`public void SetColorToAllMeshesWithTagRecursive(uint color,string tag)`

### GetAllMeshesWithTag
`public IEnumerable<Mesh> GetAllMeshesWithTag(string tag)`

### SetColor
`public void SetColor(uint color1,uint color2,string meshTag)`

### GetFactorColor
`public uint GetFactorColor()`

### SetFactorColor
`public void SetFactorColor(uint color)`

### SetAsReplayEntity
`public void SetAsReplayEntity()`

### SetClothMaxDistanceMultiplier
`public void SetClothMaxDistanceMultiplier(float multiplier)`

### RemoveMultiMeshFromSkeleton
`public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh)`

### RemoveMultiMeshFromSkeletonBone
`public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh,sbyte boneIndex)`

### RemoveComponentWithMesh
`public bool RemoveComponentWithMesh(Mesh mesh)`

### AddComponent
`public void AddComponent(GameEntityComponent component)`

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

### IsInEditorScene
`public bool IsInEditorScene()`

### RemoveComponent
`public bool RemoveComponent(GameEntityComponent component)`

### GetGuid
`public string GetGuid()`

### IsGuidValid
`public bool IsGuidValid()`

### SetEnforcedMaximumLodLevel
`public void SetEnforcedMaximumLodLevel(int lodLevel)`

### GetLodLevelForDistanceSq
`public float GetLodLevelForDistanceSq(float distSq)`

### GetQuickBoneEntitialFrame
`public void GetQuickBoneEntitialFrame(sbyte index,out MatrixFrame frame)`

### UpdateVisibilityMask
`public void UpdateVisibilityMask()`

### CreateEmpty
`public static GameEntity CreateEmpty(Scene scene,bool isModifiableFromEditor = true,bool createPhysics = true,bool callScriptCallbacks = true)`

### CreateEmptyDynamic
`public static GameEntity CreateEmptyDynamic(Scene scene,bool isModifiableFromEditor = true)`

### CreateEmptyWithoutScene
`public static GameEntity CreateEmptyWithoutScene()`

### CopyFrom
`public static GameEntity CopyFrom(Scene scene,GameEntity entity,bool createPhysics = true,bool callScriptCallbacks = true)`

### Instantiate
`public static GameEntity Instantiate(Scene scene,string prefabName,bool callScriptCallbacks,bool createPhysics = true,string scriptInclusingTag = "")`

### CallScriptCallbacks
`public void CallScriptCallbacks(bool registerScriptComponents)`

### InstantiateWithRestOffset
`public static GameEntity InstantiateWithRestOffset(Scene scene,string prefabName,bool createPhysics,MatrixFrame frame,float restOffset,bool callScriptCallbacks = true,string scriptInclusingTag = "")`

### IsGhostObject
`public bool IsGhostObject()`

### CreateAndAddScriptComponent
`public void CreateAndAddScriptComponent(string name,bool callScriptCallbacks)`

### PrefabExists
`public static bool PrefabExists(string name)`

### RemoveScriptComponent
`public void RemoveScriptComponent(UIntPtr scriptComponent,int removeReason)`

### SetEntityEnvMapVisibility
`public void SetEntityEnvMapVisibility(bool value)`

### HasScene
`public bool HasScene()`

### HasScriptComponent
`public bool HasScriptComponent(string scName)`

### GetScriptComponents
`public IEnumerable<ScriptComponentBehavior> GetScriptComponents()`

### GetFirstChildEntityWithTag
`public GameEntity GetFirstChildEntityWithTag(string tag)`

### HasScriptOfType
`public bool HasScriptOfType(Type t)`

### SetAlpha
`public void SetAlpha(float alpha)`

### SetVisibilityExcludeParents
`public void SetVisibilityExcludeParents(bool visible)`

### SetReadyToRender
`public void SetReadyToRender(bool ready)`

### GetVisibilityExcludeParents
`public bool GetVisibilityExcludeParents()`

### IsVisibleIncludeParents
`public bool IsVisibleIncludeParents()`

### GetVisibilityLevelMaskIncludingParents
`public uint GetVisibilityLevelMaskIncludingParents()`

### GetEditModeLevelVisibility
`public bool GetEditModeLevelVisibility()`

### Remove
`public void Remove(int removeReason)`

### CopyFromPrefab
`public static GameEntity CopyFromPrefab(GameEntity prefab)`

### SetUpgradeLevelMask
`public void SetUpgradeLevelMask(GameEntity.UpgradeLevelMask mask)`

### GetUpgradeLevelMask
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMask()`

### GetUpgradeLevelMaskCumulative
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMaskCumulative()`

### GetUpgradeLevelOfEntity
`public int GetUpgradeLevelOfEntity()`

### GetOldPrefabName
`public string GetOldPrefabName()`

### GetPrefabName
`public string GetPrefabName()`

### CopyScriptComponentFromAnotherEntity
`public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity,string scriptName)`

### SetFrame
`public void SetFrame(ref MatrixFrame frame,bool isTeleportation = true)`

### SetLocalFrame
`public void SetLocalFrame(ref MatrixFrame frame,bool isTeleportation)`

### SetClothComponentKeepState
`public void SetClothComponentKeepState(MetaMesh metaMesh,bool state)`

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool state)`

### SetPreviousFrameInvalid
`public void SetPreviousFrameInvalid()`

### GetFrame
`public MatrixFrame GetFrame()`

### GetLocalFrame
`public void GetLocalFrame(out MatrixFrame frame)`

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame()`

### GetGlobalFrameImpreciseForFixedTick
`public MatrixFrame GetGlobalFrameImpreciseForFixedTick()`

### ComputePreciseGlobalFrameForFixedTickSlow
`public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow()`

### SetGlobalFrame
`public void SetGlobalFrame(in MatrixFrame frame,bool isTeleportation = true)`

### GetPreviousGlobalFrame
`public MatrixFrame GetPreviousGlobalFrame()`

### GetBodyWorldTransform
`public MatrixFrame GetBodyWorldTransform()`

### GetBodyVisualWorldTransform
`public MatrixFrame GetBodyVisualWorldTransform()`

### SetLocalPosition
`public void SetLocalPosition(Vec3 position)`

### UpdateTriadFrameForEditor
`public void UpdateTriadFrameForEditor()`

### UpdateTriadFrameForEditorForAllChildren
`public void UpdateTriadFrameForEditorForAllChildren()`

### GetPhysicsMaterial
`public PhysicsMaterial GetPhysicsMaterial()`

### SetBodyFlags
`public void SetBodyFlags(BodyFlags bodyFlags)`

### SetBodyFlagsRecursive
`public void SetBodyFlagsRecursive(BodyFlags bodyFlags)`

### AddBodyFlags
`public void AddBodyFlags(BodyFlags bodyFlags,bool applyToChildren = true)`

### RemoveBodyFlags
`public void RemoveBodyFlags(BodyFlags bodyFlags,bool applyToChildren = true)`

### GetGlobalScale
`public Vec3 GetGlobalScale()`

### GetLocalScale
`public Vec3 GetLocalScale()`

### SetAnimationSoundActivation
`public void SetAnimationSoundActivation(bool activate)`

### CopyComponentsToSkeleton
`public void CopyComponentsToSkeleton()`

### AddMeshToBone
`public void AddMeshToBone(sbyte boneIndex,Mesh mesh)`

### ActivateRagdoll
`public void ActivateRagdoll()`

### PauseSkeletonAnimation
`public void PauseSkeletonAnimation()`

### ResumeSkeletonAnimation
`public void ResumeSkeletonAnimation()`

### IsSkeletonAnimationPaused
`public bool IsSkeletonAnimationPaused()`

### GetBoneCount
`public sbyte GetBoneCount()`

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position,bool useWaterRenderer,bool checkWaterBodyEntities)`

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

### AddTag
`public void AddTag(string tag)`

### RemoveTag
`public void RemoveTag(string tag)`

### HasTag
`public bool HasTag(string tag)`

### AddChild
`public void AddChild(GameEntity gameEntity,bool autoLocalizeFrame = false)`

### RemoveChild
`public void RemoveChild(GameEntity childEntity,bool keepPhysics,bool keepScenePointer,bool callScriptCallbacks,int removeReason)`

### BreakPrefab
`public void BreakPrefab()`

### GetChild
`public GameEntity GetChild(int index)`

### HasComplexAnimTree
`public bool HasComplexAnimTree()`

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh,bool updateVisMask = true)`

### RemoveMultiMesh
`public bool RemoveMultiMesh(MetaMesh metaMesh)`

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

### AddAllMeshesOfGameEntity
`public void AddAllMeshesOfGameEntity(GameEntity gameEntity)`

### SetFrameChanged
`public void SetFrameChanged()`

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(int index,GameEntity.ComponentType componentType)`

### GetMetaMesh
`public MetaMesh GetMetaMesh(int metaMeshIndex)`

### GetClothSimulator
`public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex)`

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0,float vectorArgument1,float vectorArgument2,float vectorArgument3)`

### SetMaterialForAllMeshes
`public void SetMaterialForAllMeshes(Material material)`

### AddLight
`public bool AddLight(Light light)`

### GetLight
`public Light GetLight()`

### AddParticleSystemComponent
`public void AddParticleSystemComponent(string particleid)`

### RemoveAllParticleSystems
`public void RemoveAllParticleSystems()`

### CheckPointWithOrientedBoundingBox
`public bool CheckPointWithOrientedBoundingBox(Vec3 point)`

### PauseParticleSystem
`public void PauseParticleSystem(bool doChildren)`

### ResumeParticleSystem
`public void ResumeParticleSystem(bool doChildren)`

### BurstEntityParticle
`public void BurstEntityParticle(bool doChildren)`

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier)`

### GetLocalBoundingBox
`public BoundingBox GetLocalBoundingBox()`

### GetGlobalBoundingBox
`public BoundingBox GetGlobalBoundingBox()`

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

### SetHasCustomBoundingBoxValidationSystem
`public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox)`

### ValidateBoundingBox
`public void ValidateBoundingBox()`

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

### UpdateGlobalBounds
`public void UpdateGlobalBounds()`

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

### GetBoundingBoxRadius
`public float GetBoundingBoxRadius()`

### SetBoundingboxDirty
`public void SetBoundingboxDirty()`

### ComputeGlobalPhysicsBoundingBoxMinMax
`public ValueTuple<Vec3,Vec3> ComputeGlobalPhysicsBoundingBoxMinMax()`

### SetContourColor
`public void SetContourColor(uint? color,bool alwaysVisible = true)`

### GetHasFrameChanged
`public bool GetHasFrameChanged()`

### GetFirstMesh
`public Mesh GetFirstMesh()`

### GetAttachedNavmeshFaceCount
`public int GetAttachedNavmeshFaceCount()`

### GetAttachedNavmeshFaceRecords
`public void GetAttachedNavmeshFaceRecords(PathFaceRecord[] faceRecords)`

### SetExternalReferencesUsage
`public void SetExternalReferencesUsage(bool value)`

### SetMorphFrameOfComponents
`public void SetMorphFrameOfComponents(float value)`

### AddEditDataUserToAllMeshes
`public void AddEditDataUserToAllMeshes(bool entityComponents,bool skeletonComponents)`

### ReleaseEditDataUserToAllMeshes
`public void ReleaseEditDataUserToAllMeshes(bool entityComponents,bool skeletonComponents)`

### GetCameraParamsFromCameraScript
`public void GetCameraParamsFromCameraScript(Camera cam,ref Vec3 dofParams)`

### GetMeshBendedFrame
`public void GetMeshBendedFrame(MatrixFrame worldSpacePosition,ref MatrixFrame output)`

### ComputeTrajectoryVolume
`public void ComputeTrajectoryVolume(float missileSpeed,float verticalAngleMaxInDegrees,float verticalAngleMinInDegrees,float horizontalAngleRangeInDegrees,float airFrictionConstant)`

### SetAnimTreeChannelParameterForceUpdate
`public void SetAnimTreeChannelParameterForceUpdate(float phase,int channelNo)`

### ChangeMetaMeshOrRemoveItIfNotExists
`public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh,MetaMesh newMetaMesh)`

### SetUpdateValidtyOnFrameChangedOfFacesWithId
`public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId,bool updateValidity)`

### AttachNavigationMeshFaces
`public void AttachNavigationMeshFaces(int faceGroupId,bool isConnected,bool isBlocker = false,bool autoLocalize = false,bool finalizeBlockerConvexHullComputation = false,bool updateEntityFrame = true)`

### DetachAllAttachedNavigationMeshFaces
`public void DetachAllAttachedNavigationMeshFaces()`

### UpdateAttachedNavigationMeshFaces
`public void UpdateAttachedNavigationMeshFaces()`

### RemoveSkeleton
`public void RemoveSkeleton()`

### RemoveAllChildren
`public void RemoveAllChildren()`

### GetChildren
`public IEnumerable<GameEntity> GetChildren()`

### GetEntityAndChildren
`public IEnumerable<GameEntity> GetEntityAndChildren()`

### GetChildrenRecursive
`public void GetChildrenRecursive(ref List<GameEntity> children)`

### GetChildrenWithTagRecursive
`public void GetChildrenWithTagRecursive(List<GameEntity> children,string tag)`

### IsSelectedOnEditor
`public bool IsSelectedOnEditor()`

### SelectEntityOnEditor
`public void SelectEntityOnEditor()`

### DeselectEntityOnEditor
`public void DeselectEntityOnEditor()`

### SetAsPredisplayEntity
`public void SetAsPredisplayEntity()`

### RemoveFromPredisplayEntity
`public void RemoveFromPredisplayEntity()`

### SetNativeScriptComponentVariable
`public void SetNativeScriptComponentVariable(string className,string fieldName,ref ScriptComponentFieldHolder data,RglScriptFieldType variableType)`

### SetManualGlobalBoundingBox
`public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal,Vec3 boundingBoxEndGlobal)`

### RayHitEntity
`public bool RayHitEntity(Vec3 rayOrigin,Vec3 rayDirection,float maxLength,ref float resultLength)`

### RayHitEntityWithNormal
`public bool RayHitEntityWithNormal(Vec3 rayOrigin,Vec3 rayDirection,float maxLength,ref Vec3 resultNormal,ref float resultLength)`

### GetNativeScriptComponentVariable
`public void GetNativeScriptComponentVariable(string className,string fieldName,ref ScriptComponentFieldHolder data,RglScriptFieldType variableType)`

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPosition,Vec3 clipNormal,bool setForChildren)`

### GetBoundingBoxLongestHalfDimension
`public float GetBoundingBoxLongestHalfDimension()`

### ComputeBoundingBoxFromLongestHalfDimension
`public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient)`

### ComputeBoundingBoxIncludeChildren
`public BoundingBox ComputeBoundingBoxIncludeChildren()`

### SetManualLocalBoundingBox
`public void SetManualLocalBoundingBox(in BoundingBox boundingBox)`

### RelaxLocalBoundingBox
`public void RelaxLocalBoundingBox(in BoundingBox boundingBox)`

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

### GetFirstChildEntityWithTagRecursive
`public GameEntity GetFirstChildEntityWithTagRecursive(string tag)`

### Equals
`public override bool Equals(object obj)`

### GetHashCode
`public override int GetHashCode()`

### SetDoNotCheckVisibility
`public void SetDoNotCheckVisibility(bool value)`

### SetBoneFrameToAllMeshes
`public void SetBoneFrameToAllMeshes(int boneIndex,in MatrixFrame frame)`

### GetGlobalWindStrengthVectorOfScene
`public Vec2 GetGlobalWindStrengthVectorOfScene()`

### GetGlobalWindVelocityOfScene
`public Vec2 GetGlobalWindVelocityOfScene()`

### GetLastFinalRenderCameraPositionOfScene
`public Vec3 GetLastFinalRenderCameraPositionOfScene()`

### SetForceDecalsToRender
`public void SetForceDecalsToRender(bool value)`

### SetForceNotAffectedBySeason
`public void SetForceNotAffectedBySeason(bool value)`

### CheckIsPrefabLinkRootPrefab
`public bool CheckIsPrefabLinkRootPrefab(int depth)`

### SetupAdditionalBoneBufferForMeshes
`public void SetupAdditionalBoneBufferForMeshes(int boneCount)`

### CreatePhysxCookingInstance
`public static UIntPtr CreatePhysxCookingInstance()`

### DeletePhysxCookingInstance
`public static void DeletePhysxCookingInstance(UIntPtr pointer)`

### DeleteEmptyShape
`public void DeleteEmptyShape(UIntPtr shape1,UIntPtr shape2)`

### CreateEmptyPhysxShape
`public UIntPtr CreateEmptyPhysxShape(bool isVariable,int physxMaterialIndex)`

### SwapPhysxShapeInEntity
`public void SwapPhysxShapeInEntity(UIntPtr oldShape,UIntPtr newShape,bool isVariable)`

### CookTrianglePhysxMesh
`public static void CookTrianglePhysxMesh(UIntPtr cookingInstancePointer,UIntPtr shapePointer,UIntPtr quadPinnedPointer,int physicsMaterial,int numberOfVertices,UIntPtr indicesPinnedPointer,int numberOfIndices)`

## See Also

- [Section index](../)
