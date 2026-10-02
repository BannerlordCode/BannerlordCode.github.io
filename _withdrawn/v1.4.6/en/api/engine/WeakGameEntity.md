---
title: "WeakGameEntity"
description: "WeakGameEntity: a public struct in TaleWorlds.Engine; 244 exposed members (223 methods, 20 properties, 1 fields). Canonical bucket engine. Source: TaleWorlds.Engine/WeakGameEntity.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeakGameEntity

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WeakGameEntity`
**File:** `TaleWorlds.Engine/WeakGameEntity.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

WeakGameEntity lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/WeakGameEntity.cs. It is a public struct; the inheritance chain is WeakGameEntity. It exposes 244 public/protected members: 223 methods, 20 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeakGameEntity lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain WeakGameEntity. The surface is method-led (methods 223/244, properties 20/244), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/WeakGameEntity.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Pointer` | `public UIntPtr Pointer` | property |
| `IsValid` | `public bool IsValid` | property |
| `Name` | `public string Name` | property |
| `Scene` | `public Scene Scene` | property |
| `EntityFlags` | `public EntityFlags EntityFlags` | property |
| `EntityVisibilityFlags` | `public EntityVisibilityFlags EntityVisibilityFlags` | property |
| `BodyFlag` | `public BodyFlags BodyFlag` | property |
| `PhysicsDescBodyFlag` | `public BodyFlags PhysicsDescBodyFlag` | property |
| `Mass` | `public float Mass` | property |
| `CenterOfMass` | `public Vec3 CenterOfMass` | property |
| `Invalidate` | `public void Invalidate()` | method |
| `GetScenePointer` | `public UIntPtr GetScenePointer()` | method |
| `ToString` | `public override string ToString()` | method |
| `ClearEntityComponents` | `public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)` | method |
| `ClearComponents` | `public void ClearComponents()` | method |
| `ClearOnlyOwnComponents` | `public void ClearOnlyOwnComponents()` | method |
| `CheckResources` | `public bool CheckResources(bool addToQueue, bool checkFaceResources)` | method |
| `SetMobility` | `public void SetMobility(GameEntity.Mobility mobility)` | method |
| `GetMobility` | `public GameEntity.Mobility GetMobility()` | method |
| `AddMesh` | `public void AddMesh(Mesh mesh, bool recomputeBoundingBox = true)` | method |
| `AddMultiMeshToSkeleton` | `public void AddMultiMeshToSkeleton(MetaMesh metaMesh)` | method |
| `AddMultiMeshToSkeletonBone` | `public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)` | method |
| `SetColorToAllMeshesWithTagRecursive` | `public void SetColorToAllMeshesWithTagRecursive(uint color, string tag)` | method |
| `IEnumerable` | `public IEnumerable<Mesh>GetAllMeshesWithTag(string tag)` | method |
| `SetName` | `public void SetName(string name)` | method |
| `SetEntityFlags` | `public void SetEntityFlags(EntityFlags flags)` | method |
| `SetEntityVisibilityFlags` | `public void SetEntityVisibilityFlags(EntityVisibilityFlags flags)` | method |
| `GetPhysicsMaterial` | `public PhysicsMaterial GetPhysicsMaterial()` | method |
| `SetBodyFlags` | `public void SetBodyFlags(BodyFlags flags)` | method |
| `SetBodyFlagsRecursive` | `public void SetBodyFlagsRecursive(BodyFlags bodyFlags)` | method |
| `AddBodyFlags` | `public void AddBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)` | method |
| `RemoveBodyFlags` | `public void RemoveBodyFlags(BodyFlags bodyFlags, bool applyToChildren = true)` | method |
| `SetLocalPosition` | `public void SetLocalPosition(Vec3 position)` | method |
| `SetGlobalPosition` | `public void SetGlobalPosition(Vec3 position)` | method |
| `SetColor` | `public void SetColor(uint color1, uint color2, string meshTag)` | method |
| `GetFactorColor` | `public uint GetFactorColor()` | method |
| `SetFactorColor` | `public void SetFactorColor(uint color)` | method |
| `SetAsReplayEntity` | `public void SetAsReplayEntity()` | method |
| `SetClothMaxDistanceMultiplier` | `public void SetClothMaxDistanceMultiplier(float multiplier)` | method |
| `RemoveMultiMeshFromSkeleton` | `public void RemoveMultiMeshFromSkeleton(MetaMesh metaMesh)` | method |
| `RemoveMultiMeshFromSkeletonBone` | `public void RemoveMultiMeshFromSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)` | method |
| `RemoveComponentWithMesh` | `public bool RemoveComponentWithMesh(Mesh mesh)` | method |
| `AddComponent` | `public void AddComponent(GameEntityComponent component)` | method |
| `HasComponent` | `public bool HasComponent(GameEntityComponent component)` | method |
| `IsInEditorScene` | `public bool IsInEditorScene()` | method |
| `RemoveComponent` | `public bool RemoveComponent(GameEntityComponent component)` | method |
| `GetGuid` | `public string GetGuid()` | method |
| `IsGuidValid` | `public bool IsGuidValid()` | method |
| `SetEnforcedMaximumLodLevel` | `public void SetEnforcedMaximumLodLevel(int lodLevel)` | method |
| `GetLodLevelForDistanceSq` | `public float GetLodLevelForDistanceSq(float distSq)` | method |
| `GetQuickBoneEntitialFrame` | `public void GetQuickBoneEntitialFrame(sbyte index, out MatrixFrame frame)` | method |
| `UpdateVisibilityMask` | `public void UpdateVisibilityMask()` | method |
| `CallScriptCallbacks` | `public void CallScriptCallbacks(bool registerScriptComponents)` | method |
| `GetScriptCount` | `public int GetScriptCount()` | method |
| `IsGhostObject` | `public bool IsGhostObject()` | method |
| `CreateAndAddScriptComponent` | `public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)` | method |
| `RemoveScriptComponent` | `public void RemoveScriptComponent(UIntPtr scriptComponent, int removeReason)` | method |
| `SetEntityEnvMapVisibility` | `public void SetEntityEnvMapVisibility(bool value)` | method |
| `GetScriptAtIndex` | `public ScriptComponentBehavior GetScriptAtIndex(int index)` | method |
| `HasScene` | `public bool HasScene()` | method |
| `HasScriptComponent` | `public bool HasScriptComponent(string scName)` | method |
| `HasScriptComponent` | `public bool HasScriptComponent(uint scNameHash)` | method |
| `IEnumerable` | `public IEnumerable<ScriptComponentBehavior>GetScriptComponents()` | method |
| `IEnumerable` | `public IEnumerable<T>GetScriptComponents<T>() where T : ScriptComponentBehavior` | method |
| `HasScriptOfType` | `public bool HasScriptOfType<T>() where T : ScriptComponentBehavior` | method |
| `HasScriptWithInterfaceOfType` | `public bool HasScriptWithInterfaceOfType<T>()` | method |
| `GetFirstScriptOfTypeInFamily` | `public T GetFirstScriptOfTypeInFamily<T>() where T : ScriptComponentBehavior` | method |
| `GetFirstScriptWithNameHash` | `public ScriptComponentBehavior GetFirstScriptWithNameHash(uint nameHash)` | method |
| `GetFirstScriptOfType` | `public T GetFirstScriptOfType<T>() where T : ScriptComponentBehavior` | method |
| `GetFirstScriptWithInterfaceOfType` | `public T GetFirstScriptWithInterfaceOfType<T>() where T : class` | method |
| `GetFirstScriptOfTypeRecursive` | `public T GetFirstScriptOfTypeRecursive<T>() where T : ScriptComponentBehavior` | method |
| `GetFirstChildEntityWithTag` | `public WeakGameEntity GetFirstChildEntityWithTag(string tag)` | method |
| `GetScriptCountOfType` | `public int GetScriptCountOfType<T>() where T : ScriptComponentBehavior` | method |
| `GetScriptCountOfTypeRecursive` | `public int GetScriptCountOfTypeRecursive<T>() where T : ScriptComponentBehavior` | method |
| `SetAlpha` | `public void SetAlpha(float alpha)` | method |
| `SetVisibilityExcludeParents` | `public void SetVisibilityExcludeParents(bool visible)` | method |
| `SetReadyToRender` | `public void SetReadyToRender(bool ready)` | method |
| `GetVisibilityExcludeParents` | `public bool GetVisibilityExcludeParents()` | method |
| `IsVisibleIncludeParents` | `public bool IsVisibleIncludeParents()` | method |
| `GetVisibilityLevelMaskIncludingParents` | `public uint GetVisibilityLevelMaskIncludingParents()` | method |
| `GetEditModeLevelVisibility` | `public bool GetEditModeLevelVisibility()` | method |
| `Remove` | `public void Remove(int removeReason)` | method |
| `SetUpgradeLevelMask` | `public void SetUpgradeLevelMask(GameEntity.UpgradeLevelMask mask)` | method |
| `GetUpgradeLevelMask` | `public GameEntity.UpgradeLevelMask GetUpgradeLevelMask()` | method |
| `GetUpgradeLevelMaskCumulative` | `public GameEntity.UpgradeLevelMask GetUpgradeLevelMaskCumulative()` | method |
| `GetUpgradeLevelOfEntity` | `public int GetUpgradeLevelOfEntity()` | method |
| `GetOldPrefabName` | `public string GetOldPrefabName()` | method |
| `GetPrefabName` | `public string GetPrefabName()` | method |
| `RefreshMeshesToRenderToHullWater` | `public void RefreshMeshesToRenderToHullWater(UIntPtr visualRecord, string entityTag)` | method |
| `DeRegisterWaterMeshMaterials` | `public void DeRegisterWaterMeshMaterials(UIntPtr visualRecord)` | method |
| `SetVisualRecordWakeParams` | `public void SetVisualRecordWakeParams(UIntPtr visualRecord, Vec3 wakeParams)` | method |
| `ChangeResolutionMultiplierOfWaterVisual` | `public void ChangeResolutionMultiplierOfWaterVisual(UIntPtr visualRecord, float multiplier, in Vec3 waterEffectsBB)` | method |
| `ResetHullWater` | `public void ResetHullWater(UIntPtr visualRecord)` | method |
| `SetWaterVisualRecordFrameAndDt` | `public void SetWaterVisualRecordFrameAndDt(UIntPtr visualRecord, MatrixFrame frame, float dt)` | method |
| `AddSplashPositionToWaterVisualRecord` | `public void AddSplashPositionToWaterVisualRecord(UIntPtr visualRecord, Vec3 position)` | method |
| `UpdateHullWaterEffectFrames` | `public void UpdateHullWaterEffectFrames(UIntPtr visualRecord)` | method |
| `CopyScriptComponentFromAnotherEntity` | `public void CopyScriptComponentFromAnotherEntity(GameEntity otherEntity, string scriptName)` | method |
| `SetFrame` | `public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)` | method |
| `SetLocalFrame` | `public void SetLocalFrame(ref MatrixFrame frame, bool isTeleportation)` | method |
| `SetClothComponentKeepState` | `public void SetClothComponentKeepState(MetaMesh metaMesh, bool state)` | method |
| `SetClothComponentKeepStateOfAllMeshes` | `public void SetClothComponentKeepStateOfAllMeshes(bool state)` | method |
| `SetPreviousFrameInvalid` | `public void SetPreviousFrameInvalid()` | method |
| `GetFrame` | `public MatrixFrame GetFrame()` | method |
| `GetLocalFrame` | `public void GetLocalFrame(out MatrixFrame frame)` | method |
| `HasBatchedKinematicPhysicsFlag` | `public bool HasBatchedKinematicPhysicsFlag()` | method |
| `HasBatchedRayCastPhysicsFlag` | `public bool HasBatchedRayCastPhysicsFlag()` | method |
| `GetLocalFrame` | `public MatrixFrame GetLocalFrame()` | method |
| `GetGlobalFrame` | `public MatrixFrame GetGlobalFrame()` | method |
| `SetWaterSDFClipData` | `public void SetWaterSDFClipData(int slotIndex, in MatrixFrame frame, bool visibility)` | method |
| `RegisterWaterSDFClip` | `public int RegisterWaterSDFClip(Texture sdfTexture)` | method |
| `DeRegisterWaterSDFClip` | `public void DeRegisterWaterSDFClip(int slot)` | method |
| `GetGlobalFrameImpreciseForFixedTick` | `public MatrixFrame GetGlobalFrameImpreciseForFixedTick()` | method |
| `ComputePreciseGlobalFrameForFixedTickSlow` | `public MatrixFrame ComputePreciseGlobalFrameForFixedTickSlow()` | method |
| `SetGlobalFrame` | `public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)` | method |
| `GetPreviousGlobalFrame` | `public MatrixFrame GetPreviousGlobalFrame()` | method |
| `GetBodyWorldTransform` | `public MatrixFrame GetBodyWorldTransform()` | method |
| `GetBodyVisualWorldTransform` | `public MatrixFrame GetBodyVisualWorldTransform()` | method |
| `UpdateTriadFrameForEditor` | `public void UpdateTriadFrameForEditor()` | method |
| `UpdateTriadFrameForEditorForAllChildren` | `public void UpdateTriadFrameForEditorForAllChildren()` | method |
| `GetGlobalScale` | `public Vec3 GetGlobalScale()` | method |
| `GetLocalScale` | `public Vec3 GetLocalScale()` | method |
| `GlobalPosition` | `public Vec3 GlobalPosition` | property |
| `SetAnimationSoundActivation` | `public void SetAnimationSoundActivation(bool activate)` | method |
| `CopyComponentsToSkeleton` | `public void CopyComponentsToSkeleton()` | method |
| `AddMeshToBone` | `public void AddMeshToBone(sbyte boneIndex, Mesh mesh)` | method |
| `ActivateRagdoll` | `public void ActivateRagdoll()` | method |
| `PauseSkeletonAnimation` | `public void PauseSkeletonAnimation()` | method |
| `ResumeSkeletonAnimation` | `public void ResumeSkeletonAnimation()` | method |
| `IsSkeletonAnimationPaused` | `public bool IsSkeletonAnimationPaused()` | method |
| `GetBoneCount` | `public sbyte GetBoneCount()` | method |
| `GetWaterLevelAtPosition` | `public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)` | method |
| `GetBoneEntitialFrameWithIndex` | `public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)` | method |
| `GetBoneEntitialFrameWithName` | `public MatrixFrame GetBoneEntitialFrameWithName(string boneName)` | method |
| `string[]Tags` | `public string[]Tags` | property |
| `AddTag` | `public void AddTag(string tag)` | method |
| `RemoveTag` | `public void RemoveTag(string tag)` | method |
| `HasTag` | `public bool HasTag(string tag)` | method |
| `AddChild` | `public void AddChild(WeakGameEntity gameEntity, bool autoLocalizeFrame = false)` | method |
| `RemoveChild` | `public void RemoveChild(WeakGameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)` | method |
| `BreakPrefab` | `public void BreakPrefab()` | method |
| `ChildCount` | `public int ChildCount` | property |
| `GetChild` | `public WeakGameEntity GetChild(int index)` | method |
| `Parent` | `public WeakGameEntity Parent` | property |
| `HasComplexAnimTree` | `public bool HasComplexAnimTree()` | method |
| `Root` | `public WeakGameEntity Root` | property |
| `AddMultiMesh` | `public void AddMultiMesh(MetaMesh metaMesh, bool updateVisMask = true)` | method |
| `RemoveMultiMesh` | `public bool RemoveMultiMesh(MetaMesh metaMesh)` | method |
| `MultiMeshComponentCount` | `public int MultiMeshComponentCount` | property |
| `ClothSimulatorComponentCount` | `public int ClothSimulatorComponentCount` | property |
| `GetComponentCount` | `public int GetComponentCount(GameEntity.ComponentType componentType)` | method |
| `AddAllMeshesOfGameEntity` | `public void AddAllMeshesOfGameEntity(GameEntity gameEntity)` | method |
| `SetFrameChanged` | `public void SetFrameChanged()` | method |
| `GetComponentAtIndex` | `public GameEntityComponent GetComponentAtIndex(int index, GameEntity.ComponentType componentType)` | method |
| `GetMetaMesh` | `public MetaMesh GetMetaMesh(int metaMeshIndex)` | method |
| `GetClothSimulator` | `public ClothSimulatorComponent GetClothSimulator(int clothSimulatorIndex)` | method |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | method |
| `SetMaterialForAllMeshes` | `public void SetMaterialForAllMeshes(Material material)` | method |
| `AddLight` | `public bool AddLight(Light light)` | method |
| `GetLight` | `public Light GetLight()` | method |
| `AddParticleSystemComponent` | `public void AddParticleSystemComponent(string particleid)` | method |
| `RemoveAllParticleSystems` | `public void RemoveAllParticleSystems()` | method |
| `CheckPointWithOrientedBoundingBox` | `public bool CheckPointWithOrientedBoundingBox(Vec3 point)` | method |
| `PauseParticleSystem` | `public void PauseParticleSystem(bool doChildren)` | method |
| `ResumeParticleSystem` | `public void ResumeParticleSystem(bool doChildren)` | method |
| `BurstEntityParticle` | `public void BurstEntityParticle(bool doChildren)` | method |
| `SetRuntimeEmissionRateMultiplier` | `public void SetRuntimeEmissionRateMultiplier(float emissionRateMultiplier)` | method |
| `GetLocalBoundingBox` | `public BoundingBox GetLocalBoundingBox()` | method |
| `GetGlobalBoundingBox` | `public BoundingBox GetGlobalBoundingBox()` | method |
| `GetBoundingBoxMin` | `public Vec3 GetBoundingBoxMin()` | method |
| `SetHasCustomBoundingBoxValidationSystem` | `public void SetHasCustomBoundingBoxValidationSystem(bool hasCustomBoundingBox)` | method |
| `ValidateBoundingBox` | `public void ValidateBoundingBox()` | method |
| `GetBoundingBoxMax` | `public Vec3 GetBoundingBoxMax()` | method |
| `UpdateGlobalBounds` | `public void UpdateGlobalBounds()` | method |
| `RecomputeBoundingBox` | `public void RecomputeBoundingBox()` | method |
| `GetBoundingBoxRadius` | `public float GetBoundingBoxRadius()` | method |
| `SetBoundingboxDirty` | `public void SetBoundingboxDirty()` | method |
| `GlobalBoxMax` | `public Vec3 GlobalBoxMax` | property |
| `Vec3>ComputeGlobalPhysicsBoundingBoxMinMax` | `public ValueTuple<Vec3, Vec3>ComputeGlobalPhysicsBoundingBoxMinMax()` | method |
| `ComputeGlobalPhysicsBoundingBoxCenter` | `public Vec3 ComputeGlobalPhysicsBoundingBoxCenter()` | method |
| `SetContourColor` | `public void SetContourColor(uint? color, bool alwaysVisible = true)` | method |
| `GlobalBoxMin` | `public Vec3 GlobalBoxMin` | property |
| `GetHasFrameChanged` | `public bool GetHasFrameChanged()` | method |
| `GetFirstMesh` | `public Mesh GetFirstMesh()` | method |
| `GetAttachedNavmeshFaceCount` | `public int GetAttachedNavmeshFaceCount()` | method |
| `GetAttachedNavmeshFaceRecords` | `public void GetAttachedNavmeshFaceRecords(PathFaceRecord[]faceRecords)` | method |
| `GetAttachedNavmeshFaceVertexIndices` | `public void GetAttachedNavmeshFaceVertexIndices(in PathFaceRecord faceRecord, int[]indices)` | method |
| `SetCustomVertexPositionEnabled` | `public void SetCustomVertexPositionEnabled(bool customVertexPositionEnabled)` | method |
| `SetPositionsForAttachedNavmeshVertices` | `public void SetPositionsForAttachedNavmeshVertices(int[]vertices, int indexCount, Vec3[]positions)` | method |
| `SetCostAdderForAttachedFaces` | `public void SetCostAdderForAttachedFaces(float costs)` | method |
| `SetExternalReferencesUsage` | `public void SetExternalReferencesUsage(bool value)` | method |
| `SetMorphFrameOfComponents` | `public void SetMorphFrameOfComponents(float value)` | method |
| `AddEditDataUserToAllMeshes` | `public void AddEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)` | method |
| `ReleaseEditDataUserToAllMeshes` | `public void ReleaseEditDataUserToAllMeshes(bool entityComponents, bool skeletonComponents)` | method |
| `GetCameraParamsFromCameraScript` | `public void GetCameraParamsFromCameraScript(Camera cam, ref Vec3 dofParams)` | method |
| `GetMeshBendedFrame` | `public void GetMeshBendedFrame(MatrixFrame worldSpacePosition, ref MatrixFrame output)` | method |
| `ComputeTrajectoryVolume` | `public void ComputeTrajectoryVolume(float missileSpeed, float verticalAngleMaxInDegrees, float verticalAngleMinInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)` | method |
| `SetAnimTreeChannelParameterForceUpdate` | `public void SetAnimTreeChannelParameterForceUpdate(float phase, int channelNo)` | method |
| `ChangeMetaMeshOrRemoveItIfNotExists` | `public void ChangeMetaMeshOrRemoveItIfNotExists(MetaMesh entityMetaMesh, MetaMesh newMetaMesh)` | method |
| `SetUpdateValidtyOnFrameChangedOfFacesWithId` | `public void SetUpdateValidtyOnFrameChangedOfFacesWithId(int faceGroupId, bool updateValidity)` | method |
| `AttachNavigationMeshFaces` | `public void AttachNavigationMeshFaces(int faceGroupId, bool isConnected, bool isBlocker = false, bool autoLocalize = false, bool finalizeBlockerConvexHullComputation = false, bool updateEntityFrame = true)` | method |
| `DetachAllAttachedNavigationMeshFaces` | `public void DetachAllAttachedNavigationMeshFaces()` | method |
| `UpdateAttachedNavigationMeshFaces` | `public void UpdateAttachedNavigationMeshFaces()` | method |
| `RemoveSkeleton` | `public void RemoveSkeleton()` | method |
| `Skeleton` | `public Skeleton Skeleton` | property |
| `RemoveAllChildren` | `public void RemoveAllChildren()` | method |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>GetChildren()` | method |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>GetEntityAndChildren()` | method |
| `GetChildrenRecursive` | `public void GetChildrenRecursive(ref List<WeakGameEntity>children)` | method |
| `GetChildrenWithTagRecursive` | `public void GetChildrenWithTagRecursive(List<WeakGameEntity>children, string tag)` | method |
| `IsSelectedOnEditor` | `public bool IsSelectedOnEditor()` | method |
| `SelectEntityOnEditor` | `public void SelectEntityOnEditor()` | method |
| `DeselectEntityOnEditor` | `public void DeselectEntityOnEditor()` | method |
| `SetAsPredisplayEntity` | `public void SetAsPredisplayEntity()` | method |
| `RemoveFromPredisplayEntity` | `public void RemoveFromPredisplayEntity()` | method |
| `SetNativeScriptComponentVariable` | `public void SetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)` | method |
| `SetManualGlobalBoundingBox` | `public void SetManualGlobalBoundingBox(Vec3 boundingBoxStartGlobal, Vec3 boundingBoxEndGlobal)` | method |
| `RayHitEntityWithNormal` | `public bool RayHitEntityWithNormal(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref Vec3 resultNormal, ref float resultLength)` | method |
| `RayHitEntity` | `public bool RayHitEntity(Vec3 rayOrigin, Vec3 rayDirection, float maxLength, ref float resultLength)` | method |
| `GetNativeScriptComponentVariable` | `public void GetNativeScriptComponentVariable(string className, string fieldName, ref ScriptComponentFieldHolder data, RglScriptFieldType variableType)` | method |
| `SetCustomClipPlane` | `public void SetCustomClipPlane(Vec3 clipPosition, Vec3 clipNormal, bool setForChildren)` | method |
| `GetBoundingBoxLongestHalfDimension` | `public float GetBoundingBoxLongestHalfDimension()` | method |
| `ComputeBoundingBoxFromLongestHalfDimension` | `public BoundingBox ComputeBoundingBoxFromLongestHalfDimension(float longestHalfDimensionCoefficient)` | method |
| `ComputeBoundingBoxIncludeChildren` | `public BoundingBox ComputeBoundingBoxIncludeChildren()` | method |
| `SetManualLocalBoundingBox` | `public void SetManualLocalBoundingBox(in BoundingBox boundingBox)` | method |
| `RelaxLocalBoundingBox` | `public void RelaxLocalBoundingBox(in BoundingBox boundingBox)` | method |
| `SetCullMode` | `public void SetCullMode(MBMeshCullingMode cullMode)` | method |
| `GetFirstChildEntityWithTagRecursive` | `public WeakGameEntity GetFirstChildEntityWithTagRecursive(string tag)` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `List` | `public List<WeakGameEntity>CollectChildrenEntitiesWithTag(string tag)` | method |
| `IEnumerable` | `public IEnumerable<WeakGameEntity>CollectChildrenEntitiesWithTagAsEnumarable(string tag)` | method |
| `SetDoNotCheckVisibility` | `public void SetDoNotCheckVisibility(bool value)` | method |
| `SetBoneFrameToAllMeshes` | `public void SetBoneFrameToAllMeshes(int boneIndex, in MatrixFrame frame)` | method |
| `GetGlobalWindStrengthVectorOfScene` | `public Vec2 GetGlobalWindStrengthVectorOfScene()` | method |
| `GetGlobalWindVelocityOfScene` | `public Vec2 GetGlobalWindVelocityOfScene()` | method |
| `GetLastFinalRenderCameraPositionOfScene` | `public Vec3 GetLastFinalRenderCameraPositionOfScene()` | method |
| `GetGlobalWindVelocityWithGustNoiseOfScene` | `public Vec2 GetGlobalWindVelocityWithGustNoiseOfScene(float globalTime)` | method |
| `SetForceDecalsToRender` | `public void SetForceDecalsToRender(bool value)` | method |
| `CreateEmptyPhysxShape` | `public UIntPtr CreateEmptyPhysxShape(bool isVariable, int physxMaterialIndex)` | method |
| `SetForceNotAffectedBySeason` | `public void SetForceNotAffectedBySeason(bool value)` | method |
| `CheckIsPrefabLinkRootPrefab` | `public bool CheckIsPrefabLinkRootPrefab(int depth)` | method |
| `Invalid` | `public static readonly WeakGameEntity Invalid` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
