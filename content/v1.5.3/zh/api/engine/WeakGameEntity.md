---
title: "WeakGameEntity"
description: "WeakGameEntity 的自动生成类参考。"
---
# WeakGameEntity

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WeakGameEntity `
**Base:** System.Object
**Source:** TaleWorlds.Engine/WeakGameEntity.cs

## 概述

`WeakGameEntity` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/WeakGameEntity.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Invalidate
`public void Invalidate() `

### GetScenePointer
`public UIntPtr GetScenePointer() `

### ToString
`public override string ToString() `

### ClearEntityComponents
`public void ClearEntityComponents(bool resetAll,bool removeScripts,bool deleteChildEntities) `

### ClearComponents
`public void ClearComponents() `

### ClearOnlyOwnComponents
`public void ClearOnlyOwnComponents() `

### CheckResources
`public bool CheckResources(bool addToQueue,bool checkFaceResources) `

### SetMobility
`public void SetMobility(GameEntity.Mobility mobility) `

### GetMobility
`public GameEntity.Mobility GetMobility() `

### AddMesh
`public void AddMesh(Mesh mesh,bool recomputeBoundingBox = true) `

### AddMultiMeshToSkeleton
`public void AddMultiMeshToSkeleton(MetaMesh metaMesh) `

### AddMultiMeshToSkeletonBone
`public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh,sbyte boneIndex) `

### SetColorToAllMeshesWithTagRecursive
`public void SetColorToAllMeshesWithTagRecursive(uint color,string tag) `

### GetAllMeshesWithTag
`public IEnumerable<Mesh> GetAllMeshesWithTag(string tag) `

### SetName
`public void SetName(string name) `

### SetEntityFlags
`public void SetEntityFlags(EntityFlags flags) `

### SetEntityVisibilityFlags
`public void SetEntityVisibilityFlags(EntityVisibilityFlags flags) `

### GetPhysicsMaterial
`public PhysicsMaterial GetPhysicsMaterial() `

### SetBodyFlags
`public void SetBodyFlags(BodyFlags flags) `

### SetBodyFlagsRecursive
`public void SetBodyFlagsRecursive(BodyFlags bodyFlags) `

### AddBodyFlags
`public void AddBodyFlags(BodyFlags bodyFlags,bool applyToChildren = true) `

### RemoveBodyFlags
`public void RemoveBodyFlags(BodyFlags bodyFlags,bool applyToChildren = true) `

### SetLocalPosition
`public void SetLocalPosition(Vec3 position) `

### SetGlobalPosition
`public void SetGlobalPosition(Vec3 position) `

### SetColor
`public void SetColor(uint color1,uint color2,string meshTag) `

### GetFactorColor
`public uint GetFactorColor() `

### SetFactorColor
`public void SetFactorColor(uint color) `

### SetAsReplayEntity
`public void SetAsReplayEntity() `

### SetClothMaxDistanceMultiplier
`public void SetClothMaxDistanceMultiplier(float multiplier) `

### RemoveMultiMeshFromSkeleton
`public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh) `

### RemoveMultiMeshFromSkeletonBone
`public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh,sbyte boneIndex) `

### RemoveComponentWithMesh
`public bool RemoveComponentWithMesh(Mesh mesh) `

### AddComponent
`public void AddComponent(GameEntityComponent component) `

### HasComponent
`public bool HasComponent(GameEntityComponent component) `

### IsInEditorScene
`public bool IsInEditorScene() `

### RemoveComponent
`public bool RemoveComponent(GameEntityComponent component) `

### GetGuid
`public string GetGuid() `

### IsGuidValid
`public bool IsGuidValid() `

### SetEnforcedMaximumLodLevel
`public void SetEnforcedMaximumLodLevel(int lodLevel) `

### GetLodLevelForDistanceSq
`public float GetLodLevelForDistanceSq(float distSq) `

### GetQuickBoneEntitialFrame
`public void GetQuickBoneEntitialFrame(sbyte index,out MatrixFrame frame) `

### UpdateVisibilityMask
`public void UpdateVisibilityMask() `

### CallScriptCallbacks
`public void CallScriptCallbacks(bool registerScriptComponents) `

### GetScriptCount
`public int GetScriptCount() `

### IsGhostObject
`public bool IsGhostObject() `

### CreateAndAddScriptComponent
`public void CreateAndAddScriptComponent(string name,bool callScriptCallbacks) `

### RemoveScriptComponent
`public void RemoveScriptComponent(UIntPtr scriptComponent,int removeReason) `

### SetEntityEnvMapVisibility
`public void SetEntityEnvMapVisibility(bool value) `

### GetScriptAtIndex
`public ScriptComponentBehavior GetScriptAtIndex(int index) `

### HasScene
`public bool HasScene() `

### HasScriptComponent
`public bool HasScriptComponent(string scName) `
`public bool HasScriptComponent(uint scNameHash) `

### GetScriptComponents
`public IEnumerable<ScriptComponentBehavior> GetScriptComponents() `

### GetFirstScriptWithNameHash
`public ScriptComponentBehavior GetFirstScriptWithNameHash(uint nameHash) `

### GetFirstChildEntityWithTag
`public WeakGameEntity GetFirstChildEntityWithTag(string tag) `

### SetAlpha
`public void SetAlpha(float alpha) `

### SetVisibilityExcludeParents
`public void SetVisibilityExcludeParents(bool visible) `

### SetReadyToRender
`public void SetReadyToRender(bool ready) `

### GetVisibilityExcludeParents
`public bool GetVisibilityExcludeParents() `

### IsVisibleIncludeParents
`public bool IsVisibleIncludeParents() `

### GetVisibilityLevelMaskIncludingParents
`public uint GetVisibilityLevelMaskIncludingParents() `

### GetEditModeLevelVisibility
`public bool GetEditModeLevelVisibility() `

### Remove
`public void Remove(int removeReason) `

### SetUpgradeLevelMask
`public void SetUpgradeLevelMask(GameEntity.UpgradeLevelMask mask) `

### GetUpgradeLevelMask
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMask() `

### GetUpgradeLevelMaskCumulative
`public GameEntity.UpgradeLevelMask GetUpgradeLevelMaskCumulative() `

### GetUpgradeLevelOfEntity
`public int GetUpgradeLevelOfEntity() `

### GetOldPrefabName
`public string GetOldPrefabName() `

### GetPrefabName
`public string GetPrefabName() `

### RefreshMeshesToRenderToHullWater
`public void RefreshMeshesToRenderToHullWater(UIntPtr visualRecord,string entityTag) `

### DeRegisterWaterMeshMaterials
`public void DeRegisterWaterMeshMaterials(UIntPtr visualRecord) `

### SetVisualRecordWakeParams
`public void SetVisualRecordWakeParams(UIntPtr visualRecord,Vec3 wakeParams) `

### ChangeResolutionMultiplierOfWaterVisual
`public void ChangeResolutionMultiplierOfWaterVisual(UIntPtr visualRecord,float multiplier,in Vec3 waterEffectsBB) `

### ResetHullWater
`public void ResetHullWater(UIntPtr visualRecord) `

### SetWaterVisualRecordFrameAndDt
`public void SetWaterVisualRecordFrameAndDt(UIntPtr visualRecord,MatrixFrame frame,float dt) `

### AddSplashPositionToWaterVisualRecord
`public void AddSplashPositionToWaterVisualRecord(UIntPtr visualRecord,Vec3 position) `

### UpdateHullWaterEffectFrames
`public void UpdateHullWaterEffectFrames(UIntPtr visualRecord) `

### CopyScriptComponentFromAnotherEntity
`public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity,string scriptName) `

### SetFrame
`public void SetFrame(ref MatrixFrame frame,bool isTeleportation = true) `

### SetLocalFrame
`public void SetLocalFrame(ref MatrixFrame frame,bool isTeleportation) `

### SetClothComponentKeepState
`public void SetClothComponentKeepState(MetaMesh metaMesh,bool state) `

### SetClothComponentKeepStateOfAllMeshes
`public void SetClothComponentKeepStateOfAllMeshes(bool state) `

### SetPreviousFrameInvalid
`public void SetPreviousFrameInvalid() `

### GetFrame
`public MatrixFrame GetFrame() `

### GetLocalFrame
`public void GetLocalFrame(out MatrixFrame frame) `
`public MatrixFrame GetLocalFrame() `

### HasBatchedKinematicPhysicsFlag
`public bool HasBatchedKinematicPhysicsFlag() `

### HasBatchedRayCastPhysicsFlag
`public bool HasBatchedRayCastPhysicsFlag() `

### GetGlobalFrame
`public MatrixFrame GetGlobalFrame() `

### SetWaterSDFClipData
`public void SetWaterSDFClipData(int slotIndex,in MatrixFrame frame,bool visibility) `

### RegisterWaterSDFClip
`public int RegisterWaterSDFClip(Texture sdfTexture) `

### DeRegisterWaterSDFClip
`public void DeRegisterWaterSDFClip(int slot) `

### GetGlobalFrameImpreciseForFixedTick
`public MatrixFrame GetGlobalFrameImpreciseForFixedTick() `

### ComputePreciseGlobalFrameForFixedTickSlow
`public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow() `

### SetGlobalFrame
`public void SetGlobalFrame(in MatrixFrame frame,bool isTeleportation = true) `

### GetPreviousGlobalFrame
`public MatrixFrame GetPreviousGlobalFrame() `

### GetBodyWorldTransform
`public MatrixFrame GetBodyWorldTransform() `

### GetBodyVisualWorldTransform
`public MatrixFrame GetBodyVisualWorldTransform() `

### UpdateTriadFrameForEditor
`public void UpdateTriadFrameForEditor() `

### UpdateTriadFrameForEditorForAllChildren
`public void UpdateTriadFrameForEditorForAllChildren() `

### GetGlobalScale
`public Vec3 GetGlobalScale() `

### GetLocalScale
`public Vec3 GetLocalScale() `

### SetAnimationSoundActivation
`public void SetAnimationSoundActivation(bool activate) `

### CopyComponentsToSkeleton
`public void CopyComponentsToSkeleton() `

### AddMeshToBone
`public void AddMeshToBone(sbyte boneIndex,Mesh mesh) `

### ActivateRagdoll
`public void ActivateRagdoll() `

### PauseSkeletonAnimation
`public void PauseSkeletonAnimation() `

### ResumeSkeletonAnimation
`public void ResumeSkeletonAnimation() `

### IsSkeletonAnimationPaused
`public bool IsSkeletonAnimationPaused() `

### GetBoneCount
`public sbyte GetBoneCount() `

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position,bool useWaterRenderer,bool checkWaterBodyEntities) `

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex) `

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName) `

### AddTag
`public void AddTag(string tag) `

### RemoveTag
`public void RemoveTag(string tag) `

### HasTag
`public bool HasTag(string tag) `

### AddChild
`public void AddChild(WeakGameEntity gameEntity,bool autoLocalizeFrame = false) `

### RemoveChild
`public void RemoveChild(WeakGameEntity childEntity,bool keepPhysics,bool keepScenePointer,bool callScriptCallbacks,int removeReason) `

### BreakPrefab
`public void BreakPrefab() `

### GetChild
`public WeakGameEntity GetChild(int index) `

### HasComplexAnimTree
`public bool HasComplexAnimTree() `

### AddMultiMesh
`public void AddMultiMesh(MetaMesh metaMesh,bool updateVisMask = true) `

### RemoveMultiMesh
`public bool RemoveMultiMesh(MetaMesh metaMesh) `

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType) `

### AddAllMeshesOfGameEntity
`public void AddAllMeshesOfGameEntity(GameEntity gameEntity) `

### SetFrameChanged
`public void SetFrameChanged() `

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(int index,GameEntity.ComponentType componentType) `

### GetMetaMesh
`public MetaMesh GetMetaMesh(int metaMeshIndex) `

### GetClothSimulator
`public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex) `

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0,float vectorArgument1,float vectorArgument2,float vectorArgument3) `

### SetMaterialForAllMeshes
`public void SetMaterialForAllMeshes(Material material) `

### AddLight
`public bool AddLight(Light light) `

### GetLight
`public Light GetLight() `

### AddParticleSystemComponent
`public void AddParticleSystemComponent(string particleid) `

### RemoveAllParticleSystems
`public void RemoveAllParticleSystems() `

### CheckPointWithOrientedBoundingBox
`public bool CheckPointWithOrientedBoundingBox(Vec3 point) `

### PauseParticleSystem
`public void PauseParticleSystem(bool doChildren) `

### ResumeParticleSystem
`public void ResumeParticleSystem(bool doChildren) `

### BurstEntityParticle
`public void BurstEntityParticle(bool doChildren) `

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier) `

### GetLocalBoundingBox
`public BoundingBox GetLocalBoundingBox() `

### GetGlobalBoundingBox
`public BoundingBox GetGlobalBoundingBox() `

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin() `

### SetHasCustomBoundingBoxValidationSystem
`public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox) `

### ValidateBoundingBox
`public void ValidateBoundingBox() `

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax() `

### UpdateGlobalBounds
`public void UpdateGlobalBounds() `

### RecomputeBoundingBox
`public void RecomputeBoundingBox() `

### GetBoundingBoxRadius
`public float GetBoundingBoxRadius() `

### SetBoundingboxDirty
`public void SetBoundingboxDirty() `

### ComputeGlobalPhysicsBoundingBoxMinMax
`public ValueTuple<Vec3,Vec3> ComputeGlobalPhysicsBoundingBoxMinMax() `

### ComputeGlobalPhysicsBoundingBoxCenter
`public Vec3 ComputeGlobalPhysicsBoundingBoxCenter() `

### SetContourColor
`public void SetContourColor(uint? color,bool alwaysVisible = true) `

### GetHasFrameChanged
`public bool GetHasFrameChanged() `

### GetFirstMesh
`public Mesh GetFirstMesh() `

### GetAttachedNavmeshFaceCount
`public int GetAttachedNavmeshFaceCount() `

### GetAttachedNavmeshFaceRecords
`public void GetAttachedNavmeshFaceRecords(PathFaceRecord[] faceRecords) `

### GetAttachedNavmeshFaceVertexIndices
`public void GetAttachedNavmeshFaceVertexIndices(in PathFaceRecord faceRecord,int[] indices) `

### SetCustomVertexPositionEnabled
`public void SetCustomVertexPositionEnabled(bool customVertexPositionEnabled) `

### SetPositionsForAttachedNavmeshVertices
`public void SetPositionsForAttachedNavmeshVertices(int[] vertices,int indexCount,Vec3[] positions) `

### SetCostAdderForAttachedFaces
`public void SetCostAdderForAttachedFaces(float costs) `

### SetExternalReferencesUsage
`public void SetExternalReferencesUsage(bool value) `

### SetMorphFrameOfComponents
`public void SetMorphFrameOfComponents(float value) `

### AddEditDataUserToAllMeshes
`public void AddEditDataUserToAllMeshes(bool entityComponents,bool skeletonComponents) `

### ReleaseEditDataUserToAllMeshes
`public void ReleaseEditDataUserToAllMeshes(bool entityComponents,bool skeletonComponents) `

### GetCameraParamsFromCameraScript
`public void GetCameraParamsFromCameraScript(Camera cam,ref Vec3 dofParams) `

### GetMeshBendedFrame
`public void GetMeshBendedFrame(MatrixFrame worldSpacePosition,ref MatrixFrame output) `

### ComputeTrajectoryVolume
`public void ComputeTrajectoryVolume(float missileSpeed,float verticalAngleMaxInDegrees,float verticalAngleMinInDegrees,float horizontalAngleRangeInDegrees,float airFrictionConstant) `

### SetAnimTreeChannelParameterForceUpdate
`public void SetAnimTreeChannelParameterForceUpdate(float phase,int channelNo) `

### ChangeMetaMeshOrRemoveItIfNotExists
`public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh,MetaMesh newMetaMesh) `

### SetUpdateValidtyOnFrameChangedOfFacesWithId
`public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId,bool updateValidity) `

### AttachNavigationMeshFaces
`public void AttachNavigationMeshFaces(int faceGroupId,bool isConnected,bool isBlocker = false,bool autoLocalize = false,bool finalizeBlockerConvexHullComputation = false,bool updateEntityFrame = true) `

### DetachAllAttachedNavigationMeshFaces
`public void DetachAllAttachedNavigationMeshFaces() `

### UpdateAttachedNavigationMeshFaces
`public void UpdateAttachedNavigationMeshFaces() `

### RemoveSkeleton
`public void RemoveSkeleton() `

### RemoveAllChildren
`public void RemoveAllChildren() `

### GetChildren
`public IEnumerable<WeakGameEntity> GetChildren() `

### GetEntityAndChildren
`public IEnumerable<WeakGameEntity> GetEntityAndChildren() `

### GetChildrenRecursive
`public void GetChildrenRecursive(ref List<WeakGameEntity> children) `

### GetChildrenWithTagRecursive
`public void GetChildrenWithTagRecursive(List<WeakGameEntity> children,string tag) `

### IsSelectedOnEditor
`public bool IsSelectedOnEditor() `

### SelectEntityOnEditor
`public void SelectEntityOnEditor() `

### DeselectEntityOnEditor
`public void DeselectEntityOnEditor() `

### SetAsPredisplayEntity
`public void SetAsPredisplayEntity() `

### RemoveFromPredisplayEntity
`public void RemoveFromPredisplayEntity() `

### SetNativeScriptComponentVariable
`public void SetNativeScriptComponentVariable(string className,string fieldName,ref ScriptComponentFieldHolder data,RglScriptFieldType variableType) `

### SetManualGlobalBoundingBox
`public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal,Vec3 boundingBoxEndGlobal) `

### RayHitEntityWithNormal
`public bool RayHitEntityWithNormal(Vec3 rayOrigin,Vec3 rayDirection,float maxLength,ref Vec3 resultNormal,ref float resultLength) `

### RayHitEntity
`public bool RayHitEntity(Vec3 rayOrigin,Vec3 rayDirection,float maxLength,ref float resultLength) `

### GetNativeScriptComponentVariable
`public void GetNativeScriptComponentVariable(string className,string fieldName,ref ScriptComponentFieldHolder data,RglScriptFieldType variableType) `

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPosition,Vec3 clipNormal,bool setForChildren) `

### GetBoundingBoxLongestHalfDimension
`public float GetBoundingBoxLongestHalfDimension() `

### ComputeBoundingBoxFromLongestHalfDimension
`public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient) `

### ComputeBoundingBoxIncludeChildren
`public BoundingBox ComputeBoundingBoxIncludeChildren() `

### SetManualLocalBoundingBox
`public void SetManualLocalBoundingBox(in BoundingBox boundingBox) `

### RelaxLocalBoundingBox
`public void RelaxLocalBoundingBox(in BoundingBox boundingBox) `

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode) `

### GetFirstChildEntityWithTagRecursive
`public WeakGameEntity GetFirstChildEntityWithTagRecursive(string tag) `

### Equals
`public override bool Equals(object obj) `

### GetHashCode
`public override int GetHashCode() `

### CollectChildrenEntitiesWithTag
`public List<WeakGameEntity> CollectChildrenEntitiesWithTag(string tag) `

### CollectChildrenEntitiesWithTagAsEnumarable
`public IEnumerable<WeakGameEntity> CollectChildrenEntitiesWithTagAsEnumarable(string tag) `

### SetDoNotCheckVisibility
`public void SetDoNotCheckVisibility(bool value) `

### SetBoneFrameToAllMeshes
`public void SetBoneFrameToAllMeshes(int boneIndex,in MatrixFrame frame) `

### GetGlobalWindStrengthVectorOfScene
`public Vec2 GetGlobalWindStrengthVectorOfScene() `

### GetGlobalWindVelocityOfScene
`public Vec2 GetGlobalWindVelocityOfScene() `

### GetLastFinalRenderCameraPositionOfScene
`public Vec3 GetLastFinalRenderCameraPositionOfScene() `

### GetGlobalWindVelocityWithGustNoiseOfScene
`public Vec2 GetGlobalWindVelocityWithGustNoiseOfScene(float globalTime) `

### SetForceDecalsToRender
`public void SetForceDecalsToRender(bool value) `

### CreateEmptyPhysxShape
`public UIntPtr CreateEmptyPhysxShape(bool isVariable,int physxMaterialIndex) `

### SetForceNotAffectedBySeason
`public void SetForceNotAffectedBySeason(bool value) `

### CheckIsPrefabLinkRootPrefab
`public bool CheckIsPrefabLinkRootPrefab(int depth) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
